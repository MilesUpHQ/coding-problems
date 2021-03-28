A category tree is a representation of a set of categories and their parent-child relationships. Each category has a unique name (no two categories have the same name). A category can have a parent category. Categories without a parent category are called root categories.

To add a category to a category tree, the name and the parent of the category should be provided. When adding a root category, a nil value should be provided as the parent. A call to get_children should return an array containing the direct children of the specified category in any order.

ArgumentError should be thrown when adding a category that has already been added anywhere in the CategoryTree or if a parent is specified but does not exist.

For example:

```ruby
c = CategoryTree.new
c.add_category('A', nil)
c.add_category('B', 'A')
c.add_category('C', 'A')
puts c.get_children('A').join(',')
```

Running this code should display 'B,C' or 'C,B'.
Implement the add_category and get_children methods of the CategoryTree class.

## Solution

