import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary/header-secondary.component';
import { JobsViewComponent } from './jobs-view/jobs-view.component';
import { MoreVacanciesComponent } from './more-vacancies/more-vacancies.component';
import { FooterComponent } from './footer/footer.component';
import { MoreDetailsComponent } from './more-details/more-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSecondaryComponent,
    JobsViewComponent,
    MoreVacanciesComponent,
    FooterComponent,
    MoreDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
