import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string; 
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = [
      {
        title: 'FinBridge – A Digital Banking Application',
        description:
          'FinBridge is a modern banking web application that provides one-stop financial solutions for both individual customers and businesses. It offers secure transactions, intuitive dashboards, and real-time insights, combining convenience with trust.',
        image: 'assets/FinBridge_hero.png',
        link: 'https://github.com/sitaramkesharim',
      },
      {
        title: 'BiggyBasket – Online Grocery Delivery',
        description:
          'An online grocery shopping platform designed for lightning-fast delivery within 10–15 minutes. It combines an intuitive interface, real-time order tracking, and a robust backend to ensure fresh and reliable grocery delivery.',
        image: 'assets/Biggy_Basket_hero.png',
         link: 'https://github.com/sitaramkesharim',
      },
      {
        title: 'InstaFolio – Smart Portfolio Generator',
        description:
          'A web application that enables users to instantly generate professional portfolios by simply entering their details. Built with modern frontend frameworks, it focuses on clean design, automation, and accessibility.',
        image: 'assets/InstaFolio_hero.png',
         link: 'https://github.com/sitaramkesharim',
      },
    ];
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}