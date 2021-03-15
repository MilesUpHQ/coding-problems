### Question

Write a function that returns the dice with the correct amount of eyes in a single string.

![alt text](https://github.com/Venirails/images/blob/main/dice.jpg?raw=true)

```ruby
6 can be written as:

O-O
O-O
O-O

or

O-O/O-O/O-O  // with slashes and dashes

And 

1 => "---/-O-/---"

2 => "O--/---/--O"

3 => "O--/-O-/--O"

4 => "O-O/---/O-O"

5 => "O-O/-O-/O-O"

6 => "O-O/O-O/O-O"


```

Your function will have to return the dice as shown in the image. Multiple dice are separated by a comma and space.

```ruby
Examples

dice(3) ➞ "O--/-O-/--O"

dice(8) ➞ "O-O/O-O/O-O, O--/---/--O"

dice(6) ➞ "O-O/O-O/O-O"
```

Notes

The input is always a positive number, return an empty string when 0 is given.

### Solution
```ruby
$eyes = {1 => "---/-O-/---", 2 => "O--/---/--O", 3 => "O--/-O-/--O",
        4 => "O-O/---/O-O", 5 => "O-O/-O-/O-O", 6 => "O-O/O-O/O-O"}

def dice(num)
  if num <= 6 then return $eyes[num] end
  ans = $eyes[6]
  num -= 6
    while num > 0 do
      if num >= 6 then
        ans += ', ' + $eyes[6]
      else
        ans += ', ' + $eyes[num]
      end
     num -= 6
    end
  return ans
end

puts dice(3) #"O--/-O-/--O"

puts dice(8) #"O-O/O-O/O-O, O--/---/--O"

puts dice(6) #"O-O/O-O/O-O"
```
###### source : https://edabit.com/