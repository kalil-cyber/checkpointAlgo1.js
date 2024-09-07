function analysePhrase(caractères) {
    let longueur = 0;
    let nbrMots = 0;
    let nbrVoyelles = 0;
    let estDansMot = false;
    const voyelles = 'aeiouAEIOU';
    
    for (let i = 0; i < caractères.length; i++) {
        const char = caractères[i];
        
        // Calculer la longueur sans les points
        if (char !== '.') {
            longueur++;
        }
        
        // Compter le nombre de voyelles
        if (voyelles.includes(char)) {
            nbrVoyelles++;
        }
        
        // Compter le nombre de mots
        if (char !== ' ' && char !== '.') {
            estDansMot = true;
        } else if (estDansMot && (char === ' ' || char === '.')) {
            nbrMots++;
            estDansMot = false;
        }
    }
    
    // Si la phrase se termine par un mot sans point ou espace, comptons ce dernier mot
    if (estDansMot) {
        nbrMots++;
    }
    
    console.log('La longueur de la phrase sans point:', longueur);
    console.log('Nombre de mots dans la phrase:', nbrMots);
    console.log('Nombre de voyelles dans la phrase:', nbrVoyelles);
}

// Exemple d'utilisation
analysePhrase("Bonjour. Ceci est un exemple.");
