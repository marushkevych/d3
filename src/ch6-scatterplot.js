var d3 = require('d3')

//Width and height
var w = 500;
var h = 100;
var barPadding = 2;

var dataset = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
];

var svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

var circles = svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')

circles.attr('cx', d => d[0])
    .attr('cy', d => d[1])
    .attr('r', d => Math.sqrt(h - d[1]))

// labels
svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(d => d[0] + ',' + d[1])
   .attr('x', d => d[0])
   .attr('y', d => d[1])
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red");
