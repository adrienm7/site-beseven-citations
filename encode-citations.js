import fs from "fs";
import path from "path";

// Obtenir le chemin du dossier actuel
const __dirname = path.resolve();

// Chemins des fichiers
const inputFile = path.join(__dirname, "src/data/citations.json");
const outputFile = path.join(__dirname, "public/js/Y2l0YXRpb25zLWVuY29kZWQ=.js");

// Charger et encoder les citations
const encodeCitations = async () => {
	try {
		const citations = JSON.parse(await fs.promises.readFile(inputFile, "utf-8"));
		const encodedCitations = citations.map((citation) => ({
			id: citation.id,
			citation: Buffer.from(citation.citation, "utf-8").toString("base64"),
			auteur: Buffer.from(citation.auteur, "utf-8").toString("base64"),
			categorie: Buffer.from(citation.categorie, "utf-8").toString("base64"),
		}));

		// Générer le contenu JS
		const jsContent = `
			// Fichier généré automatiquement, ne pas modifier.
			const citations = ${JSON.stringify(encodedCitations, null, 2)};
		`;

		// Écrire le fichier encodé en tant que fichier JavaScript
		await fs.promises.writeFile(outputFile, jsContent, "utf-8");
		console.log(`Citations encodées avec succès dans ${outputFile}`);
	} catch (error) {
		console.error("Erreur lors de l'encodage des citations :", error);
	}
};

encodeCitations();
