import { NgModule } from '@angular/core';
import { DirectoryComponent } from './directory.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  imports: [BrowserModule,
    FormsModule
   
  ],
  declarations: [
    DirectoryComponent,
    FilterPipe,
  ]

})
export class DirectoryModule { }
