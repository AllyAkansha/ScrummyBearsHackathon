import { Component, OnInit } from '@angular/core';
import { Lane } from '../model/lane';
import { ChartStoreService } from '../service/chart-store.service';

@Component({
  selector: 'app-add-lane',
  templateUrl: './add-lane.component.html',
  styleUrls: ['./add-lane.component.css']
})
export class AddLaneComponent implements OnInit {
  laneId: number;
  laneName: string;
  newLaneName: string;
  
  lanes: Lane[] = [
    { id: 0, name: "Lane 1" },
    { id: 1, name: "Lane 2" },
    { id: 2, name: "Lane 3" }
  ];
  

  constructor(private chartStoreService: ChartStoreService) { }

  ngOnInit() {
  }
  
  addLane() {
    const newLane = { id: this.lanes.length, name: this.newLaneName };
    this.lanes.push(newLane);

    this.chartStoreService.addLane(newLane);

    this.newLaneName = "";
  }
}
