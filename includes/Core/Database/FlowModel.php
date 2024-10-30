<?php
/**
 * Provides Base Model Class
 */

namespace FormInteg\ZCFORMINATOR\Core\Database;

/**
 * Undocumented class
 */

use FormInteg\ZCFORMINATOR\Config;

class FlowModel extends Model
{
    protected static $table = Config::VAR_PREFIX . 'flow';
}
