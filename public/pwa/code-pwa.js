// Register service worker
if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("./pwa/sw.js", { scope: "/" })
		.then(function (reg) {
			// Registration worked
			console.log("Enregistrement du service worker réussi. Scope is " + reg.scope);
		})
		.catch(function (error) {
			// Registration failed
			console.log("Enregistrement du service worker échoué avec " + error);
		});
}
