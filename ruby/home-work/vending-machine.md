## Vending Machine Simulator with Mixins:

### Problem:

Create a Ruby program to simulate a vending machine using mixins for enhanced code organization and reusability.

### Requirements:

Classes:

Product: Represents a single product with attributes like name, price, and quantity.
Coin: Represents a single coin with a denomination value.
VendingMachine: Represents the machine itself, containing an inventory of products, a collection of coins, and methods for user interaction and transactions.
Modules:

InventoryManagement: This module holds methods for managing product stock, including adding, removing, and checking availability.
Currency: This module holds methods for handling different coin denominations, calculating change, and tracking total inserted amount.
Mixins:

Payable: This mixin defines methods for accepting payment and checking if sufficient funds are inserted. Use it in the Product class.
Dispensable: This mixin defines methods for dispensing the product and updating its quantity. Use it in the Product class.
Reportable: This mixin defines methods for generating reports on sales and product quantities. Use it in the VendingMachine class.
Additional Requirements:

Use mixins effectively to encapsulate functionalities like payment, dispensing, and reporting.
Avoid code duplication by leveraging mixins across different classes.
Write unit tests for your classes, modules, and mixins.
Design a clear and user-friendly interface for user interaction.
Allow users to select products by category or name.
Bonus:

Implement restocking functionality with different restocking levels for different products.
Use the Payable mixin to allow for different payment methods (e.g., credit card) if implemented.
Design a visually appealing interface using ASCII art or libraries like TTY-Prompt.
Implement a maintenance mode for restocking and configuration changes.
This revised version encourages developers to think about modularity and code reuse through mixins while maintaining the core vending machine simulation concept. It provides a good balance between practicality and the introduction of mixins as a design principle. Remember to guide them on the appropriate use of mixins and potential pitfalls to ensure they gain a valuable learning experience.
