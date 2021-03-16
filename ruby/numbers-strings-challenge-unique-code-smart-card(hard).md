### Question

You are generating a smart card unique code for all Indians after registering their details online.

Given a hash containing the personal data of a person (name, gender and date of birth) return the 8 code characters as a string following these steps:

```ruby
months = { "1" => "A", "2" => "B", "3" => "C", 

         "4" => "D", "5" => "E", "6" => "H",

         "7" => "L", "8" => "M", "9" => "P", 

         "10" => "R", "11" => "S", "12" => "T" }
```

Generate 3 capital letters from the name, if it has:

   a) Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).

   b) More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).

   c) Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).

   d) Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).


Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

   a) Take the last two digits of the year of birth (1985 -> 85).

   b) Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.

   c) For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).

   d) For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

```ruby

Examples

unique_code({
  "name" => "Gupta",
  "gender" => "M",
  "dob" => "1/1/1910"
}) # "GPT10A01"

unique_code({
  "name" => "Rani",
  "gender" => "F",
  "dob" => "1/12/1950"
}) # "RNA50T41"

unique_code({
  "name" => "Pandi",
  "gender" => "M",
  "dob" => "16/1/1928"
}) # "PND28A16"

```
Notes

a) Code letters must be uppercase.

b) Date of birth is given in D/M/YYYY format.

c) The conversion table for months is already in the starting code.

### Solution

```ruby
$months = { "1" => "A", "2" => "B", "3" => "C",

          "4" => "D", "5" => "E", "6" => "H",

          "7" => "L", "8" =>"M", "9" => "P",

          "10" => "R", "11" => "S", "12" =>"T" }
     
def unique_code(person)

  # name - 2nd 3 characters

  cons, vowels = [],[]
  person["name"].upcase.chars.each do |c| 
    if "AEIOU".include?(c) 
      vowels << c
    elsif cons.size < 4
      cons << c 
    end
  end

  if cons.size > 3 
    cons.delete_at(1)
  end
  
  code = (cons + vowels + ['X'])[0..2]

  # split d.o.b. 

  dob = person["dob"].split("/").map{ |p| p.to_i }
  dbg = "#{dob[2]%100}#{$months[dob[1].to_s] + (person['gender'] == 'F' ? (40 + dob[0]).to_s : (100+dob[0]).to_s[1..-1])}"

  # put it all together

  return code.join + dbg
end

puts unique_code({
  "name" => "Gupta",
  "gender" => "M",
  "dob" => "1/1/1910"
}) # "GPT10A01"

puts unique_code({
  "name" => "Rani",
  "gender" => "F",
  "dob" => "1/12/1950"
}) # "RNA50T41"

puts unique_code({
  "name" => "Pandi",
  "gender" => "M",
  "dob" => "16/1/1928"
}) # "PND28A16"
```
###### source : https://edabit.com/
