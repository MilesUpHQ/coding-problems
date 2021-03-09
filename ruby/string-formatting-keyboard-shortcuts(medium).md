### Question

Given a sentence containing few instances of "Ctrl + C" and "Ctrl + V", return the sentence after those keyboard shortcuts have been applied! 

Note that:

a) In this case, "Ctrl + C" will copy all text behind it.

b)In this case, "Ctrl + V" will do nothing if there is no "Ctrl + C" before it.

c) A "Ctrl + C" which follows another "Ctrl + C" will overwrite what it copies.

```ruby
Examples

keyboard_shortcut("the egg and Ctrl + C Ctrl + V the spoon") # "the egg and the egg and the spoon"

keyboard_shortcut("WARNING Ctrl + V Ctrl + C Ctrl + V") # "WARNING WARNING"

keyboard_shortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V") # "The The Town The The Town"
```
Notes

a) Keyboard shortcut commands will appear like normal words in a sentence but shouldn't be copied themselves (see example #2).

b) Pasting should add a space between words.

### Solution
```ruby
def keyboard_shortcut(str)
  str.gsub!(/Ctrl \+ ([CV])/, '[\1]')
  res, clipboard = [], []
  str.split(" ").each do |word|
    case word
    when "[C]" then clipboard = res
    when "[V]" then res += clipboard
    else            res << word
    end
  end
 res.join(" ")
end

puts keyboard_shortcut("the egg and Ctrl + C Ctrl + V the spoon") # "the egg and the egg and the spoon"

puts keyboard_shortcut("WARNING Ctrl + V Ctrl + C Ctrl + V") # "WARNING WARNING"

puts keyboard_shortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V") # "The The Town The The Town"

```
source : https://edabit.com/