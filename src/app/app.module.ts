import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBusinessComponent } from './components/update-business/update-business.component';
import { UpdateHoodComponent } from './components/update-hood/update-hood.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    BusinessComponent,
    PostsComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    UpdateBusinessComponent,
    UpdateHoodComponent,
    RegistrationComponent,
    LoginComponent,
    UpdatePostsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientXsrfModule.withOptions({ headerName:"csrftoken"}),
  ],
  providers: [HoodServiceService,ProfileService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
