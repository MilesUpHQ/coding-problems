### Question

As part of a data processing pipeline, complete the implementation of the pipeline method:

a) The method should accept a variable number of functions, and it should return a new function that accepts one parameter arg.


b) The returned function should call the first function in the pipeline with the parameter arg, and call the second function with the result of the first function.


c) The returned function should continue calling each function in the pipeline in order, following the same pattern, and return the value from the last function.


For example, pipeline(-> (x) { x * 3 }, -> (x) { x + 1 }, -> (x) { x / 2 }) then calling the returned function with 3 should return 5.

```ruby
def pipeline(*funcs)
  -> (arg) {
    # write your code here  
  }
end

fun = pipeline(-> (x) { x * 3 }, -> (x) { x + 1 }, -> (x) { x / 2 })
puts (fun.call(3)) # should print 5
```

### Solution
```ruby
def pipeline(*funcs)
  -> (arg) {
           funcs.collect {|x|   
           r = x.call(arg)
           arg = r
           }
     return arg
  }
end

fun = pipeline(-> (x) { x * 3 }, -> (x) { x + 1 }, -> (x) { x / 2 })
puts (fun.call(3)) # should print 5

```