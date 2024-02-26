### Problem 

You are building a dynamic pricing engine for an e-commerce platform using Ruby on Rails. The pricing engine should consider various factors such as demand, inventory levels, and competitor pricing to set optimal prices for products.

### Data Model:

Each product in the system has an ID, a base price, and an inventory quantity.
Competitor pricing data is available, including competitor product IDs and their corresponding prices.
Historical sales data is available, indicating the number of units sold for each product over time.

Historical Sales –
product1 = 5,8,10
product2 = 3,5,6

Prices –
Your Price – product1 = 20, product2 = 15, product3 = 25
Competition Price - product1 = 18, product2 = 16, product3 = 24

Optimal Price –
Your prices = product1 = 20, product2 = 15, product3 = 25
Demand levels = product1 = 7.67, product2 = 4.67, product3 = 6.0
competition price = product1 = 18, product2 = 16, product3 = 24


### Implement

Question 1 - Demand Analysis:
Implement a Ruby method that takes in historical sales data and returns a hash indicating the demand level for each product. The demand level is calculated as the average units sold per day over the given historical data.

Question 2 - Extend the pricing engine to consider competitor pricing. 
Implement a method that takes in the current product prices, competitor pricing data, and returns a hash indicating whether each product's price is above, below, or equal to the average competitor price.
