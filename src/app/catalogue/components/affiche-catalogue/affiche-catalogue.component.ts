import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Automobile } from '../../models/automobile';


@Component({
  selector: 'app-affiche-catalogue',
  templateUrl: './affiche-catalogue.component.html',
  styleUrls: ['./affiche-catalogue.component.scss']
})
export class AfficheCatalogueComponent
{
  automobile!: Automobile[]

  constructor(
    private http : HttpClient,
    private router : Router
             ){}

    ngOnInit(): void
    {
      console.log('first :',this.automobile)

      this.http.get<Automobile[]>('http://localhost:8080/api/automobile').subscribe(reponse  => 
      {
        this.automobile = reponse;
        console.log(this.automobile)
      }
      );
    }

    onViewVoiture() : void
    {    
      this.router.navigateByUrl(`catalogue/affiche_voiture`);
    }
        
}
