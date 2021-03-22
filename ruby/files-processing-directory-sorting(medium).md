### Question

The following code will do 

a) Recursively locate all files in all subdirectories beneath specific root directory.

b) display file sizes and total of all file sizes.

c) use hashes to store file and directory sizes.


Add the missing File class methods and complete this challenge

Note : You need to add the code where ever you find

> ==== Your code here ====

```ruby
$dirsize = 0
$dirs = {}
$files = {}

def processfiles( aDir )
  totalbytes = 0
  Dir. '#==== your code here ====' { # processing a directory
    |f|
    mypath = "#{aDir}\\#{f}"
    if '#==== your code here ====' (mypath) then	# if this is a directory
      if f != '.' and f != '..' then	# recurse...
        dsize = processfiles(mypath) / 1024	
        $dirs[mypath] = dsize
      end
    else
      filesize = '==== Your code here ====='
      totalbytes += filesize
      $files[mypath] = filesize
    end
}

 $dirsize += totalbytes
 return totalbytes
end


dirname = "D:/sedin2021/Mastering Ruby/Ruby Quiz"

if '=== your code here ====' then
  puts( "#{dirname} is not a valid directory" )
else
  processfiles( dirname )
  printf( "Size of this directory and subdirectories is #{$dirsize} bytes, #{$dirsize/1024}K, %0.02fMB\n\n",  "#{$dirsize/1048576.0}" )

  puts( "File sizes (ascending)...")	
  $files = '==== Your code here ===' # sorting
  $files.each{ |fname,fsize| puts( "#{fname} : #{fsize} bytes" ) }
  puts( "\nDirectory sizes (ascending)...")
  $dirs = '==== Your code here ===' # sorting
  $dirs.each{ |dname,dsize| puts( "#{dname} : #{dsize}K" ) }
end
```
output of the above code

```ruby
Size of this directory and subdirectories is 14240 bytes, 13K, 0.01MB

File sizes (ascending)...
D:/sedin2021/Mastering Ruby/Ruby Quiz\range.rb : 67 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\next.rb : 87 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\lamda.rb : 88 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\reduce.rb : 135 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\named_capture.rb : 202 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\loops.rb : 278 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\remove_undef.rb : 437 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\alias_quest.rb : 443 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\unlesss.rb : 512 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\alias_methods.rb : 553 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\chat_18.3.rb : 2974 bytes
D:/sedin2021/Mastering Ruby/Ruby Quiz\all_questions.txt : 8464 bytes

Directory sizes (ascending)...
[Finished in 0.5s]
```
### Solution

```ruby

$dirsize = 0
$dirs = {}
$files = {}

def processfiles( aDir )
  totalbytes = 0
  Dir.foreach( aDir ){
    |f|
    mypath = "#{aDir}\\#{f}"
    if File.directory?(mypath) then	# if this is a directory
      if f != '.' and f != '..' then	# recurse...
         dsize = processfiles(mypath) / 1024	
         $dirs[mypath] = dsize
      end
    else
      filesize = File.size(mypath)
      totalbytes += filesize
      $files[mypath] = filesize
    end
}
  $dirsize += totalbytes
  return totalbytes
end

dirname = "D:/sedin2021/Mastering Ruby/Ruby Quiz"

if !(File.directory?(dirname)) then
  puts( "#{dirname} is not a valid directory" )
else
  processfiles( dirname )
  printf( "Size of this directory and subdirectories is #{$dirsize} bytes, #{$dirsize/1024}K, %0.02fMB\n\n",  "#{$dirsize/1048576.0}" )

  puts( "File sizes (ascending)...")	
  $files = $files.sort{|a,b| a[1]<=>b[1]} 
  $files.each{ |fname,fsize| puts( "#{fname} : #{fsize} bytes" ) }
  puts( "\nDirectory sizes (ascending)...")
  $dirs = $dirs.sort{|a,b| a[1]<=>b[1]} 
  $dirs.each{ |dname,dsize| puts( "#{dname} : #{dsize}K" ) }
end
```
###### Source - http://www.sapphiresteel.com
