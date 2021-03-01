### Question

Create a function that takes an array and returns a string.

0 - Repeat the actual decrypted value (using like this : 014 to repeat 14 times).

Warning: When you start a repeat you can't stop it to add other numbers.

1, 2, 3, 4 = g, o, l, e

5 - Corresponding to up case of letter before this.

6 - Add a point to the end.

7 - Change case of the first letter.

8 - Reverse the string.

9 - Clear the actual decrypted string.

```ruby
Examples

num_to_google(["12213467"]) ➞ "Google."

num_to_google(["12213467", "321"]) ➞ "Google.log"

num_to_google(["12213467", "321", "122906"]) ➞ "Google.log"

num_to_google(["15", "2502", "15", 3545]) ➞ "GOOGLE"

num_to_google(["15", "2502", "15", 35, 45]) ➞ "GOOGLE"

num_to_google([15, 202, 1, 3, 4]) ➞ "Google"
```

### Solution
```ruby
def num_to_google(arr)
  res = ""
    arr.each do |s| 
      cur = ""
      s = s.to_s
      s.chars.each.with_index do |c,i|
        c = c.to_i
        case c
          when 0
          cur = cur * s[i+1..-1].to_i
          break
        when 1..4
          cur += "gole"[c-1]
        when 5
          cur = cur[0..-2] + cur[-1].upcase
        when 6
          cur += "."
        when 7
          cur = (cur[0].ord^32).chr + cur[1..-1]
        when 8
          cur = cur.reverse
        when 9
          cur = ""
        end
      end
     res += cur
    end
   res
end

puts num_to_google(["12213467"]) # "Google."

puts num_to_google(["12213467", "321"]) # "Google.log"

puts num_to_google(["12213467", "321", "122906"]) # "Google.log"

puts num_to_google(["15", "2502", "15", 3545]) # "GOOGLE"

puts num_to_google(["15", "2502", "15", 35, 45]) # "GOOGLE"

puts num_to_google([15, 202, 1, 3, 4])#➞ "Google"
```
source : https://edabit.com/