import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeRoutingModule } from './commande-routing.module';
import { PanierComponent } from './components/panier/panier.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommandeRoutingModule
  ]
})
export class CommandeModule { }
