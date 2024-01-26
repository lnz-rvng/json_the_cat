const request = require('request');

const fetchBreedDescription = (breedName, cb) => {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      // call the callback if there's an error
      cb(error.message, null);
      return;
    }
    
    const data = JSON.parse(body);
    
    if (data.length > 0) {
      // call the callback if condition is true
      cb(null, data[0].description);
    } else {
      cb(`${breedName} not found.`, null);
    }
  });
};



module.exports = { fetchBreedDescription };