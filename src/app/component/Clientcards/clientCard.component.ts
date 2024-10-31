import { Component, Input } from '@angular/core';

@Component({
  selector: 'client-card',
  templateUrl: "./clientCard.component.html",
  standalone:true
})
export class ClientCardComponent {
  @Input() clientName: string = 'Default Name';
  @Input() clientTitle: string = 'Default Title';
  @Input() clientTestimony: string = 'Default Testimony';
  @Input() clientImage: string = 'Default Image';
}