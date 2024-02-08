import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-affiche-voiture',
  templateUrl: './affiche-voiture.component.html',
  styleUrls: ['./affiche-voiture.component.scss']
})
export class AfficheVoitureComponent 
{
  vehiculeForm!: FormGroup;


  constructor(
    private http : HttpClient,
    private formbuilder : FormBuilder,
    private router : Router
             ){}

  ngOnInit(): void
  {
    this.vehiculeForm = this.formbuilder.group
    (
      {
        etat: [null,[Validators.required]],
        type: [null,[Validators.required]],
        type_document: [null,[Validators.required]],
        montant: [null,[Validators.required]],
      }
    ) ; 
  }


  addPanier() : void
    {
      const obj = this.vehiculeForm.value;
     console.log(obj)
      this.http.post('http://localhost:8080/api/post/commande/1/1', obj, { observe: 'response' }).subscribe
      (
        (response: HttpResponse<any>) => 
        {
          if (response.status === 200) 
          {
            console.log(response.statusText)
          }
          else 
          {
            console.log('merde combi');
            
          }
        },
        error => 
        {
          console.error(error);
          console.log(error.error.message);
           // Afficher l'erreur à l'utilisateur
        } 
      ) ;  
  
    }
}
