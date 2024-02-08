import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficheCatalogueComponent } from './components/affiche-catalogue/affiche-catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { AfficheVoitureComponent } from './components/affiche-voiture/affiche-voiture.component';
import { RechercheVoitureComponent } from './components/recherche-voiture/recherche-voiture.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutVehiculeComponent } from './components/ajout-vehicule/ajout-vehicule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AfficheCatalogueComponent,
    AfficheVoitureComponent,
    RechercheVoitureComponent,
    AjoutVehiculeComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CatalogueModule { }
