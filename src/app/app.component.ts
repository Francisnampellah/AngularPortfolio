import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './component/Clientcards/clientCard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClientCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clients = [
    {
      "clientName": "Baraka Nampellah",
      "clientTitle": "Software Engineer",
      "clientTestimony": "The project is exciting!",
      "clientImage": "https://images.unsplash.com/photo-1520528105264-de3db89485f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "clientName": "Alex Johnson",
      "clientTitle": "Product Manager",
      "clientTestimony": "Impressive results and great collaboration!",
      "clientImage": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "clientName": "Sam Lee",
      "clientTitle": "UX Designer",
      "clientTestimony": "A fantastic user experience throughout!",
      "clientImage": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]


  @ViewChild('clientCardContainer', { static: false }) clientCardContainer!: ElementRef;

  scrollLeft() {
    this.clientCardContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.clientCardContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}