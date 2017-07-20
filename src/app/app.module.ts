import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchService } from './services/search.service';
import { SearchListComponent } from './search-list/search-list.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBMRHdYPwqJN5gQqZ7L94KYMZqFTNR1bJk",
  authDomain: "project-55b91.firebaseapp.com",
  databaseURL: "https://project-55b91.firebaseio.com",
  projectId: "project-55b91",
  storageBucket: "project-55b91.appspot.com",
  messagingSenderId: "463746322181"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
