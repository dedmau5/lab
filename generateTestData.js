const Chance = require('chance');
const chance = new Chance();

// Define arrays of Swedish names, cities, zip codes, etc.
const swedishNames = ['Anna', 'Erik', 'Lena', 'Johan', 'Maria', 'Svenne', 'Cheyni'  /* add more names */];
const swedishSurnames = ['Carlsson', 'Larsson', 'Kronbladh', 'Roos', 'Frostkant', 'Banansson', 'Miao'];
const swedishCities = ['Stockholm', 'Gothenburg', 'Malmo', 'Uppsala', 'Linkoping', /* add more cities */];
const swedishZipCodes = ['11111', '22222', '33333', '44444', '55555', /* add more zip codes */];

function generateData(numRows) {
    const data = [];
    for (let i = 0; i < numRows; i++) {
        const name = chance.pickone(swedishNames) + ' ' + chance.pickone(swedishSurnames);
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