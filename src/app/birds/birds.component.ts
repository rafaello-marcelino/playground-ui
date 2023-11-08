import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent {
  modalSource : string = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Birds')
  }
  img01: string = "./assets/website/Birds/IMG_0627-Enhanced-NR.jpg";
  img02: string = "./assets/website/Birds/IMG_0040.jpg";
  img03: string = "./assets/website/Birds/IMG_0377-Enhanced-NR.jpg";
  img04: string = "./assets/website/Birds/IMG_0443-Enhanced-NR-2.jpg";
  img05: string = "./assets/website/Birds/IMG_0455-Enhanced-NR.jpg";
  img06: string = "./assets/website/Birds/IMG_0582-Enhanced-NR.jpg";
  img07: string = "./assets/website/Birds/IMG_0636-Enhanced-NR.jpg";
  img08: string = "./assets/website/Birds/IMG_0639-Enhanced-NR.jpg";
  img09: string = "./assets/website/Birds/IMG_1383.jpg";
  img10: string = "./assets/website/Birds/IMG_1681.jpg";
  img11: string = "./assets/website/Birds/IMG_1683.jpg";
  img12: string = "./assets/website/Birds/IMG_1897-Enhanced-NR.jpg";
  img13: string = "./assets/website/Birds/IMG_1941.jpg";
  img14: string = "./assets/website/Birds/IMG_7243-Enhanced-NR.jpg";
  img15: string = "./assets/website/Birds/IMG_7668-Enhanced-NR.jpg";
  img16: string = "./assets/website/Birds/IMG_7674-Enhanced-NR.jpg";
  img17: string = "./assets/website/Birds/IMG_8434.jpg";
  img18: string = "./assets/website/Birds/IMG_9282.jpg";
  img19: string = "./assets/website/Birds/IMG_9362.jpg";
  img20: string = "./assets/website/Birds/IMG_9572.jpg";
  img21: string = "./assets/website/Birds/IMG_9730.jpg";
  img22: string = "./assets/website/Birds/IMG_9942-Enhanced-NR.jpg";
  img23: string = "./assets/website/Birds/IMG_9976.jpg";
  


  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }
}
