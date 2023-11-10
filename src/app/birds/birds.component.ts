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
  img05: string = "./assets/website/Birds/IMG_9282.jpg";
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
  img18: string = "./assets/website/Birds/IMG_0455-Enhanced-NR.jpg";
  img19: string = "./assets/website/Birds/IMG_9362.jpg";
  img20: string = "./assets/website/Birds/IMG_9572.jpg";
  img21: string = "./assets/website/Birds/IMG_9730.jpg";
  img22: string = "./assets/website/Birds/IMG_9942-Enhanced-NR.jpg";
  img23: string = "./assets/website/Birds/IMG_9976.jpg";


  // img01: string = "https://drive.google.com/uc?export=view&id=1tr4lsdbvkfWepp_gbHnZTI9QgVsApcld";
  // img02: string = "https://drive.google.com/uc?export=view&id=1aipRpJDjmu417BD6lpd7JLx-dn7vWA3e";
  // img03: string = "https://drive.google.com/uc?export=view&id=1gJL0lc-1l6vi-dK69md21K57qgZTXK8Y";
  // img04: string = "https://drive.google.com/uc?export=view&id=19HQBS0qI9sStpwfwUx9NfQbTShjJ7vRK";
  // img05: string = "https://drive.google.com/uc?export=view&id=1ANTKS4uSM3Gw8-GIxQKtP-swiVLHDYuG";
  // img06: string = "https://drive.google.com/uc?export=view&id=1mp_EVtrzy5ffltOPpL2yG1QHzBQEERda";
  // img07: string = "https://drive.google.com/uc?export=view&id=1nn3B8Ve4IKnIYz_8W2dCL27CI9rUSiLT";
  // img08: string = "https://drive.google.com/uc?export=view&id=1qIQHxKRyzquCl21h_zzI7WThRLqTjfr0";
  // img09: string = "https://drive.google.com/uc?export=view&id=1nwAT7SGhgTaTrSoKhP2sg8VgSvGs1jFY";
  // img10: string = "https://drive.google.com/uc?export=view&id=1YKvZpbnoSFdQMREncm6lRcBNHC9Bxdgz";
  // img11: string = "https://drive.google.com/uc?export=view&id=1xnlRsctt0mG0aXWfVcW-_PjASJbGxNXx";
  // img12: string = "https://drive.google.com/uc?export=view&id=1x7fnyjKvlaDwhNAvjvMzzloLlUYmNsLq";
  // img13: string = "https://drive.google.com/uc?export=view&id=1Y1TPSo3DiGycFUBjRwC8GZQCK8iAdfa6";
  // img14: string = "https://drive.google.com/uc?export=view&id=1_yhomS2tai9Pc-5-PifhXDY6nsSCzoyu";
  // img15: string = "https://drive.google.com/uc?export=view&id=1w_SAJ2bJxORpijUoAaoEBBP3eQ_9GSOF";
  // img16: string = "https://drive.google.com/uc?export=view&id=1mZ61IW3NjcPRr1rycVrwuxqVZ01oKFD7";
  // img17: string = "https://drive.google.com/uc?export=view&id=17P4R-xXGxIvI5C-K_SPjCFX4igbn2W3j";
  // img18: string = "https://drive.google.com/uc?export=view&id=1dTI54vVYBR-_MHSb0lGDLBh7Re5a1mYu";
  // img19: string = "https://drive.google.com/uc?export=view&id=13yihm9UPBsVWjPNAA0Evwx5vAr87PIDI";
  // img20: string = "https://drive.google.com/uc?export=view&id=1eb1dD0PSKRoWZ7hSjHmZFtW09TO0g9Yp";
  // img21: string = "https://drive.google.com/uc?export=view&id=1xz5sQyH0CLmAAnWiDZTxHpL9y3nqvefe";
  // img22: string = "https://drive.google.com/uc?export=view&id=1VMbIgcdQdZJJfrRH-lhB5o6EDYa-4AII";
  // img23: string = "https://drive.google.com/uc?export=view&id=1ytVQ580JHY9EoJ_ZDUPz46wxaMzUKGHW";

  

  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }
}
