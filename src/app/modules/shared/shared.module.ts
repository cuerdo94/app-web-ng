import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ImageLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageLoaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
