import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperListComponent } from './super-list/super-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'super-list', component: SuperListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
