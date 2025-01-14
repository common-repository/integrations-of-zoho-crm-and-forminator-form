<?php

// phpcs:disable Squiz.NamingConventions.ValidVariableName

namespace FormInteg\ZCFORMINATOR;

if (!\defined('ABSPATH')) {
    exit;
}

/**
 * Provides App configurations.
 */
class Config
{
    const SLUG = 'integration-of-zoho-crm-and-forminator';

    const TITLE = 'Zoho CRM for Forminator';

    const TRIGGER = 'Forminator';

    const ACTION = 'Zoho CRM';

    const DASH_URL = 'zc-forminator';

    const LOGO = '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 250 250"><rect width="250" height="250" rx="59.5" fill="#a7aaad"/><path d="M174 126h23v23h-23z"/><path d="M150 54a47 47 0 0 0-47 47v23H89a36 36 0 0 0-36 36v36h36a36 36 0 0 0 36-35v-12h42v-23h-42v-25a25 25 0 0 1 25-25h47V54Zm-47 107a14 14 0 0 1-14 13H76v-14a14 14 0 0 1 13-13h14Z"/></svg>';

    const VAR_PREFIX = 'zc_forminator';

    const VERSION = '1.0';

    const DB_VERSION = '1.0';

    const REQUIRED_PHP_VERSION = '5.6.4';

    const REQUIRED_WP_VERSION = '5.0';

    const API_VERSION = '1.0';

    const APP_BASE = '../wpforminteg.php';

    const PRO_URL = 'https://formsintegrations.com';

    /**
     * Provides configuration for plugin.
     *
     * @param string $type    Type of conf
     * @param string $default Default value
     *
     * @return null|array|string
     */
    public static function get($type, $default = null)
    {
        switch ($type) {
            case 'MAIN_FILE':
                return realpath(__DIR__ . DIRECTORY_SEPARATOR . self::APP_BASE);

            case 'BASENAME':
                return plugin_basename(self::get('MAIN_FILE'));

            case 'BASEDIR':
                return plugin_dir_path(self::get('MAIN_FILE'));

            case 'SITE_URL':
                $parsedUrl = parse_url(get_admin_url());
                $siteUrl   = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
                $siteUrl .= empty($parsedUrl['port']) ? null : ':' . $parsedUrl['port'];

                return $siteUrl;

            case 'ADMIN_URL':
                return str_replace(self::get('SITE_URL'), '', get_admin_url());

            case 'API_URL':
                global $wp_rewrite;

                return [
                    'base'      => get_rest_url() . self::DASH_URL . '/v1',
                    'separator' => $wp_rewrite->permalink_structure ? '?' : '&',
                ];

            case 'ROOT_URI':
                return set_url_scheme(plugins_url('', self::get('MAIN_FILE')), parse_url(home_url())['scheme']);

            case 'ASSET_URI':
                return self::get('ROOT_URI') . '/assets';

            case 'ASSET_JS_URI':
                return self::get('ASSET_URI') . '/js';

            case 'ASSET_CSS_URI':
                return self::get('ASSET_URI') . '/css';

            case 'PLUGIN_PAGE_LINKS':
                return self::pluginPageLinks();

            default:
                return $default;
        }
    }

    /**
     * Prefixed variable name with prefix.
     *
     * @param string $option Variable name
     *
     * @return string
     */
    public static function withPrefix($option)
    {
        return self::VAR_PREFIX . $option;
    }

    /**
     * Retrieves options from option table.
     *
     * @param string $option  Option name
     * @param bool   $default default value
     * @param bool   $wp      Whether option is default wp option
     *
     * @return mixed
     */
    public static function getOption($option, $default = false, $wp = false)
    {
        if ($wp) {
            return get_option($option, $default);
        }

        return get_option(self::withPrefix($option), $default);
    }

    /**
     * Saves option to option table.
     *
     * @param string $option   Option name
     * @param bool   $autoload Whether option will autoload
     * @param mixed  $value
     *
     * @return bool
     */
    public static function addOption($option, $value, $autoload = false)
    {
        return add_option(self::withPrefix($option), $value, '', $autoload ? 'yes' : 'no');
    }

    /**
     * Save or update option to option table.
     *
     * @param string $option   Option name
     * @param mixed  $value    Option value
     * @param bool   $autoload Whether option will autoload
     *
     * @return bool
     */
    public static function updateOption($option, $value, $autoload = null)
    {
        return update_option(self::withPrefix($option), $value, !\is_null($autoload) ? 'yes' : null);
    }

    /**
     * Provides links for plugin pages. Those links will bi displayed in
     * all plugin pages under the plugin name.
     *
     * @return array
     */
    private static function pluginPageLinks()
    {
        return [
            'Home'    => [
                'title' => __('Home', 'zc-forminator'),
                'url'   => self::get('ADMIN_URL') . 'admin.php?page=zc-forminator',
            ],
            'Support' => [
                'title' => __('Support', 'zc-forminator'),
                'url'   => 'https://formsintegrations.com',
            ],
            'Pro'     => [
                'title' => __('Go Pro', 'zc-forminator'),
                'url'   => self::PRO_URL,
                'attr'  => 'style="color:green;font-weight:bolder;"',
            ],
        ];
    }
}
