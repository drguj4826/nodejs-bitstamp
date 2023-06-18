const https = require('https');

const url = 'https://www.bitstamp.net/api/v2/ticker/';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const jsonData = JSON.parse(data);
    const prices = Object.values(jsonData).map(item => parseFloat(item.last));
    const average = calculateAverage(prices);
    console.log('Average last price:', average);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((total, value) => total + value, 0);
  return sum / arr.length;
}