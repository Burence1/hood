import { PostService } from './services/posts/post.service';
import { ProfileService } from './services/profile/profile.service';
import { HoodServiceService } from './services/hood/hood-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoodComponent } from './components/hood/hood.component';
import { BusinessComponent } from './components/business/business.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    BusinessComponent,
    PostsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // HttpClientXsrfModule.withOptions({ headerName:"csrftoken"}),
  ],
  providers: [HoodServiceService,ProfileService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
