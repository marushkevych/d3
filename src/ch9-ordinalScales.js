var d3 = require('d3')

//Width and height
var w = 500;
var h = 200;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

var xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    .rangeRound([0, w])
    .paddingInner(0.05);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, h]);

var rects = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect');

rects.attr('x', (d, i) => xScale(i)  )
    .attr('y', d => h-yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', d => yScale(d))
    .attr('fill', d => 'rgb(50, 50, ' + (d * 10) + ')')

// labels
svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
    .attr('x', (d, i) => xScale(i) + (xScale.bandwidth()/2))
    .attr('y', d => h-yScale(d) + 14)
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'white')
    .attr('text-anchor', 'middle') // center text
