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

  }

  @Input() imageSrc: string = '';
  @Input() altData: string = '';
  @Input() classCustom: string = '';
  defaultImage: string = '/assets/images/loading.webp';
  load: boolean = false;

  private isLoaded: boolean = false;

  onLoad() {
    if (!this.isLoaded) {
      this.load = true;
      this.isLoaded = true;  // Cambia la bandera para evitar futuras ejecuciones
    }
  }
}
