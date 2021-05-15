import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, Subject , merge } from 'rxjs';
import { debounceTime , distinctUntilChanged , filter , map } from 'rxjs/operators';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/Services/client.service';
import {Governorats} from 'src/app/Components/Gouvernorats.data.js'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private clientservice : ClientService , private router : Router) { }

  ngOnInit(): void {
  }

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? Governorats
        : Governorats.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
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
