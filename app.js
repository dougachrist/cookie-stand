'use strict';
// global varibles
var arrayTotal = 0;
var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// store objects
var storePike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  hourlyCustomers: [],
  hourlyCookies: [],
};
var storeSeaTac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  hourlyCustomers: [],
  hourlyCookies: [],
};
var storeSeattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  hourlyCustomers: [],
  hourlyCookies: [],
};
var storeCapHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  hourlyCustomers: [],
  hourlyCookies: [],
};
var storeAlki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  hourlyCustomers: [],
  hourlyCookies: [],
};
var storeNameArray = [storePike, storeSeaTac, storeSeattleCenter, storeCapHill, storeAlki];

// add the storeName as the ul
for(var i = 0; i < storeNameArray.length; i++) {
  var storeName = document.getElementById('storeName');
  var storeLocation = document.createElement('ul');
  storeLocation.textContent = storeNameArray[i].name + ' (min: ' + storeNameArray[i].min + ', max: ' + storeNameArray[i].max + ', avg: ' + storeNameArray[i].avgCookies + ')';
  storeName.appendChild(storeLocation);
}

// random number generator & array total
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arraySum(testArray) {
  for(var i = 0; i < testArray.length; i++) {
    arrayTotal = testArray[i] + arrayTotal;
  }
  return arrayTotal;
};

// for each hour assign the coookies and customer per store
for(var i = 0; i < hoursOpen.length; i++) {
  for(var counter = 0; counter < storeNameArray.length; counter++) {
    var randomNum = getRandomIntInclusive(storeNameArray[counter].min, storeNameArray[counter].max);
    storeNameArray[counter].hourlyCustomers[i] = Math.round(randomNum);
    storeNameArray[counter].hourlyCookies[i] = Math.round(randomNum * storeNameArray[counter].avgCookies);
  }
}
// where to place the data in the DOM

var hourlyData = document.getElementsByTagName('ul');

// print out the data and total line
for(var i = 0; i <= hoursOpen.length; i++) {
  for(var counter = 0; counter < storeNameArray.length; counter++) {
    if(i < hoursOpen.length) {
      var hourlyInfo = document.createElement('li');
      hourlyInfo.textContent = 'hour: ' + hoursOpen[i] + ' ~  customers: ' + storeNameArray[counter].hourlyCustomers[i] + ' ~ cookies ' + storeNameArray[counter].hourlyCookies[i];
      hourlyData[counter].appendChild(hourlyInfo);
    } else {
      var hourlyInfo = document.createElement('li');
      hourlyInfo.textContent = 'Total Customers: ' + arraySum(storeNameArray[counter].hourlyCustomers) + ' ~  Total Cookies ' + arraySum(storeNameArray[counter].hourlyCookies);
      hourlyData[counter].appendChild(hourlyInfo);
    }
  }
}
