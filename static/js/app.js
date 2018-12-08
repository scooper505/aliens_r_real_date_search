
// set tableData to data from data.js
var tableData = sightingData;

// Get a reference to the table body

var tbody = d3.select("tbody");


// (checking work) Console.log the sightings data from data.js
// console.log(sightingData);

// (Checking Work) Loop Through `data` and console.log each weather report object
// sightingData.forEach(sighting => {
//   console.log(sighting);
// });


// enter data into table
tableData.forEach((sightingsReport) => {
  // console.log(sightingsReport);
  var row = tbody.append("tr");
  Object.entries(sightingsReport).forEach(([key, value]) => {
  	var cell = tbody.append("td");
  	cell.text(value);
  });
});


// set up filter table


var filterButton = d3.select("#filter-btn");

// set button clicked event capature
filterButton.on("click", filter);

// filter function for button event
function filter() {
	d3.event.preventDefault()
	// set variable for input date
	var dateTime = d3.select("#datetime").property("value");

	var filterData = tableData

	if (dateTime) {
		filterData == filterData.filter(row => row.datetime == dateTime);
	};
	filterData.forEach((row) => {
		var row = tbody.append("tr");
		Object.entries(sightingsReport).forEach(([key, value]) => {
			var cell = tbody.append("td");
			cell.text(value);
		});
	});

};



// function handleChange(event)
// var inputDate = d3.event.target.value;

