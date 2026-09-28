const prompt = require('prompt-sync')();
let candidats = []
  
    console.log(`
========================================
           MENU PRINCIPAL
========================================
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher un candidat par nom
8. Afficher les statistiques de l'élection
9. Quitter
========================================`)


let choix;
do {

    choix = prompt("votr choix : ")
          switch (choix) {
            case '1':
                AjouterCandidat();
                break;
            case '2':
                AjouterPlusieursCandidat();
                break;
            case '3':
                AffichierCandidat();
                break;
            case '4':
                AjouterCandidat();
                break;
            case '5':
                ModifierCandidat();
                break;
            case '6':
                SupprimerCandidat();
                break;
            case '7':
                RechercherCandidat();
                break;
            case '8':
                AffichicherStatistiques();
                break;
            case '9':
                quitter();
                break;
            default:
                console.log("Choix invalide, réessayez.")
          }
} while (choix !== '9');

function AjouterCandidat()
{
    let cin =prompt("entre cin :")
     for (let i = 0 ; i < candidats.length ; i++){
        if (candidats[i].cin == cin )
            console.log("ce candidat existe deja :" )
        return;
    }
    let candidat ={
      cin : cin,
      nom :  prompt("entre nom :"),
      prenom: prompt("entre prenom :"),
      partiPolitique: prompt("partipolitique :"),
      age: Number(prompt("ajouter age :")),
      electeurs: []
    }
}
    candidats.push(candidat);
    console.log("ajouter candidat:");

    function AjouterPlusieursCandidat()
    {
        console.log("ajouter plusieurs candidat :")
        let x = Number(prompt("enter le nomber de candidat vous avez ajouter :"))
        for (let i = 0; i < x; i++){
            console.log("candidat" , i+1)
            AjouterCandidat();
            
        }
    
    }

function AffichierCandidat(){
    if (candidats.length === 0) {
        console.log("Aucun candidat trouve :")
        return;
}
    for (let i = 0; i<candidats.length; i++){
        let c = candidats[i];
        console.log("CIN: " + c.cin + " | Nom: " + c.nom + " " + c.prenom + " | Parti: " + c.partiPolitique + " | Age: " + c.age );
    }  
}

function  AjouterCandidat(){
    let cin = prompt("enter le cin de candidat :");
    for (let i = 0; i<candidats.length; i++){
        if (candidats[i].cin === cin){
            let cinelecteur = prompt("enter le cin de l'ecteur :")
            candidats[i].electeurs.push(cinelecteur);
            console.log("vote engegistre :");
            return;
        }
    }
    console.log("candidat introuvable :");
}