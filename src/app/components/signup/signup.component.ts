import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user-service.service';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//sign up

signUpName: string;
signUpEmail: string;
signUpPassword: string;
isError: boolean = false;
 message: string;
 constructor( private _userservice: UserService, private _http: Http, private _router : Router) {

    }


register(){
  //sign up logic
  var obj= {
    "name": this.signUpName,
    "email": this.signUpEmail,
    "password": this.signUpPassword
  }

 
  this._userservice.register(obj).subscribe(res => {
    
    console.log(res.json());
    
    
     
    if (res.json().message == null){
       localStorage.setItem('currentUser', JSON.stringify(res.json()));
       this.isError = false;
       this._router.navigateByUrl('profile');
    }else{
      
       this.isError = true;
       this.message = res.json().message;
    }
  });
}

removeAlert() {
  this.isError=false;
}
  ngOnInit() {
  }

}
