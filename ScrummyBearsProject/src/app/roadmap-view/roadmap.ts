import * as moment from 'moment';
import * as d3 from 'd3';

const test = [{
    'start': moment('2018-07-01'),
    'end': moment('2018-07-20')
}];

const createRectangles = (data) => {
    d3.select('#roadmap')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d: any, i) => {
        return moment.duration(d.start.diff(d.start)).asDays();
    })
    .attr('width', (d: any, i) => {
        return moment.duration(d.start.diff(d.end)).asDays() + moment.duration(d.start.diff(d.start)).asDays();
    })
}

export default {
    createRectangles
};