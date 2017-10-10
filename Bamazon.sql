DROP DATABASE IF EXISTS Bamazon;

-- Create database --
CREATE DATABASE Bamazon;

USE Bamazon;

-- Create a table for the store inventory --
CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(10) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(100) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert inventory into the table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('BenQ Projector', 'Electronics', 640.00, 30),
		('Optima Projector', 'Electronics', 549.00, 46),
		('Acer Projector', 'Electronics', 442.00, 20),
		('MacBeth Shoes', 'Clothing', 44.00, 10),
		('Adidas Shoes', 'Clothing', 62.00, 20),
		('Scarf', 'Clothing', 7.00, 77),
		('Landscape Painting', 'Art', 33.00, 80),
		('Wood Carving', 'Art', 16.00, 23),
		('Mint Plant', 'Gardening', 2.70, 46),
		('Dill Plant', 'Gardening', 12.00, 46),
		('Grape Vine', 'Gardening', 22.50, 48),
		('Japanese Maple', 'Gardening', 210.70, 12),
		('Basil Plant', 'Gardening', 6.99, 121),
		('Basset Hound', 'Pet', 260.00, 4),
		('Snapping Turtle', 'Pet', 41.00, 16),
		('Alligator', 'Pet', 168.00, 11),
		('Hyacinth Macaw', 'Pet', 400.00, 2),
		('Matilda', 'Books', 14.95, 16),
		('Herzog', 'Books', 15.44, 10),
		('Rubber Duck', 'Toys', 2.25, 381),
		('Frisbee', 'Sporting Goods', 4.25, 128),
		('Golf Clubs', 'Sporting Goods', 114.00, 11);
