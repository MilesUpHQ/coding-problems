### Question

In this challenge, your task is to write a method convert_temp that helps in temperature conversion. 

The method will receive a number as an input (temperature), a named parameter input_scale (scale for input temperature), and an optional parameter output_scale (output temperature scale, defaults to Celsius) and return the converted temperature. 

It should perform interconversion between Celsius, Fahrenheit and Kelvin scale.

Formulae

```ruby
Kelvin (K) = Celsius + 273.15

Fahrenheit (°F) = (Celsius x 1.8) + 32
```

For example,

```ruby
> convert_temp(0, input_scale: 'celsius', output_scale: 'kelvin')
=> 273.15 

> convert_temp(0, input_scale: 'celsius', output_scale: 'fahrenheit')
=> 32.0
```
Note that the input values are lowercase version of corresponding scales.

Use case statement to check the possible cases.


### Solution
```ruby
def convert_temp(temp, input_scale:, output_scale: 'Celsius')

  case input_scale.downcase
    when 'fahrenheit'
      output_scale == 'kelvin' ? 
      puts(((temp - 32) / 1.8) + 273.15) : puts((temp - 32) / 1.8)
    when 'celsius'
      output_scale == 'kelvin' ? 
      puts(temp + 273.15) : puts((temp * 1.8) + 32)
    when 'kelvin'
      output_scale == 'celsius' ? 
      puts(temp - 273.15) : puts((temp - 273.15) * 1.8)
  end

end

convert_temp(100, input_scale: 'celsius', output_scale: 'kelvin')

```
