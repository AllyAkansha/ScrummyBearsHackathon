import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as d3 from 'd3';

import { Task } from '../model/task';
import { Event } from '../model/event';
import { ChartStoreService } from '../service/chart-store.service';

@Injectable({
  providedIn: 'root'
})
export class D3Service {

  SVG_WIDTH = 1000;
  margin = { top: 20, left: 20, right: 20, bottom: 0 };

  test: Task[];
  roadmap: any;
  x: any;

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
      .style('padding-left', this.margin.left)
      .style('padding-right', this.margin.right)
      .style('width', '100%')
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

  findEarliestEventDate(dates: Event[]): moment.Moment {
    let earliest = moment('2100-01-01');

    dates.forEach(date => {
      if (date.time.isBefore(earliest)) {
        earliest = date.time;
      }
    });

    return earliest;
  }

  findLatestEventDate(dates: Event[]): moment.Moment {
    let latest = moment('1900-01-01');

    dates.forEach(date => {
      if (date.time.isAfter(latest)) {
        latest = date.time;
      }
    });

    return latest;
  }

  public drawTasks(data): void {
    const earliest = this.findEarliestEventDate(this.chartStoreService.chart.events);
    const latest = this.findLatestEventDate(this.chartStoreService.chart.events);
    const length = moment.duration(latest.diff(earliest)).asDays();

    const eventDates = this.chartStoreService.chart.events
      .map((value: Event) => value.time);
      
    const xScaleInt = d3.scaleLinear().domain([0, length]).range([0, 100]);
    const xScale = d3.scaleTime()
      .domain([earliest, latest])
      .range([0, 1000 - this.margin.right])
      .clamp(true);

    const xAxis = d3.axisTop(xScale)
      .tickValues(eventDates)
      .tickFormat((d: any, i) => this.chartStoreService.eventsHash[d.toISOString()].name);

    this.roadmap
      .append('g')
      .attr('transform', `translate(${this.margin.left}, 20)`)
      .call(xAxis);
    // const xAxis = d3.axisTop(x)
    // .tickFormat(d3.time.format(tickFormat))
    // .tickSubdivide(true)
    // .tickSize(8)
    // .tickPadding(8);

    this.roadmap
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any, i) => {
        return xScale(d.start); //x(moment.duration(d.start.diff(earliest)).asDays());
      })
      .attr('width', (d: any, i) => {
        return xScale(d.end) - xScale(d.start); //x(moment.duration(d.end.diff(d.start)).asDays());
      })
      .attr('y', (d: any, i) => {
        return 52 * d.lane;
      })
      .attr('height', 50)
      .attr('transform', `translate(${this.margin.left}, 30)`)
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