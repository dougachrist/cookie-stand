'use strict';

var store = {
  name: '1st and Pike',
  min: 10,
  max: 30,
  avgCookies: 22,
  hoursOpen: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCustomers: [],
  hourlyCookies: [],
};

var storeName = document.getElementById('storeName');
var storeLocation = document.createElement('ul');
storeLocation.textContent = store.name;
storeName.appendChild(storeLocation);

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < store.hoursOpen.length; i++) {
  var randomNum = getRandomIntInclusive(store.min, store.max);
  store.hourlyCustomers[i] = randomNum;
  store.hourlyCookies[i] = randomNum * store.avgCookies;
}
var hourlyData = document.getElementsByTagName('ul');

for(var i = 0; i < store.hoursOpen.length; i++) {
  var hourlyInfo = document.createElement('li');
  hourlyInfo.textContent = 'hour: ' + store.hoursOpen[i] + ' ~  customers: ' + store.hourlyCustomers[i] + ' ~ cookies ' + store.hourlyCookies[i];
  hourlyData[0].appendChild(hourlyInfo);
}

console.log(store.hourlyCustomers);
console.log(store.hourlyCookies);
