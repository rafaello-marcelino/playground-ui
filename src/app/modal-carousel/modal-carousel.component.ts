import { Component, Input } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-modal-carousel',
  templateUrl: './modal-carousel.component.html',
  styleUrls: ['./modal-carousel.component.css']
})

export class ModalCarouselComponent {
  
  ngOnInit() { initFlowbite() }
  @Input() source : String = '';
  
}
