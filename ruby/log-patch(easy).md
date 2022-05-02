A script you are writing uses the Numeric objects built-in functions (such as 10.abs) and the Math module.

We want to ensure the script has a consistent style.

Implement a wrapper function on the Numeric object that exposes Math.log10 function in such a way that 10.log10 would return 1.

```ruby
class Numeric
# Write the code that goes here
end

begin
  puts 10.log10
rescue
  puts "Undefined method: log10"
end
```
