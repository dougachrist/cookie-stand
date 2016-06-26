// store-app.js

var product = '';

var elInput = '';

var wPage = document.getElementById('page');

webpage = wPage.textContent;

// var updateOrderForm = function() {
//   if (webpage === 'Order Processing') {
//     var productProcess = document.getElementById('product');
//     productProcess.textContent = product;
//   }
// };

// if(webpage === 'Store') {

if(document.getElementById('orderForm')) {
  var form = document.getElementById('orderForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var elInput = document.getElementById('productInput');
    product = elInput.value;
    localStorage.setItem('productType',product);
    console.log('product:',product);
    // updateOrderForm();
  });
}

console.log('product:',product);

if (webpage === 'Order Processing') {
  var productProcess = document.getElementById('product');
  productProcess.textContent = localStorage.getItem('productType');


  var form = document.getElementById('processingForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('product:',product);
    var productProcess = document.getElementById('product');
    productProcess.textContent = localStorage.getItem('productType');
  });
}
