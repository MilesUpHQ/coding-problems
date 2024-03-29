### Question

Implement `sort_cars` to sort the cars as per the given sequence of their grades.

```ruby
cars = [
  {name: "ciaz", grade: "luxury"},
  {name: "ignis", grade: "standard"},
  {name: "alto", grade: "standard"},
  {name: "baleno", grade: "premium"},
  {name: "scross", grade: "premium"}
];

sequence = ["luxury", "premium", "standard"];

sort_cars.call(cars, sequence)

# Example Output
[
  {name: "ciaz", grade: "luxury"},
  {name: "baleno", grade: "premium"},
  {name: "scross", grade: "premium"},
  {name: "ignis", grade: "standard"},
  {name: "alto", grade: "standard"}
]
```

### Solution

```ruby
sort_cars = -> (cars, sequence) { sequence.inject([]) { |acc, grade| acc.concat(cars.select{|c| c[:grade] == grade}) } }
```
