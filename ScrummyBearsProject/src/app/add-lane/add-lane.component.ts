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
  
  lanes: Lane[] = [  ];
  

  constructor(private chartStoreService: ChartStoreService) { 
    this.lanes = this.chartStoreService.chart.lanes;
  }

  ngOnInit() {
  }
  
  addLane() {
    const newLane = { id: this.lanes.length, name: this.newLaneName };
    this.lanes.push(newLane);

    this.chartStoreService.addLane(newLane);

    this.newLaneName = "";
  }
}
