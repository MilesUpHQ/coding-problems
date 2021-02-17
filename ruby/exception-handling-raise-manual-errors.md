
### Question
Write a ruby script to get a name as input and display the name as

 > “Hello Name”

a) Use Exception handling syntax using methods.

b) If the user is entering nil or empty input, raise a manually defined error to the Exception class and display it.

c) Use backtrace method to investigate the error

### Solution

```ruby
class NoNameError < Exception
  def to_str
    "No Name given!"    
  end
end

def sayHello(aName)
  begin
    if(aName == "") or (aName == nil) then
      raise NoNameError 
    end
  rescue NoNameError => e
    puts(e.class)
    puts("message: " + e)
  else
    puts("Hello #{aName}")
  end
end

sayHello(nil)
```
######  source :  http://www.sapphiresteel.com 
