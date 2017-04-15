var d3 = require('d3')

var dataset = [];
for (var i = 0; i < 25; i++) {
    var newNumber = Math.floor(Math.random() * 30);
    dataset.push(newNumber);
}

var selection = d3.select('body')
    .selectAll('div.bar')
    .data(dataset)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('height', function(d) {
      return d*5+'px'
    })
