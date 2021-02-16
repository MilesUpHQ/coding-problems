### Question  
```ruby
PI = 3.14
  
module Mathematics  
	module Geometry  
	PI="22/7"
	class Area  
		class Formula  
			module SHAPES  
				class CIRCLE  
				    PI=3.14  
					def find_area(r )
						puts( ::PI * r * r)  
					end  
				end  
			end  
		end  
	end  
	end  
end 
``` 
#### Expected output

a)Print the constant value of  Geometry module?


b)Print the Constant value of class Circle?


c)Call the find_area method using an object?


### Solution
```ruby
PI = 3.14
  
module Mathematics  
	module Geometry  
	PI="22/7"
		class Area  
			class Formula  
				module SHAPES  
					class CIRCLE  
					PI=3.14  
						def find_area(r )
						puts( ::PI * r * r)  
						end  
					end  
				end  
			end  
		end  
	end  
end  
#answers
puts(Mathematics::Geometry::PI)  
puts(Mathematics:: Geometry::Area::Formula::SHAPES::CIRCLE::PI)  
ob = Mathematics:: Geometry::Area::Formula::SHAPES::CIRCLE.new  
ob.find_area(3)  
```