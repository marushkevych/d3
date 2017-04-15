var d3 = require('d3')
var dataset = [ 5, 10, 15, 20, 25 ];

//Width and height
var w = 500;
var h = 80;

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", (d, i) => (i * 50) + 25)
    .attr("cy", h/2)
    .attr("r", d => d)
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", d => d/2);
