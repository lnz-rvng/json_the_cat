const request = require('request');

const breedFetcher = (breedName) => {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log(`Request failed. ${error}`);
      return;
    }

    const data = JSON.parse(body);
    
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log(`${breedName} not found.`);
    }
  });
};

const args = process.argv.slice(2);
const breedName = args[0];

if (!breedName) {
  console.log(`Please provide a breed name in the CLI`);
} else {
  breedFetcher(breedName);
}