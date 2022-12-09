import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'Cart', component: CartComponent},
  { path: 'Profile', component: ProfileComponent},
  { path: '', component: ProduitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
