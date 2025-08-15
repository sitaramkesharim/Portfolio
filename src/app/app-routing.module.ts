import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; // empty because all sections are in AppComponent

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 80], // offset for fixed navbar height
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
