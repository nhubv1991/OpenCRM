import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module';
import { NglModule } from 'ng-lightning';

// Components
import * as fromComponents from './components';

// Directives
import {
  FocusOnErrorDirective,
  FocusFirstInvalidFieldDirective,
} from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NglModule,

    // Custom modules
    DynamicFormModule
  ],
  declarations: [
    ...fromComponents.components,

    // Directives
    FocusOnErrorDirective,
    FocusFirstInvalidFieldDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    // Custom modules
    DynamicFormModule,

    // Components
    ...fromComponents.components,

    // Directive
    FocusOnErrorDirective,
    FocusFirstInvalidFieldDirective
  ]
})

export class SharedModule { }
