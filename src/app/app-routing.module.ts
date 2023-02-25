import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { CodingoSupportComponent } from './codingo-support/codingo-support.component';
import { CodingoUniversityComponent } from './codingo-university/codingo-university.component';
import { EnterpriseSupportComponent } from './enterprise-support/enterprise-support.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PartnerSupportComponent } from './partner-support/partner-support.component';

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
  {
    path: 'university', component: CodingoUniversityComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'partner-support', component: PartnerSupportComponent
  },
  {
    path: 'careers', component: CareersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
