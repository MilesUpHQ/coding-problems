
### Question 
Create a function that, given an input string, determines if the word can be completed.

An input string can be completed if additional letters can be added and no letters need to be taken away to match the word. 

Furthermore, the order of the letters in the input string must be the same as the order of letters in the final word.

```ruby
Examples
can_complete("butl", "beautiful") ➞ true
# We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

can_complete("butlz", "beautiful") ➞ false
# "z" does not exist in the word beautiful.

can_complete("tulb", "beautiful") ➞ false
# Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.

can_complete("bbutl", "beautiful") ➞ false
# Too many "b"s, beautiful has only 1.
```

Note: Both string input and word will be lowercased.

### Solution
```ruby
def can_complete(initial, word)
  arr = initial.chars.each_cons(2).to_a
  arr.each { |a, b| word.gsub!(/(?<=#{a})\w+?(?=#{b})/, '') }
  initial == word
end

puts can_complete("mse", "message")
```

######  source :https://edabit.com/challenges