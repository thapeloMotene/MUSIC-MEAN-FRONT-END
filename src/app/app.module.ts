import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

import { routing} from './app.routing';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';

import { UserService } from './services/user-service.service';
import {PlaylistService} from './services/playlist.service';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { NewPlaylistComponent } from './components/new-playlist/new-playlist.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    PlaylistDetailComponent,
    NewPlaylistComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
