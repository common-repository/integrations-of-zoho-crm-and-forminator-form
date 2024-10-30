<?php

if (!\defined('ABSPATH')) {
    exit;
}

use FormInteg\ZCFORMINATOR\Core\Util\Hooks;
use FormInteg\ZCFORMINATOR\Triggers\Forminator\ForminatorController;

Hooks::add('forminator_custom_form_submit_before_set_fields', [ForminatorController::class, 'handle_forminator_submit'], 10, 3);
