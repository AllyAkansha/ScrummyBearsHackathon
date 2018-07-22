import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { RoadmapViewComponent } from '../roadmap-view/roadmap-view.component';
import { AddTaskComponent } from '../add-task/add-task.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'roadmap-view',  component: RoadmapViewComponent },
  { path: 'add-task',  component: AddTaskComponent }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes) 
  ],
  // declarations: [],
  exports: [ RouterModule ]
})
export class RoutingModule {}