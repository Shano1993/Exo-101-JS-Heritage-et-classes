/**
 * Crée une class vehicule
 */
class Vehicule {
    constructor(couleur, roues, marque) {
        this.couleur = couleur;
        this.roue = roues;
        this.marque = marque;
    }

    demarrer() {
        return (this.couleur + this.roue + this.marque);
    }

    arreter() {
        console.log("Il faut éteindre le moteur");
    }
}

