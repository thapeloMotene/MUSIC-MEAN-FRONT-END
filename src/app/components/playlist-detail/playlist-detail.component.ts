import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService } from '../../services/playlist.service';
@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: any;
  id: string;
  constructor(public _params: ActivatedRoute,private _playlistservice: PlaylistService) {


   }

   removeTrack(track){
     let data={
       "id":this.playlist._id,
      "track": track
     }

    this._playlistservice.removeFromplaylist(data).subscribe(res =>{
      this.playlist= res.json();
    });

   }

  ngOnInit() {
    this._params.params.subscribe( param => {
     this.id = param['id'];
    });

    this._playlistservice.playlist(this.id).subscribe( list => {
        this.playlist = list.json();
    });
  }

}
