import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Modem } from 'src/app/Models/modem';
import { ModemService } from 'src/app/Services/modem.service';

@Component({
  selector: 'app-list-modems',
  templateUrl: './list-modems.component.html',
  styleUrls: ['./list-modems.component.css']
})
export class ListModemsComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public modems : Modem[];
  

  dtTrigger : Subject<any> = new Subject<any>();
  constructor(private modemservice : ModemService , private router : Router) { }

  ngOnInit(): void {
    this.getModems();
    console.log(this.modems);
  }

  public getModems() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.modemservice.getModems().subscribe(
      (response : Modem[]) => {
        console.log(response);
        this.modems = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }

}
