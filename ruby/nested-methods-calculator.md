### Question  

In the following code

a)Create an object and call the method/methods.

b)Is it possible to access the inner methods using the same object?

c)What will happen if we access the inner methods directly using the same object?


```ruby
class Calc  
  def Arithmetic  
    print( "inside arithmetic" )  
    def add  
      puts(20+10)  
      subract  
    end   	       
    def subract  
      puts( 20-10 )  
      multiply  
    end  
    def multiply  
      puts(20*10)  
    end   
    def divide  
      puts( 20/10 )  
    end  
  end  
end  
```
### Solution
```ruby
class Calc  
  def Arithmetic  
    print( "inside arithmetic" )  
    def add  
      puts(20+10)  
      subract  
    end   
    def subract  
      puts( 20-10 )  
      multiply  
    end  
    def multiply  
      puts(20*10)  
      divide      #called the divide method
    end   
    def divide  
      puts( 20/10 )  
    end  
  end  
end  
 
ob = Calc.new  
ob.Arithmetic  
ob.add   #using the same object,call the inner methods
puts  
ob.subract  
puts  
ob.multiply  
puts      
ob.divide  
```
 
 
 
