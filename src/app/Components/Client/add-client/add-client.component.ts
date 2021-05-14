import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private clientservice : ClientService , private router : Router) { }

  ngOnInit(): void {
  }

  
  public addClient(addForm : NgForm) : void {
    if (window.confirm("Ajouter ce client ? ")) {
    this.clientservice.addClients(addForm.value).subscribe(
      (response : Client) => {
        console.log(response);
        this.clientservice.getClients();
        this.router.navigate(['list-clients'])
      }
    )
  }
}


}
