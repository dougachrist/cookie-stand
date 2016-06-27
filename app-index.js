'use strict';

var hoursArray = ['M: 9 - 6pm','T: 9 - 6pm','W: 9 - 6pm','T: 9 - 6pm','F: 9 - 6pm','Sat: 9 - 6pm','Sun: 9 - 6pm'];
var locationsArray = ['1st and Pike','SeaTac Airport', 'Seattle Center','Capitol Hill','Alki'];
var contactsArray = ['email: fishy@phishmail.com','phone: 555-555-5555','twitter: @salmon_cookie'];

function clearData() {
  var ulElement = document.getElementById('scroll');
  while(ulElement.childNodes.length > 0) {
    ulElement.removeChild(ulElement.childNodes[0]);
  }
}


var extra = document.getElementById('hours');
extra.addEventListener('click', function(event) {
  clearData();
  var hoursData = document.getElementById('scroll');
  for(var i = 0; i < hoursArray.length; i++) {
    var hoursByDay = document.createElement('li');
    hoursByDay.textContent = hoursArray[i];
    hoursByDay.className = 'clicked';
    hoursData.appendChild(hoursByDay);
  }
});

var extra1 = document.getElementById('location');
extra1.addEventListener('click', function(event) {
  clearData();
  var locationsData = document.getElementById('scroll');
  for(var i = 0; i < locationsArray.length; i++) {
    var locations = document.createElement('li');
    locations.textContent = locationsArray[i];
    locations.className = 'clicked';
    locationsData.appendChild(locations);
  }
});

var extra2 = document.getElementById('contact');
extra2.addEventListener('click', function(event) {
  clearData();
  var contactsData = document.getElementById('scroll');
  for(var i = 0; i < contactsArray.length; i++) {
    var contacts = document.createElement('li');
    contacts.textContent = contactsArray[i];
    contacts.className = 'clicked';
    contactsData.appendChild(contacts);
  }
});
