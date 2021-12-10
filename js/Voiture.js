/**
 *  Crée un nouveau type voiture
 */
class Voiture extends Vehicule {
    constructor(couleur, roues, marque, assurance, proprietaire) {
        super(couleur, roues, marque);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }
    passerAuCarWash(a) {
        a = "avec de l'eau "
        return ("J'ai nettoyer mon véhicule " + a + "maintenant, elle a retrouvé sa couleur " + this.couleur);
    }
}

