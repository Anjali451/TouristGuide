const fs = require('fs');
const csv = require('csv-parser');

const results = [];

// Adjust the path to your CSV file if needed
fs.createReadStream('archive/data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log(results); // You can process the results here
  });
