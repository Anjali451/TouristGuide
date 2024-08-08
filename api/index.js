const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/locations', (req, res) => {
  const results = [];

  fs.createReadStream('archive/data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results); // Send the data as a JSON response
    })
    .on('error', (error) => {
      res.status(500).send('Error reading CSV file');
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
