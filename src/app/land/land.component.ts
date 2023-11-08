import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent {
  modalSource : string = '';
  // img1: string = "https://drive.google.com/uc?export=view&id=1mksTGfdruJ7iz0wKwI10u-t0qXvWzJ-k";
  img01: string = "./assets/website/Landscapes/20230602111809_IMG_0787.jpg";
  img02: string = "./assets/website/Landscapes/IMG_0257.jpg";
  img03: string = "./assets/website/Landscapes/IMG_1088.jpg";
  img04: string = "./assets/website/Landscapes/IMG_1102.jpg";
  img05: string = "./assets/website/Landscapes/IMG_1107.jpg";
  img06: string = "./assets/website/Landscapes/IMG_1212.jpg";
  img07: string = "./assets/website/Landscapes/IMG_1324.jpg";
  img08: string = "./assets/website/Landscapes/IMG_1330-Edit.jpg";
  img09: string = "./assets/website/Landscapes/IMG_1371-Edit.jpg";
  img10: string = "./assets/website/Landscapes/IMG_1722-Edit.jpg";
  img11: string = "./assets/website/Landscapes/IMG_1870.jpg";
  img12: string = "./assets/website/Landscapes/IMG_9243.jpg";
  img13: string = "./assets/website/Landscapes/IMG_9244.jpg";
  img14: string = "./assets/website/Landscapes/IMG_9643.jpg";
  

  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }
}
