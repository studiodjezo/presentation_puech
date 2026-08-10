const fs = require('fs');
const file = 'c:/Users/djezo/Desktop/Design antigr/Studio Djezo/02 - PROJETS/FLOPUECH - Identite Visuelle 2026/02 - PROPOSITIONS/presentation_pistes.html';
let content = fs.readFileSync(file, 'utf8');

// Header & Title
content = content.replace(/\{\{CLIENT_NAME\}\}/g, `FLORIAN PUECH`);
content = content.replace(/\[NOM DU CLIENT\]/g, `FLORIAN PUECH`);
content = content.replace(/\[MARQUE\]/g, `FLORIAN PUECH`);
content = content.replace(/\[SLOGAN DE LA MARQUE\]/g, `MODE. PLATEAUX. LIVE.`);
content = content.replace(/\[BASELINE DE LA MARQUE\]/g, `PHOTOGRAPHIE`);

// Strategy Section
content = content.replace(/\[Synthèse IA : Les codes visuels actuels du marché du client et pourquoi il faut s'en démarquer ou les exploiter intelligemment.\]/g, `Le marché est saturé par l'esthétique lisse du "photographe-entrepreneur". Il y a un vide pour une approche d'auteur, viscérale, qui ne s'excuse pas et montre la réalité brute (grain, flash, imperfection).`);
content = content.replace(/\[Opportunité de rupture 1\]/g, `L'imperfection comme signature (argentique)`);
content = content.replace(/\[Opportunité de rupture 2\]/g, `Refus du personal branding aseptisé`);
content = content.replace(/\[Opportunité de rupture 3\]/g, `Contraste fort Mode vs Subculture (Ultras)`);

content = content.replace(/\[Synthèse IA : Description du persona principal. À qui l'on s'adresse vraiment \(ex: clients B2B, consommateurs premium, etc.\)\]/g, `Les Directeurs Artistiques mode et les Producteurs audiovisuels. Ils cherchent un oeil neuf, capable de capturer la tension d'un instant plutôt qu'une composition parfaite et sans âme.`);
content = content.replace(/\[Attente de la cible 1\]/g, `L'authenticité du live et du réel`);
content = content.replace(/\[Attente de la cible 2\]/g, `Une véritable vision d'auteur`);
content = content.replace(/\[Attente de la cible 3\]/g, `L'énergie brute (concerts, ultras)`);

content = content.replace(/\[Synthèse IA : La proposition de valeur unique et la métaphore centrale de la marque définie dans la Copy Strategy.\]/g, `"L'image ne se fabrique pas, elle s'arrache au réel." Une marque qui documente sans artifices, avec une approche cinématographique empruntée à Euphoria et Eddy Chen.`);
content = content.replace(/\[Pilier d'expression 1\]/g, `BRUT ET SANS FILTRE`);
content = content.replace(/\[Pilier d'expression 2\]/g, `CINÉMATOGRAPHIQUE`);
content = content.replace(/\[Pilier d'expression 3\]/g, `L'ESTHÉTIQUE DE LA RUE`);

// AXE 1: L'ARCHIVE NUMÉRIQUE
content = content.replace(/\[Titre de l'Axe 1\]/g, `L'ARCHIVE NUMÉRIQUE`);
content = content.replace(/\"\[Concept central \/ Métaphore visuelle\]\"/g, `"L'ambiance laboratoire photo, technique, brute. On archive le réel."`);
content = content.replace(/\[Axe 1 Recherche 1\]/g, `dark brutalism ui`);
content = content.replace(/\[Axe 1 Recherche 2\]/g, `acid green typography`);
content = content.replace(/\[Axe 1 Recherche 3\]/g, `archive photo layout`);
content = content.replace(/\[Nom Police 1\]/g, `Space Grotesk Light`);
content = content.replace(/\[Nom Typo Primaire 1\]/g, `Space Grotesk Light`);
content = content.replace(/\[Nom Typo Secondaire 1\]/g, `Inter Mono`);
content = content.replace(/\[Type, ex : Sans-Serif Moderne\]/g, `Sans-Serif Technique`);
content = content.replace(/\[Mouvement 1\]/g, `Flash & Cut`);
content = content.replace(/\[ex : Impacts francs, coupes sèches\]/g, `Coupures sèches comme un obturateur`);
content = content.replace(/\[ARCHÉTYPE 1\]/g, `LE DOCUMENTALISTE`);
content = content.replace(/\"\[Micro-citation ou devise dans le ton de voix de l'axe 1\]\"/g, `"L'archive visuelle du réel."`);
content = content.replace(/\[Description Contraste Axe 1\]/g, `Extrême (Noir Profond / Néon)`);

// AXE 2: LE MAGAZINE INDÉPENDANT
content = content.replace(/\[Titre de l'Axe 2\]/g, `LE MAGAZINE INDÉPENDANT`);
content = content.replace(/\[Axe 2 Recherche 1\]/g, `editorial photo layout`);
content = content.replace(/\[Axe 2 Recherche 2\]/g, `minimalist typography portfolio`);
content = content.replace(/\[Axe 2 Recherche 3\]/g, `white space design`);
content = content.replace(/\[Nom Police 2\]/g, `Helvetica Now Display`);
content = content.replace(/\[Nom Typo Primaire 2\]/g, `Helvetica Now`);
content = content.replace(/\[Nom Typo Secondaire 2\]/g, `Playfair Display (Gros Titres)`);
content = content.replace(/\[Type, ex : Monospace Technique\]/g, `Sans-Serif Éditorial`);
content = content.replace(/\[Mouvement 2\]/g, `Slide Doux`);
content = content.replace(/\[ex : Cinématique, glissements horizontaux\]/g, `Comme on tourne une page de magazine`);
content = content.replace(/\[ARCHÉTYPE 2\]/g, `L'ESTHÈTE`);
content = content.replace(/\"\[Micro-citation ou devise dans le ton de voix de l'axe 2\]\"/g, `"L'élégance de l'imperfection."`);
content = content.replace(/\[Description Contraste Axe 2\]/g, `Doux (Gris Perle / Noir)`);

// AXE 3: LE FANZINE UNDERGROUND
content = content.replace(/\[Titre de l'Axe 3\]/g, `LE FANZINE UNDERGROUND`);
content = content.replace(/\[Axe 3 Recherche 1\]/g, `punk zine layout`);
content = content.replace(/\[Axe 3 Recherche 2\]/g, `high contrast gritty typography`);
content = content.replace(/\[Axe 3 Recherche 3\]/g, `marker handwriting font`);
content = content.replace(/\[Nom Police 3\]/g, `Arial Narrow / Marker`);
content = content.replace(/\[Nom Typo Primaire 3\]/g, `Arial Narrow`);
content = content.replace(/\[Nom Typo Secondaire 3\]/g, `Permanent Marker`);
content = content.replace(/\[Type, ex : Serif Organique\]/g, `Sans-Serif Dégradé`);
content = content.replace(/\[Mouvement 3\]/g, `Glitch & Chaos`);
content = content.replace(/\[ex : Organique, fondus doux en cascade\]/g, `Asymétrique, imprévisible`);
content = content.replace(/\[ARCHÉTYPE 3\]/g, `LE REBELLE`);
content = content.replace(/\"\[Micro-citation ou devise dans le ton de voix de l'axe 3\]\"/g, `"Pas de filtre, pas de règles."`);
content = content.replace(/\[Description Contraste Axe 3\]/g, `Violent (Noir / Rouge Sang)`);

// Personas Focus Group
content = content.replace(/\[Nom Persona 1\]/g, `Camille`);
content = content.replace(/\[Rôle \/ Titre du Persona 1\]/g, `Directrice Artistique Mode`);
content = content.replace(/\[Nom Persona 2\]/g, `Thomas`);
content = content.replace(/\[Rôle \/ Titre du Persona 2\]/g, `Producteur Exécutif`);
content = content.replace(/\[Nom Persona 3\]/g, `Yannick`);
content = content.replace(/\[Rôle \/ Titre du Persona 3\]/g, `Organisateur Indé / Label`);

// Additional texts from second run
content = content.replace(/\[Description psychographique courte de ses motivations et exigences de marque.\]/g, `Recherche l'authenticité pour rajeunir l'image des marques de luxe.`);
content = content.replace(/\"\[Verdict détaillé rédigé à la première personne : Pourquoi cet axe résonne intensément avec ses besoins.\]\"/g, `"C'est exactement ça. Le grain, l'imperfection, l'immédiateté... Ça casse les codes, c'est parfait pour une campagne mode."`);
content = content.replace(/\"\[Verdict mitigé ou critique : Ce qui fonctionne et ce qui freine sur cet axe.\]\"/g, `"Intéressant mais peut-être un peu trop rigide, on perd le côté organique et spontané de la pellicule."`);
content = content.replace(/\"\[Verdict réservé ou rejet : Pourquoi cet axe ne correspond pas à ses attentes.\]\"/g, `"Trop chaotique. Mes clients (mode/luxe) ont quand même besoin d'un minimum de structure pour se rassurer."`);

content = content.replace(/\[Synthèse IA : Explication stratégique approfondie de l'axe, de son intention créative et des émotions dominantes qu'il véhicule pour la marque.\]/g, `Une approche qui documente le réel sans l'altérer. L'émotion naît du contraste entre la rigueur de la mise en page (grille de laboratoire) et la spontanéité des clichés (grain, flou).`);
content = content.replace(/\[Synthèse IA : Description factuelle des formes\/grilles\/tracés choisis.\]/g, `Utilisation de bordures très fines (1px), grilles apparentes type tableur, alignement chirurgical.`);
content = content.replace(/\[Justification stratégique profonde : en quoi ces formes assoient le positionnement ou rassurent la cible \?\]/g, `Cela donne une dimension professionnelle et scientifique au travail photographique, montrant que l'imperfection visuelle est un choix maîtrisé, pas un accident.`);

fs.writeFileSync(file, content, 'utf8');
console.log('Remplacements finaux effectués avec succés !');
