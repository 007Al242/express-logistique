# L'EXPRESS LOGISTIQUE — site vitrine

Site statique HTML, CSS et JavaScript avec Bootstrap 5.3.4 (CDN).

## Fichiers
- `index.html` : structure et contenu des sections.
- `css/style.css` : styles personnalisés, responsive et identité visuelle.
- `js/script.js` : menu mobile, année du footer et démonstrations de formulaire.
- `assets/` : dossier prévu pour vos images locales.

## Tester sur votre ordinateur
1. Décompressez le ZIP.
2. Ouvrez `index.html` dans un navigateur. Une connexion Internet est nécessaire pour Bootstrap et les polices/images distantes.
3. Pour publier, envoyez tous les fichiers en conservant les dossiers `css/` et `js/`.

## Publier avec GitHub Pages
1. Créez un dépôt GitHub (par exemple `express-logistique`).
2. Téléversez `index.html`, `css/`, `js/`, `assets/` et ce README à la racine.
3. Dans le dépôt, ouvrez **Settings → Pages**.
4. Dans **Build and deployment**, sélectionnez **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
5. Attendez le déploiement : GitHub affichera l'adresse publique dans la section Pages.

## À personnaliser avant une mise en ligne réelle
- Remplacez `contact@express-logistique.example` par votre adresse e-mail réelle.
- Remplacez la photo distante du bandeau principal par une image autorisée qui correspond à votre activité.
- Les formulaires et le suivi colis sont des démonstrations front-end : ils n'envoient aucune demande et ne consultent aucune expédition. Il faut un backend, une base de données ou une API pour rendre ces fonctions réelles.
- La maquette de référence n'étant pas fournie comme fichier exploitable dans ce lot, cette version reprend une direction visuelle logistique noire, blanche et rouge. Ajustez les détails après comparaison avec votre image de référence.
