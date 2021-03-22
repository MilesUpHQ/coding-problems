### Question

Given n non-negative integers `a1, a2, ..., an` where each represents a point at coordinate `(i, a_i)`. 'n' vertical lines are write a method that takes an integer array and returns a hash that contains the number of occurrences for each element.

```ruby
Example
Input: [1,2,1,1,3,4,2,4,3,3,5]
Output: {1 => 3, 2 => 2, 3 => 3, 4 => 2, 5 => 1}
```

### Solution

```ruby
group_occurences = -> (elements) { elements.inject(Hash.new(0)){|acc, e| acc[e] +=1; acc } }
puts group_occurences.call([1,2,1,1,3,4,2,4,3,3,5])
```
