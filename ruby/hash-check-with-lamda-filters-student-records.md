Implement the filter method. It should accept a list of students and a variable number of filters.

a) The filters will be passed in as lambdas, each of which will take one student record and return a boolean value.

b) The filter method should return a list of student records that have passed through all the filters.

c) If no filters are provided, the list of student records should be returned as is. If no students pass through all the provided filters (or if no students are provided), return an empty array.

For example, consider the following code:

students = [
  { name: 'Thomas Edison',  age: 33, gpa: 3.45 },
  { name: 'Grace Hopper',  age: 23,gpa: 3.99 },
  { name: 'Leonardo DaVinci', age: 43, gpa: 2.78 }
]


honor_roll = ->(record) { record[:gpa] > 3.0 }
filter(students, honor_roll) 

```ruby
def filter(students, *filters)
  # Write your code here
  return nil
end

students = [
  { name: 'Thomas Edison',  age: 33, gpa: 3.45 },
  { name: 'Grace Hopper',  age: 23,gpa: 3.99 },
  { name: 'Leonardo DaVinci', age: 43, gpa: 2.78 }
]

honor_roll = ->(record) { record[:gpa] > 3.0 }

honor_roll_members = filter(students, honor_roll)
puts honor_roll_members
```
should return:

[{:name=>"Thomas Edison", :gpa=>3.45},{:name=>"Grace Hopper", :gpa=>3.99}]



### Solution

```ruby
def filter(students, *filters)
  result = []
    unless filters.empty? or filters == nil  
      filters.reduce(students) { |students, filter| students.select(&filter) }
    else
      result = students
    end
end

students = [
  { name: 'Thomas Edison',  age: 33, gpa: 3.45 },
  { name: 'Grace Hopper',  age: 23,gpa: 3.99 },
  { name: 'Leonardo DaVinci', age: 43, gpa: 2.78 }
]

honor_roll = ->(record) { record[:gpa] > 3.0 }
roll_2 = ->(record) { record[:age] < 30 }  # added one more filter

honor_roll_members = filter(students, honor_roll, roll_2)
puts honor_roll_members 

```