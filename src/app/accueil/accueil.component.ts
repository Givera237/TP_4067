import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent 
{
  constructor(
    private router : Router ){}
    
  onSearch() : void
  {
    this.router.navigate([`/catalogue/affiche_voiture`]); 
  }
}
