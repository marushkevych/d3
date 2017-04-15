const d3 = require('d3')

 //Width and height
var w = 500;
var h = 300;
var padding = 30;

//Dynamic, random dataset
var dataset = [];
var numDataPoints = 50;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.floor(Math.random() * xRange);
    var newNumber2 = Math.floor(Math.random() * yRange);
    dataset.push([newNumber1, newNumber2]);
}

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


// // labels
// svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text(d => d[0] + ',' + d[1])
//     .attr('x', d => xScale(d[0]))
//     .attr('y', d => yScale(d[1]))
//     .attr("font-family", "sans-serif")
//     .attr("font-size", "11px")
//     .attr("fill", "red");

// axes
var xAxis = d3.axisBottom(xScale)
    .ticks(5);  //Set rough # of ticks

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

var yAxis = d3.axisLeft(yScale)
    .ticks(5);  //Set rough # of ticks

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);
