import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AfficheCatalogueComponent } from "./components/affiche-catalogue/affiche-catalogue.component";
import { AfficheVoitureComponent } from "./components/affiche-voiture/affiche-voiture.component";
import { RechercheVoitureComponent } from "./components/recherche-voiture/recherche-voiture.component";
import { AjoutVehiculeComponent } from "./components/ajout-vehicule/ajout-vehicule.component";

const routes : Routes =
[
    {path : 'affiche', component :AfficheCatalogueComponent},
    {path : 'affiche_voiture', component : AfficheVoitureComponent},
    {path : 'recherche', component : RechercheVoitureComponent},
    {path : 'ajout', component : AjoutVehiculeComponent}

]

@NgModule
(
    {
        imports : 
        [
            RouterModule.forChild(routes)
        ],
        exports: 
        [
            RouterModule
        ]
    }
)

export class CatalogueRoutingModule
{

}