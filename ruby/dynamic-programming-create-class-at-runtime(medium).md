### Question

Write a method that will take a name as input.

Create a class using the input name and define a method with name "myname" inside the class at runtime(not a regular class you define in ruby files).Create an object to call the "myname" method.

It should print "called myname method from class #{name}"

Notes : 

You must use Dynamic programming concepts to solve this challenge.

for example,

```ruby
puts("What shall we call this class? ")
className = gets.strip().capitalize()	

# ==== Your code here =====

obj = className.new
obj.myname
```

Output of the above code

```ruby
What shall we call this class?
Dynamic

I'll give it a method called 'myname'

called myname method from class 'Dynamic'
```

### Solution
```ruby
puts("What shall we call this class? ")
className = gets.strip().capitalize()		# make sure class name starts with capital letter

Object.const_set(className,Class.new)		# create new class
puts("I'll give it a method called 'myname'" )
className = Object.const_get(className)

className::module_eval{ define_method(:myname){ 
			puts("called myname method from class '#{self.class}'" ) } 
			}

obj = className.new
obj.myname

#What shall we call this class?
#Dynamic

#I'll give it a method called 'myname'

#called myname method from class 'Dynamic'
```
######  source :  http://www.sapphiresteel.com 
