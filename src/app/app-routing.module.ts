import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent } from '../app/components/picture/picture.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'pictures', component: HomeComponent},
  {path: 'pictures/:_id', component: PictureComponent},
  {path: '**', redirectTo: 'pictures', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
