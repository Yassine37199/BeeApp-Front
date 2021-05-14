import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Agence } from 'src/app/Models/agence';
import { AgenceService } from 'src/app/Services/agence.service';

@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.css']
})
export class AddAgenceComponent implements OnInit {

  constructor(private agenceservice : AgenceService,
              private router : Router) { }

  ngOnInit(): void {
  }

  public addAgence(addForm : NgForm) : void {
    if(window.confirm("Ajouter cet Agence ?")){
    this.agenceservice.addAgence(addForm.value).subscribe(
      (response : Agence) => {
        console.log(response);
        this.agenceservice.getAgences();
        this.router.navigate(['list-agences'])
      }
    )
  }
}

}
