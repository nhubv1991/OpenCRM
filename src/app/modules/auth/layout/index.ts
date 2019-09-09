import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

export const layout: any[] = [
  AuthHeaderComponent,
  AuthMainComponent,
  AuthFooterComponent
];

export * from './auth-header/auth-header.component';
export * from './auth-main/auth-main.component';
export * from './auth-footer/auth-footer.component';
