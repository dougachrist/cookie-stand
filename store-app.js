// store-app.js

var product = '';

var elInput = '';

var wPage = document.getElementById('page');

var openOrdersArray = [];
var closedOrdersArray = [];
localStorage.setItem('openOrders',[]);

function Order(productOrdered,quantity,custName,address,city,state,zip,paymentType) {
  // this.order# = i
  this.orderStatus = open;
  this.productOrdered = productOrdered;
  this.quantity = quantity;
  this.custName = custName;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.paymentType = paymentType;
  openOrdersArray.push(this);

}

webpage = wPage.textContent;

var HeaderRowData = ['Order Status','Order #','Product','Quantity','Name','Address','City','State','ZIP Code','Payment Type'];

var renderHeaderRow = function() {
  var openTable = document.getElementById('open');
  var tableRow = document.createElement('tr');
  for(var j = 0; j < HeaderRowData.length; j++) {
    var openTable = document.getElementById('open');
    var tableData = document.createElement('td');
    tableData.textContent = HeaderRowData[j];
    tableRow.appendChild(tableData);
  }
  openTable.appendChild(tableRow);
};

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

    // CLEAR input fields
    document.getElementById('orderForm').reset();

    var newOrder = new Order(inputProduct, inputQuantity, inputCustName,inputCustAddress,inputCustCity,inputCustState,inputCustZip,inputCustPaymentType);

    localStorage.setItem('openOrders', JSON.stringify(openOrdersArray));
  });
}

if(webpage === 'Order Processing') {

  var form = document.getElementById('processingForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var orderdata = localStorage.getItem('openOrders');
    var openOrders2 = JSON.parse(orderdata);

    var openTable = document.getElementById('open');
    openTable.innerHTML = '';
    renderHeaderRow();

    for (var i = 0; i < openOrders2.length; i++) {

      var tableRow = document.createElement('tr');
      var tableData = document.createElement('td');
      tableData.textContent = 'open';
      tableData.className = 'openOrder';
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = '#900' + i;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].productOrdered;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].quantity;
      tableRow.appendChild(tableData);
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].custName;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].address;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].city;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].state;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].zip;
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = openOrders2[i].paymentType;
      tableRow.appendChild(tableData);
      openTable.appendChild(tableRow);
    }
  });

}

// if(webpage === 'Order Processing') {
//
//   var moveOrder = document.getElementsByClass('openOrder');
//   moveOrder.addEventListener('click', function(event) {
//     var status = this.setAttribute('id', 'clicked');
//     var removeRow = document.getElementById('clicked')
//
//

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
