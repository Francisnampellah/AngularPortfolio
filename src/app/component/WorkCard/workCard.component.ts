import { Component, Input } from '@angular/core';

@Component({
  selector: 'work-card',
  templateUrl: "./workCard.component.html",
  standalone:true
})
export class WorkCardComponent {
  @Input() workButton: string = 'Default Name';
  @Input() workTitle: string = 'Default Title';
  @Input() workDetail: string = 'Default Testimony';
  @Input() workImage: string = 'Default Image';
}