// from data.js
var tableData = data;
// YOUR CODE HERE!

//select table body 
var tableBody = d3.select("tbody");

//function that builds table (variable)
function createTable(data) {
    tableBody.html("");
    data.forEach((row) => {
        var tableRow = tableBody.append("tr");
        Object.values(row).forEach((value) => {
            var cell = tableRow.append("td");
            cell.text(value);
        });
    });
}


function handleclick() {
    var date = d3.select("#datetime").property("value");
    var filtered = tableData;

    if (date) {
        filtered = filtered.filter(row => row.datetime === date);
    }
    createTable(filtered);

}


d3.selectAll("#filter-btn").on("click", handleclick);

createTable(tableData);
