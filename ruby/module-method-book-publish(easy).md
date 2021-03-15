### Question
```ruby
module Book  
  def price(n) 
    return n
  end  

  def author(a)
    return a
  end      
end  

class Library  
 include Book 

  def publish  
    puts(price(200))  
    puts(author("Google"))  
  end  
end  

```

a) In the above coding, if you need to use author method as both an instance method and as a module method, how will you do?


b) Show how to access the author method with an object and without an object?


### Solution
```ruby
module Book  
  def price(n) 
    return n
  end  

  def author(a)
    return a
  end  
  
 module_function :author  #Both instance and module method
end  

class Library  
 include Book  

  def publish  
    puts(price(200))  
    puts(author("Google"))  
  end  
end  

ob = Library.new  
ob.publish  
puts(Book.author("Amazon"))

```










