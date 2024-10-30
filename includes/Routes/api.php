<?php
// If try to direct access  plugin folder it will Exit

use FormInteg\ZCFORMINATOR\Actions\ActionController;
use FormInteg\ZCFORMINATOR\Core\Util\API as Route;

if (!\defined('ABSPATH')) {
    exit;
}

Route::get('redirect/', [new ActionController(), 'handleRedirect'], null, ['state' => ['required' => true]]);
