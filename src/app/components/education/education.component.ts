import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Education {
  title: string;
  course: string;
  marks: string;
  duration: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
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
currentIndex = 0;
  ngOnInit(): void {
   this.educations = [
  {
    title: 'Bachelor of Technology / B.Tech',
    course: 'Computer Science & Engineering',
    marks: '8.5 CGPA',
    duration: '2016 – 2020',
    description: 'Learned core subjects such as Data Structures, Algorithms, DBMS, OS, and Web Development.',
    image: 'assets/SOA.png',
  },
  {
    title: 'Higher Secondary / 12th Grade',
    course: 'Science (PCM)',
    marks: '85%',
    duration: '2014 – 2016',
    description: 'Specialized in Physics, Chemistry, and Mathematics with IT as optional subject.',
    image: 'assets/CHSE_Logo.png',
  },
  {
    title: 'Matriculation / 10th Grade',
    course: 'General Studies',
    marks: '90%',
    duration: '2004 – 2014',
    description: 'Completed schooling with focus on core academics and extracurricular activities.',
    image: 'assets/SAIIE_Logo.jpeg',
  }
];

  }

  showNextEducation(): void {
    const first = this.educations.shift();
    if (first) {
      this.educations.push(first);
    }
  }


  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.educations.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.educations.length) % this.educations.length;
  }
}

      