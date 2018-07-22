import { Injectable } from '@angular/core';
import { Chart } from '../model/chart';
import { Event } from '../model/event';
import { Lane } from '../model/lane';
import { Stage } from '../model/stage';
import { Task } from '../model/task';
import { Moment } from 'moment';
import * as moment from 'moment';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartStoreService { // are you ready

  public chart: Chart;
  public taskSubject: Subject<any>;
  public laneSubject: Subject<any>;

  constructor() {
    this.taskSubject = new Subject();
    this.laneSubject = new Subject();

    this.chart = {
      metadata: {},
      lanes: [],
      stages: [],
      events: [],
      tasks: [
        {
          'id': 0,
          'name': 'default',
          'start': moment('2018-07-01'),
          'end': moment('2018-07-20'),
          'lane': 0
        },
        {
          'id': 0,
          'name': 'default',
          'start': moment('2018-07-05'),
          'end': moment('2018-07-20'),
          'lane': 1
        },
        {
          'id': 0,
          'name': 'default',
          'start': moment('2018-07-21'),
          'end': moment('2018-08-30'),
          'lane': 1
        }
      ]
    }
  }

  getChart(): Chart {
    return this.chart;
  }

  addTask(newTask: Task): void {
    this.chart.tasks.push(newTask);
    this.taskSubject.next(newTask);
  }

  addLane(newLane: Lane): void {
    this.chart.lanes.push(newLane);
    this.laneSubject.next(newLane);
  }

  addEvent(newEvent: Event): void {
    this.chart.events.push(newEvent);
  }

  addStage(newStage: Stage): void {
    this.chart.stages.push(newStage);
  }
}
