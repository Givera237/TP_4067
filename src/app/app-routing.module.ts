import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = 
[
  {path : '', component : AccueilComponent},
  {path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.module').then (m => m.CatalogueModule) },
  {path: 'commande', loadChildren: () => import('./commande/commande.module').then (m => m.CommandeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
