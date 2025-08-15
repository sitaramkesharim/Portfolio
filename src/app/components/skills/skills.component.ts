import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { siAngular, siReact, siJavascript, siTypescript, siHtml5,siCss,  siGit, siGithub, siDocker } from 'simple-icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Skill {
  name: string;
  level: number; // percentage (0-100)
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  // skills: Skill[] = [];
  skills: { name: string; svg: SafeHtml }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const rawSkills = [
      { name: 'Angular', icon: siAngular },
      { name: 'React', icon: siReact },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS3', icon: siCss },
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'Docker', icon: siDocker },
    ];

    // Add fill color directly into SVG string and sanitize
    this.skills = rawSkills.map(skill => {
      const coloredSvg = skill.icon.svg.replace(
        '<svg',
        `<svg fill="#${skill.icon.hex}"`
      );
      return {
        name: skill.name,
        svg: this.sanitizer.bypassSecurityTrustHtml(coloredSvg)
      };
    });
  }

  ngOnInit(): void {
    // Sample skills data
    // this.skills = [
    //   { name: 'Angular', level: 90 },
    //   { name: 'Angular', level: 90 },
    //   { name: 'TypeScript', level: 85 },
    //   { name: 'JavaScript', level: 80 },
    //   { name: 'HTML & CSS', level: 95 },
    //   { name: 'Angular', level: 90 },
    //   { name: 'Angular', level: 90 },
    //   { name: 'Angular', level: 90 },
    //   { name: 'Angular', level: 90 },
    //   { name: 'Angular', level: 90 },
    // ];
  }
}
