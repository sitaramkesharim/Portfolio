import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  title: string;
  description: string;
  image: string;
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
    // Populate with sample data
    this.projects = [
      {
        title: 'Project One',
        description: 'Description of project one.',
        image: 'assets/profile.JPG',
      },
      {
        title: 'Project Two',
        description: 'Description of project two.',
        image: 'assets/profile.JPG',
      },
      {
        title: 'Project Three',
        description: 'Description of project three.',
        image: 'assets/profile.JPG',
      },
    ];
  }
}
