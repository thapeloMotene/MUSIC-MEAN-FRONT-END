import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

import {SearchComponent} from'./components/search/search.component';
import {AboutComponent} from'./components/about/about.component';
import {ArtistComponent} from'./components/artist/artist.component';
import {AlbumComponent} from'./components/album/album.component';
import { SignupComponent } from'./components/signup/signup.component';
import { LoginComponent } from'./components/login/login.component';
import { ProfileComponent } from'./components/profile/profile.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { NewPlaylistComponent } from './components/new-playlist/new-playlist.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
const  appRoutes: Routes =[
    {
        path: '',
        component: SearchComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'artist/:id',
        component: ArtistComponent

    },
    {
        path: 'album/:id',
        component: AlbumComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'login',
        component: LoginComponent

    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path: 'playlist/:id',
        component:PlaylistDetailComponent
    },
    {
        path:'create-playlist',
        component: NewPlaylistComponent
    },
    {
        path:'edit-profile',
        component: EditProfileComponent
    }]


    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);