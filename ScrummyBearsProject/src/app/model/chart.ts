import { Stage } from './stage';
import { Event } from './event';
import { Task } from './task';
import { Lane } from './lane';

export interface Chart {
  metadata: any,
  lanes: Lane[],
  stages: Stage[],
  events: Event[],
  tasks: Task[]
}
