<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitee4a1faaf3128da83ca3bc63cbc8df5e
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'FormInteg\\ZCFORMINATOR\\' => 23,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'FormInteg\\ZCFORMINATOR\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'FormInteg\\ZCFORMINATOR\\Actions\\ActionController' => __DIR__ . '/../..' . '/includes/Actions/ActionController.php',
        'FormInteg\\ZCFORMINATOR\\Actions\\ZohoCRM\\FilesApiHelper' => __DIR__ . '/../..' . '/includes/Actions/ZohoCRM/FilesApiHelper.php',
        'FormInteg\\ZCFORMINATOR\\Actions\\ZohoCRM\\MetaDataApiHelper' => __DIR__ . '/../..' . '/includes/Actions/ZohoCRM/MetaDataApiHelper.php',
        'FormInteg\\ZCFORMINATOR\\Actions\\ZohoCRM\\RecordApiHelper' => __DIR__ . '/../..' . '/includes/Actions/ZohoCRM/RecordApiHelper.php',
        'FormInteg\\ZCFORMINATOR\\Actions\\ZohoCRM\\TagApiHelper' => __DIR__ . '/../..' . '/includes/Actions/ZohoCRM/TagApiHelper.php',
        'FormInteg\\ZCFORMINATOR\\Actions\\ZohoCRM\\ZohoCRMController' => __DIR__ . '/../..' . '/includes/Actions/ZohoCRM/ZohoCRMController.php',
        'FormInteg\\ZCFORMINATOR\\Admin\\AdminAjax' => __DIR__ . '/../..' . '/includes/Admin/AdminAjax.php',
        'FormInteg\\ZCFORMINATOR\\Admin\\Admin_Bar' => __DIR__ . '/../..' . '/includes/Admin/Admin_Bar.php',
        'FormInteg\\ZCFORMINATOR\\Config' => __DIR__ . '/../..' . '/includes/Config.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Database\\DB' => __DIR__ . '/../..' . '/includes/Core/Database/DB.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Database\\FlowModel' => __DIR__ . '/../..' . '/includes/Core/Database/FlowModel.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Database\\LogModel' => __DIR__ . '/../..' . '/includes/Core/Database/LogModel.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Database\\Model' => __DIR__ . '/../..' . '/includes/Core/Database/Model.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Hooks\\HookService' => __DIR__ . '/../..' . '/includes/Core/Hooks/HookService.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Hooks\\InstallerProvider' => __DIR__ . '/../..' . '/includes/Core/Hooks/InstallerProvider.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\API' => __DIR__ . '/../..' . '/includes/Core/Util/API.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Activation' => __DIR__ . '/../..' . '/includes/Core/Util/Activation.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Capabilities' => __DIR__ . '/../..' . '/includes/Core/Util/Capabilities.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Common' => __DIR__ . '/../..' . '/includes/Core/Util/Common.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\DateTimeHelper' => __DIR__ . '/../..' . '/includes/Core/Util/DateTimeHelper.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Deactivation' => __DIR__ . '/../..' . '/includes/Core/Util/Deactivation.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Helper' => __DIR__ . '/../..' . '/includes/Core/Util/Helper.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Hooks' => __DIR__ . '/../..' . '/includes/Core/Util/Hooks.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\HttpHelper' => __DIR__ . '/../..' . '/includes/Core/Util/HttpHelper.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\IpTool' => __DIR__ . '/../..' . '/includes/Core/Util/IpTool.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Multisite' => __DIR__ . '/../..' . '/includes/Core/Util/Multisite.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Request' => __DIR__ . '/../..' . '/includes/Core/Util/Request.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\Route' => __DIR__ . '/../..' . '/includes/Core/Util/Route.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\SmartTags' => __DIR__ . '/../..' . '/includes/Core/Util/SmartTags.php',
        'FormInteg\\ZCFORMINATOR\\Core\\Util\\UnInstallation' => __DIR__ . '/../..' . '/includes/Core/Util/UnInstallation.php',
        'FormInteg\\ZCFORMINATOR\\Flow\\Flow' => __DIR__ . '/../..' . '/includes/Flow/Flow.php',
        'FormInteg\\ZCFORMINATOR\\Flow\\FlowController' => __DIR__ . '/../..' . '/includes/Flow/FlowController.php',
        'FormInteg\\ZCFORMINATOR\\Log\\LogHandler' => __DIR__ . '/../..' . '/includes/Log/LogHandler.php',
        'FormInteg\\ZCFORMINATOR\\Plugin' => __DIR__ . '/../..' . '/includes/Plugin.php',
        'FormInteg\\ZCFORMINATOR\\Triggers\\Forminator\\ForminatorController' => __DIR__ . '/../..' . '/includes/Triggers/Forminator/ForminatorController.php',
        'FormInteg\\ZCFORMINATOR\\Triggers\\TriggerController' => __DIR__ . '/../..' . '/includes/Triggers/TriggerController.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitee4a1faaf3128da83ca3bc63cbc8df5e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitee4a1faaf3128da83ca3bc63cbc8df5e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitee4a1faaf3128da83ca3bc63cbc8df5e::$classMap;

        }, null, ClassLoader::class);
    }
}