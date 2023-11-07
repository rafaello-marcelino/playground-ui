import { Component } from '@angular/core';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.css']
})
export class AstroComponent {
  img01: string = "./assets/website/Astro/IMG_1633-HDR-Enhanced.jpg";
  img02: string = "./assets/website/Astro/IMG_4079-HDR.jpg";
  img03: string = "./assets/website/Astro/IMG_4111.jpg";
  img04: string = "./assets/website/Astro/IMG_7643-HDR.jpg";
  img05: string = "./assets/website/Astro/IMG_1634.jpg";
  
  astro : string = '';


  sendToModal(src : string) {
    this.astro = src;
  }
}
