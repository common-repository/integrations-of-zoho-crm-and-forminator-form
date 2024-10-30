<?php

namespace FormInteg\ZCFORMINATOR\Core\Util;

use FormInteg\ZCFORMINATOR\Config;

/**
 * Class handling plugin deactivation.
 *
 * @since 1.0.0
 *
 * @access private
 *
 * @ignore
 */
final class Deactivation
{
    /**
     * Registers functionality through WordPress hooks.
     *
     * @since 1.0.0
     */
    public function register()
    {
        add_action(Config::withPrefix('deactivate'), [$this, 'deactivate']);
    }

    public function deactivate()
    {
    }
}
