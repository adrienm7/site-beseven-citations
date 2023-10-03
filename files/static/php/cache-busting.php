<?php

// Permet de réaliser du cache busting par file name versioning
function autoversion($url) {
  $path = pathinfo($url);
  $ver = '.7'.filemtime($_SERVER['DOCUMENT_ROOT'].$url).'.';
  echo $path['dirname'].'/'.str_replace('.', $ver, $path['basename']);
}

?>