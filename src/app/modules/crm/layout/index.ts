import { CRMHeaderComponent } from './crm-header/crm-header.component';
import { CRMMainComponent } from './crm-main/crm-main.component';
import { CRMFooterComponent } from './crm-footer/crm-footer.component';

export const layout: any[] = [
  CRMHeaderComponent,
  CRMMainComponent,
  CRMFooterComponent
];

export * from './crm-header/crm-header.component';
export * from './crm-main/crm-main.component';
export * from './crm-footer/crm-footer.component';
