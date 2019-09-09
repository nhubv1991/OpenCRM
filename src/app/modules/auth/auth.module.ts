import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// Layout
import * as fromLayout from './layout';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromLayout.layout
  ],
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ],
})
export class AuthModule { }
