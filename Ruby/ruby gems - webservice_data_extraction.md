### Question
Use any ruby gem to extract data from the following URLs

#### JSON
https://jsonplaceholder.typicode.com/users

#### XML

https://www.w3schools.com/xml/plant_catalog.xml


Parse the retrieved data and print the values.


### Solution

Use httparty gem

```
require 'httparty'  

response = HTTParty.get('https://jsonplaceholder.typicode.com/users')  

puts response.body, response.code 

  
 // Use loops to display the values one by one

```