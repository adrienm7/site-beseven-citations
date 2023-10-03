var categorie = "Toutes";

function change(categorie){
    switch (categorie) {
        case "Toutes":
            $("#categorie_selectionnee").html("<i class='far fa-globe'></i> Toutes");
        break;
        case "Inspirant":
            $("#categorie_selectionnee").html("<i class='far fa-compass'></i> Inspirantes");
        break;
        case "Action":
            $("#categorie_selectionnee").html("<i class='fad fa-transporter-1'></i> Action et persévérance");
        break;
        case "Réflexion":
            $("#categorie_selectionnee").html("<i class='far fa-lightbulb'></i> Réflexion");
        break;
        case "Apprentissage":
            $("#categorie_selectionnee").html("<i class='fad fa-graduation-cap'></i> Apprentissage");
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
            $("#categorie_selectionnee").html("<i class='fas fa-laptop-code'></i> Geek, cinéphile et otaku");
        break;
        case "BeSeven":
            $("#categorie_selectionnee").html("<i class='far fa-universal-access'></i> BeSeven");
        break;
    }
    $(".dropdown-item").removeClass("active");
    $("#"+categorie).addClass("active");
}





var waypoint = new Waypoint({
  element: document.getElementById('titre-Inspirant'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Toutes");
	} else {
	    change("Inspirant");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Action'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Inspirant");
	} else {
	    change("Action");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Réflexion'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Action");
	} else {
	    change("Réflexion");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Apprentissage'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Réflexion");
	} else {
	    change("Apprentissage");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Relations'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Apprentissage");
	} else {
	    change("Relations");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Bonheur'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Relations");
	} else {
	    change("Bonheur");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Autres'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Bonheur");
	} else {
	    change("Autres");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Humour'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Autres");
	} else {
	    change("Humour");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-Geek'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Humour");
	} else {
	    change("Geek");
	}
  }
})


var waypoint = new Waypoint({
  element: document.getElementById('titre-BeSeven'),
  handler: function(direction) {
    if (direction === 'up') {
		change("Geek");
	} else {
	    change("BeSeven");
	}
  }
})





$(".dropdown-item").click(function() {
    categorie=$(this).attr("id").toString();
    switch (categorie) {
        case "Toutes":
            $("#categorie_selectionnee").html("<i class='far fa-globe'></i> Toutes");
            window.location = "#titre";
        break;
        case "Inspirant":
            $("#categorie_selectionnee").html("<i class='far fa-compass'></i> Inspirantes");
            window.location = "#titre-Inspirant";
        break;
        case "Action":
            $("#categorie_selectionnee").html("<i class='fad fa-transporter-1'></i> Action et persévérance");
            window.location = "#titre-Action";
        break;
        case "Réflexion":
            $("#categorie_selectionnee").html("<i class='far fa-lightbulb'></i> Réflexion");
            window.location = "#titre-Réflexion";
        break;
        case "Apprentissage":
            $("#categorie_selectionnee").html("<i class='fad fa-graduation-cap'></i> Apprentissage");
            window.location = "#titre-Apprentissage";
        break;
        case "Relations":
            $("#categorie_selectionnee").html("<i class='fad fa-users'></i> Relations");
            window.location = "#titre-Relations";
        break;
        case "Bonheur":
            $("#categorie_selectionnee").html("<i class='far fa-smile'></i> Bonheur");
            window.location = "#titre-Bonheur";
        break;
        case "Autres":
            $("#categorie_selectionnee").html("<i class='fad fa-alicorn'></i> Divers");
            window.location = "#titre-Autres";
        break;
        case "Humour":
            $("#categorie_selectionnee").html("<i class='far fa-laugh-squint'></i> Humour");
            window.location = "#titre-Humour";
        break;
        case "Geek":
            $("#categorie_selectionnee").html("<i class='fas fa-laptop-code'></i> Geek, cinéphile et otaku");
            window.location = "#titre-Geek";
        break;
        case "BeSeven":
            $("#categorie_selectionnee").html("<i class='far fa-universal-access'></i> BeSeven");
            window.location = "#titre-BeSeven";
        break;
    }
    $(".dropdown-item").removeClass("active");
    $("#"+categorie).addClass("active");
});
