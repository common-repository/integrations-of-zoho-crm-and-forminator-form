<?php

if (!\defined('ABSPATH')) {
    exit;
}
use FormInteg\ZCFORMINATOR\Core\Util\Route;
use FormInteg\ZCFORMINATOR\Triggers\Forminator\ForminatorController;

Route::get('forminator/get', [ForminatorController::class, 'getAll']);
Route::post('forminator/get/form', [ForminatorController::class, 'get_a_form']);
