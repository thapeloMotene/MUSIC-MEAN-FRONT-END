import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SpotifyService } from './services/spotify.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})
export class AppComponent {
  title = 'app works!';
}
