// store-app.js

var product = '';

var elInput = '';

var wPage = document.getElementById('page');

localStorage.setItem('productType','');
localStorage.setItem('orderQuantity','');
localStorage.setItem('custName','');
localStorage.setItem('custAddress','');

webpage = wPage.textContent;

// GRAB order details form Order page
if(webpage === 'Store') {
  var form = document.getElementById('orderForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var elInput = document.getElementById('productInput');
    product = elInput.value;
    var elInput = document.getElementById('productQuantity');
    quantity = elInput.value;
    var elInput = document.getElementById('custName');
    custName = elInput.value;
    var elInput = document.getElementById('custAddress');
    custAddress = elInput.value;
    var elInput = document.getElementById('custCity');
    custCity = elInput.value;
    var elInput = document.getElementById('custState');
    custState = elInput.value;
    var elInput = document.getElementById('custZip');
    custZip = elInput.value;
    var elInput = document.getElementById('custPaymentInfo');
    custPaymentInfo = elInput.value;

    localStorage.setItem('productType',product);
    localStorage.setItem('orderQuantity',quantity);
    localStorage.setItem('custName',custName);
    localStorage.setItem('custAddress',custAddress);
    localStorage.setItem('custCity',custCity);
    localStorage.setItem('custState',custState);
    localStorage.setItem('custZip',custZip);
    localStorage.setItem('custPaymentInfo',custPaymentInfo);
    // console.log('product:',product);
  });
}

if (webpage === 'Order Processing') {
  // var productProcess = document.getElementById('product');
  // productProcess.textContent = localStorage.getItem('productType');
  // var productProcess = document.getElementById('quantity');
  // productProcess.textContent = localStorage.getItem('orderQuantity');
  // var productProcess = document.getElementById('Name');
  // productProcess.textContent = localStorage.getItem('custName');
  // var productProcess = document.getElementById('Address');
  // productProcess.textContent = localStorage.getItem('custAddress');

  var updateSales = document.getElementById('processingForm');

  updateSales.addEventListener('submit', function(event) {
    event.preventDefault();

    var productProcess = document.getElementById('product');
    productProcess.textContent = localStorage.getItem('productType');
    var productProcess = document.getElementById('quantity');
    productProcess.textContent = localStorage.getItem('orderQuantity');
    var productProcess = document.getElementById('name');
    productProcess.textContent = localStorage.getItem('custName');
    var productProcess = document.getElementById('address');
    productProcess.textContent = localStorage.getItem('custAddress');
    var productProcess = document.getElementById('city');
    productProcess.textContent = localStorage.getItem('custCity');
    var productProcess = document.getElementById('state');
    productProcess.textContent = localStorage.getItem('custState');
    var productProcess = document.getElementById('zip');
    productProcess.textContent = localStorage.getItem('custZip');
    var productProcess = document.getElementById('paymentType');
    productProcess.textContent = localStorage.getItem('custPaymentInfo');

  });
}

// if (webpage === 'Order Processing') {
//
//   // var openOrder = document.getElementsById('openOrder');
  //
  // openOrder.addEventListener('click', function() {
  //   move to closed orders array

  // var closedOrder = document.getElementsById('closedOrder');

  // closedOrder.addEventListener('click', function() {
  //   move back to open orders array
