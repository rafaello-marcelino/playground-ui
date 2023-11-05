import { Component } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent {
  img1: string = "https://drive.google.com/uc?export=view&id=1D_LV8kU84cTi_4Yu30WWDYtCHR8GwMAO";
  img2: string = "https://drive.google.com/uc?export=view&id=1CXSx0_dLY0NZY7NRPYq9j-a40AQVGFMj";
  source : string = '';
  
  sendToModal(src : string) {
    this.source = src;
  }
}
