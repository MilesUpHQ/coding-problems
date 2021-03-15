### Question

The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

a) Return its additive persistence.

b) Return its multiplicative persistence.

```ruby
Examples: Additive Persistence

additive_persistence(1679583) ➞ 3
# 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
# 3 + 9 = 12
# 1 + 2 = 3
# It takes 3 iterations to reach a single-digit number.

additive_persistence(123456) ➞ 2
# 1 + 2 + 3 + 4 + 5 + 6 = 21
# 2 + 1 = 3

additive_persistence(6) ➞ 0
# Because 6 is already a single-digit integer.


Examples: Multiplicative Persistence

multiplicative_persistence(77) ➞ 4
# 7 x 7 = 49
# 4 x 9 = 36
# 3 x 6 = 18
# 1 x 8 = 8
# It takes 4 iterations to reach a single-digit number.

multiplicative_persistence(123456) ➞ 2
# 1 x 2 x 3 x 4 x 5 x 6 = 720
# 7 x 2 x 0 = 0

multiplicative_persistence(4) ➞ 0
# Because 4 is already a single-digit integer.
```
Notes

The input n is never negative.

### Solution
```ruby
def additive_persistence(n)
  num = n.to_s
  count = 0
  while num.length != 1 do
    sum = 0
    num.chars.each { |n| sum += n.to_i }
    num = sum.to_s
    count += 1
  end
 count
end

def multiplicative_persistence(n)
  num = n.to_s
  count = 0
  while num.length != 1 do
    prod = 1
    num.chars.each { |n| prod *= n.to_i }
    num = prod.to_s
    count += 1
  end
 count
end

puts additive_persistence(1679583) # 3
# 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
# 3 + 9 = 12
# 1 + 2 = 3
# It takes 3 iterations to reach a single-digit number.

puts additive_persistence(123456) # 2
# 1 + 2 + 3 + 4 + 5 + 6 = 21
# 2 + 1 = 3

puts additive_persistence(6) # 0
# Because 6 is already a single-digit integer.
puts multiplicative_persistence(77) # 4
# 7 x 7 = 49
# 4 x 9 = 36
# 3 x 6 = 18
# 1 x 8 = 8
# It takes 4 iterations to reach a single-digit number.

puts multiplicative_persistence(123456) # 2
# 1 x 2 x 3 x 4 x 5 x 6 = 720
# 7 x 2 x 0 = 0

puts multiplicative_persistence(4) # 0
# Because 4 is already a single-digit integer.
```
###### source : https://edabit.com/