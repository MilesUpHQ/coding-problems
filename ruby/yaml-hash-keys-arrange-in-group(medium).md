### Question

You have given a YAML file with some data.

For example
```ruby
---

Input.txt: Randy

Code.py: Stan

Output.txt: Randy

```
Convert the data into a hash.After that 
implement a group_by_owners function that:

a) Accepts a hash containing the file owner name for each file name.

b) Returns a hash containing an array of file names for each owner name, in any order.


For example, for hash 

{'Input.txt' => 'Randy', 'Code.py' => 'Stan', 'Output.txt' => 'Randy'} 


the group_by_owners function should return 

{'Randy' => ['Input.txt', 'Output.txt'], 'Stan' => ['Code.py'] }

Convert this result hash into YAML format again.

```ruby

---
Randy:
- Input.txt
- Output.txt
Stan:
- Code.py

````
Use this clue

```ruby
def group_by_owners(files)
  # write your code here
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
require 'yaml'

input = YAML.load("---
                   Input.txt: Randy
                   Code.py: Stan
                   Output.txt: Randy") 

def group_by_owners(files)
  new_hash = {}
    files.each do |key, value|
      new_hash[value] = [] unless new_hash.has_key?(value)
      new_hash[value] << key
    end 
  return new_hash
end

files = input.to_hash

puts group_by_owners(files).to_yaml


#---
#Randy:
#- Input.txt
#- Output.txt
#Stan:
#- Code.py

```
