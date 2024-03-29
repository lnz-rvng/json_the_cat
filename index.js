const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const breedName = args[0];

fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    console.log(data);
  }
});