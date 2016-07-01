<?php
session_start();
header('Cache-control: private');

if(isSet($_GET['lang'])) {
    $lang = $_GET['lang'];
    $_SESSION['lang'] = $lang;
    setcookie('lang', $lang, time() + (3600 * 24 * 30));
} else if(isSet($_SESSION['lang'])) {
    $lang = $_SESSION['lang'];
} else if(isSet($_COOKIE['lang'])) {
    $lang = $_COOKIE['lang'];
} else {
    $lang = 'en';
}

switch ($lang) {
    case 'en':
    $lang_file = 'lang.en.php';
    break;

    case 'es':
    $lang_file = 'lang.es.php';
    break;

    default:
    $lang_file = 'lang.en.php';
}
include 'php/languages/'.$lang_file;
?>

<html lang="<?= $lang['LANGUAGE'] ?>">
<head>
    <title><?= $lang['PAGE_TITLE'] ?></title>
    <meta name="author" content="David Reyes">
    <meta name="keywords" content="David,Reyes,programador,web,empleo,contrato,HTML,CSS,JavaScript">
    <meta name="description" content="<?= $lang['SITE_DESCRIPTION'] ?>">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/views/downButton.css">
    <link rel="stylesheet" type="text/css" href="css/views/navbar.css">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="shortcut icon" type="image/x-icon" href="img/views/logo.png" />`
</head>
<body>
    <div id="fb-root"></div>
    <div id="mainBoardFront">
        <p class="mainTitlePortrait mainTitleLandscape"><?= $lang['HEADER_TITLE'] ?></p>
        <div id="languageIcons">
            <a href="?lang=es" lang="es" hreflang="es">
                <img src="img/views/icon_flag_mx.png" class="languageIcon">
            </a>
            <a href="?lang=en" lang="en" hreflang="en">
                <img src="img/views/icon_flag_us.png" class="languageIcon">
            </a>
        </div>
    </div>
    <div id="mainBoard">
        <img  id="mainImage" src="https://lh3.googleusercontent.com/axvBHyxpLv1K3oGQIPuRqs-nI8TKWCvVSBjqPWfckWuBKIXJIzBqvo_EzGTVneIYPRA=h900">
    </div>
    <div id="mainBody" class="container-fluid">
        <div class="row whiteBackground fullBoard">
            <div id="profile" class="col-md-8 col-md-offset-2 section">
                <p class="title"><?= $lang['SECTIONS']['SECTION_PROFILE'] ?></p>
                <div class="row">
                    <div id="about" class="col-md-4">
                        <p class="subtitle"><?= $lang['PROFILE_ABOUT'] ?></p>
                        <p class="content"><?= $lang['PROFILE_ABOUT_CONTENT'] ?></p>
                    </div>
                    <div class="col-md-4">
                        <img src="./img/views/me.jpg" class="profileImage">
                    </div>
                    <div id="details" class="col-md-4">
                        <p class="subtitle"><?= $lang['PROFILE_DETAILS'] ?></p>
                        <p class="content">
                            <b><?= $lang['PROFILE_NAME'] ?></b><br>
                            David Reyes<br>
                            <b><?= $lang['PROFILE_AGE'] ?></b><br>
                            <?= $lang['PROFILE_AGE_CONTENT'] ?><br>
                            <b><?= $lang['PROFILE_LOCATION'] ?></b><br>
                            Monterrey, Nuevo Leon, Mexico<br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div id="experiences" class="col-md-8 col-md-offset-2 section">
                <p class="title mainTitle"><?= $lang['SECTIONS']['SECTION_EXPERIENCE'] ?></p>
                <div id="education" class="row">
                    <div class="col-md-4">
                        <p class="subtitle"><?= $lang['EXPERIENCE_EDUCATIONS'] ?></p>
                    </div>
                    <div class="col-md-8">
                    </div>
                </div>
                <div id="experiencesContent">
                </div>
                <div id="careers" class="row">
                    <div class="col-md-4">
                        <p class="subtitle"><?= $lang['EXPERIENCE_CAREERS'] ?></p>
                    </div>
                    <div class="col-md-8">
                    </div>
                </div>
                <div id="careersContent">
                </div>
            </div>
        </div>
        <div class="row whiteBackground">
            <div id="habilities" class="col-md-8 col-md-offset-2 section">
                <p class="title mainTitle"><?= $lang['SECTIONS']['SECTION_ABILITIES'] ?></p>
                <div id="skills" class="row">
                    <div class="col-md-6">
                        <p class="subtitle"><?= $lang['ABILITIES_SKILLS'] ?></p>
                    </div>
                    <div class="col-md-6">
                    </div>
                </div>
                <div id="skillsContent">
                </div>
                <div id="languages" class="row">
                    <div class="col-md-6">
                        <p class="subtitle"><?= $lang['ABILITIES_LANGUAGES'] ?></p>
                    </div>
                    <div class="col-md-6">
                    </div>
                </div>
                <div id="languagesContent">
                </div>
                <div id="tools" class="row">
                    <div class="col-md-6">
                        <p class="subtitle"><?= $lang['ABILITIES_TOOLS'] ?></p>
                    </div>
                    <div class="col-md-6">
                    </div>
                </div>
                <div id="toolsContent">
                </div>
            </div>
        </div>
        <div class="row">
            <div id="projects" class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 section">
                <p class="title mainTitle"><?= $lang['SECTIONS']['SECTION_PROJECTS'] ?></p>
                <div class="row projectsContent">
                    <div class="col-md-12">
                        <div class="linkButton content">
                            <a href="https://github.com/DavidKings1994/MasterTest" target="_blank">
                                <p><?= $lang['GITHUB_PROYECT'] ?></p>
                            </a>
                        </div>
                        <p class="content"><?= $lang['PROJECTS_MESSAGE'] ?></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row fullBoard darkBackground">
            <div id="contact" class="col-md-8 col-md-offset-2 section">
                <p class="title mainTitle"><?= $lang['SECTIONS']['SECTION_CONTACT'] ?></p>
                <div id="contactContent">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="mailto:contact@davidreyes.tk" target="_top" class="socicon-button">
                                <span class="socicon socicon-mail"></span>
                                <span>contact@davidreyes.tk</span>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="https://twitter.com/DavidReyes1994" target="_blank" class="socicon-button">
                                <span class="socicon socicon-twitter"></span>
                                <span>https://twitter.com/DavidReyes1994</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row socialShare">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="socialButton">
                            <a class="twitter-share-button" href="https://twitter.com/intent/tweet"></a>
                        </div>
                        <div class="socialButton">
                            <div class="fb-like" data-layout="button" data-show-faces="true" data-share="false"></div>
                        </div>
                        <div class="socialButton">
                            <div class="g-plusone" data-size="medium"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/dist/main.bundle.js" charset="utf-8"></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</body>
</html>
