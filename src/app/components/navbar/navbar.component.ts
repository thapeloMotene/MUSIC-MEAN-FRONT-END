import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user-service.service';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public _userservice: UserService, private _http: Http, private _router : Router) {

  }
  
logout(){
 this._userservice.logout();

}

  ngOnInit() {
  }

}
