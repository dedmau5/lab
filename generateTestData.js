const Chance = require('chance');
const chance = new Chance();

// Define arrays of Swedish names, cities, zip codes, etc.
const swedishNames = ['Anna', 'Erik', 'Lena', 'Johan', 'Maria', 'Svenne Banansson' /* add more names */];
const swedishCities = ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Linköping', /* add more cities */];
const swedishZipCodes = ['11111', '22222', '33333', '44444', '55555', /* add more zip codes */];

function generateData(numRows) {
    const data = [];
    for (let i = 0; i < numRows; i++) {
        const name = chance.pickone(swedishNames);
        const email = chance.email();
        const city = chance.pickone(swedishCities);
        const zipcode = chance.pickone(swedishZipCodes);
        const phoneNumber = chance.phone();

        data.push([name, email, city, zipcode, phoneNumber]);
    }
    return data;
}

function writeToFile(data) {
    const fs = require('fs');
    fs.writeFileSync('testdata.csv', 'Name,Email,City,Zipcode,Phone Number\n' + data.map(row => row.join(',')).join('\n'), 'utf-8');
}

const numRows = 10; // You can change this to the desired number of rows
const testData = generateData(numRows);
writeToFile(testData);