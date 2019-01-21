import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  {
    path: 'directory/:ninja',
    component: DirectoryComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: '',
    component: HomeComponent
 },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    
    { useHash: true, enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
