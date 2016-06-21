'use strict';

var hoursArray = ['M: 9 - 6pm','T: 9 - 6pm','W: 9 - 6pm','T: 9 - 6pm','F: 9 - 6pm','Sat: 9 - 6pm','Sun: 9 - 6pm'];
var locationsArray = ['1st and Pike','SeaTac Airport', 'Seattle Center','Capitol Hill','Alki'];
var contactsArray = ['email: fishy@phishmail.com','phone: 555-555-5555','twitter: @salmon_cookie'];

function clearData() {
  var ulElement = document.getElementById('scroll');
  if(ulElement.childNodes.length > 0) {
    while(ulElement.childNodes.length > 0) {
      ulElement.removeChild(ulElement.childNodes[0]);
    }
  }
}

function hoursDrop() {
  clearData();
  // need to clear and data before this
  var hoursData = document.getElementById('scroll');
  for(var i = 0; i < hoursArray.length; i++) {
    var hoursByDay = document.createElement('li');
    hoursByDay.textContent = hoursArray[i];
    hoursData.appendChild(hoursByDay);
  }
}
function locationsDrop() {
  clearData();
  var locationsData = document.getElementById('scroll');
  for(var i = 0; i < locationsArray.length; i++) {
    var locations = document.createElement('li');
    locations.textContent = locationsArray[i];
    locationsData.appendChild(locations);
  }
}

function contactDrop() {
  clearData();
  var contactsData = document.getElementById('scroll');
  for(var i = 0; i < contactsArray.length; i++) {
    var contacts = document.createElement('li');
    contacts.textContent = contactsArray[i];
    contactsData.appendChild(contacts);
  }
}
