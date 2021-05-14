import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Offre } from 'src/app/Models/offre';
import { OffresService } from 'src/app/Services/offres.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {

  constructor(private offreservice : OffresService , private router : Router) { }

  ngOnInit(): void {
  }

  public addOffre(addForm : NgForm) : void {
    if(window.confirm("Ajouter cet Offre ?")){
    this.offreservice.addOffre(addForm.value).subscribe(
      (response : Offre) => {
        console.log(response);
        this.offreservice.getOffres();
        this.router.navigate(['list-offres'])
      }
    )
  }
}

}
