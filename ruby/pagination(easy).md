The front end interface of a stock trading web application has the trading data for the day in JSON format. To paginate the user trade report for the day, implement the function getPageData, which:

Accepts a string in JSON format, the page size, and the page number.
Sums up the stocks each user has traded for that day.
Sorts user data in descending order by total stocks per user. If more than one user has the same stock total, they can be in any order.
Returns a string in JSON format that has the trading data for the given page number depending on page size. Page numbers will start from 1.
For example, the code below:

```ruby
tradeData = 
[
  {"user": "Rob", "company": "Google", "countOfStocks": 5},
  {"user": "Bill", "company": "Goldman", "countOfStocks": 12},
  {"user": "Rob", "company": "JPMorgan", "countOfStocks": 10}
]

puts getPageData(tradeData, 2, 1)
```

should print:

```
'[{"user":"Rob","totalStocks":15},{"user":"Bill","totalStocks":12}]'
```
