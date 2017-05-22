import {Injectable  } from "@angular/core";
import {Http} from '@angular/http';
@Injectable()
export class UserService{
    public baseUrl: string;
    
    constructor(private _http: Http ){
        this.baseUrl='http://localhost:3000';
    }

    register(data: any){
       return this._http.post(this.baseUrl+'/register',data);
    }

    login(creds: any){
      return  this._http.post(this.baseUrl+'/login',creds);
    }


currentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
}

updateUser(data:any){
    return this._http.post(this.baseUrl+'/edit-profile',data);
}

logout(){
    
    localStorage.clear();
    window.location.href= "/";

}
}