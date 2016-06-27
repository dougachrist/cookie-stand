// store-app.js

var product = '';

var elInput = '';

var wPage = document.getElementById('page');

var openOrdersArray = [];
var closedOrdersArray = [];

function Order(productOrdered,quantity,custName,address,city,state,zip,paymentType) {
  // this.order# = i
  this.productOrdered = productProduct;
  this.quantity = quantity;
  this.custName = custName;
  this.address = adress;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.paymentype = paymentType;
  openOrdersArray.push(this);

}

// var newOrder = new Order(product, quantity, custName,custAddress,custCity,custState,custZip,custPaymentInfo);

// set defaults to zero
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
    inputProduct = elInput.value;
    var elInput = document.getElementById('productQuantity');
    inputQuantity = elInput.value;
    var elInput = document.getElementById('custName');
    inputCustName = elInput.value;
    var elInput = document.getElementById('custAddress');
    inputCustAddress = elInput.value;
    var elInput = document.getElementById('custCity');
    inputCustCity = elInput.value;
    var elInput = document.getElementById('custState');
    inputCustState = elInput.value;
    var elInput = document.getElementById('custZip');
    inputCustZip = elInput.value;
    var elInput = document.getElementById('custPaymentType');
    inputCustPaymentType = elInput.value;

    localStorage.setItem('locStorProduct',inputProduct);
    localStorage.setItem('locStorQuantity',inputQuantity);
    localStorage.setItem('locStorCustName',inputCustName);
    localStorage.setItem('locStorCustAddress',inputCustAddress);
    localStorage.setItem('locStorCustCity',inputCustCity);
    localStorage.setItem('locStorCustState',inputCustState);
    localStorage.setItem('locStorCustZip',inputCustZip);
    localStorage.setItem('locStorCustPaymentType',inputCustPaymentType);
    // updateOrderProcessing();
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

    console.log('product:', localStorage.getItem('locStorProduct'));

    var productProcess = document.getElementById('product');
    productProcess.textContent = localStorage.getItem('locStorProduct');
    var productProcess = document.getElementById('quantity');
    productProcess.textContent = localStorage.getItem('locStorQuantity');
    var productProcess = document.getElementById('name');
    productProcess.textContent = localStorage.getItem('locStorCustName');
    var productProcess = document.getElementById('address');
    productProcess.textContent = localStorage.getItem('locStorCustAddress');
    var productProcess = document.getElementById('city');
    productProcess.textContent = localStorage.getItem('locStorCustCity');
    var productProcess = document.getElementById('state');
    productProcess.textContent = localStorage.getItem('locStorCustState');
    var productProcess = document.getElementById('zip');
    productProcess.textContent = localStorage.getItem('locStorCustZip');
    var productProcess = document.getElementById('paymentType');
    productProcess.textContent = localStorage.getItem('locStorCustPaymentType');

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
