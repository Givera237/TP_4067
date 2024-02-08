import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent 
{
  element!: any[]

  constructor(
    private http : HttpClient,
    private router : Router
             ){}

    ngOnInit(): void
    {
      console.log('first :',this.element)

      this.http.get<any[]>('http://localhost:8080/api/commande').subscribe(reponse  => 
      {
        this.element = reponse;
        console.log(this.element)
      }
      );
    }
}
