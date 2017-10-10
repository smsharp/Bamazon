# Bamazon

## Description

This application is a simple command line based storefront, like Amazon. It will take in orders from customers, deplete stock from the store's inventory and inform customers of their order completion and total price. 

### How to Run Bamazon

In order to run this application, you will need MySQL on your computer. If you don't have it, visit the [MySQL installation page](https://dev.mysql.com/downloads/mysql/) to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client to populate the database, then you will be ready to use the customer interface.

### Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, product names, department of the products, price and quantity in stock. The customer is then prompted to enter the ID of the product they wish to purchase. If the selected quantity is currently in stock, the user's order is placed, and total purchase price is displayed. The database is updated to remove the quantity purchased from the inventory. If the desired quantity is not in stock, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

	https://github.com/smsharp/Bamazon.git
	cd bamazon
	npm install inquirer
	npm install mysql
	node bamazonCustomer.js

### Screenshots for running the application



