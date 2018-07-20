import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  taskAdded = "";
  taskName: String
  startDate: String
  endDate: String
  constructor() {}

  ngOnInit() {}
  onClickMe() {
    this.taskAdded = "Roadmap Updated!"
  }
}
