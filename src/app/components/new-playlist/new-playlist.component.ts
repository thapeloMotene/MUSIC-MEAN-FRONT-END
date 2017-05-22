import { Component, OnInit } from '@angular/core';

import {PlaylistService } from '../../services/playlist.service';
import {UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.css']
})
export class NewPlaylistComponent implements OnInit {
  isError: boolean;
  isCreated: boolean;
  currentUser :any;
  name: string;
  description:string;
  message :string;
  constructor(private _userservice: UserService, private _playlistservice: PlaylistService,) { 
    this.currentUser = this._userservice.currentUser();

  }

  create(){
    let obj = {
      "owner": this.currentUser._id,
      "playlist": this.name,
      "description": this.description
    }

    this._playlistservice.addplaylist(obj).subscribe( res => {
      if (res.json().message == null){
        this.isCreated = true;
        this.isError = false;
        this.message = "Playlist "+ this.name + " successfully created";
      }
      else{
        this.isCreated =false;
        this.isError=true;
        this.message = "Playlist "+ this.name+ " could not be created ";
      }
    });
  }


  ngOnInit() {
      this.currentUser = this._userservice.currentUser();
  }

}
