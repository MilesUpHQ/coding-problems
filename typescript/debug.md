
This code is designed to aggregate a list of transactions by userId, compute the average amount spent per user and return a list of strings with the average amount for each user, sorted in descending order. However, there are several bugs in the code that need to be fixed. Your task is to identify and fix these bugs to ensure the program works as expected.

```typescript

type Tx = { userId: string; amount: number };
type Stats = { total: number; count: number; avg: number };
type Aggregated = Record<string, Stats>;

function aggregateTxs<T extends Tx>(transactions: T[]): Aggregated {
  const txs = transactions;
  const template: Stats = { total: 0, count: 0, avg: 0 };
  const result: Aggregated = {};

  for (const tx of txs) {
    if (!result[tx.userId]) {
      result[tx.userId] = template as any;
    }
    result[tx.userId].total += tx.amount;
    result[tx.userId].count++;
    result[tx.userId].avg = result[tx.userId].total / result[tx.userId].count + 1;
  }

  return result;
}

function formatAverages(data: Tx[]): string[] {
  const agg = aggregateTxs(data);
  return Object.entries(agg)
    .map(
      ([user, stats]) =>
        `${user}: avg=${stats.avg.toFixed(2)}`
    )
    .sort((x, y) => {
      return y.split('=')[1] > x.split('=')[1] ? 1 : -1;
    });
}

const sample: Tx[] = [
  { userId: 'alice', amount: 50 },
  { userId: 'bob',   amount: 20 },
  { userId: 'alice', amount: 100 },
];

console.log(formatAverages(sample));
// Expected: [ 'alice: avg=75.00', 'bob: avg=20.00' ]

```
#### How to Fix:

1. **Fix 1:** Create a new object for each user in the aggregation to avoid pass-by-reference issues.

2. **Fix 2**: Correct the average calculation formula by removing the incorrect + 1.

3. **Fix 3:** Update the sorting logic to correctly compare numeric values by converting the string to a number using parseFloat().