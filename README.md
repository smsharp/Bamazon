# Bamazon

## Description

This application is a simple command line based storefront, like Amazon. It will take in orders from customers, deplete stock from the store's inventory and inform customers of their order completion and total price. 

### How to Run Bamazon

In order to run this application, you will need MySQL on your computer. If you don't have it, visit the [MySQL installation page](https://dev.mysql.com/downloads/mysql/). Once you have MySQL installed, you will be able to create the "Bamazon" database and the "products" table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client to populate the database, then you will be ready to use the customer interface. Make sure you input your MySQL password into the bamazoncustomer.js file on line 12.

### Customer View

The customer view allows the user to view the current inventory of store items: item IDs, product names, department of the products, price and quantity in stock. The customer is then prompted to enter the ID of the product they wish to purchase. If the selected quantity is currently in stock, the user's order is placed, and total purchase price is displayed. The database is updated to remove the quantity purchased from the inventory. If the desired quantity is not in stock, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

	https://github.com/smsharp/Bamazon.git
	cd bamazon
	npm install inquirer
	npm install mysql
	node bamazonCustomer.js
	
**Once you have installed inquirer and mysql, you will only need to run 'node bamazonCustomer.js'

### Screenshots for Running the Application

Upon running bamazoncustomer.js the customer is show the list of items for sale and prompted to input the ID of the product they wish to purchase.
![node1](https://user-images.githubusercontent.com/28895778/31412219-4583c732-ade2-11e7-972a-03c09756a64d.PNG)

When they enter the ID of the product, they are prompted to input how many they wish to purchase.
![node2](https://user-images.githubusercontent.com/28895778/31412223-49d34772-ade2-11e7-99c4-0a7a2670c739.PNG)

The customer is then informed that their order was placed and told how much their total purchase is.
![node3](https://user-images.githubusercontent.com/28895778/31412227-4c2aa952-ade2-11e7-96b8-5af16f91e5f8.PNG)

The inventory is then updated and the quantity that was purchased is removed from the inventory.
![node4](https://user-images.githubusercontent.com/28895778/31412232-4f18245a-ade2-11e7-991f-72e1a3283acd.PNG)

If the customer enters something other than a whole number, they receive this error message.
![node5](https://user-images.githubusercontent.com/28895778/31412233-5171457e-ade2-11e7-80f8-8db792b9b41e.PNG)

If the ID they enter does not match any in the inventory, the customer sees this error message.
![node6](https://user-images.githubusercontent.com/28895778/31412238-53289c64-ade2-11e7-9f7d-270e6c973945.PNG)

If the quantity they enter is over the amount in stock, the customer receives this message.
![node7](https://user-images.githubusercontent.com/28895778/31412248-5a4004ba-ade2-11e7-9302-13bfacdc73ed.PNG)

