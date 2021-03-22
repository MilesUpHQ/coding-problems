### Questions
Given two integers as arguments, create a function that finds the largest prime within the range of the two integers.

```ruby
Examples

prime_in_range(2, 10) ➞ 7

# range [2, 3, 4, 5, 6, 7, 8, 9, 10] 

and the largest prime is 7.

prime_in_range(10, 2) ➞ 7

# [10, 9, 8, 7, 6, 5, 4, 3, 2] 

and the largest prime is 7.

prime_in_range(4, 24) ➞ 23

# range [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

and the largest prime is 23.
```

Notes

All numbers will be positive integers.

### Solution
```ruby
def is_prime?(n)
  (2...n).to_a.each { |x| return false if n % x == 0 }
  true
end

def prime_in_range(a, b)
  if a > b
    range = (b..a).to_a
  else
    range = (a..b).to_a
  end
 range.reverse.each { |n| return n if is_prime?(n) }
end

puts prime_in_range(2, 10) # 7

puts prime_in_range(10, 2) # 7

puts prime_in_range(4, 24) # 23
```
###### source : https://edabit.com/