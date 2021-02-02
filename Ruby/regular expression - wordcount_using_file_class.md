### Question

Write a Ruby script to read a file and find the wordcount of the file.

Hint: use regular expression and File class

### Solution

```
count = 0  
File.foreach( 'regex1.rb' ){ |line|   
count += line.scan( /[a-z0-9A-Z]+/ ).size  
}  
puts( "There are #{count} words in this file." )

```  
 
