### Question
Implement the unique_names method. When passed two arrays of names, it will return an array containing the names that appear in either or both arrays. The returned array should have no duplicates.

For example, calling unique_names(["Ava", "Emma", "Olivia"], ["Olivia", "Sophia", "Emma"]) should return an array containing Ava, Emma, Olivia, and Sophia in any order.

```ruby
def unique_names(names1, names2)
  #your code
end

names1 = ["Ava", "Emma", "Olivia"]
names2 = ["Olivia", "Sophia", "Emma"]

puts(unique_names(names1, names2)) # should print Ava, Emma, Olivia, Sophia
```

### Solution
```ruby
def unique_names(names1, names2)  
  result = []  
  result << names1 << names2  
  return result.flatten.uniq  
end  
  
names1 = ["Ava", "Emma", "Olivia"]  
names2 = ["Olivia", "Sophia", "Emma"]  

puts(unique_names(names1, names2))  

```
###### source: https://www.testdome.com/
