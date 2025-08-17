import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { siAngular, siReact, siJavascript, siTypescript, siHtml5,siCss,  siGit, siGithub, siDocker, siBootstrap, siExpress, siFigma, siFirebase, siGitlab, siGooglecloud, siJenkins, siKubernetes, siMongodb, siMysql, siNetlify, siNodedotjs, siNpm, siPostgresql, siPostman, siRedis, siSass, siTailwindcss, siVercel, siYarn } from 'simple-icons/icons';
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
    trigger('fadeSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  // skills: Skill[] = [];
  skills: { name: string; svg: SafeHtml }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const rawSkills = [
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS3', icon: siCss },
      { name: 'Bootstrap', icon: siBootstrap },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'npm', icon: siNpm },
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'Angular', icon: siAngular },
      { name: 'React', icon: siReact },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Sass', icon: siSass },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'Postman', icon: siPostman },
      { name: 'MySQL', icon: siMysql },
      { name: 'Figma', icon: siFigma },
      { name: 'Docker', icon: siDocker },
      { name: 'Jenkins', icon: siJenkins },
      { name: 'Netlify', icon: siNetlify },
      // { name: 'AWS', icon: siAmazonaws }, // Removed because siAmazonaws does not exist
      // { name: 'Azure', icon: siMicrosoftazure }, // Removed because siMicrosoftazure does not exist
     
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
