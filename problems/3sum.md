## Problem

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105


## Solution 1 ( Sort + 2 pointer aproach)

```ruby
def three_sum(nums)
  results = []
  nums.sort!
  (0..nums.length - 3).each do |i|
    next if i > 0 && nums[i] == nums[i - 1]
    left, right = i + 1, nums.length - 1
    while left < right
      sum = nums[i] + nums[left] + nums[right]
      if sum == 0 
        results << [nums[i], nums[left], nums[right]]
        left += 1
        right -= 1
        left += 1 while left < right && nums[left] == nums[left - 1] # skip duplicates
        right -= 1 while left > right && nums[right] == nums[right + 1] # skip duplicates
      elsif sum < 0
        left += 1
      elsif sum > 0
        right -= 1
      end
    end
  end
  results
end
```

## Solution 2 (sort + hash table or hash map)

```ruby
def three_sum(nums)
      results = []
      nums.sort!
      seen = {}
      (0..nums.length - 3).each do |i|
        next if i > 0 && nums[i] == nums[i - 1]
        (i+1..nums.length-1).each do |j|
          # p "i: #{i}, j: #{j}"
          third_num = 0 - nums[i] - nums[j]
          if seen[third_num]
            results << [nums[i], nums[j], third_num].sort
            j+=1 while j+1 < nums.length && nums[j] == nums[j+1]
          else
            seen[nums[j]] = true
          end
        end
      end
      results.uniq!
    end

    p three_sum(nums)
```

## Solution 3 (sort + linear search)

```ruby
nums = [1, 0, -1, 0, -2, 2]

def three_sum(nums)
  nums.sort!
  result = []
  nums.each_with_index do |num, i|
    (i +1).upto(nums.length - 1) do |j|
      complement = 0 - num[i] - num[j]
      if nums.include?(complement)
        result << [num[i], num[j], complement]
      end
    end
  end
  result.uniq
end

p three_sum(nums)

```
