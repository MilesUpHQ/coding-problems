### Question

Create a function that takes in a Roman numeral as a string and converts it to an integer, returning the result. 

The function should work for all Roman numerals representing positive integers less than 4000.


The following table shows how digits will be represented in Roman numeral notation:

| Place value | 1 | 2  | 3   | 4  | 5 | 6  | 7   | 8    | 9  |
|-------------|---|----|-----|----|---|----|-----|------|----|
| Ones        | I | II | III | IV | V | VI | VII | VIII | IX |
| Tens        | X | XX | XXX | XL | L | LX | LXX | LXXX | XC |
| Hundreds    | C | CC | CCC | CD | D | DC | DCC | DCCC | CM |
| Thousands   | M | MM | MMM | -  | - | -  | -   | -    | -  |

```ruby
Examples

parse_roman_numeral("VII") ➞ 7

parse_roman_numeral("DCLXXIX") ➞ 679

parse_roman_numeral("MMMCMV") ➞ 3905

```
Notes

a) All letters will be in uppercase.

b) Assume all inputs will be well-formed Roman numerals.

c) While you could probably solve this by separately checking for each of these sequences inside the string, there is a smarter way. 

clue : Think about the numerical value each individual letter has, and how the letter immmediately following it can affect that letter's numerical value.

### Solution
```ruby
def parse_roman_numeral(num)

  text = num.to_s
  text = text.gsub("IX", "VIV")
  text = text.gsub("IV", "IIII")
  text = text.gsub("XC", "LXL")
  text = text.gsub("XL", "XXXX")
  text = text.gsub("CM", "DCD")
  text = text.gsub("CD", "CCCC")

  total = 0
  counter = 0
  length = text.length

  while (counter < length)
   item = text[counter]
    if (item == "I")
      total += 1
      counter += 1
    elsif (item == "V")
      total += 5
      counter += 1
    elsif (item == "X")
       total += 10
       counter += 1
    elsif (item == "L")
       total += 50
       counter += 1
    elsif (item == "C")
       total += 100
       counter += 1
    elsif (item == "D")
       total += 500
       counter += 1
    elsif (item == "M")
       total += 1000
       counter += 1
    else
       counter += 1
    end
  end

 return total
end

puts parse_roman_numeral("VII") # 7

puts parse_roman_numeral("DCLXXIX") # 679

puts parse_roman_numeral("MMMCMV") # 3905
```
###### source : https://edabit.com/