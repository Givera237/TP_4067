import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajout-vehicule',
  templateUrl: './ajout-vehicule.component.html',
  styleUrls: ['./ajout-vehicule.component.scss']
})
export class AjoutVehiculeComponent 
{
  essai = new FormData();
  modele!: string
  couleur!: string
  puissance!: string 
  marque!:string
  prix!:string

  vehiculeForm!: FormGroup;


  constructor
  (
   private http : HttpClient, 
   private formbuilder : FormBuilder,
   private router : Router,
  ){}

  ngOnInit() : void
  {
    this.vehiculeForm = this.formbuilder.group
    (
      {
        modele: [null,[Validators.required]],
        couleur: [null,[Validators.required]],
        puissance: [null,[Validators.required]],
        marque: [null,[Validators.required]],
        prix: [null,[Validators.required]],
      }
    ) ;
  } 

  onSubmit()
  {

    this.essai.append('modele', this.modele);
    this.essai.append('couleur', this.couleur);
    this.essai.append('puissance', this.puissance);
    this.essai.append('marque', this.marque);
    this.essai.append('prix', this.prix);

    console.log(this.essai)
    this.http.post(`http://localhost:8080/api/post/automobile`, this.essai, { observe: 'response' }).subscribe
    (
      (response: HttpResponse<any>) => 
      {
        if (response.status === 200) 
        {
          console.log(response.statusText)
          console.log('Post bien envoyé')
        }
        else 
        {
          console.log('merde combi');
        }
      },
      error => 
      {
        console.error(error); // Afficher l'erreur à l'utilisateur
      }
    )

  }


  Submit() : void
  { 
    const obj = this.vehiculeForm.value;
    console.log(obj)
    this.http.post('http://localhost:8080/api/post/automobile', obj, { observe: 'response' }).subscribe
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
