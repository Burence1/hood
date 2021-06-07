import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UpdateHoodComponent } from './components/update-hood/update-hood.component';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { HoodComponent } from './components/hood/hood.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateBusinessComponent } from './components/update-business/update-business.component';

const routes: Routes = [
  {path: '', redirectTo: 'hoods', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'hoods',component:HoodComponent},
  {path:'business',component:BusinessComponent},
  {path: 'posts',component:PostsComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'hood/:id',component:UpdateHoodComponent},
  {path: 'register',component:RegistrationComponent},
  { path: 'login', component:LoginComponent },
  {path:'business/:id',component:UpdateBusinessComponent},
  {path:'posts/:id',component:UpdatePostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
