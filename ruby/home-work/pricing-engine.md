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

### Solution

```ruby
class Sales

  def self.analyze_competitors_price(product_prices, competitors_prices)
    return {} if competitors_prices.nil? || product_prices.nil? || competitors_prices.empty? || product_prices.empty?

    price_analysis = {}

    product_prices.each do |product, my_price|
      competitor_price = competitors_prices[product]
      if competitor_price.nil?
        price_analysis[product] = "no_competitor_data"
      elsif !my_price.is_a?(Numeric) || !competitor_price.is_a?(Numeric)
        price_analysis[product] = "invalid_price_data"
      elsif competitor_price < my_price
        price_analysis[product] = "above"
      elsif competitor_price > my_price
        price_analysis[product] = "below"
      else
        price_analysis[product] = "equal"
      end
    end

    price_analysis
  end

  def self.calculate_demand(sales_data)
    return {} if sales_data.nil? || sales_data.empty?

    validated_data = validate_sales_data(sales_data.dup)
    demand_data = {}

    validated_data.each do |product, sales|
      if sales.empty?
        demand_data[product] = 0.0
      else
        demand = (sales.sum.to_f) / sales.size.to_f
        demand_data[product] = demand.round(2)
      end
    end

    demand_data
  end

  def self.validate_sales_data(sales_data)
    sales_data.each do |product, sales|
      if sales.nil? || sales.empty?
        sales_data[product] = []
      elsif !sales.is_a?(Array)
        puts "Warning: Sales data for #{product} is not an array. Converting to empty array."
        sales_data[product] = []
      else
        original_size = sales_data.size
        sales_data[product] = sales.select {|sale| 
          sale.is_a?(Numeric) && (sale.is_a?(Integer) || !sale.nan?)
        }

        removed_count = original_size - sales_data[product].size
        if removed_count > 0
          puts "Warning: Removed #{removed_count} invalid entries from #{product}"
        end
      end
    end
    sales_data
  end

end

# COMPREHENSIVE EDGE CASE TESTING:
puts "=== COMPREHENSIVE EDGE CASE TESTING ==="
puts

test_cases = [
  # Normal cases
  {
    name: "Normal case",
    sales: {product1: [5, 8, 10], product2: [3, 5, 6]},
    my_prices: {product1: 20, product2: 15},
    competitor_prices: {product1: 18, product2: 16}
  },
  
  # Edge cases for sales data
  {
    name: "Empty sales arrays",
    sales: {product1: [], product2: [5]},
    my_prices: {product1: 20, product2: 15},
    competitor_prices: {product1: 18, product2: 16}
  },
  
  {
    name: "Nil in sales data",
    sales: {product1: [5, nil, 10], product2: nil},
    my_prices: {product1: 20, product2: 15},
    competitor_prices: {product1: 18, product2: 16}
  },
  
  {
    name: "Mixed data types in sales",
    sales: {product1: [5, "hello", 10, nil], product2: "not_array"},
    my_prices: {product1: 20, product2: 15},
    competitor_prices: {product1: 18, product2: 16}
  },
  
  # Edge cases for pricing
  {
    name: "Missing competitor data",
    sales: {product1: [5, 8, 10], product2: [3, 5, 6]},
    my_prices: {product1: 20, product2: 15, product3: 25},
    competitor_prices: {product1: 18, product2: 16}  # Missing product3
  },
  
  {
    name: "Non-numeric prices",
    sales: {product1: [5, 8, 10], product2: [3, 5, 6]},
    my_prices: {product1: "twenty", product2: 15},
    competitor_prices: {product1: 18, product2: "sixteen"}
  },
  
  # Extreme edge cases
  {
    name: "Empty everything",
    sales: {},
    my_prices: {},
    competitor_prices: {}
  },
  
  {
    name: "Nil inputs",
    sales: nil,
    my_prices: nil,
    competitor_prices: nil
  }
]

test_cases.each_with_index do |test_case, index|
  puts "Test #{index + 1}: #{test_case[:name]}"
  puts "Sales demand result:"
  result1 = Sales.calculate_demand(test_case[:sales])
  p result1
  puts "Price analysis result:"
  result2 = Sales.analyze_competitors_price(test_case[:my_prices], test_case[:competitor_prices])
  p result2
  puts "---"
end
```
