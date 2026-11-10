function poserQuestion(question, bonneReponse, points = 2) {
    const reponse = prompt(question);
    if (reponse === bonneReponse) {
        alert("Bonne réponse ! +" + points + " points");
        return points;
    } else {
        alert("Faux ! La bonne réponse était : " + bonneReponse);
        return 0;
    }
}

const calculerPourcentage = function(score, total) {
    return (score / total) * 100;
};

const estReussi = (pourcentage) => pourcentage >= 50;

const mention = (pourcentage) => {
    if (pourcentage >= 80) {
        return "Très bien";
    } else if (pourcentage >= 50) {
        return "Bien";
    } else {
        return "Au revoir";
    }
};

function afficherBilan(joueur, score, total = 10) {
    const pourcentage = calculerPourcentage(score, total);
    console.log("Joueur : " + joueur);
    console.log("Score : " + score + "/" + total + " (" + pourcentage + "%)");
    console.log("Mention : " + mention(pourcentage));
    alert(estReussi(pourcentage) ? joueur + " : quiz réussi" : joueur + " : quiz à repasser");
}

const joueur = prompt("Quel est votre prénom ?", "Invité") || "Invité";
let score = 0;

score += poserQuestion("Quelle balise HTML crée un lien ?", "a");
score += poserQuestion("Quel attribut du label reprend l'id du champ ?", "for");
score += poserQuestion("Combien vaut 7/2 en JavaScript ?", "3.5", 3);
score += poserQuestion("Quel opérateur compare la valeur ET le type ?", "===", 3);

afficherBilan(joueur, score);