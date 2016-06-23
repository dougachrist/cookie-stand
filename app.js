'use strict';

var arrayTotal = 0;
var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var grandTotalCookies = 0;
var tableData = document.getElementById('cookieTable');
var allStores = [];
var form = document.getElementById('newStoreForm');

function Store(storeName,minCustPerHour,maxCustPerHour,avgCookiesPerHour) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.custPerHourArray = [];
  this.cookiesPerHourArray = [];
  this.totalCookies = 0;
  this.totalCustomers = 0;
  this.calCookiesPerHour();
  allStores.push(this);
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Store.prototype.calCustPerHour = function() {
  for(var i = 0; i < hoursOpen.length; i++) {
    var custEachHour = Math.round(getRandomIntInclusive(this.minCustPerHour,this.maxCustPerHour));
    this.custPerHourArray.push(custEachHour);
  }
};

Store.prototype.calCookiesPerHour = function() {
  this.calCustPerHour();
  for(var i = 0; i < hoursOpen.length; i++) {
    var cookieEachHour = Math.round(this.custPerHourArray[i] * this.avgCookiesPerHour);
    this.cookiesPerHourArray.push(cookieEachHour);
    this.totalCookies += cookieEachHour;
  }
};

var storePike = new Store('1st and Pike',23,65,6.3);
var storeSeaTac = new Store('SeaTac Airport',3,24,1.2);
var storeSeattleCenter = new Store('Seattle Center',11,38,3.7);
var storeCapHill = new Store('Capitol Hill',20,38,2.3);
var storeAlki = new Store('Alki',2,16,4.6);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var elInput = document.getElementById('newStoreLocationInput');
  var elMin = document.getElementById('newStoreMinCust');
  var elMax = document.getElementById('newStoreMaxCust');
  var elAvg = document.getElementById('newAvgCookies');
  var newStore = new Store(elInput.value, parseInt(elMin.value), parseInt(elMax.value), parseInt(elAvg.value));
  renderHeaderTable();
  renderStandData();
  renderFooterTable();
});
var renderHeaderTable = function() {
  tableData.innerHTML = '';
  var headerRow = document.createElement('tr');
  var blankData = document.createElement('th');
  blankData.textContent = '';
  headerRow.appendChild(blankData);
  var tableCookieTotals = document.createElement('th');
  tableCookieTotals.textContent = 'Daily Location Total';
  headerRow.appendChild(tableCookieTotals);
  for(var i = 0; i < hoursOpen.length; i++) {
    var tableEachHour = document.createElement('th');
    tableEachHour.textContent = hoursOpen[i];
    headerRow.appendChild(tableEachHour);
  }
  tableData.appendChild(headerRow);
};
var renderStandData = function() {
  for(var j = 0; j < allStores.length; j++) {
    var tableDataRow = document.createElement('tr');
    var tableStoreName = document.createElement('td');
    tableStoreName.textContent = allStores[j].storeName;
    tableDataRow.appendChild(tableStoreName);
    var tableStoreTotal = document.createElement('td');
    tableStoreTotal.textContent = allStores[j].totalCookies;
    tableDataRow.appendChild(tableStoreTotal);
    for(var i = 0; i < hoursOpen.length; i++) {
      var tableStoreData = document.createElement('td');
      tableStoreData.textContent = allStores[j].cookiesPerHourArray[i];
      tableDataRow.appendChild(tableStoreData);
    }
    tableData.appendChild(tableDataRow);
  }
};
var renderFooterTable = function() {
  var tableDataRow = document.createElement('tr');
  var totalCellName = document.createElement('td');
  totalCellName.textContent = 'Totals';
  tableDataRow.appendChild(totalCellName);
  var grandTotalCell = document.createElement('td');
  grandTotalCookies = 0;
  for(j = 0; j < allStores.length; j++){
    grandTotalCookies += allStores[j].totalCookies;
  }
  grandTotalCell.textContent = grandTotalCookies;
  tableDataRow.appendChild(grandTotalCell);
  for(var i = 0; i < hoursOpen.length; i++) {
    var totalcookiesEachhour = 0;
    var totalCookiesByHour = document.createElement('td');
    for(var j = 0; j < allStores.length; j++) {
      totalcookiesEachhour += allStores[j].cookiesPerHourArray[i];
    }
    totalCookiesByHour.textContent = totalcookiesEachhour;
    tableDataRow.appendChild(totalCookiesByHour);
  }
  tableData.appendChild(tableDataRow);
};
renderHeaderTable();
renderStandData();
renderFooterTable();
