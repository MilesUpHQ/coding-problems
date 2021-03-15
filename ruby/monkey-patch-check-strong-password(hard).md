### Question
Create a function that validate the input password.

A password is considered strong if it satisfies the following criteria:

a) Its length is at least 8.

b) It contains at least one digit.

c) It contains at least one lowercase English character.

d) It contains at least one uppercase English character.

e) It contains at least one special character: ["@","!","*","#","."]

```ruby
"Ruby!2021" - Strong password

"Rubyrails" - Week Password.Add atleast one digit,special character

"rubyrails" - Weak password.Try some other password
```

### Solution
```ruby
class String # Monkey patch String class
  def is_upper?
    self == self.upcase
  end
  def is_lower?
    self == self.downcase
  end
  def is_digit?
    self !~ /\D/
  end
end

def password_validator(input_string)

 n = input_string.length 
 hasLower = false
 hasUpper = false
 hasDigit = false
 specialChar = false
 specialCharacters = ["@","!","*","#","."]

 input_string.each_char do |s|
   if specialCharacters.include?(s)
     specialChar = true        
   elsif s.is_digit?
     hasDigit = true
   elsif s.is_upper?
     hasUpper = true
   elsif s.is_lower?
     hasLower = true
   end
 end

# Strength of password 
  if (hasLower == true and hasUpper == true and hasDigit == true and specialChar== true and n >= 8)
    puts("#{input_string} - Strong password")
  elsif ((hasLower == true or hasUpper == true) and specialChar == true and n >= 6)
    puts("#{input_string} - Moderate Password.Add atleast one digit")
  elsif (hasLower == true and hasUpper == true) 
    puts("#{input_string} - Week Password.Add atleast one digit, one special character")
  else
    puts("#{input_string} - Weak password.Try some other password")
  end
end 


password_validator("Ruby!2021")
password_validator("Rubyrails")
password_validator("rubyrails")
```

