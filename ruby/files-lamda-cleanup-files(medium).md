### Question

You are in the midst of organizing all of your coding projects. It's a mess! Every file you've ever created is located in the same folder.

To clean it up, you've decided that you will use one of two organization methods.

```ruby
The prefix method:

You will group all files with the same project name under the same folder.

The suffix method: 

You will group all files with the same extension under the same folder.
```
Create a function that takes in the current array sorts the files according to the organization method (prefix or suffix).

Clue : Use File class inside a lamda to define prefix and suffix methods

```ruby
Example 

 'prefix' => ->(file) { #your File class code here },
```

```ruby
Examples

# Sorting by project name (ex1 and ex2)
clean_up(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") ➞ [
  ["ex1.html", "ex1.js"],
  ["ex2.html", "ex2.js"]
]

# Sorting by extension (.html and .js)
clean_up(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") ➞ [
  ["ex1.html", "ex2.html"],
  ["ex1.js", "ex2.js"]
]

clean_up(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix") ➞ [
  ["music_app.js", "music_app.png", "music_app.wav"],
  ["tetris.png", "tetris.js"]
]

clean_up(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") ➞ [
  ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
]

clean_up(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") ➞ [
  ["_1.rb"], ["_2.rb"],
  ["_3.rb"], ["_4.rb"]
]
```

Note

Keep elements in the same relative order.

### Solution

```ruby
CRITERIA = {

 'prefix' => ->(file) { File.basename(file, '.*') },
 'suffix' => ->(file) { File.extname(file) },

}

def clean_up(files, sort)
  criteria = CRITERIA[sort]
  files.group_by do |file|
    criteria.call(file)
  end.map do |key, grouped_files|
     grouped_files
     #code to delete the file(File.delete) as the file names are just an array.
  end
end


puts clean_up(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") 
# [ ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]]

# Sorting by project name (ex1 and ex2)
puts clean_up(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") #
#[ ["ex1.html", "ex1.js"], ["ex2.html", "ex2.js"]]

# Sorting by extension (.html and .js)
puts clean_up(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") #
#[["ex1.html", "ex2.html"],["ex1.js", "ex2.js"]
```
###### source : https://edabit.com/