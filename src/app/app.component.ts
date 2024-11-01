import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './component/Clientcards/clientCard.component';
import { WorkCardComponent } from './component/WorkCard/workCard.component';
import { LottieAnimationComponent } from './component/lottie/lottie.component';

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClientCardComponent, WorkCardComponent, LottieAnimationComponent],
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


  contacts = [
    {
      type: "email",
      value: "bnampellah1@gmail.com"
    },
    {
      type: "telephone",
      value: "+1234567890"
    },
    {
      type: "whatsapp",
      value: "+0987654321"
    },
    {
      type: "github",
      value: "https://github.com/username"
    }
  ];

  links = [
    {
      linkText: "Home",
      linkUrl: "#"
    },
    {
      linkText: "About",
      linkUrl: "#"
    },
    {
      linkText: "Services",
      linkUrl: "#"
    },
    {
      linkText: "Contact",
      linkUrl: "#"
    }
  ];

  workCards = [
    {
      workButton: "Default Name",
      workTitle: "Default Title",
      workDetail: "Default Testimony",
      workImage: "Default Image"
    },
    {
      workButton: "Another Name",
      workTitle: "Another Title",
      workDetail: "Another Testimony",
      workImage: "Another Image"
    }
  ];



  @ViewChild('clientCardContainer', { static: false }) clientCardContainer!: ElementRef;

  scrollLeft() {
    this.clientCardContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.clientCardContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}