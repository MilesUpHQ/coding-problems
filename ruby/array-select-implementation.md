### Problem:

Implement "select" method for array in ruby without using select.

### Solution 1:

```ruby
class Array
  def custom_select
    nums = []
    self.each { |n| nums << n if yield(n) }
    nums
  end
end
[1,11,15].custom_select {|num| num > 10 }
```

### Solution 2:

```ruby
class Array
  def custom_select
    result = []
    each do |element|
      result << element if yield(element)
    end
    result
  end
end


[1,11,15].custom_select {|num| num > 10 }
```

### Solution 2 with proc:

```ruby
class Array
  def custom_select(&block)
    result = []
    each do |element|
      result << element if block.call(element)
    end
    result
  end
end
proc = Proc.new { |num| num > 10 }
selected_numbers = numbers.custom_select(&proc)
```
