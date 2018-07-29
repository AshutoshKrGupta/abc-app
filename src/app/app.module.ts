import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'; 
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { DprofileComponent } from './dprofile/dprofile.component';
import { Component } from '@angular/core/src/metadata/directives';
import { SerUserService } from './ser-user.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfilesComponent,
    DprofileComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    RouterModule.forRoot([{path: '',component: SearchComponent},
    {path:'profiles',component: ProfilesComponent },
    {path:'profile/:id', component: DprofileComponent }
  ])
  ],
  providers: [SerUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
