import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LstCDsComponent } from './lst-cds/lst-cds.component';
import { CdComponent } from './cd/cd.component';
import { NewCDComponent } from './new-cd/new-cd.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lstCds', component: LstCDsComponent },
  { path: 'cd/:id', component: CdComponent },
  { path: 'addCD', component: NewCDComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
