import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McqComponent } from './mcq/mcq.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [{path:'mcq/:id',component:McqComponent},
{path:'result',component:ResultComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
