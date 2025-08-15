import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Education {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-education',
  // standalone: true,
  // imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class EducationComponent {
  educations: Education[] = [];

ngOnInit(): void {
    // Populate with sample data
    this.educations = [
      {
        title: 'B.Tech',
        description: 'Electronics & Communication Engineering',
        image: 'assets/Siksha_‘O’_Anusandhan.png',
      },
      {
        title: 'Project Two',
        description: 'Description of project two.',
        image: 'assets/CHSE_Logo.png',
      },
      {
        title: 'Project Three',
        description: 'Description of project three.',
        image: 'assets/SAIIE_Logo.jpeg',
      },
    ];
  }
}
