import { Component, OnInit } from '@angular/core';

import {UserService } from '../../services/user-service.service';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isError: boolean = false;
result: {};
message: string;
//login
loginEmail: string;
loginPassword: string;
 
  constructor( private _userservice: UserService, private _http: Http, private _router : Router) {

  }
  
  login(){
  //login logic
  var obj= {
    "email": this.loginEmail,
    "password": this.loginPassword
  }

  this._userservice.login(obj).subscribe( res =>{
    this.result = res.json();

    if (res.json().message == null){
      this.isError = false;
      
      localStorage.setItem('currentUser', JSON.stringify(res.json()));
        this._router.navigateByUrl('profile');
        console.log(res.json());
    }else
    {
      
      this.isError = true;
      this.message= res.json().message;
        }
    
    
  });
}

removeAlert() {
  this.isError=false;
}

  ngOnInit() {
  }

}
