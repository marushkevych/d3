var d3 = require('d3')

//Width and height
var w = 500;
var h = 100;
var barPadding = 2;

var dataset = [];
for (var i = 0; i < 20; i++) {
    var newNumber = Math.floor(Math.random() * h);
    dataset.push(newNumber);
}


var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var rects = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect");

// rects.attr("x", (d, i) => (i * 22))
rects.attr("x", (d, i) => i * (w/(dataset.length))  )
    .attr("y", d =>h-d-1) // -1 to show something for empty bar
    .attr("width", w/(dataset.length) - barPadding)
    .attr("height", d => d+1)
    .attr("fill", d => "rgb(50, 50, " + (d * 10) + ")")
