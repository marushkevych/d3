const d3 = require('d3')

 //Width and height
var w = 500;
var h = 300;
var padding = 20;

var dataset = [
   [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
   [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600, 150]
];

var xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[0])])
    .range([padding, w-padding*2]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([h-padding, padding]);

var rScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([2, 5]);

var svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

var circles = svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')

circles.attr('cx', d => xScale(d[0]))
    .attr('cy', d => yScale(d[1]))
    .attr('r', d => rScale(d[1]))

// labels
svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(d => d[0] + ',' + d[1])
   .attr('x', d => xScale(d[0]))
   .attr('y', d => yScale(d[1]))
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red");
