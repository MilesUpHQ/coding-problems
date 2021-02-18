### Question
Implement a group_by_owners function that:

a) Accepts a hash containing the file owner name for each file name.

b) Returns a hash containing an array of file names for each owner name, in any order.


For example, 

for hash 

{'Input.txt' => 'Randy', 'Code.py' => 'Stan', 'Output.txt' => 'Randy'} 


the group_by_owners function should return 

{'Randy' => ['Input.txt', 'Output.txt'], 'Stan' => ['Code.py']

```ruby
def group_by_owners(files)
  return nil
end

files = {
  'Input.txt' => 'Randy',
  'Code.py' => 'Stan',
  'Output.txt' => 'Randy'
}

puts group_by_owners(files)
```


### Solution

```ruby
def group_by_owners(files)
  new_hash = {}
    files.each do |key, value|
      new_hash[value] = [] unless new_hash.has_key?(value)
      new_hash[value] << key
    end 
  return new_hash
end

files = {
  'Input.txt' => 'Randy',
  'Code.py' => 'Stan',
  'Output.txt' => 'Randy'
}

puts group_by_owners(files)
```
###### source: https://www.testdome.com/