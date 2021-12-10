/**
 *  Crée un nouveau type velo
 */
class Velo extends Vehicule {
    constructor(couleur, roues, marque, rayonRoues, typePeinture) {
        super(couleur, roues, marque);
        this.rayonRoues = rayonRoues;
        this.typePeinture= typePeinture;
    }
    monter() {
        return ("Je monte sur mon vélo " + this.couleur + " avec " + this.roue + " roues avec " + this.rayonRoues + " rayons");
    }
}
