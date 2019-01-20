import { NgModule } from '@angular/core';
import { DirectoryComponent } from './directory.component';
import { DirectoryRoutingModule } from './directory-routing.module'


@NgModule({
  imports: [
    DirectoryRoutingModule
  ],
  declarations: [
    DirectoryComponent
  ],
})
export class DirectoryModule { }
