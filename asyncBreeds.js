const fs = require('fs');
const { builtinModules } = require('module');

const breedDetailsFromFile = function(breed, cb) {
  //console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    //console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      cb(data);
    } else {
      cb(undefined);
    };
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

module.exports = breedDetailsFromFile;

