import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user-service.service';
import {PlaylistService } from '../../services/playlist.service';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  playlists : any;
  user : any;

  constructor( public _userservice: UserService, private _http: Http,private _playlistservice: PlaylistService) {
  

  }

  ngOnInit() {

  this.user= this._userservice.currentUser();

      this._playlistservice.playlists(this.user).subscribe(lists =>{
      this.playlists = lists.json();
      console.log(this.playlists);
    });
  }

  delPlaylist(playlist){
    this._playlistservice.delPlaylist(playlist).subscribe(res =>{
        if (res.json().message =="null"){
          this._playlistservice.playlists(this.user).subscribe(lists =>{
                 this.playlists = lists.json();
               
                
    });
        }
    });
    window.location.reload();
  }


}
