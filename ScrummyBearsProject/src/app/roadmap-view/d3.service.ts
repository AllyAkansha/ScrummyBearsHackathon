import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as d3 from 'd3';

import { Task } from '../model/task';
import { ChartStoreService } from '../service/chart-store.service';

@Injectable({
  providedIn: 'root'
})
export class D3Service {

  test: Task[];
  roadmap: any;

  constructor(private chartStoreService: ChartStoreService) {
    this.chartStoreService.taskSubject.subscribe(
      (task) => this.redraw()
    );
  }

  public init(): void {
    this.roadmap = d3.select('#roadmap')
      .append('svg')
      .attr('width', 1000)
      .attr('height', 1000)
  }

  findEarliestDate(dates: Task[]): moment.Moment {
    let earliest = moment('2100-01-01');

    dates.forEach(date => {
      if (date.start.isBefore(earliest)) {
        earliest = date.start;
      }
    });

    return earliest;
  }

  findLatestDate(dates: Task[]): moment.Moment {
    let latest = moment('1900-01-01');

    dates.forEach(date => {
      if (date.end.isAfter(latest)) {
        latest = date.end;
      }
    });

    return latest;
  }

  public drawTasks(data): void {
    const earliest = this.findEarliestDate(data);

    this.roadmap
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any, i) => {
        return moment.duration(d.start.diff(earliest)).asDays();
      })
      .attr('width', (d: any, i) => {
        return moment.duration(d.end.diff(d.start)).asDays();
      })
      .attr('y', (d: any, i) => {
        return 52 * d.lane;
      })
      .attr('height', 50)
  }

  redraw(): void {
    d3.select('svg').remove();
    this.init();
    this.drawTasks(this.chartStoreService.chart.tasks);
  }

  testRectangles(): void {
    this.drawTasks(this.chartStoreService.chart.tasks);
  }

  tasksFromCSV(csv): void {
    const tasks = d3.csvParse(csv)
      .map((task: any) => {
        task.start = moment(task.start);
        task.end = moment(task.end);

        return task;
      });

    this.chartStoreService.chart.tasks = tasks as Task[];
    this.redraw();
  }
}