### Question

String to Phone Number

You're able to call numbers like 

>1-800-flowers 

which replace the characters with the associated numbers on a cellular device keyboard.

```ruby
Conversion

abc  = 2
def  = 3
ghi  = 4
jkl  = 5
mno  = 6
pqrs = 7
tuv  = 8
wxyz = 9
```

Create a function that takes a string as argument.

Convert all letters to numbers by using a cellular device keyboard as reference and leave any other characters in.

Return a string containing the argument with replaced letters.

Examples
```ruby
dial("1-800-HOTLINEBLING") ➞ "1-800-468546325464"

>dial("abc-def-ghi-jkl!!") ➞ "222-333-444-555!!"
```
### Solution
```ruby
def dial(txt)
  letters = 'abcdefghijklmnopqrstuvwxyz'
  numbers = '22233344455566677778889999'
  txt.downcase.tr(letters, numbers)
end
```
######  source :https://edabit.com/challenges