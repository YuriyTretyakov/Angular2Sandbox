import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectoryComponent } from './directory.component';

import { HomeComponent } from "../home/home.component";

const directoryRoutes: Routes = [
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
  imports: [
    RouterModule.forChild(directoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DirectoryRoutingModule { }
