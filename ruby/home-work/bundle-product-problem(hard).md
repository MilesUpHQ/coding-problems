You are working on a backend system for an e-commerce platform built with Ruby on Rails.
The platform allows users to create custom bundles of products. 
Each product has certain constraints and availability. 
Your task is to write Ruby code to efficiently handle the creation of bundles,
ensuring that the selected products meet all constraints and are available.

### Product Constraints:

Each product has a unique identifier (product_id).
Products have a price (price) and a quantity available (quantity).
Some products have dependencies, meaning they can only be included in a bundle if certain other products are also included.
There are also constraints on the maximum and minimum number of products that can be included in a bundle.

### Example Numbers:

Let's add some example numbers to the scenario:
Suppose you have 5 products with the following details:

```
Product 1: { product_id: 1, price: $10, quantity: 10 }
Product 2: { product_id: 2, price: $15, quantity: 5 }
Product 3: { product_id: 3, price: $20, quantity: 3 }
Product 4: { product_id: 4, price: $25, quantity: 8 }
Product 5: { product_id: 5, price: $30, quantity: 6 }
```

You have constraints dictating that:

```
Product 1 must be included in every bundle.
Product 2 can only be included if Product 1 is also included.
Product 3 can only be included if at least 2 units of Product 1 are included.
Product 4 can be included regardless of other products.
Product 5 can only be included if Product 4 is included.
```

The minimum quantity constraints for the final bundle are:

```
Product 1: 1
Product 2: 1
Product 3: 2
Product 4: 1
Product 5: 1
```
Write Ruby methods to implement the following functionality:

Generate All Possible Combinations:

Write a method generate_combinations(products) that takes an array of product hashes as input and returns an array of all possible combinations of products. Each combination should be represented as an array of product IDs.

filter_valid_combinations(combinations) that take an array of product combinations (arrays of product IDs) as input and filter out the combinations that violate any constraints. Return an array containing only the valid combinations.
