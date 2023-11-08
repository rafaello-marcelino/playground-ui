import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.css']
})

export class AstroComponent {
  modalSource : String = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Astro')
  }

  img01: string = "./assets/website/Astro/IMG_1633-HDR-Enhanced.jpg";
  img02: string = "./assets/website/Astro/IMG_4079-HDR.jpg";
  img03: string = "./assets/website/Astro/IMG_4111.jpg";
  img04: string = "./assets/website/Astro/IMG_7643-HDR.jpg";
  img05: string = "./assets/website/Astro/IMG_1634.jpg";
  

  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }

}
