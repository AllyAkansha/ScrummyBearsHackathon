import { Component, OnInit } from '@angular/core';
import { D3Service } from './d3.service';
import { ChartStoreService } from '../service/chart-store.service';

@Component({
  selector: 'app-roadmap-view',
  templateUrl: './roadmap-view.component.html',
  styleUrls: ['./roadmap-view.component.css']
})
export class RoadmapViewComponent implements OnInit {

  constructor(
    private d3Service: D3Service,
    private chartStoreService: ChartStoreService
  ) { }

  ngOnInit() { }

  ngAfterContentInit() {

    const that = this;
    
    function readBlob(files) {

      if (!files.length) {
        console.log("no files");
        return;
      }

      var file = files[0];
      var start = 0;
      var stop = file.size - 1;

      var reader = new FileReader();

      // If we use onloadend, we need to check the readyState.
      reader.onloadend = function (evt) {
        that.d3Service.tasksFromCSV(evt.target['result']);
      };

      var blob = file.slice(start, stop + 1);
      reader.readAsBinaryString(blob);
    }

    function handleFileSelect(evt) {
      var files = evt.target.files; // FileList object

      readBlob(files);
    }

    document.addEventListener("DOMContentLoaded", function (event) {
      document.getElementById('files').addEventListener('change', handleFileSelect, false);
    });

    this.d3Service.init();
    this.d3Service.testRectangles();
  }
}
