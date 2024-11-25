let bdd;

fetch("/static/js/citations.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Erreur lors du chargement du fichier JSON");
		}
		return response.json();
	})
	.then((data) => {
		bdd = data;
		console.log(bdd); // Affiche les données
	})
	.catch((error) => console.error("Erreur :", error));

/* Variables stockant la catégorie et les couleurs actuellement utilisées */
var categorie = "Toutes";
var classe_bouton_recharger = "btn-outline-green";
var classe_bouton_categorie = "btn-green";

/* Pour garder plusieurs fois la même couleur avant de changer */
var compteur = 0;

function nouvelle_citation(categorie) {
	console.log("Nouvelle citation de la catégorie : " + categorie);
	if (bdd != undefined) {
		let bdd_categorie;
		if (categorie == "Toutes") {
			bdd_categorie = bdd;
		} else {
			bdd_categorie = bdd.filter((citation) => citation.categorie == categorie);
		}
		console.log(bdd_categorie);
		const data = bdd_categorie[Math.floor(Math.random() * bdd_categorie.length)];
		console.log(data);
		if (data !== undefined) {
			if (data.auteur !== "") {
				data.auteur = "—&nbsp;" + data.auteur;
			}
			$("#citation").html(data.citation);
			$("#auteur").html(data.auteur);
			typography(document.getElementById("citation"));

			compteur = compteur + 1;
			if (compteur > 2) {
				var nb_aleatoire = Math.floor(Math.random() * 6); // Génère un nombre entre 0 et 5 car random()∈[0,1[
				var couleur = "blue";
				switch (nb_aleatoire) {
					case 0:
						couleur = "red";
						break;
					case 1:
						couleur = "orange";
						break;
					case 2:
						couleur = "green";
						break;
					case 3:
						couleur = "purple";
						break;
					case 4:
						couleur = "black";
						break;
					default:
						couleur = "blue";
				}
				compteur = 0;
				changer_couleur(couleur);
			}

			document.getElementById("citation").scrollIntoView(true);
		}
	}
}

function changer_couleur(couleur) {
	switch (couleur) {
		case "red":
			$("blockquote").css({ color: "#de0000" });
			$("#couleur_lien").css({ color: "#de0000" });
			$("h1").css({ color: "#de0000" });

			$("#categorie_selectionnee").removeClass(classe_bouton_categorie);
			$("#categorie_selectionnee").addClass("btn-red");
			classe_bouton_categorie = "btn-red";

			$("#bouton_recharger").removeClass(classe_bouton_recharger);
			$("#bouton_recharger").addClass("btn-outline-red");
			classe_bouton_recharger = "btn-outline-red";
			break;
		case "orange":
			$("blockquote").css({ color: "#FF8C00" });
			$("#couleur_lien").css({ color: "#FF8C00" });
			$("h1").css({ color: "#FF8C00" });

			$("#categorie_selectionnee").removeClass(classe_bouton_categorie);
			$("#categorie_selectionnee").addClass("btn-orange");
			classe_bouton_categorie = "btn-orange";

			$("#bouton_recharger").removeClass(classe_bouton_recharger);
			$("#bouton_recharger").addClass("btn-outline-orange");
			classe_bouton_recharger = "btn-outline-orange";
			break;
		case "green":
			$("blockquote").css({ color: "#008000" });
			$("#couleur_lien").css({ color: "#008000" });
			$("h1").css({ color: "#008000" });

			$("#categorie_selectionnee").removeClass(classe_bouton_categorie);
			$("#categorie_selectionnee").addClass("btn-green");
			classe_bouton_categorie = "btn-green";

			$("#bouton_recharger").removeClass(classe_bouton_recharger);
			$("#bouton_recharger").addClass("btn-outline-green");
			classe_bouton_recharger = "btn-outline-green";
			break;
		case "purple":
			$("blockquote").css({ color: "#de00a7" });
			$("#couleur_lien").css({ color: "#800080" });
			$("h1").css({ color: "#800080" });

			$("#categorie_selectionnee").removeClass(classe_bouton_categorie);
			$("#categorie_selectionnee").addClass("btn-purple");
			classe_bouton_categorie = "btn-purple";

			$("#bouton_recharger").removeClass(classe_bouton_recharger);
			$("#bouton_recharger").addClass("btn-outline-purple");
			classe_bouton_recharger = "btn-outline-purple";
			break;
		case "black":
			$("blockquote").css({ color: "black" });
			$("#couleur_lien").css({ color: "black" });
			$("h1").css({ color: "black" });

			$("#categorie_selectionnee").removeClass(classe_bouton_categorie);
			$("#categorie_selectionnee").addClass("btn-black");
			classe_bouton_categorie = "btn-black";

			$("#bouton_recharger").removeClass(classe_bouton_recharger);
			$("#bouton_recharger").addClass("btn-outline-black");
			classe_bouton_recharger = "btn-outline-black";
			break;
		default: //Blue
			$("blockquote").css({ color: "#009cde" });
			$("#couleur_lien").css({ color: "#009cde" });
			$("h1").css({ color: "#009cde" });

			$("#categorie_selectionnee").removeClass(classe_bouton_categorie);
			$("#categorie_selectionnee").addClass("btn-blue");
			classe_bouton_categorie = "btn-blue";

			$("#bouton_recharger").removeClass(classe_bouton_recharger);
			$("#bouton_recharger").addClass("btn-outline-blue");
			classe_bouton_recharger = "btn-outline-blue";
	}
}

document.getElementById("recharger").addEventListener("click", function () {
	nouvelle_citation(categorie);
});

addEventListener("keyup", (event) => {
	if (event.code === "Space") {
		logKey();
	}
});

function logKey() {
	nouvelle_citation(categorie);
}

$(".dropdown-item").click(function () {
	categorie = $(this).attr("id").toString();
	switch (categorie) {
		case "Toutes":
			$("#categorie_selectionnee").html("<i class='far fa-globe'></i> Toutes");
			break;
		case "Inspirant":
			$("#categorie_selectionnee").html("<i class='far fa-compass'></i> Inspirantes");
			break;
		case "Action":
			$("#categorie_selectionnee").html(
				"<i class='fad fa-transporter-1'></i> Action et persévérance"
			);
			break;
		case "Réflexion":
			$("#categorie_selectionnee").html("<i class='far fa-lightbulb'></i> Réflexion");
			break;
		case "Apprentissage":
			$("#categorie_selectionnee").html(
				"<i class='fad fa-graduation-cap'></i> Apprentissage"
			);
			break;
		case "Relations":
			$("#categorie_selectionnee").html("<i class='fad fa-users'></i> Relations");
			break;
		case "Bonheur":
			$("#categorie_selectionnee").html("<i class='far fa-smile'></i> Bonheur");
			break;
		case "Autres":
			$("#categorie_selectionnee").html("<i class='fad fa-alicorn'></i> Divers");
			break;
		case "Humour":
			$("#categorie_selectionnee").html("<i class='far fa-laugh-squint'></i> Humour");
			break;
		case "Geek":
			$("#categorie_selectionnee").html(
				"<i class='fas fa-laptop-code'></i> Geek, cinéphile et otaku"
			);
			break;
		case "BeSeven":
			$("#categorie_selectionnee").html("<i class='far fa-universal-access'></i> BeSeven");
			break;
	}
	$(".dropdown-item").removeClass("active");
	$("#" + categorie).addClass("active");
	nouvelle_citation(categorie);
});
