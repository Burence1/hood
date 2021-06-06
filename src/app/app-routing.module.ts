import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { HoodComponent } from './components/hood/hood.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'hoods',component:HoodComponent},
  {path:'business',component:BusinessComponent},
  {path: 'posts',component:PostsComponent},
  {path: 'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
