import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './components/shared.module';
import { AppRoutingModule } from './app-routing.module';

const modules = [CommonModule, FormsModule, SharedModule];
@NgModule({
  declarations: [],
  imports: [modules, AppRoutingModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
