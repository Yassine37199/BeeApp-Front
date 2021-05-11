import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Modem } from 'src/app/Models/modem';
import { ModemService } from 'src/app/Services/modem.service';

@Component({
  selector: 'app-add-modem',
  templateUrl: './add-modem.component.html',
  styleUrls: ['./add-modem.component.css']
})
export class AddModemComponent implements OnInit {

  constructor(private modemservice : ModemService , private router : Router) { }

  ngOnInit(): void {
  }

  public addModem(addForm : NgForm) : void {
    this.modemservice.addModem(addForm.value).subscribe(
      (response : Modem) => {
        console.log(response);
        this.modemservice.getModems();
        this.router.navigate(['list-modems'])
      }
    )
  }

}
