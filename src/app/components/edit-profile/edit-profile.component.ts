import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user-service.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  username: string;
  email:string;
  password: string;
  repassword:string;
  isError: boolean= false;
  errMessage: string;
  successMessage:string;
  isSuccess: boolean=false;

  constructor(private _userservice: UserService) { 
    let user = this._userservice.currentUser();
    this.username = user.name;
    this.email = user.email;
  }


  updateUser(){

   let obj={
     "_id": this._userservice.currentUser()._id,
     "name": this.username,
     "email": this.email,
     "password": this.password,
     "isNewPass": false
   }

   if (this.password !=null && this.repassword !=null && this.password === this.repassword){
     obj.isNewPass = true;
   }

    this._userservice.updateUser(obj).subscribe( res =>{

       console.log(res.json());
        this.isError  = res.json().error || false;
          console.log(this.isError);

        if (! this.isError){
          
          this.isSuccess=true;
          this.successMessage="GREAT!! Profile Updated Successfully";
          localStorage.setItem('currentUser', JSON.stringify(res.json()));
        }
        else{
          
           this.errMessage= "OOPS!! Profile could not be updated, please try again";
        }
    });
  }

  ngOnInit() {
    console.log('on init called')
  }

}
