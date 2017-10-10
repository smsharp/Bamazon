// Required packages
var inquirer = require('inquirer');
var mysql = require('mysql');

// MySQL connection parameters
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "Bamazon"
});

// Establish Connection
connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id: ' + connection.threadId)
});

// showInventory will retrieve the current inventory from the database and output it to the console
function showInventory() {

	connection.query('SELECT * FROM products', function(err, data){
		if (err) throw err;
		console.log('Items For Sale:');
		console.log('.....................................................\n');

		for(i=0;i<data.length;i++){
			console.log('Item ID:' + data[i].item_id + '  ||  ' + 'Product Name: ' + data[i].product_name + '  ||  ' + 'Department: ' + data[i].department_name + '  ||  ' + 'Price: $' + data[i].price + '  ||  ' + 'Quantity left: ' + data[i].stock_quantity);
		}
		
	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the customer for item and quantity they want to purchase
	  	placeOrder();
	  })
}

// Prompt the customer for the item and quantity they want to purchase
function placeOrder() {

	// Prompt the customer to select an item
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID of the product you would like to purchase.',
			validate: function(value) {
				var integer = Number.isInteger(parseFloat(value));
				var sign = Math.sign(value);

				if (integer && (sign === 1)) {
					return true;
				} else {
					return 'Please enter a whole non-zero number.';
				}
			},
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many units would you like to buy?',
			validate: function validateInput(value) {
				var integer = Number.isInteger(parseFloat(value));
				var sign = Math.sign(value);

				if (integer && (sign === 1)) {
					return true;
				} else {
					return 'Please enter a whole non-zero number.';
				}
			},
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

		// Query db to confirm that there is enough of the product in inventory
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				showInventory();

			} else {
				var productData = data[0];

				// If the quantity requested by the customer is available
				if (quantity <= productData.stock_quantity) {
					console.log('Placing order...');

					// Construct the updating query string
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Thank you for your order. Your total is $' + productData.price * quantity);
						console.log('Please shop again!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Insufficient Quantity!');
					console.log('Please modify your amount.');
					placeOrder();
				}
			}
		})
	})
}

// Show the list of inventory
showInventory();
