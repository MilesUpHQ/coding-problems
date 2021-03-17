### Question

Given an array of integers, find the length of the longest range of consecutive integers that are contained in the sorted version of the array.

```ruby
Here's an illustrative example. Consider the array:

[4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]

which, after sorting, becomes:

[1, 3, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]

The longest consecutive subsequence is now clearly [8, 9, 10, 11, 12]

which has length 5.
```
```ruby
Examples

max_consec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]) ➞ 5

# After sorting array becomes [1, 2, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]

# Longest consecutive subsequence is [8, 9, 10, 11, 12], which has length 5



max_consec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4

# After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]

# Longest consecutive subsequence is [11, 12, 13, 14], which has length 4



max_consec([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 6

# After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]

# Longest consecutive subsequence is [1, 2, 3, 4, 5, 6], which has length 6
```
Notes

As in the 2nd and 3rd examples, the given array is allowed to include repeated elements, but such repetitions are ignored when finding the longest range of consecutive elements.

### Solution
```ruby
def max_consec(arr)
	arr = arr.uniq.sort
	c = m = 1
	(1..(arr.size - 1)).each do |i|
		if arr[i] - arr[i - 1] == 1
			c += 1
			m = [c, m].max
		else
			c = 1
		end
	end
	m
end

puts max_consec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]) # 5

# After sorting array becomes [1, 2, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]

# Longest consecutive subsequence is [8, 9, 10, 11, 12], which has length 5



puts max_consec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) # 4

# After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]

# Longest consecutive subsequence is [11, 12, 13, 14], which has length 4



puts max_consec([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) # 6

# After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]

# Longest consecutive subsequence is [1, 2, 3, 4, 5, 6], which has length 6
```

###### source : https://edabit.com/