import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-randoms',
  templateUrl: './randoms.component.html',
  styleUrls: ['./randoms.component.css']
})
export class RandomsComponent {
  modalSource : string = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Randoms')
  }

  img01: string = "./assets/website/Randoms/IMG_1231.jpg";
  img02: string = "./assets/website/Randoms/IMG_0005.jpg";
  img03: string = "./assets/website/Randoms/IMG_0085.jpg";
  img04: string = "./assets/website/Randoms/IMG_0414.jpg";
  img05: string = "./assets/website/Randoms/IMG_0544-Enhanced-NR.jpg";
  img06: string = "./assets/website/Randoms/IMG_0427.jpg";
  img07: string = "./assets/website/Randoms/IMG_0884.jpg";
  img08: string = "./assets/website/Randoms/IMG_0908.jpg";
  img09: string = "./assets/website/Randoms/IMG_1001-Enhanced-NR.jpg";
  img10: string = "./assets/website/Randoms/IMG_1310.jpg";
  img11: string = "./assets/website/Randoms/IMG_1313.jpg";
  img12: string = "./assets/website/Randoms/IMG_2045.jpg";
  img13: string = "./assets/website/Randoms/IMG_1534-Enhanced-NR.jpg";
  img14: string = "./assets/website/Randoms/IMG_1545-Enhanced-NR.jpg";
  img15: string = "./assets/website/Randoms/IMG_1546-Enhanced-NR.jpg";
  img16: string = "./assets/website/Randoms/IMG_1320.jpg";
  img17: string = "./assets/website/Randoms/IMG_2050.jpg";
  img18: string = "./assets/website/Randoms/IMG_2194.jpg";
  img19: string = "./assets/website/Randoms/IMG_7158.jpg";
  img20: string = "./assets/website/Randoms/IMG_7438.jpg";
  img21: string = "./assets/website/Randoms/IMG_8354.jpg";
  img22: string = "./assets/website/Randoms/IMG_9303-Enhanced-NR.jpg";
  img23: string = "./assets/website/Randoms/IMG_9335.jpg";
  img24: string = "./assets/website/Randoms/IMG_9921-Enhanced-NR.jpg";
  
  // img01: string = "https://drive.google.com/uc?export=view&id=199wroUt2rwVgTAliG0R4RItJbs-loE9u";
  // img02: string = "https://drive.google.com/uc?export=view&id=18-V8Q7ZhzAYXqEZVkucxPFbAl1MHt0Et";
  // img03: string = "https://drive.google.com/uc?export=view&id=1YgfN4WwJw5pwn_wqq9p4QAitb105JrHC";
  // img04: string = "https://drive.google.com/uc?export=view&id=1VKpAxKMQGTqfin83kItqyJMuLkLlXqHB";
  // img05: string = "https://drive.google.com/uc?export=view&id=17-eqNWQuWIM4Yaqu2eCa2myQPNAWsuk1";
  // img06: string = "https://drive.google.com/uc?export=view&id=1-r2v3BGTdId4XRd6b5DNPSgJeEQZOBAa";
  // img07: string = "https://drive.google.com/uc?export=view&id=1dC3C4eJx7cvw2VWcsTBlLJ82OCQeZ0sO";
  // img08: string = "https://drive.google.com/uc?export=view&id=1-1s5PHIWPGxoaf3GEDK4_GLTaX8XGRNC";
  // img09: string = "https://drive.google.com/uc?export=view&id=1XMwuSlzN04EJ3eOGc-gMhQLXq_Em1V4t";
  // img10: string = "https://drive.google.com/uc?export=view&id=1zNqWrV-r8BCWRaq0McfCtCUOUVSzSNJr";
  // img11: string = "https://drive.google.com/uc?export=view&id=1X3PtEDJpRGGGII253g7kiQuEznNKahMK";
  // img12: string = "https://drive.google.com/uc?export=view&id=11Fb70ZPTqPWi_cUv1PDB-1ROUJT5wQD1";
  // img13: string = "https://drive.google.com/uc?export=view&id=1TYYU5PM5VrqJFEecCf_ijAhy9yqPJV7o";
  // img14: string = "https://drive.google.com/uc?export=view&id=13iI1_ZLUMvsON8JdMUZoeXYP7xWIs5q2";
  // img15: string = "https://drive.google.com/uc?export=view&id=1FOlfcbedRm-qNC6tdxy7hrqcb6G-QoTg";
  // img16: string = "https://drive.google.com/uc?export=view&id=180P2F57Qo1FMpcNItcnfpci0mle0MZNo";
  // img17: string = "https://drive.google.com/uc?export=view&id=1KB4QACSztJveI8bS1k9DhP3nNKMzA95K";
  // img18: string = "https://drive.google.com/uc?export=view&id=1djRQXY-3of_jcRL4XekseXIckmViYQXM";
  // img19: string = "https://drive.google.com/uc?export=view&id=1UmpzOfgRiLmIX8gJ3rjThbYesc2i2ez1";
  // img20: string = "https://drive.google.com/uc?export=view&id=1TKFMMTk5ezZgW7RQG3zV8y_ybefJFwLL";
  // img21: string = "https://drive.google.com/uc?export=view&id=19XNl_3yeyiObKoCBOJA0GjN-kOk6zjhN";
  // img22: string = "https://drive.google.com/uc?export=view&id=15jFcpT-hS0P9YhzqsX-UmNb6zEZVIKhj";
  // img23: string = "https://drive.google.com/uc?export=view&id=1waZ9EdtRbcycDcSU1Kr1-KErmfJUUQ0k";
  // img24: string = "https://drive.google.com/uc?export=view&id=1qvCucttztdDpzxmRqQnqa-gAsfZstEOk";



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
