### Question

Musical instruments have a range of notes to play, some instruments having a much larger range than others.

Given the following ranges for the instrument, create a function that returns true if a given note is within a given instrument's range. Otherwise, return false.


| Instrument | Range |
|:----------:|:-----:|
| Piccolo    | D4-C7 |
| Tuba       | D1-F4 |
| Guitar     | E3-E6 |
| Piano      | A0-C8 |
| Violin     | G3-A7 |


```ruby
Examples

instrument_range("Piccolo", "A3") ➞ false

instrument_range("Violin", "G6") ➞ true

instrument_range("Piano", "C8") ➞ true
```

Notes

a) Tests will only include natural notes (i.e. you will only deal with letters and numbers, no special characters).

b) The musical scale follows this pattern: ... A1, B1, C1, D1, E1, F1, G1, A2, B2 ...

c) You don't need to worry about invalid inputs.

### Solution

```ruby
RANGE = {
  "Piccolo" => ("4D".."7C"),
  "Tuba" => ("1D".."4F"),
  "Guitar" => ("3E".."6E"),
  "Piano" => ("0A".."8C"),
  "Violin" => ("3G".."7A")
}

def instrument_range(instr, note)
  RANGE[instr].cover? note.reverse
end

puts instrument_range("Piccolo", "A3") #false

puts instrument_range("Violin", "G6") #true

puts instrument_range("Piano", "C8") #true
```
###### source : https://edabit.com/