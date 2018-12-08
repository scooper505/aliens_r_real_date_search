// from data.js
var tableData = sightingData;

console.log("yo");

// tableData.forEach(sighting => {
//   console.log(sighting);
// });

function dateFilter(data) {
  return data.state == "ca";
};

var sightingsFiltered = tableData.filter(dateFilter);

// console.log(sightingsFiltered);
