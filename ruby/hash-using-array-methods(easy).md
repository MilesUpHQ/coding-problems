### Question
Given two hash 
```ruby
h1 = {'key1'=>'val1', 'key2'=>'val2', 'key3'=>'val3', 'key4'=>'val4'}
h2 = {'key1'=>'VAL_1', 'KEY_TWO'=>'val2', 'key3'=>'VALUE_3', 'key4'=>'Val_4'}
```

Rules : All the results/outout should be an Array.


a) Find the intersection of both hash keys alone

b) Find the intersection of both hash values alone

c) Merge both hash keys

d) Find the difference of both hash values

e) Append the keys of both arrays

f) After appending reverse the result array 


### Solution

```ruby
  h1 = {'key1'=>'val1', 'key2'=>'val2', 'key3'=>'val3', 'key4'=>'val4'}  
  h2 = {'key1'=>'VAL_1', 'KEY_TWO'=>'val2', 'key3'=>'VALUE_3', 'key4'=>'Val_4'}  
  
 p( h1.keys & h2.keys )   
 p( h1.values & h2.values )  
 p( h1.keys + h2.keys )  
 p( h1.values - h2.values )  
 p( (h1.keys << h2.keys)  )  
 p( (h1.keys << h2.keys).flatten.reverse  ) 
 ``` 
 ######  source :  http://www.sapphiresteel.com 

