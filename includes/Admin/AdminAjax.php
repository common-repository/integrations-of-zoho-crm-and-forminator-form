<?php

namespace FormInteg\ZCFORMINATOR\Admin;

use FormInteg\ZCFORMINATOR\Config;
use FormInteg\ZCFORMINATOR\Core\Util\Route;

class AdminAjax
{
    public function register()
    {
        Route::post('app/config', [$this, 'updatedAppConfig']);
        Route::get('get/config', [$this, 'getAppConfig']);
    }

    public function updatedAppConfig($data)
    {
        if (!property_exists($data, 'data')) {
            wp_send_json_error(__('Data can\'t be empty', 'zc-forminator'));
        }

        update_option(Config::withPrefix('app_conf'), $data->data);
        wp_send_json_success(__('save successfully done', 'zc-forminator'));
    }

    public function getAppConfig()
    {
        $data = get_option(Config::withPrefix('app_conf'));
        wp_send_json_success($data);
    }
}
