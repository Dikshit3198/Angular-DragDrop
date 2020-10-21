import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  {path: '', redirectTo: '/DragDropComponent', pathMatch: 'full' },
  { path:'DragDropComponent', component: DragDropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
