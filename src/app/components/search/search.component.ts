import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../artist/artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];
  constructor(private _spotifyService: SpotifyService) {


   }
 
searchMusic(){
  console.log(this.searchStr);
  this._spotifyService.searchMusic(this.searchStr).subscribe(res=> {
    this.searchRes =res.artists.items;
  });
}

  ngOnInit() {
  }

}
