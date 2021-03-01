### Question
Create a single function that takes a string or an array and returns a coded or decoded message.

The first letter of the string, or the first element of the array represents the Character Code of that letter. The next elements are the differences between the characters: 

for example :

A +3 --> C 
z -1 --> y.


```ruby
Examples

dif_ciph("Hello") ➞ [72, 29, 7, 0, 3]

# H = 72, the difference between the H and e is 29 (upper- and lowercase).

# The difference between the two l's is obviously 0.


dif_ciph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) ➞ "Hi there!"


dif_ciph("Sunshine") ➞ [83, 34, -7, 5, -11, 1, 5, -9]
```
Note: The input of the function will always be a string or an array with numbers.

### Solution
```ruby
def dif_ciph(input)
  if input.instance_of? (Array) then
  # numbers given, decipher to string:
    cur = input[0]
    msg = cur.chr
    i = 1
    while i < input.size do
      diff = input[i]
      cur += diff
      msg += cur.chr
      i += 1
    end
      return msg
  else
  # string given, encipher to numbers:
    cur = input[0].ord
    cipher = [cur]
    i = 1
    while i < input.size do
      char = input[i]
      diff = char.ord - cur
      cipher << diff
      cur = char.ord
      i += 1
    end
    return cipher     
  end
end

puts dif_ciph("Hello") # [72, 29, 7, 0, 3]

puts dif_ciph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) # "Hi there!"
```

source : https://edabit.com/