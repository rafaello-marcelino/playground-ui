import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: { preventDefault: () => void; }) {
  event.preventDefault();
}
}
