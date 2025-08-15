import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';

const components = [
  NavbarComponent,
  HeroComponent,
  AboutComponent,
  ProjectsComponent,
  SkillsComponent,
  ContactComponent,
  FooterComponent,
  EducationComponent,
  WorkComponent
];
const modules = [CommonModule, FormsModule];
@NgModule({
  declarations: components,
  imports: [modules,SafeUrlPipe,ReactiveFormsModule,],
  exports: [components, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
