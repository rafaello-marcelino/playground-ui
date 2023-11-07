import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-carousel',
  templateUrl: './modal-carousel.component.html',
  styleUrls: ['./modal-carousel.component.css']
})

export class ModalCarouselComponent {
  @Input() source : string = '';
}
