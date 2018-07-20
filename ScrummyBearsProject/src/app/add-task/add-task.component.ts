import { Component, OnInit } from "@angular/core";

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
  
  lanes = [
    { laneID: 0, laneName: "Late 0" },
    { laneID: 1, laneName: "LAne 1" },
    { laneID: 2, laneName: "Lans 2" }
  ];


  constructor() {}

  ngOnInit() {}



  onClickMe() {
    this.outputTask = { 
        name: this.taskName, 
        startDate: new Date(this.startDate.toString()).toISOString(), 
        endDate: new Date(this.endDate.toString()).toISOString(),
        lane: this.selectedLane
    }
    
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
