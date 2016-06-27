// store-app.js

var product = '';

var elInput = '';

var wPage = document.getElementById('page');

var openOrdersArray = [];
var closedOrdersArray = [];
localStorage.setItem('openOrders',[]);

function Order(productOrdered,quantity,custName,address,city,state,zip,paymentType) {
  // this.order# = i
  this.productOrdered = productOrdered;
  this.quantity = quantity;
  this.custName = custName;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.paymentype = paymentType;
  openOrdersArray.push(this);

}

webpage = wPage.textContent;

// GRAB order details form Order page
if(webpage === 'Store') {
  var form = document.getElementById('orderForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var elInput = document.getElementById('productInput');
    var inputProduct = elInput.value;
    var elInput = document.getElementById('productQuantity');
    var inputQuantity = elInput.value;
    var elInput = document.getElementById('custName');
    var inputCustName = elInput.value;
    var elInput = document.getElementById('custAddress');
    var inputCustAddress = elInput.value;
    var elInput = document.getElementById('custCity');
    var inputCustCity = elInput.value;
    var elInput = document.getElementById('custState');
    var inputCustState = elInput.value;
    var elInput = document.getElementById('custZip');
    var inputCustZip = elInput.value;
    var elInput = document.getElementById('custPaymentType');
    var inputCustPaymentType = elInput.value;

    var newOrder = new Order(inputProduct, inputQuantity, inputCustName,inputCustAddress,inputCustCity,inputCustState,inputCustZip,inputCustPaymentType);

    localStorage.setItem('openOrders', JSON.stringify(openOrdersArray));
  });
}

if(webpage === 'Order Processing') {

  var form = document.getElementById('processingForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('product2: working');

    var orderdata = localStorage.getItem('openOrders');
    var openOrders2 = JSON.parse(orderdata);

    var openTable = document.getElementById('open');

    for (var i = 0; i < openOrders2.length; i++) {

      var tableRow = document.createElement('tr');
      var tableData = document.createElement('td');
      tableData.textContent = 'open';
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = '#2111';
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].productOrdered;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].quantity;
      tableRow.appendChild(tableData);
      openTable.appendChild(tableRow);

      // var productProcess = document.getElementById('name');
      // productProcess.textContent = openOrders2[i].custName;
      // var productProcess = document.getElementById('address');
      // productProcess.textContent = openOrders2[i].address;
      // var productProcess = document.getElementById('city');
      // productProcess.textContent = openOrders2[i].city;
      // var productProcess = document.getElementById('state');
      // productProcess.textContent = openOrders2[i].state;
      // var productProcess = document.getElementById('zip');
      // productProcess.textContent = openOrders2[i].zip;
      // var productProcess = document.getElementById('paymentType');
      // productProcess.textContent = openOrders2[i].paymentType;
    }
  });

}

// console.log('product1:', localStorage.getItem('locStorProduct'));

// if (webpage === 'Order Processing') {
  // var productProcess = document.getElementById('product');
  // productProcess.textContent = localStorage.getItem('productType');
  // var productProcess = document.getElementById('quantity');
  // productProcess.textContent = localStorage.getItem('orderQuantity');
  // var productProcess = document.getElementById('Name');
  // productProcess.textContent = localStorage.getItem('custName');
  // var productProcess = document.getElementById('Address');
  // productProcess.textContent = localStorage.getItem('custAddress');

  // var updateSales = document.getElementById('processingForm');

// }

// if (webpage === 'Order Processing') {
//
//   // var openOrder = document.getElementsById('openOrder');
  //
  // openOrder.addEventListener('click', function() {
  //   move to closed orders array

  // var closedOrder = document.getElementsById('closedOrder');

  // closedOrder.addEventListener('click', function() {
  //   move back to open orders array
