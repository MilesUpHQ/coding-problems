### Problem

We have a money transfer application that can transfer money to different countries’ banks. I want to get the total amount of all transactions that have happened till now on that platform. Keep in mind you would be dealing with different currencies and their conversion rates at different point of time. Design the database schema for transactions and currencies etc and write query to get the total amount.

### Possible solution:

Here's the database schema design for your money transfer application with a query to get the total transaction amount:

Tables:

```
Currencies:

currency_code (VARCHAR(3), PRIMARY KEY): Unique code for the currency (e.g., USD, EUR, INR).
name (VARCHAR(255)): Full name of the currency (e.g., United States Dollar, Euro, Indian Rupee).

ExchangeRates:

id (SERIAL, PRIMARY KEY): Auto-incrementing ID for the exchange rate record.
currency_code (VARCHAR(3), FOREIGN KEY REFERENCES Currencies(currency_code)): Code of the currency for this exchange rate.
date (DATE): Date for which the exchange rate is valid.
rate (DECIMAL(10,4)): Exchange rate to convert the currency to a base currency (e.g., 1 USD).

Transactions:

id (SERIAL, PRIMARY KEY): Auto-incrementing ID for the transaction record.
sender_user_id (INT, FOREIGN KEY REFERENCES Users(id)): ID of the user who sent the money.
receiver_user_id (INT, FOREIGN KEY REFERENCES Users(id)): ID of the user who received the money.
amount (DECIMAL(10,2)): Amount of money transferred in the sender's currency.
sent_currency_code (VARCHAR(3), FOREIGN KEY REFERENCES Currencies(currency_code)): Currency code in which the money was sent.
received_currency_code (VARCHAR(3), FOREIGN KEY REFERENCES Currencies(currency_code)): Currency code in which the money was received.
transaction_date (DATETIME): Date and time of the transaction.
```

Query to Get Total Transaction Amount:


```sql
SQL
SELECT SUM(
    T.amount * (
        CASE
            WHEN T.sent_currency_code = 'BASE_CURRENCY' THEN 1
            ELSE ER.rate
        END
    )
) AS total_transaction_amount
FROM Transactions T
LEFT JOIN ExchangeRates ER
    ON T.sent_currency_code = ER.currency_code
    AND T.transaction_date = ER.date
GROUP BY T.sent_currency_code;
```

Explanation:

- This query uses three tables: Transactions (T), Currencies, and ExchangeRates (ER).
- We calculate the total transaction amount for each sent currency.
- We use a CASE statement to handle conversions:
  - If the sent currency is the base currency (defined by you, e.g., USD), the rate is 1.
  - Otherwise, we use the exchange rate from the ExchangeRates table on the transaction date.
- We join the Transactions table with the ExchangeRates table based on sent_currency_code and transaction_date to find the appropriate exchange rate.
- We use SUM to aggregate the total amount after applying the exchange rate.
- The query is grouped by sent_currency_code to show the total for each currency used.

Note:

Replace 'BASE_CURRENCY' with the actual base currency code you're using for calculations.
This schema assumes you have a separate Users table to store user information.
This design allows you to track transactions in different currencies and calculate the total amount considering historical exchange rates. You can modify it further based on your specific needs.
