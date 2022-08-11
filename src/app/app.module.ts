import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PostComponent, 
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
