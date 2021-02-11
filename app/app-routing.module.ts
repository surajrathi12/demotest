import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';

const routes: Routes = [
  { path: '', redirectTo:'/section1',pathMatch:'full'},
  { path: 'section1', component: Section1Component },
  { path: 'section2/:id', component: Section2Component },
  { path: 'section3', component: Section3Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
