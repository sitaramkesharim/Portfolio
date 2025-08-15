import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class WorkComponent {
  companies = [
    {
      name: 'Rumango Software and Consulting Services Private Limited',
      role: 'Associate Software Developer',
      shortDescription: 'Built scalable Angular applications and optimized UI performance.',
      duration: 'August 2021 – September 2024',
      image: 'assets/rumango_logo.jfif',
      responsibilities: [
        ' Software Development - Hands-on experience in coding, UI/UX optimization, and performance enhancements, achieving a 30% improvement in UI performance.',
        'Web Application Expertise - Built scalable and robust web applications, staying aligned with evolving industry trends and best practices.',
        'Project Management - Led project planning and execution with cross-functional teams including UI/UX, QA, and product management to ensure timely and quality delivery.',
        'Distributed Systems Design - Applied expertise in system scalability, cloud integration, and cost-effective architecture solutions.',
        'Team Leadership - Mentored junior developers, promoted code quality, and fostered a collaborative and productive team environment.',
        'Code Review & Best Practices - Enforced clean code practices, conducted thorough reviews, and ensured security through JWT authentication and RBAC implementation.',
        'Version Control & Collaboration - Proficient in using Git and GitHub for version control, branch management, code reviews, and team collaboration in Agile environments.',
        'Quality Assurance & Continuous Improvement - Improved system performance by 15% through continuous testing, monitoring, and process optimization.',
        'Stakeholder Collaboration - Actively engaged with stakeholders to align development efforts with business goals and communicated project updates effectively.'
      ]
    },
    {
      name: 'Rumango Software and Consulting Services Private Limited',
      role: 'Trainee Engineer',
      shortDescription: 'Assisted in building responsive Angular web applications.',
      duration: 'June 2021 – August 2021',
      image: 'assets/rumango_logo.jfif',
      responsibilities: [
        'Assisted in building responsive Angular applications.',
        'Learned and implemented Git/GitHub workflows.',
        'Performed unit testing and debugging of features.',
        'Collaborated with cross-functional teams including design and backend.',
        'Supported deployment processes and code reviews.',
        'Gained hands-on experience with SDLC and Agile methodology.'
      ]
    }
  ];

  modalOpen = false;
  modalData: any = null;

  openModal(company: any) {
    this.modalData = company;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalData = null;
  }
}
