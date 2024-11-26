var categorie = "Toutes";

// Sélectionne tous les éléments avec la classe "dropdown-item"
document.querySelectorAll(".dropdown-item").forEach((item) => {
	item.addEventListener("click", function () {
		console.log("click");
		const categorie = this.id.toString();
		const categorieSelectionnee = document.getElementById("categorie_selectionnee");

		switch (categorie) {
			case "Toutes":
				categorieSelectionnee.innerHTML = "<i class='far fa-globe'></i> Toutes";
				window.location = "#titre";
				break;
			case "Inspirant":
				categorieSelectionnee.innerHTML = "<i class='far fa-compass'></i> Inspirantes";
				window.location = "#titre-Inspirant";
				break;
			case "Action":
				categorieSelectionnee.innerHTML =
					"<i class='fad fa-transporter-1'></i> Action et persévérance";
				window.location = "#titre-Action";
				break;
			case "Réflexion":
				categorieSelectionnee.innerHTML = "<i class='far fa-lightbulb'></i> Réflexion";
				window.location = "#titre-Réflexion";
				break;
			case "Apprentissage":
				categorieSelectionnee.innerHTML =
					"<i class='fad fa-graduation-cap'></i> Apprentissage";
				window.location = "#titre-Apprentissage";
				break;
			case "Relations":
				categorieSelectionnee.innerHTML = "<i class='fad fa-users'></i> Relations";
				window.location = "#titre-Relations";
				break;
			case "Bonheur":
				categorieSelectionnee.innerHTML = "<i class='far fa-smile'></i> Bonheur";
				window.location = "#titre-Bonheur";
				break;
			case "Autres":
				categorieSelectionnee.innerHTML = "<i class='fad fa-alicorn'></i> Divers";
				window.location = "#titre-Autres";
				break;
			case "Humour":
				categorieSelectionnee.innerHTML = "<i class='far fa-laugh-squint'></i> Humour";
				window.location = "#titre-Humour";
				break;
			case "Geek":
				categorieSelectionnee.innerHTML =
					"<i class='fas fa-laptop-code'></i> Geek, cinéphile et otaku";
				window.location = "#titre-Geek";
				break;
			case "BeSeven":
				categorieSelectionnee.innerHTML = "<i class='far fa-universal-access'></i> BeSeven";
				window.location = "#titre-BeSeven";
				break;
		}

		// Supprime la classe "active" de tous les éléments
		document.querySelectorAll(".dropdown-item").forEach((el) => el.classList.remove("active"));

		// Ajoute la classe "active" à l'élément actuel
		this.classList.add("active");
	});
});

function change(categorie) {
	// Sélectionne l'élément où mettre à jour la catégorie sélectionnée
	const categorieSelectionnee = document.getElementById("categorie_selectionnee");

	// Détermine le contenu en fonction de la catégorie
	switch (categorie) {
		case "Toutes":
			categorieSelectionnee.innerHTML = "<i class='far fa-globe'></i> Toutes";
			break;
		case "Inspirant":
			categorieSelectionnee.innerHTML = "<i class='far fa-compass'></i> Inspirantes";
			break;
		case "Action":
			categorieSelectionnee.innerHTML =
				"<i class='fad fa-transporter-1'></i> Action et persévérance";
			break;
		case "Réflexion":
			categorieSelectionnee.innerHTML = "<i class='far fa-lightbulb'></i> Réflexion";
			break;
		case "Apprentissage":
			categorieSelectionnee.innerHTML = "<i class='fad fa-graduation-cap'></i> Apprentissage";
			break;
		case "Relations":
			categorieSelectionnee.innerHTML = "<i class='fad fa-users'></i> Relations";
			break;
		case "Bonheur":
			categorieSelectionnee.innerHTML = "<i class='far fa-smile'></i> Bonheur";
			break;
		case "Autres":
			categorieSelectionnee.innerHTML = "<i class='fad fa-alicorn'></i> Divers";
			break;
		case "Humour":
			categorieSelectionnee.innerHTML = "<i class='far fa-laugh-squint'></i> Humour";
			break;
		case "Geek":
			categorieSelectionnee.innerHTML =
				"<i class='fas fa-laptop-code'></i> Geek, cinéphile et otaku";
			break;
		case "BeSeven":
			categorieSelectionnee.innerHTML = "<i class='far fa-universal-access'></i> BeSeven";
			break;
	}

	// Retire la classe "active" de tous les éléments ayant la classe "dropdown-item"
	document.querySelectorAll(".dropdown-item").forEach((item) => {
		item.classList.remove("active");
	});

	// Ajoute la classe "active" à l'élément correspondant à la catégorie
	const categorieElement = document.getElementById(categorie);
	if (categorieElement) {
		categorieElement.classList.add("active");
	}
}
