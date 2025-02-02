<?php

use FormInteg\ZCFORMINATOR\Config;

if (!defined('ABSPATH') || !class_exists('FormInteg\ZCFORMINATOR\Config')) {
  exit;
}
?>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="frm-in-app">
  <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;height: 90vh;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <img alt="logo" class="bit-logo" width="70" src='data:image/svg+xml;base64,<?php echo base64_encode(Config::LOGO); ?>'>
    <h1>Welcome to <?php echo Config::TITLE; ?></h1>
    <p></p>
  </div>
</div>