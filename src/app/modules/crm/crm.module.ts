import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRMRoutingModule } from './crm-routing.module';

// Layout
import * as fromLayout from './layout';

@NgModule({
  declarations: [
    ...fromLayout.layout
  ],
  imports: [
    CommonModule,
    CRMRoutingModule
  ],
})
export class CRMModule { }
