import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  styleUrl: './image-loader.component.css',
  templateUrl: './image-loader.component.html',

})
export class ImageLoaderComponent implements OnInit {

  ngOnInit(): void {
    if (this.imageSrc.length === 0) {
      throw new Error('Method not implemented.');
    }
    if (this.altData.length != 0) {
      this.altData = "Sin datos";
    }
  }

  @Input() imageSrc: string = '';
  @Input() altData: string = '';
  @Input() classCustom: string = '';
  defaultImage: string = '/assets/images/loading.webp';
  load: boolean = false;

  onLoad() {
    // setTimeout(() => {
      this.load = true;
    // }, 500)
  }
}
