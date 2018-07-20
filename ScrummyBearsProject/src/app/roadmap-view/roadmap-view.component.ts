import { Component, OnInit } from '@angular/core';
import { D3Service } from './d3.service';

@Component({
  selector: 'app-roadmap-view',
  templateUrl: './roadmap-view.component.html',
  styleUrls: ['./roadmap-view.component.css']
})
export class RoadmapViewComponent implements OnInit {

  constructor(private d3Service: D3Service) { }

  ngOnInit() { }

  ngAfterContentInit() {
    this.d3Service.init();
    this.d3Service.testRectangles();
  }
}
