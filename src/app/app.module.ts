import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CalendlyWidgetComponent } from './calendly-widget/calendly-widget.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'services', component: ServicesComponent}

];

@NgModule({

  declarations: [
    AppComponent,
    WelcomeComponent,
    ScheduleComponent,
    ServicesComponent,
    FooterComponent,
    CalendlyWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
(routes)
      ),
    NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
