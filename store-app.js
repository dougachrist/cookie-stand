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
    localStorage.setItem('productType',product);
    localStorage.setItem('orderQuantity',quantity);
    localStorage.setItem('custName',custName);
    localStorage.setItem('custAddress',custAddress);
    console.log('product:',product);
  });
}

if (webpage === 'Order Processing') {
  var productProcess = document.getElementById('product');
  productProcess.textContent = localStorage.getItem('productType');
  var productProcess = document.getElementById('quantity');
  productProcess.textContent = localStorage.getItem('orderQuantity');
  var productProcess = document.getElementById('Name');
  productProcess.textContent = localStorage.getItem('custName');
  var productProcess = document.getElementById('Address');
  productProcess.textContent = localStorage.getItem('custAddress');

  var form = document.getElementById('processingForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var productProcess = document.getElementById('product');
    productProcess.textContent = localStorage.getItem('productType');
    var productProcess = document.getElementById('product');
    productProcess.textContent = localStorage.getItem('productType');
    var productProcess = document.getElementById('quantity');
    productProcess.textContent = localStorage.getItem('orderQuantity');
    var productProcess = document.getElementById('Name');
    productProcess.textContent = localStorage.getItem('custName');
    var productProcess = document.getElementById('Address');
    productProcess.textContent = localStorage.getItem('custAddress');

  });
}
