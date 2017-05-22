import { Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Artist} from '../../artist/artist';
import {Album} from '../../artist/album';
import {SpotifyService} from '../../services/spotify.service';
import {PlaylistService} from '../../services/playlist.service';
import {UserService} from '../../services/user-service.service';
@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

id: string;
album: Album[];
playlists:any;
  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute, private _playlistservice: PlaylistService, private _userservice: UserService) { 

  }
  addToList(track, playlist){
    let body ={
      "pid": playlist._id,
      "name": track.name,
      "url": track.preview_url,
      "artist": track.artists[0].name
    }
    this._playlistservice.addToplaylist(body).subscribe(res =>{
        if (res.json().message == null){
          alert('Successfully Added song to ' + res.json().name);
        }else{
          alert('Sorry!! Could Not Add Song To ' + res.json().name);
        }
    })
  }


  ngOnInit() {

      this._route.params.map(params => params['id']).subscribe((id) =>{
      this._spotifyService.getAlbum(id).subscribe( album => {
        this.album = album;
        console.log(this.album);
      });

    });
      if (this._userservice.currentUser()){
      this._playlistservice.playlists(this._userservice.currentUser()).subscribe(lists =>{
      this.playlists = lists.json();
      console.log(this.playlists);
    });
     }
  }

}
