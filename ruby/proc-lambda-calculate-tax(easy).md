### Question

Write a lambda/Proc expression inside a method to calculate different types of taxes.


Given Two product
* A  book costs Rs 58
* A bag costs Rs 300

Assume sales taxrate = 10%

vat taxrate = 18%

formula : Price = Price * taxrate


#### Expected output

* Salestax due on Book
* Vat due on Bag

### Solution
```ruby
def calcTax( taxRate )  
  return proc{|subtotal|  
    subtotal * taxRate  
  }   
end  
    
salesTax = calcTax( 0.10 )  
vat = calcTax( 0.18 )  

print( "Tax due on book = ")  
print( salesTax.call( 58 ) )  

print( "\nVat due on bag = ")  
print( vat.call( 300 ) )   

```  
######  source :  http://www.sapphiresteel.com 
