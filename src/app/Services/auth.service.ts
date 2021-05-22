import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../Models/user';
import { UserService } from './user.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user : User;
  isLoggedIn = false;

  constructor(private userservice : UserService , private router : Router , private modalService: NgbModal) {
   }
   


  async authenticate(username) {
      this.userservice.findUserByEmail(username).subscribe(
       async (response : User) => {
        if(response.active === "active"){
        await sessionStorage.setItem('user' , JSON.stringify(response))
        this.router.navigate([''])}
        else alert('ce compte est inactive !')
       }
     )
      return true;
    }

  isUserLoggedIn(){
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(user){
      return user;
  } 
    else return null

  }

  logout(){
    sessionStorage.removeItem('user')
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}
