### Question

Implement the function find_roots to find the roots of the quadratic equation: ax2 + bx + c = 0. The function should return an array containing both roots in any order. If the equation has only one solution, the function should return that solution as both elements of the array. The equation will always have at least one solution.

The roots of the quadratic equation can be found with the following formula: 

![\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}](https://latex.codecogs.com/svg.latex?\Large&space;x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}) 


For example, find_roots(2, 10, 8) should return [-1, -4] or [-4, -1] as the roots of the equation 2x2 + 10x + 8 = 0 are -1 and -4.
```
def find_roots(a, b, c)
//your code
end

puts find_roots(2, 10, 8)
```

### Solution
```

def find_roots(a, b, c)  
  r1 = (b * -1) + Math.sqrt((b ** 2) - (4 * a * c))   
  r1 = r1/ (2 * a)  
  r2 = (b * -1) - Math.sqrt((b ** 2) - (4 * a * c))  
  r2 = r2/ (2 * a)  
  return [r1,r2]  
end  
  
puts find_roots(2, 10, 8)  
```