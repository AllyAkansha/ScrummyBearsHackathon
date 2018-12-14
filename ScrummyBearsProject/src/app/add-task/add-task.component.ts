import { Component, OnInit } from "@angular/core";
import { ChartStoreService } from '../service/chart-store.service';
import * as moment from 'moment';

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  
  taskAdded;
  taskName;
  startDate;
  endDate;
  selectedLane;

  outputTask;

  laneID;
  laneName;
  
  constructor(private chartStoreService: ChartStoreService) {}

  ngOnInit() {}

  onClickMe() {
    this.outputTask = {
        name: this.taskName, 
        start: moment(new Date(this.startDate.toString()).toISOString()), 
        end: moment(new Date(this.endDate.toString()).toISOString()),
        lane: this.selectedLane
    }

    this.chartStoreService.addTask(this.outputTask);
    
    this.taskAdded = "Roadmap Updated!";

    this.resetForm();
  }

  resetForm() {
    this.taskName = "";
    this.startDate = "";
    this.endDate = "";
    this.selectedLane = "";
  }
}
