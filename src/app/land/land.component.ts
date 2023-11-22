import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent {
  modalSource : string = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Landscapes')
  }
  img01: string = "./assets/website/Landscapes/IMG_1870.jpg";
  
  img02: string = "./assets/website/Landscapes/IMG_1212.jpg";
  img03: string = "./assets/website/Landscapes/IMG_1371-Edit.jpg";
  img04: string = "./assets/website/Landscapes/IMG_3307-Enhanced-NR.jpg";
  img05: string = "./assets/website/Landscapes/IMG_3232-Enhanced-NR.jpg";
  // IMG_1371-Edit
  img06: string = "./assets/website/Landscapes/20230602111809_IMG_0787.jpg";
  img07: string = "./assets/website/Landscapes/IMG_0257.jpg";
  img08: string = "./assets/website/Landscapes/IMG_1088.jpg";
  img09: string = "./assets/website/Landscapes/IMG_1102.jpg";
  img10: string = "./assets/website/Landscapes/IMG_1107.jpg";
  img11: string = "./assets/website/Landscapes/IMG_3246-Enhanced-NR.jpg";
  img12: string = "./assets/website/Landscapes/IMG_1324.jpg";
  img13: string = "./assets/website/Landscapes/IMG_1330-Edit.jpg";
  img14: string = "./assets/website/Landscapes/IMG_1722-Edit.jpg";
  img15: string = "./assets/website/Landscapes/IMG_3342-Enhanced-NR.jpg";
  img16: string = "./assets/website/Landscapes/IMG_0193.jpg";
  img17: string = "./assets/website/Landscapes/IMG_9243.jpg";
  img18: string = "./assets/website/Landscapes/IMG_9244.jpg";
  img19: string = "./assets/website/Landscapes/IMG_9643.jpg";
  
  
  // img00: string = "https://drive.google.com/uc?export=view&id=1ao5steSdncG8Gnoct9SHBM16iGFppXS4";
  // img01: string = "https://drive.google.com/uc?export=view&id=1dflo2IwlsPvDHYqia8qPeEuCt0zu9d8J";
  // img02: string = "https://drive.google.com/uc?export=view&id=1tUO5_NjDHlEm9S1M8UggKzLNvnXEImog";
  // img03: string = "https://drive.google.com/uc?export=view&id=1wpKElh4IVemOWA8rtOWcjiApldY6bhhJ";
  // img04: string = "https://drive.google.com/uc?export=view&id=18WA47dOtvhux3JkPcibgzH_T3_bwhn2q";
  // img05: string = "https://drive.google.com/uc?export=view&id=1xiTcQTBkya1-X4zDVAMi03LgPmRzf_on";
  // img06: string = "https://drive.google.com/uc?export=view&id=1cg0Zj8zxzxd0set_WSjE2oXmyeMYQH2B";
  // img07: string = "https://drive.google.com/uc?export=view&id=1Sra3F4wfENpS3ymxQST47-6_yZjMMCQB";
  // img08: string = "https://drive.google.com/uc?export=view&id=1-VArGCpwXkm14GyOmxCAdGZ2pdiGZPEL";
  // img09: string = "https://drive.google.com/uc?export=view&id=1X7HVIFr5HD7oZAGhB9YAac4KIvwkLvOv";
  // img10: string = "https://drive.google.com/uc?export=view&id=142TVzMxzCaVuxot27DmHjrmPdfFaq6TX";
  // img11: string = "https://drive.google.com/uc?export=view&id=19EnpQXsubNF-98oOetrEzCLj1gbZXOT5";
  // img12: string = "https://drive.google.com/uc?export=view&id=1RJ64u7rAtZoINRI_JuyqEQAZoSMycIfH";
  // img13: string = "https://drive.google.com/uc?export=view&id=1mEnQqgYv6SQGB2eBN_Lj7jCVaul4JHZ3";
  // img14: string = "https://drive.google.com/uc?export=view&id=1dzCQjYOxL9kIJRvyjIORcs5mlW7E8-l0";


  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }
}
