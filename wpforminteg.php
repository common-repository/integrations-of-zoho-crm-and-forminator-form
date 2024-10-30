<?php

/**
 * Plugin Name: Integrations of Zoho CRM and Forminator form
 * Requires Plugins: forminator
 * Plugin URI:  https://formsintegrations.com/integration-of-zoho-crm-and-forminator
 * Description: This plugin integrates Forminator forms with Zoho CRM
 * Version:     1.0.1
 * Author:      Forms Integrations
 * Author URI:  https://formsintegrations.com
 * Text Domain: zc-forminator
 * Requires PHP: 5.6
 * Requires at least: 5.0
 * Domain Path: /languages
 * License: GPLv2 or later
 */

/***
 * If try to direct access  plugin folder it will Exit
 **/
if (!defined('ABSPATH')) {
    exit;
}

define('ZCFORMINATOR_PLUGIN_MAIN_FILE', __FILE__);
require_once plugin_dir_path(__FILE__) . 'includes/loader.php';
