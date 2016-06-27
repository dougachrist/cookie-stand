// store-app.js
var product = '';
var elInput = '';
var wPage = document.getElementById('page');
webpage = wPage.textContent;
var openOrdersArray = [];
var closedOrdersArray = [];
// localStorage.setItem('openOrders',[]);

function Order(productOrdered,quantity,custName,address,city,state,zip,paymentType) {

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

// Pull Order details form Order page
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

    function buildTd(arrayItem) {
      var tableData = document.createElement('td');
      tableData.textContent = arrayItem;
      tableRow.appendChild(tableData);
    }

    for(var i = 0; i < openOrders2.length; i++) {

      var tableRow = document.createElement('tr');
      var tableData = document.createElement('td');
      tableData.textContent = 'open';
      tableData.className = 'openOrder';
      tableRow.appendChild(tableData);
      var tableData = document.createElement('td');
      tableData.textContent = '#900' + i;
      tableRow.appendChild(tableData);
      buildTd(openOrders2[i].productOrdered);
      buildTd(openOrders2[i].quantity);
      buildTd(openOrders2[i].custName);
      buildTd(openOrders2[i].address);
      buildTd(openOrders2[i].city);
      buildTd(openOrders2[i].state);
      buildTd(openOrders2[i].zip);
      buildTd(openOrders2[i].paymentType);
      openTable.appendChild(tableRow);
    }

    // STILL BUILDING CLOSED ORDERS TABLE

    // var closedTable = document.getElementById('closed');
    // closedTable.innerHTML = '';
    // // renderHeaderRow();
    //
    // for (var i = 0; i < closedOrdersArray.length; i++) {
    //
    //   var tableRow = document.createElement('tr');
    //   var tableData = document.createElement('td');
    //   tableData.textContent = 'closed';
    //   tableData.className = 'closedOrder';
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = '#900' + i;
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].productOrdered;
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].quantity;
    //   tableRow.appendChild(tableData);
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].custName;
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].address;
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].city;
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].state;
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].zip;
    //   tableRow.appendChild(tableData);
    //   var tableData = document.createElement('td');
    //   tableData.textContent = closedOrders[i].paymentType;
    //   tableRow.appendChild(tableData);
    //   openTable.appendChild(tableRow);
    // }

  });

}
