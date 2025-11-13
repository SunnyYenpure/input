import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './componant/one/one.component';
import { TwoComponent } from './componant/two/two.component';
import { ThreeComponent } from './componant/three/three.component';
import { PostComponent } from './componant/post/post.component';
import { PostCardComponent } from './componant/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PostComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
