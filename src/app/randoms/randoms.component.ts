import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-randoms',
  templateUrl: './randoms.component.html',
  styleUrls: ['./randoms.component.css']
})
export class RandomsComponent {
  modalSource : string = '';

  img01: string = "./assets/website/Randoms/IMG_1231.jpg";
  img02: string = "./assets/website/Randoms/IMG_0005.jpg";
  img03: string = "./assets/website/Randoms/IMG_0085.jpg";
  img04: string = "./assets/website/Randoms/IMG_0414.jpg";
  img05: string = "./assets/website/Randoms/IMG_0427.jpg";
  img06: string = "./assets/website/Randoms/IMG_0544-Enhanced-NR.jpg";
  img07: string = "./assets/website/Randoms/IMG_0884.jpg";
  img08: string = "./assets/website/Randoms/IMG_0908.jpg";
  img09: string = "./assets/website/Randoms/IMG_1001-Enhanced-NR.jpg";
  img10: string = "./assets/website/Randoms/IMG_1310.jpg";
  img11: string = "./assets/website/Randoms/IMG_1313.jpg";
  img12: string = "./assets/website/Randoms/IMG_1320.jpg";
  img13: string = "./assets/website/Randoms/IMG_1534-Enhanced-NR.jpg";
  img14: string = "./assets/website/Randoms/IMG_1545-Enhanced-NR.jpg";
  img15: string = "./assets/website/Randoms/IMG_1546-Enhanced-NR.jpg";
  img16: string = "./assets/website/Randoms/IMG_2045.jpg";
  img17: string = "./assets/website/Randoms/IMG_2050.jpg";
  img18: string = "./assets/website/Randoms/IMG_2194.jpg";
  img19: string = "./assets/website/Randoms/IMG_7158.jpg";
  img20: string = "./assets/website/Randoms/IMG_7438.jpg";
  img21: string = "./assets/website/Randoms/IMG_8354.jpg";
  img22: string = "./assets/website/Randoms/IMG_9303-Enhanced-NR.jpg";
  img23: string = "./assets/website/Randoms/IMG_9335.jpg";
  img24: string = "./assets/website/Randoms/IMG_9921-Enhanced-NR.jpg";
  

  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }

  
  // public images  : string [] = [
  //   "./assets/website/Randoms/IMG_1231.jpg",
  //   "./assets/website/Randoms/IMG_0005.jpg",
  //   "./assets/website/Randoms/IMG_0085.jpg",
  //   "./assets/website/Randoms/IMG_0414.jpg",
  //   "./assets/website/Randoms/IMG_0427.jpg",
  //   "./assets/website/Randoms/IMG_0544-Enhanced-NR.jpg",
  //   "./assets/website/Randoms/IMG_0854.jpg",
  //   "./assets/website/Randoms/IMG_0874.jpg",
  //   "./assets/website/Randoms/IMG_0884.jpg",
  //   "./assets/website/Randoms/IMG_0896-2.jpg",
  //   "./assets/website/Randoms/IMG_0908.jpg",
  //   "./assets/website/Randoms/IMG_1001-Enhanced-NR.jpg",
  //   "./assets/website/Randoms/IMG_1208.jpg",
  //   "./assets/website/Randoms/IMG_1310.jpg",
  //   "./assets/website/Randoms/IMG_1313.jpg",
  //   "./assets/website/Randoms/IMG_1320.jpg",
  //   "./assets/website/Randoms/IMG_1534-Enhanced-NR.jpg",
  //   "./assets/website/Randoms/IMG_1545-Enhanced-NR.jpg",
  //   "./assets/website/Randoms/IMG_1546-Enhanced-NR.jpg",
  //   "./assets/website/Randoms/IMG_1730-Enhanced-NR.jpg",
  //   "./assets/website/Randoms/IMG_2045.jpg",
  //   "./assets/website/Randoms/IMG_2050.jpg",
  //   "./assets/website/Randoms/IMG_2194.jpg",
  //   "./assets/website/Randoms/IMG_7158.jpg",
  //   "./assets/website/Randoms/IMG_7438.jpg",
  //   "./assets/website/Randoms/IMG_8354.jpg",
  //   "./assets/website/Randoms/IMG_8497.jpg",
  //   "./assets/website/Randoms/IMG_8560.jpg",
  //   "./assets/website/Randoms/IMG_9303-Enhanced-NR.jpg",
  //   "./assets/website/Randoms/IMG_9335.jpg",
  //   "./assets/website/Randoms/IMG_9921-Enhanced-NR.jpg"
  // ];
}
