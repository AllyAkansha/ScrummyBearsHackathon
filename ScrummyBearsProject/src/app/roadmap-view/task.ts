import { Moment } from 'moment';

export interface Task {
    id: number,
    name: string,
    desc?: string,
    start: Moment,
    end: Moment,
    lane: number
}