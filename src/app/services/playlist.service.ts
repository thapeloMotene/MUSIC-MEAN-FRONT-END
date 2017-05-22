import {Injectable  } from "@angular/core";
import {Http} from '@angular/http';
@Injectable()
export class PlaylistService{

    public baseUrl: string;
    public my_playlists : any;

    constructor(private _http: Http ){
        this.baseUrl='http://localhost:3000';
    }

    playlists(data: any){
       return this._http.get(this.baseUrl+'/playlists/'+ data._id);
    }

    playlist(data: any){
      return  this._http.get(this.baseUrl+'/playlist/'+ data);
    }

    addplaylist(data: any){
        return  this._http.post(this.baseUrl+'/new-playlist',data);
    }

    delPlaylist(data: any){
         return  this._http.post(this.baseUrl+'/remove-playlist/'+data._id,null);
    }

    addToplaylist(data: any){
         return  this._http.post(this.baseUrl+'/add-to-list',data);
    }

    removeFromplaylist(data: any){
        return  this._http.post(this.baseUrl+'/rem-track',data);
    }

}