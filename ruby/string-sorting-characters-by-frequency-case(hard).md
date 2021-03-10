### Question

Write a function to sort the characters from a given string and return a new string. 

Sorting conditions:

a) Most frequent characters - move in front.

b) For the same frequency upper case characters - move in front.

c) For the same frequency and case( upper / lower ) - sort them alphabetically.

```ruby
Examples

frequency_sort("tree") ➞ "eert"

frequency_sort("cccaaa") ➞ "aaaccc"

frequency_sort("Aabb") ➞ "bbAa"
```

### Solution
```ruby
def get_extended_letter_count(text)
  cnt = Hash.new
  cnt.default = 0
  i = 0
  while i < text.length
    cnt[text[i]] += 1
    i += 1
  end
 return cnt
end

def frequency_sort(s)
  cnt = get_extended_letter_count(s)
  arr = []
  cnt.each{ |c,cnt| arr << [c, c.ord, cnt] }
  arr = arr.sort_by { |a,b,c| [-c, b]}
  ans = ""
  arr.each{ |c, o, cnt| ans += c * cnt }
  return ans
end


puts frequency_sort("tree") # "eert"

puts frequency_sort("cccaaa") # "aaaccc"

puts frequency_sort("ccSctiXmStfmctmgfmfcfgtggEiicfiwtitgcgwScfXwScmwgtmfwigmifgfmSfwitgX") 

#"ffffffffffggggggggggccccccccciiiiiiiimmmmmmmmttttttttwwwwwwSSSSSXXXE"
```
###### source : https://edabit.com/