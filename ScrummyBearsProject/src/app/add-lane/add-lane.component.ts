import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-lane',
  templateUrl: './add-lane.component.html',
  styleUrls: ['./add-lane.component.css']
})
export class AddLaneComponent implements OnInit {
  laneID;
  laneName: string;
  newLaneName: string;
  
  lanes = [
    { laneID: 0, laneName: "Late 1" },
    { laneID: 1, laneName: "LAne 2" },
    { laneID: 2, laneName: "Lans 3" }
  ];
  

  constructor() { }

  ngOnInit() {
  }
  
  addLane() {
    this.lanes.push({ laneID: this.lanes.length, laneName: this.newLaneName });
    this.newLaneName = "";
  }
}
