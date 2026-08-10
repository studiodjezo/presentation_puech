const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const htmlFile = path.join(baseDir, 'presentation_pistes.html');

console.log("Démarrage de la synchronisation des assets (Moodboards, Logos, Mockups)...");

if (!fs.existsSync(htmlFile)) {
    console.error(`Fichier HTML introuvable : ${htmlFile}`);
    process.exit(1);
}

let content = fs.readFileSync(htmlFile, 'utf8');

const axes = [
    { id: 1, name: "01 - AXE 1", title: "L'ARCHIVE NUMÉRIQUE" },
    { id: 2, name: "02 - AXE 2", title: "LE MAGAZINE INDÉPENDANT" },
    { id: 3, name: "03 - AXE 3", title: "LE FANZINE UNDERGROUND" }
];

const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

// Fonction utilitaire pour lire les images d'un dossier
function getImages(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(f => allowedExts.includes(path.extname(f).toLowerCase()));
}

// Fonction utilitaire pour remplacer le contenu entre deux marqueurs
function replaceBetweenMarkers(text, startMarker, endMarker, newContent) {
    const startIndex = text.indexOf(startMarker);
    if (startIndex === -1) return text;
    
    const endIndex = text.indexOf(endMarker, startIndex + startMarker.length);
    if (endIndex === -1) return text;
    
    const before = text.substring(0, startIndex + startMarker.length);
    const after = text.substring(endIndex);
    
    return before + '\n                    ' + newContent + '\n                    ' + after;
}

axes.forEach(axe => {
    const axeDir = path.join(baseDir, axe.name);
    if (!fs.existsSync(axeDir)) {
        console.warn(`Dossier introuvable pour l'axe ${axe.id} : ${axeDir}`);
        return;
    }

    // 1. SYNC MOODBOARD (racine de l'axe)
    const moodboardImages = getImages(axeDir);
    if (moodboardImages.length > 0) {
        let gridHtml = '';
        if (moodboardImages.length === 1) {
            gridHtml = `
                <div class="moodboard-grid" style="display: block; width: 100%;">
                    <div class="moodboard-grid-item" style="width: 100%; height: 500px; overflow: hidden; border-radius: 4px; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
                        <img src="${axe.name}/${moodboardImages[0]}" alt="Axe ${axe.id} - Inspiration" class="moodboard-img" style="width: 100%; height: 100%; object-fit: cover;" />
                        <div class="moodboard-blueprint"><span class="blueprint-number">01</span><span class="blueprint-label">Inspiration Centrale</span></div>
                    </div>
                </div>`;
        } else {
            let gridStyle = moodboardImages.length <= 4 ? 'grid-template-columns: repeat(2, 1fr);' : 'grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));';
            gridHtml = `<div class="moodboard-grid" style="display: grid; gap: 1rem; ${gridStyle}">`;
            moodboardImages.forEach((img, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                let flexStyle = (idx === 0 && moodboardImages.length > 2) ? 'grid-column: span 2; grid-row: span 2; height: 420px;' : 'height: 200px;';
                gridHtml += `
                    <div class="moodboard-grid-item" style="${flexStyle} overflow: hidden; position: relative; border-radius: 4px;">
                        <img src="${axe.name}/${img}" alt="Axe ${axe.id} - Ref ${num}" onerror="this.style.display='none';" class="moodboard-img" style="width: 100%; height: 100%; object-fit: cover;" />
                        <div class="moodboard-blueprint"><span class="blueprint-number">${num}</span><span class="blueprint-label">Réf. Argentique</span></div>
                    </div>`;
            });
            gridHtml += `</div>`;
        }

        // Remplacement complexe pour le moodboard (rétro-compatibilité)
        const marker = `<!-- AXE ${axe.id} MOODBOARD -->`;
        const markerIndex = content.indexOf(marker);
        if (markerIndex !== -1) {
            const startSearchIndex = markerIndex + marker.length;
            const gridStartIndex = content.indexOf('<div class="moodboard-grid"', startSearchIndex);
            if (gridStartIndex !== -1) {
                const gridStartCloseTagIndex = content.indexOf('>', gridStartIndex);
                let divCount = 1, scanIndex = gridStartCloseTagIndex + 1, gridEndIndex = -1;
                while (divCount > 0 && scanIndex < content.length) {
                    const nextDivClose = content.indexOf('</div>', scanIndex);
                    const nextDivOpen = content.indexOf('<div', scanIndex);
                    if (nextDivClose === -1) break;
                    if (nextDivOpen !== -1 && nextDivOpen < nextDivClose) { divCount++; scanIndex = nextDivOpen + 4; }
                    else { divCount--; scanIndex = nextDivClose + 6; if (divCount === 0) gridEndIndex = nextDivClose + 6; }
                }
                if (gridEndIndex !== -1) {
                    content = content.substring(0, gridStartIndex) + gridHtml + content.substring(gridEndIndex);
                }
            }
        }
    }

    // 2. SYNC LOGOS
    const logosDir = path.join(axeDir, 'Logos');
    const logosImages = getImages(logosDir);
    if (logosImages.length > 0) {
        let logosHtml = `<div class="assets-gallery" style="display: flex; flex-wrap: wrap; gap: 1rem; width: 100%; flex: 1;">`;
        logosImages.forEach(img => {
            logosHtml += `
                        <div class="asset-item" style="flex: 1; min-width: 150px; height: 250px; background: rgba(255,255,255,0.02); border-radius: 8px; display: flex; align-items: center; justify-content: center; padding: 1rem;">
                            <img src="${axe.name}/Logos/${img}" class="moodboard-img" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
                        </div>`;
        });
        logosHtml += `</div>`;
        content = replaceBetweenMarkers(content, `<!-- AXE ${axe.id} LOGOS -->`, `<!-- AXE ${axe.id} LOGOS END -->`, logosHtml);
    }

    // 3. SYNC MOCKUPS
    const mockupsDir = path.join(axeDir, 'Mockups');
    const mockupsImages = getImages(mockupsDir);
    if (mockupsImages.length > 0) {
        let mockupsHtml = `<div class="assets-gallery" style="display: flex; flex-wrap: wrap; gap: 1rem; width: 100%; flex: 1;">`;
        mockupsImages.forEach(img => {
            mockupsHtml += `
                        <div class="asset-item" style="flex: 1; min-width: 200px; height: 250px; border-radius: 8px; overflow: hidden;">
                            <img src="${axe.name}/Mockups/${img}" class="moodboard-img" style="width: 100%; height: 100%; object-fit: cover;" />
                        </div>`;
        });
        mockupsHtml += `</div>`;
        content = replaceBetweenMarkers(content, `<!-- AXE ${axe.id} MOCKUPS -->`, `<!-- AXE ${axe.id} MOCKUPS END -->`, mockupsHtml);
    }
});

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Synchronisation terminée ! Fichier presentation_pistes.html mis à jour.");
