import { Moment } from 'moment';

export interface Stage {
  id: number,
  name: string,
  start: Moment,
  end: Moment
}
