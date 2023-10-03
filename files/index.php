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
        
        <title>Citations aléatoires par BeSeven</title>
        <meta name="description" content="Découvrez de nouvelles citations inspirantes, humoristiques, geek et bien d'autres sur cet afficheur aléatoire de citations créé par BeSeven." />
            <meta property="og:title" content="Citations aléatoires par BeSeven" />
            <meta property="og:description" content="Découvrez de nouvelles citations inspirantes, humoristiques, geek et bien d'autres sur cet afficheur aléatoire de citations créé par BeSeven." />
            <meta property="og:image" content="https://citations.beseven.fr/static/images/og-image_citations.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://citations.beseven.fr" />
        <?php include "static/pwa/pwa.php"; ?>

        <link rel="dns-prefetch" href="//static.beseven.fr" />        
        <link rel="dns-prefetch" href="//stats.beseven.fr" />
        
        <link rel="stylesheet" href="https://static.beseven.fr/frameworks/bootstrap/bootstrap-4.5.0-dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="<?php autoversion('/static/css/style.css'); ?>" />
        <link rel="stylesheet" href="https://static.beseven.fr/icons/fontawesome/css/all.min.css" />
        
        <script src="https://static.beseven.fr/js/jquery-3.5.1.min.js"></script>
        <script src="https://static.beseven.fr/frameworks/bootstrap/bootstrap-4.5.0-dist/js/bootstrap.bundle.min.js"></script>
    </head>
    
    

    
    
    <body>
        <contenu-page>
            <h1>Afficheur de citations aléatoires</h1>
            <main>
                <hr>
                <p>Bienvenue dans cet afficheur de citations aléatoires. <strong>Les citations ont plus de force distillées unes par une</strong>, d’où l’intérêt de créer cet outil. 
                    Cependant, si vous le préférez, vous pouvez aussi accéder directement à la <a href="https://citations.beseven.fr/liste-citations/"><span id="couleur_lien">liste de toutes les <span class="d-inline-block">citations<i class="fad fa-external-link align-top icone_lien"></i></span></span></a>
                </p>
                <p class="astuce"><strong>Astuce :</strong> Vous pouvez aussi charger une nouvelle citation en appuyant sur la touche espace de votre clavier !</p>
                <hr>
                
                
                <petit-espace></petit-espace>
                
                
                <blockquote>
                    <p>
                        <span class="quote_mark">« </span><span id="citation">Le fossé entre la connaissance et l’action est beaucoup plus grand que celui qui existe entre l’ignorance et la connaissance.</span><span class="quote_mark"> »</span>
                    </p>
                    <cite><span id="auteur">—&nbsp;Chris Guillebeau</span></cite>
                </blockquote>
    
                <div class="btn-group">
                    <div class="btn-group">
                        <button class="btn btn-green dropdown-toggle" type="button" id="categorie_selectionnee" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-globe"></i> Toutes
                        </button>
                        <div class="dropdown-menu">
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
                    <button id="bouton_recharger" class="btn btn-outline-green"><span id="recharger">Nouvelle citation</span></button>
                </div>
                
                
                
                <grand-espace></grand-espace>
                
                
                
            </main>
        </contenu-page>
        
        
            
        
        
        <footer>
            <p class="texte_footer">Copyright © <?php echo date('Y'); ?> <strong><a href="https://www.beseven.fr" class="lien_site">BeSeven</a></strong>. <span>Tous&nbsp;droits&nbsp;réservés.</span></p>
        </footer>
        
        
        
        <!-- Belle typographie française -->
        <script src="https://static.beseven.fr/js/typography.js" async></script>
        
        
        <!-- Changement de citation et de couleur de page -->    
        <script src="<?php autoversion('/static/js/scripts.js'); ?>" async></script>
        
        
        
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