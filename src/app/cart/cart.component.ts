import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  ngOnInit(): void {
    console.log("Fonction :" +this.panierVide());
    console.log(this.ProduitsDansPanier[0].nom);

    // prixTotCart =
  }


  PhrasePanierVide = "Your cart is empty";
  ProduitsDansPanier = this.getCart();
 
  isPanierVide = this.panierVide();
  
  
  panierVide(){
    let panier =  localStorage.getItem("panier");
    if(panier == null){
      
      return true;
    }else{
      return false;
    }
  }

  
  getCart(){
    let panier =  localStorage.getItem("panier");
    if(panier == null){
      return [];
    }else{
      return JSON.parse(panier || '{}');
    }
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
        produitTrouve.prixTot = produitTrouve.spec.prix*produitTrouve.quantite
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