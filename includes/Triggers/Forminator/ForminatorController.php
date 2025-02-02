<?php

namespace FormInteg\ZCFORMINATOR\Triggers\Forminator;

use DateTime;
use Forminator_API;
use FormInteg\ZCFORMINATOR\Flow\Flow;

final class ForminatorController
{
    public static function info()
    {
        $plugin = 'forminator/forminator.php';

        return [
            'name'           => 'Forminator',
            'title'          => 'Forminator - Contact Form, Payment Form & Custom Form Builder',
            'icon_url'       => 'https://ps.w.org/forminator/assets/icon-128x128.png',
            'slug'           => $plugin,
            'pro'            => 'forminator/forminator.php',
            'type'           => 'form',
            'is_active'      => class_exists('Forminator'),
            'activation_url' => wp_nonce_url(sprintf(admin_url('plugins.php?action=activate&plugin=%s&plugin_status=all&paged=1&s'), $plugin), 'activate-plugin_' . $plugin),
            'install_url'    => wp_nonce_url(self_admin_url('update.php?action=install-plugin&plugin=' . $plugin), 'install-plugin_' . $plugin),
            'list'           => [
                'action' => 'forminator/get',
                'method' => 'get',
            ],
            'fields' => [
                'action' => 'forminator/get/form',
                'method' => 'post',
                'data'   => ['id']
            ],
        ];
    }

    public function getAll()
    {
        if (!class_exists('Forminator')) {
            wp_send_json_error(__('Forminator is not installed or activated', 'bit-integrations'));
        }

        $forms     = Forminator_API::get_forms();
        $all_forms = [];

        if ($forms) {
            foreach ($forms as $form) {
                $all_forms[] = (object) [
                    'id'    => $form->id,
                    'title' => $form->name,
                ];
            }
        }

        wp_send_json_success($all_forms);
    }

    public function get_a_form($data)
    {
        if (!class_exists('Forminator')) {
            wp_send_json_error(__('Forminator is not installed or activated', 'bit-integrations'));
        }
        if (empty($data->id)) {
            wp_send_json_error(__('Form doesn\'t exists', 'bit-integrations'));
        }

        $fields = self::fields($data->id);

        if (empty($fields)) {
            wp_send_json_error(__('Form doesn\'t exists any field', 'bit-integrations'));
        }

        $responseData['fields'] = $fields;
        wp_send_json_success($responseData);
    }

    public static function fields($form_id)
    {
        $form         = Forminator_API::get_form($form_id, ['content_only' => true]);
        $fieldDetails = $form->fields;
        if (empty($fieldDetails)) {
            return $fieldDetails;
        }
        $fields = [];

        foreach ($fieldDetails as $field) {
            if (!empty($field->slug) && $field->type !== 'submit') {
                if (property_exists($field, 'raw') && \array_key_exists('multiple_name', $field->raw) && $field->raw['multiple_name'] && $field->raw['type'] == 'name') {
                    $tmpName = $field->raw;
                    $names   = [];

                    foreach ($tmpName as $key => $val) {
                        if (($key == 'fname' || $key == 'lname' || $key == 'mname' || $key == 'prefix') && $val) {
                            if ($key == 'fname') {
                                $names['first-name'] = 'First Name';
                            } elseif ($key == 'lname') {
                                $names['last-name'] = 'Last Name';
                            } elseif ($key == 'mname') {
                                $names['middle-name'] = 'Middle Name';
                            } elseif ($key == 'prefix') {
                                $names['prefix'] = 'Name Prefix';
                            }
                        }
                    }

                    foreach ($names as $key => $value) {
                        $fields[] = [
                            'name'  => $key,
                            'type'  => 'text',
                            'label' => $value,
                        ];
                    }
                } elseif (property_exists($field, 'raw') && $field->raw['type'] == 'address' && \is_array(($field->raw))) {
                    $all_fields = $field->raw;
                    $address    = [
                        'street_address' => 'Street Address',
                        'city'           => 'Address City',
                        'state'          => 'Address State',
                        'zip'            => 'Address Zip',
                        'country'        => 'Address Country',
                        'address_line'   => 'Address Line',
                    ];
                    $keys = ['street_address', 'address_city', 'address_state', 'address_zip', 'address_country', 'address_line'];
                    foreach ($all_fields as $key => $value) {
                        if (\in_array($key, $keys)) {
                            if (\array_key_exists($key, $all_fields) && $all_fields[$key]) {
                                if ($key != 'street_address' && $key != 'address_line') {
                                    $key = substr($key, 8);
                                }
                                $fields[] = [
                                    'name'  => $key,
                                    'type'  => 'text',
                                    'label' => $address[$key],
                                ];
                            }
                        }
                    }
                } else {
                    $type = $field->type;
                    if ($type === 'upload') {
                        $type = 'file';
                    }

                    $fields[] = [
                        'name'  => $field->slug,
                        'type'  => $type,
                        'label' => $field->field_label,
                    ];
                }
            }
        }

        return $fields;
    }

    // forminator didn't return any kind of type of value..
    public static function handle_forminator_submit($entry, $form_id, $form_data)
    {
        $post_id = url_to_postid($_SERVER['HTTP_REFERER']);

        if (!empty($form_id)) {
            $data = [];
            if ($post_id) {
                $data['post_id'] = $post_id;
            }

            foreach ($form_data as $fldDetail) {
                if (\is_array($fldDetail['value'])) {
                    if (\array_key_exists('file', $fldDetail['value'])) {
                        $data[$fldDetail['name']] = [$fldDetail['value']['file']['file_path']];
                    } elseif ($fldDetail['name'] == 'name-1') {
                        foreach ($fldDetail['value'] as $nameKey => $nameVal) {
                            $data[$nameKey] = $nameVal;
                        }
                    } elseif ($fldDetail['name'] == 'address-1') {
                        foreach ($fldDetail['value'] as $nameKey => $nameVal) {
                            $data[$nameKey] = $nameVal;
                        }
                    } else {
                        $val = $fldDetail['value'];
                        if (\array_key_exists('ampm', $val)) {
                            $time                     = $val['hours'] . ':' . $val['minutes'] . ' ' . $val['ampm'];
                            $data[$fldDetail['name']] = $time;
                        } elseif (\array_key_exists('year', $val)) {
                            $date                     = $val['year'] . '-' . $val['month'] . '-' . $val['day'];
                            $data[$fldDetail['name']] = $date;
                        } else {
                            $data[$fldDetail['name']] = $fldDetail['value'];
                        }
                    }
                } else {
                    if (strtotime($fldDetail['value'])) {
                        $dateTmp                  = new DateTime($fldDetail['value']);
                        $dateFinal                = date_format($dateTmp, 'Y-m-d');
                        $data[$fldDetail['name']] = $dateFinal;
                    } else {
                        $data[$fldDetail['name']] = $fldDetail['value'];
                    }
                }
            }
            if (!empty($form_id) && $flows = Flow::exists('Forminator', $form_id)) {
                Flow::execute('Forminator', $form_id, $data, $flows);
            }
        }
    }
}
