// store-app.js

var product = '';

var elInput = '';

var wPage = document.getElementById('page');

webpage = wPage.textContent;

var updateOrderForm = function() {
  if (webpage === 'Order Process') {
    var productProcess = document.getElementById('product');
    productProcess.textContent = product;
  }
};

if(webpage === 'Store') {

  var form = document.getElementById('orderForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var elInput = document.getElementById('productInput');
    product = elInput.value;
    console.log('product:',product);
    updateOrderForm();
  });
}

console.log('product:',product);

var updateOrderForm = function() {
  if (webpage === 'Order Process') {
    var productProcess = document.getElementById('product');
    productProcess.textContent = product;
  }
};
