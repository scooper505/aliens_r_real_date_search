
// Get a reference to the table body

var tbody = d3.select("tbody");


// (checking work) Console.log the sightings data from data.js
// console.log(sightingData);

// (Checking Work) Loop Through `data` and console.log each weather report object
// sightingData.forEach(sighting => {
//   console.log(sighting);
// });


// enter data into table
sightingData.forEach((sightingsReport) => {
  console.log(sightingsReport);
  var row = tbody.append("tr");
  Object.entries(sightingsReport).forEach(([key, value]) => {
  	var cell = tbody.append("td");
  	cell.text(value);
  });
});


