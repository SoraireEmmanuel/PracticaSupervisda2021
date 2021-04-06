import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { NewTestComponent } from './new-test/new-test.component';
import { HistoryComponent } from './history/history.component';
import { GraphsAndStatisticsComponent } from './graphs-and-statistics/graphs-and-statistics.component';

const routes:Routes =[
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newtest', component: NewTestComponent},
  {path: 'adminpatient', component: AdminPatientComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'graphsandstatics', component: GraphsAndStatisticsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    AdminPatientComponent,
    NewTestComponent,
    HistoryComponent,
    GraphsAndStatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      enableTracing: true,
      paramsInheritanceStrategy: 'always',
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
