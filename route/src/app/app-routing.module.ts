import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramminglanguageComponent } from  './programminglanguage/programminglanguage.component';
import { OperatingsystemComponent } from  './operatingsystem/operatingsystem.component';
import { DatabaseComponent } from  './database/database.component';

const routes: Routes = [
  {path : 'operatingsystem' ,component:OperatingsystemComponent},
  {path : 'programminglanguage', component:ProgramminglanguageComponent},
  {path : 'database' ,component:DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
