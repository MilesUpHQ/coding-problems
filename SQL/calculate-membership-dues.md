### Library Management System with Membership Tiers

Scenario: 

The local library offers a tiered membership system (Basic, Silver, Gold) with varying loan limits and overdue fee structures. You are tasked with designing and implementing a database schema to manage this system.

Requirements:

- The system should store information about books, including title, author, ISBN, and genre.
- It should also store information about borrowers, including name, contact information, and library card number.
- The system needs to track loans, including the book being borrowed, the borrower who checked it out, and the loan date and due date.
- To manage membership tiers, a new table named "Memberships" is required. This table should store:

```
membership_id (INT, Primary Key)
tier (ENUM('Basic', 'Silver', 'Gold')) - Defines the membership level.
loan_limit (INT) - Specifies the maximum number of books a borrower can borrow at once, based on their tier.
daily_fine_rate (DECIMAL(5,2)) - Defines the daily overdue fine rate for this tier (applicable only to Basic and Silver).
borrower_id (INT) - Foreign key referencing the Borrowers table, establishing a one-to-one relationship between a borrower and their membership tier.
```

Tasks:

1. You need to design a trigger to automatically update the availability of a book when it is loaned or returned.
2. Write a SQL query to find all overdue books (books loaned past their due date), considering membership tiers when calculating potential overdue fines.

```
Basic members: $0.25 per day overdue.
Silver members: No fine for the first 3 overdue days, then $0.10 per day after.
Gold members: No fines.
```

The query should retrieve a list of overdue books, including:
- Borrower information (name and tier)
- Book details (title, author)
- Days overdue
- Estimated overdue fine based on membership tier

### Deliverables:

- Design a schema with tables and their relationships.
- Create tables in your chosen database management system. (This step can be omitted depending on the exercise)
- Implement a trigger to update book availability.
- Write a SQL query to identify overdue books with estimated fines based on membership tiers.
- This scenario presents a more complex library management system with membership tiers that impact loan limits and overdue fines. You need to design the schema, implement functionalities like triggers, and write a query that considers user-specific data (membership tier) for calculations.
