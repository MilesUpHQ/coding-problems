### Question
```ruby
class Rectangle  
 attr_accessor :width, :height

  def initialize(width, height)  
    self.width = width  
    self.height = height  
  end  
   
  def area  
    width * height  
  end  
end  
class Square < Rectangle  
  def initialize(size)  
    super(size, size)  
  end  
end  
  
square = Square.new(5)  
p square.area #=> 25  
```

This code will work well.but here Square class also inherits Rectangle#width= and Rectangle#height=, which can lead to inconsistent data in the Square object
```ruby
square.width = 10
p [square.width, square.height] #=> [10, 5] -- then it is not a square!
```


How will you rewrite the same script to make sure square and rectangle areas are calculated correctly?


Hint : Use methods. Use code reuse techniques.

### Solution
```ruby
class Rectangle
 attr_accessor :width, :height  

  def initialize(width, height)  
    self.width = width  
    self.height = height  
  end  
  
  def area  
    width * height  
  end  
end  

class Square < Rectangle  
  def initialize(size)  
    super(size, size)  
  end  

  def width=(size)  
    @width = size  
    @height = size  
  end  

  def height=(size)  
    @width = size  
    @height = size  
  end  
end  

square = Square.new(5)  
square.width = 10  
p [square.width, square.height] #=> [10, 10]  
p square.area  
```
###### Source: Gregory Brown (practicingruby.com)