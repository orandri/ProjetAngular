import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits =[
    {
      id: 1,
      nom: 'Iphone 12',
      spec: {
        couleur: 'noir',
        poids: '250g',
        stockage: '256GB',
        prix: 1000
      },
      img: 'https://m.media-amazon.com/images/I/715MbIIvMpL._AC_SX425_.jpg'
    },
    {
      id: 2,
      nom: 'Airpods',
      spec: {
        couleur: 'blanc',
        poids: '50g',
        stockage: 'N/A',
        prix: 200
      },
      img: 'https://www.electrodepot.fr/media/catalog/product/cache/1a40d1f945549a9ec18309b0a600e55c/P973784.jpg'
    },
    {
      id: 3,
      nom: 'Samsung S22',
      spec: {
        couleur: 'noir',
        poids: '250g',
        stockage: '512GB',
        prix: 900
      },
      img: 'https://m.media-amazon.com/images/I/817IKYomOSL._AC_SX425_.jpg'
    },
    {
      id: 4,
      nom: 'Samsung Note 10',
      spec: {
        couleur: 'noir',
        poids: '250g',
        stockage: '256GB',
        prix: 950
      },
      img: 'https://m.media-amazon.com/images/I/51f4T4yRkbL._AC_SY450_.jpg'
    },
    {
      id: 5,
      nom: 'Iphone 14',
      spec: {
        couleur: 'blanc',
        poids: '250g',
        stockage: '256GB',
        prix: 1300
      },
      img: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg'
    },
    
  ];

  titrepage = 'Lot of surprises are waiting for you'
  titrePageModifie = 'Lot of surprises are waiting for you';
  // panier: any[] = [];

  modifTitreOver(produit) {
    this.titrePageModifie = produit['nom'];
  }

  modifTitreOut(){
    this.titrePageModifie = this.titrepage;
  }


  getCart(){
    let panier =  localStorage.getItem("panier");
    if(panier == null){
      return [];
    }else{
      return JSON.parse(panier || '{}');
    }
  }

  addToCart(produit){
    let panier = this.getCart();
    let produitTrouve = panier.find(p => p.id == produit.id);

    if (produitTrouve != undefined) {
        produitTrouve.quantite++;
        produitTrouve.prixTot = produitTrouve.quantite*produitTrouve.spec.prix;
    }else{
        produit.quantite = 1;
        produit.prixTot = Number(produit.spec.prix)*Number(produit.quantite);
        panier.push(produit); 
    }
    

    localStorage.setItem("panier",JSON.stringify(panier));

  }

  removeProductCart(produit){
    let panier = this.getCart();
    panier = panier.filter( p => p.id != produit.id);
    localStorage.setItem("panier",JSON.stringify(panier));
  }
   
  changeQuantite(produit,quantite){
    let panier = this.getCart();
    let produitTrouve = panier.find(p => p.id == produit.id);

    if (produitTrouve != undefined) {
        produitTrouve.quantite += quantite;
        if (produitTrouve.quantite <= 0) {
          this.removeProductCart(produitTrouve);
        }else{
          localStorage.setItem("panier",JSON.stringify(panier));
        }
    }
}

NbProduit(){
  let panier = this.getCart();
  let nb = 0
  for (let produit of panier){
    nb += produit.quantite
  }
  return nb;
}

}
