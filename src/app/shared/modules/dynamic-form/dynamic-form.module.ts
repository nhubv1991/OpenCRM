import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective, DynamicEventDirective } from './directives';
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicEventDirective,
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  exports: [
    ...fromContainers.containers,
  ],
  entryComponents: [
    ...fromComponents.components
  ]
})
export class DynamicFormModule { }
