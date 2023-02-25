import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
// import { MaterialModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodingoSupportComponent } from './codingo-support/codingo-support.component';
import { EnterpriseSupportComponent } from './enterprise-support/enterprise-support.component';
import { CodingoUniversityComponent } from './codingo-university/codingo-university.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PartnerSupportComponent } from './partner-support/partner-support.component';
import { CareersComponent } from './careers/careers.component';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    MenuComponent,
    CodingoSupportComponent,
    EnterpriseSupportComponent,
    CodingoUniversityComponent,
    AboutusComponent,
    PartnerSupportComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
