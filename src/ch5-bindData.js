var d3 = require('d3')

var dataset = [5, 10, 15, 20, 25]

// d3.select("body").append("p").text("New paragraph!")

var selection = d3.select("body")
    .selectAll("p")
    .data(dataset)
    // .text(function(d){return d}) // update existing
    .enter()
    .append("p")
    .text(function(d) {return d})
    .style('color', function(d) {
      if (d > 15) {
        return 'red'
      }
      return 'black'
    })

console.log(selection)
