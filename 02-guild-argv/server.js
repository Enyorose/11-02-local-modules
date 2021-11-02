// Accept command line input
const inputString = process.argv[2];
const guild = require('./guild')
// TODO: clean up our expression
console.log(inputString)

const matchingCharacter = guild.find(item => inputString === item.name)

// Log the results
if (matchingCharacter) {
  console.log(`Found ${inputString}: \n`, matchingCharacter);
} else {
  console.log(`Couldn't find any guild members with ${inputString} `);
}