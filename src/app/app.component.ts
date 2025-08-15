import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SharedModule } from './components/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // note: styleUrls (plural)
})
export class AppComponent {
  title = 'angular-portfolio';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // This will run only in the browser
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // OR if you want to jump directly to #home section
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
