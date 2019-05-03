import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './user.routes';

import { SharedModule } from '../shared/shared.module';

import { UserAccountService } from '../services/user-account.service';


import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserWordFrequencyService } from '../services/user-word-frequency.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserDashboardComponent,
  ],
  providers: [
    UserAccountService,
    UserWordFrequencyService,
  ],
  exports: [RouterModule]
})
export class UserModule { }
