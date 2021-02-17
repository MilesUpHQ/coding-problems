### Question

a) What is the output of the following code? What is the problem you observe from this output?


b) How will you fix the name conflict (expression method) without renaming that method?



```ruby
module Happy  
  def Happy.mood  
    return "happy"  
  end  
  def expression  
    return "smiling"  
  end  
end  
 
module Sad  
  def Sad.mood  
    return "sad"  
  end  
  def expression  
    return "frowning"  
  end  
end  
  
class Person  
 include Happy  
 include Sad  
 attr_accessor :mood  
  def initialize  
    @mood = Happy.mood  
  end  
end  
   
 p1 = Person.new  
 puts(p1.mood)  
 puts(p1.expression)  

```
### Solution
```ruby
module Happy  
  def Happy.mood  
    return "happy"  
  end  
  def expression  
    return "smiling"  
  end  
 alias happyexpression expression  #name conflict fix
end  
module Sad  
  def Sad.mood  
    return "sad"  
  end  
  def expression  
    return "frowning"  
  end  
 alias sadexpression expression  #name conflict fix
end  

class Person  
 include Happy  
 include Sad  
 attr_accessor :mood  
  def initialize  
    @mood = Happy.mood  
  end  
end  
p2 = Person.new  
puts(p2.mood)  
puts(p2.expression)  
puts(p2.happyexpression)  
puts(p2.sadexpression)  
```

######  source :  http://www.sapphiresteel.com 
