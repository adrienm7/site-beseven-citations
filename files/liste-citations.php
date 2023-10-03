<!DOCTYPE html>
<?php include "../static/php/cache-busting.php"; ?>
<?php include "../static/php/easter-egg-b7.php"; ?>

<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Adrien MOYAUX" />
        <link type="text/plain" rel="author" href="https://static.beseven.fr/humans.txt" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        
        <title>Liste de toutes les citations</title>
        <meta name="description" content="La liste de toutes les citations rassemblées par BeSeven" />
            <meta property="og:title" content="Liste de toutes les citations" />
            <meta property="og:description" content="La liste de toutes les citations rassemblées par BeSeven" />
            <meta property="og:image" content="https://citations.beseven.fr/static/images/og-image_liste-citations.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://citations.beseven.fr/liste-citations/" />
        <?php include "static/pwa/pwa.php"; ?>
        
        <link rel="dns-prefetch" href="//static.beseven.fr" />        
        <link rel="dns-prefetch" href="//stats.beseven.fr" />
        
        <link rel="stylesheet" href="https://static.beseven.fr/frameworks/bootstrap/bootstrap-4.5.0-dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="<?php autoversion('/static/css/style_liste-citations.css'); ?>" />
        <link rel="stylesheet" href="https://static.beseven.fr/icons/fontawesome/css/all.min.css" />
        
        <script src="https://static.beseven.fr/js/jquery-3.5.1.min.js"></script>
        <script src="https://static.beseven.fr/frameworks/bootstrap/bootstrap-4.5.0-dist/js/bootstrap.bundle.min.js"></script>
    </head>
    
    
    <!-- ATTENTION, CSP ACTIVÉE. IMPOSSIBLE DE FAIRE DES SCRIPTS INLINE -->
    
    
    <body>
    <div>
        <nav class="navbar sticky-top navbar-light bg-primary">
                <div class="btn-group mx-auto">
                    <button class="btn btn-light bordure-bouton"><a href="https://citations.beseven.fr" class="lien_site"><span class="d-none d-lg-inline">Citation </span>Aléatoire</a></button>
                    <div class="btn-group">
                        <button class="btn btn-light dropdown-toggle bordure-bouton" type="button" id="categorie_selectionnee" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-globe"></i> Toutes
                        </button>
                        <div class="dropdown-menu dropdown-menu-center">
                                <button id="Toutes" class="dropdown-item" type="button"><i class="far fa-globe"></i> Toutes les citations</button>
                            <div class="dropdown-divider"></div>
                                <button id="Inspirant" class="dropdown-item" type="button"><i class="far fa-compass"></i> Citations inspirantes</button>
                                <button id="Action" class="dropdown-item" type="button"><i class="fad fa-transporter-1"></i> Citations sur l’action et la persévérance</button>
                                <button id="Réflexion" class="dropdown-item" type="button"><i class="far fa-lightbulb"></i> Citations sur la réflexion</button>
                                <button id="Apprentissage" class="dropdown-item" type="button"><i class="fad fa-graduation-cap"></i> Citations sur l'apprentissage</button>
                                <button id="Relations" class="dropdown-item" type="button"><i class="fad fa-users"></i> Citations sur les relations</button>
                                <button id="Bonheur" class="dropdown-item" type="button"><i class="far fa-smile"></i> Citations sur le bonheur</button>
                            <div class="dropdown-divider"></div>
                                <button id="Autres" class="dropdown-item" type="button"><i class="fad fa-alicorn"></i> Citations diverses</button>
                                <button id="Humour" class="dropdown-item" type="button"><i class="far fa-laugh-squint"></i> Citations humoristiques</button>
                                <button id="Geek" class="dropdown-item" type="button"><i class="fas fa-laptop-code"></i> Citations geek, cinéphiles et otaku</button>
                            <div class="dropdown-divider"></div>
                                <button id="BeSeven" class="dropdown-item" type="button"><i class="far fa-universal-access"></i> Citations des membres de BeSeven</button>
                        </div>
                    </div>
                    <button id="bouton_b7" class="btn btn-light bordure-bouton"><a href="https://www.beseven.fr" class="lien_site"><span class="d-none d-lg-inline">Site de </span>BeSeven</a></button>
                </div>
        </nav>
        <main>
            <h1 id="titre">Toutes les citations</h1>
            <hr>
            <petit-espace></petit-espace>
            <a href="https://citations.beseven.fr"><button class="btn btn-outline-primary">Revenir à l'afficheur aléatoire</button></a>
            <!-- <a href="/static/documents/liste-citations.pdf"><button class="btn btn-default">Télécharger au format PDF</button></a> -->
            
<?php


function affiche($categorie){
    include $_SERVER['DOCUMENT_ROOT']."/static/sql/connexion-bdd.php";
    $stmt = $bdd->prepare("SELECT * FROM Citations WHERE categorie LIKE ?");
    
    $stmt->execute(array($categorie));
    $result = $stmt->fetchAll();
    
    foreach($result as $row) {
        echo "<blockquote>" . $row['citation'] . "<br>";
        if ($row['auteur']!="") {
            echo "<cite>— " . $row['auteur'] . "</cite>";
        }
        echo "</blockquote>";
    }
}



$categories = array("Inspirant", "Action", "Réflexion", "Apprentissage", "Relations", "Bonheur", "Autres", "Humour", "Geek", "BeSeven");

foreach($categories as $categorie) {
    echo "<h2 id='titre-" . $categorie . "'>". $categorie . "</h2><hr>";
    echo "<moyen-espace></moyen-espace>";
    affiche($categorie);
}

?>
        </main>
        
        
            
        
        
        <footer>
            <p class="texte_footer">Copyright © <?php echo date('Y'); ?> <strong><a href="https://www.beseven.fr" class="text-white">BeSeven</a></strong>. <span>Tous&nbsp;droits&nbsp;réservés.</span></p>
        </footer>
    </div>        
        
        
        
        <script src="https://static.beseven.fr/js/typography.js" async></script>
        <script src="/static/js/jquery.waypoints.min.js"></script>
        <script src="<?php autoversion('/static/js/scripts_liste-citations.js'); ?>"></script>
        
        
        
        <!-- Avis sur le site dans Google -->
        <script type="application/ld+json">
            {
              "@context": "http://schema.org",
              "@type": "Product",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.93",
                "reviewCount": "1167"
              },
              "description": "Découvrez de nouvelles citations inspirantes, humoristiques, geek et bien d'autres sur cet afficheur aléatoire de citations créé par Adrien Moyaux de BeSeven.",
              "name": "Citations aléatoires par BeSeven",
              "image": "/documents/images/logo/logo.png",
              "review": [
                {
                  "@type": "Review",
                  "author": "Thomas",
                  "datePublished": "2017-06-15",
                  "description": "J'adore cet afficheur aléatoire de citation.",
                  "name": "Fabien",
                  "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": "Lucas",
                  "datePublished": "2016-12-08",
                  "description": "Superbes citations ! Beaucoup sont très inspirantes.",
                  "name": "Laura",
                  "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "1"
                  }
                }
              ]
            }
        </script>
        
        
        
        <!-- Compteur de visiteurs -->
        <?php include "static/php/matomo.php"; ?>
        
        
        
    </body>
</html>