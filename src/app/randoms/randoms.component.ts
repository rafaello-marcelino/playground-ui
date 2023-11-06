import { Component } from '@angular/core';

@Component({
  selector: 'app-randoms',
  templateUrl: './randoms.component.html',
  styleUrls: ['./randoms.component.css']
})
export class RandomsComponent {
  img01: string = "./assets/website/Randoms/IMG_1231.jpg";
  img02: string = "./assets/website/Randoms/IMG_0005.jpg";
  img03: string = "./assets/website/Randoms/IMG_0085.jpg";
  img04: string = "./assets/website/Randoms/IMG_0414.jpg";
  img05: string = "./assets/website/Randoms/IMG_0427.jpg";
  img06: string = "./assets/website/Randoms/IMG_0544-Enhanced-NR.jpg";
  img07: string = "./assets/website/Randoms/IMG_0854.jpg";
  img08: string = "./assets/website/Randoms/IMG_0874.jpg";
  img09: string = "./assets/website/Randoms/IMG_0884.jpg";
  img10: string = "./assets/website/Randoms/IMG_0896-2.jpg";
  img11: string = "./assets/website/Randoms/IMG_0908.jpg";
  img12: string = "./assets/website/Randoms/IMG_1001-Enhanced-NR.jpg";
  img13: string = "./assets/website/Randoms/IMG_1208.jpg";
  img14: string = "./assets/website/Randoms/IMG_1310.jpg";
  img15: string = "./assets/website/Randoms/IMG_1313.jpg";
  img16: string = "./assets/website/Randoms/IMG_1320.jpg";
  img17: string = "./assets/website/Randoms/IMG_1534-Enhanced-NR.jpg";
  img18: string = "./assets/website/Randoms/IMG_1545-Enhanced-NR.jpg";
  img19: string = "./assets/website/Randoms/IMG_1546-Enhanced-NR.jpg";
  img20: string = "./assets/website/Randoms/IMG_1730-Enhanced-NR.jpg";
  img21: string = "./assets/website/Randoms/IMG_2045.jpg";
  img22: string = "./assets/website/Randoms/IMG_2050.jpg";
  img23: string = "./assets/website/Randoms/IMG_2194.jpg";
  img24: string = "./assets/website/Randoms/IMG_7158.jpg";
  img25: string = "./assets/website/Randoms/IMG_7438.jpg";
  img26: string = "./assets/website/Randoms/IMG_8354.jpg";
  img27: string = "./assets/website/Randoms/IMG_8497.jpg";
  img28: string = "./assets/website/Randoms/IMG_8560.jpg";
  img29: string = "./assets/website/Randoms/IMG_9303-Enhanced-NR.jpg";
  img30: string = "./assets/website/Randoms/IMG_9335.jpg";
  img31: string = "./assets/website/Randoms/IMG_9921-Enhanced-NR.jpg";
  
  source : string = '';


  sendToModal(src : string) {
    this.source = src;
  }
}
