<?php

namespace FormInteg\ZCFORMINATOR\Core\Util;

use FormInteg\ZCFORMINATOR\Config;
use ReflectionMethod;

final class Route
{
    private static $_invokeAble;

    private static $_no_auth = false;

    private static $_ignore_token = false;

    public static function get($hook, $invokeAble)
    {
        return static::request('GET', $hook, $invokeAble);
    }

    public static function post($hook, $invokeAble)
    {
        return static::request('POST', $hook, $invokeAble);
    }

    public static function request($method, $hook, $invokeAble)
    {
        if (
            $_SERVER['REQUEST_METHOD'] != $method
            || !isset($_REQUEST['action'])
            || strpos($_REQUEST['action'], $hook) === false
        ) {
            if (static::$_no_auth) {
                static::$_no_auth = false;
            }

            if (static::$_ignore_token) {
                static::$_ignore_token = false;
            }

            return;
        }

        if (static::$_ignore_token) {
            static::$_ignore_token                                                                         = false;
            static::$_invokeAble[Config::VAR_PREFIX . $hook][$_SERVER['REQUEST_METHOD'] . '_ignore_token'] = true;
        }

        static::$_invokeAble[Config::VAR_PREFIX . $hook][$_SERVER['REQUEST_METHOD']] = $invokeAble;
        Hooks::add('wp_ajax_' . Config::VAR_PREFIX . $hook, [__CLASS__, 'action']);
        if (static::$_no_auth) {
            static::$_no_auth = false;
            Hooks::add('wp_ajax_nopriv_' . Config::VAR_PREFIX . $hook, [__CLASS__, 'action']);
        }
    }

    public static function action()
    {
        if (
            isset(
                static::$_invokeAble[sanitize_text_field($_REQUEST['action'])][$_SERVER['REQUEST_METHOD']
                    . '_ignore_token']
            )
            || isset($_REQUEST['_ajax_nonce'])
            && wp_verify_nonce(sanitize_text_field($_REQUEST['_ajax_nonce']), Config::VAR_PREFIX . 'nonce')
        ) {
            $invokeAble = static::$_invokeAble[sanitize_text_field($_REQUEST['action'])][$_SERVER['REQUEST_METHOD']];
            unset($_POST['_ajax_nonce'], $_POST['action'], $_GET['_ajax_nonce'], $_GET['action']);
            if (method_exists($invokeAble[0], $invokeAble[1])) {
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                    if (
                        isset($_SERVER['CONTENT_TYPE'])
                        && strpos($_SERVER['CONTENT_TYPE'], 'form-data')             === false
                        && strpos($_SERVER['CONTENT_TYPE'], 'x-www-form-urlencoded') === false
                    ) {
                        $inputJSON = file_get_contents('php://input');
                        $data      = \is_string($inputJSON) ? json_decode($inputJSON) : $inputJSON;
                    } else {
                        $data = (object) $_POST;
                    }
                } else {
                    $data = (object) $_GET;
                }

                $reflectionMethod = new ReflectionMethod($invokeAble[0], $invokeAble[1]);
                $response         = $reflectionMethod->invoke(
                    $reflectionMethod->isStatic()
                        ? null : new $invokeAble[0](),
                    $data
                );

                if (is_wp_error($response)) {
                    wp_send_json_error($response);
                } else {
                    wp_send_json_success($response);
                }
            } else {
                wp_send_json_error('Method doesn\'t exists');
            }
        } else {
            wp_send_json_error(
                __(
                    'Token expired or invalid. Please refresh the page and try again.',
                    'zc-forminator'
                ),
                401
            );
        }
    }

    public static function no_auth()
    {
        self::$_no_auth = true;

        return new static();
    }

    public static function ignore_token()
    {
        self::$_ignore_token = true;

        return new static();
    }
}
