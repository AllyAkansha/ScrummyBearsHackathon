import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';     
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';


import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule,  
  MatInputModule,      
  MatDatepickerModule,    
    
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,} from '@angular/material';
  
import { RoutingModule } from './routing/routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RoadmapViewComponent } from './roadmap-view/roadmap-view.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddLaneComponent } from './add-lane/add-lane.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    RoadmapViewComponent,
    AddTaskComponent,
    AddLaneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,      
    MatFormFieldModule,
    MatNativeDateModule,

    FormsModule,         
    MatInputModule,           
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule 
  ],
  exports: [      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule      
  ],  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
