import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ModalCarouselComponent } from '../modal-carousel/modal-carousel.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent {
  modalSource : String = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Street')
  }
  img01: string = "./assets/website/Street/IMG_8497.jpg";
  img02: string = "./assets/website/Street/IMG_0854.jpg";
  img03: string = "./assets/website/Street/IMG_0896-2.jpg";
  img04: string = "./assets/website/Street/IMG_1208.jpg";
  img05: string = "./assets/website/Street/IMG_0874.jpg";
  img06: string = "./assets/website/Street/IMG_1752-Enhanced-NR.jpg";
  img07: string = "./assets/website/Street/IMG_1730-Enhanced-NR.jpg";
  img08: string = "./assets/website/Street/IMG_0834.jpg";
  img09: string = "./assets/website/Street/IMG_0912.jpg";
  img10: string = "./assets/website/Street/IMG_0930-Enhanced-NR.jpg";
  img11: string = "./assets/website/Street/IMG_8560.jpg";
  
  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }

}
