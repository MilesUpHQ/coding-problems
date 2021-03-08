### Question

In this challenge, sort an array containing a series of dates given as strings. Each date is given in the format DD-MM-YYYY_HH:MM:

>"12-02-2012_13:44"

The priority of criteria used for sorting will be:

a)Year

b)Month

c)Day

d)Hours

e)Minutes

Given an array arr and a string mode, implement a function that returns:

a) if mode is equal to "ASC", the array arr sorted in ascending order.

b) if mode is equal to "DSC", the array arr sorted in descending order.

```ruby
Examples
sort_dates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC") 

#["10-02-2016_12:30", "10-02-2018_12:15", "10-02-2018_12:30"]

sort_dates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC") 

#["10-02-2018_12:30", "10-02-2018_12:15", "10-02-2016_12:30"]

sort_dates(["09-02-2000_10:03", "10-02-2000_18:29", "01-01-1999_00:55"], "ASC") 

#["01-01-1999_00:55", "09-02-2000_10:03", "10-02-2000_18:29"]
```

Remember: the date is in the format DD-MM-YYYY_HH:MM.

You can expect only valid formatted dates, without exceptions to handle.

### Solution
```ruby
require 'date'

def sort_dates(arr, mode)
  arr.sort_by! { |x| DateTime.parse(x) }
  arr.reverse! if mode == "DSC"
  arr
end

print sort_dates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC") 

#["10-02-2016_12:30", "10-02-2018_12:15", "10-02-2018_12:30"]

print sort_dates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC") 

# ["10-02-2018_12:30", "10-02-2018_12:15", "10-02-2016_12:30"]
```

###### source: https://edabit.com/