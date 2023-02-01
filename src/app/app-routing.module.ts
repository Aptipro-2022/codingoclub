import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingoSupportComponent } from './codingo-support/codingo-support.component';
import { EnterpriseSupportComponent } from './enterprise-support/enterprise-support.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '', component:HomepageComponent
  },
  {
    path: 'support', component: CodingoSupportComponent
  },
  {
    path: 'enterprise-support', component: EnterpriseSupportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
