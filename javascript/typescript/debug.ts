/**
 * This code is designed to aggregate a list of transactions by userId,
 * compute the average amount spent per user, and return a list of strings with the average amount for each user,
 * sorted in descending order. However, there are several bugs in the code that need to be fixed.
 * 
 * Your task is to identify and fix these bugs to ensure the program works as expected.
 */
type Tx = { userId: string; amount: number };
type Stats = { total: number; count: number; avg: number };
type Aggregated = Record<string, Stats>;

function cloneDeep<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

function aggregateTxs<T extends Tx>(transactions: T[]): Aggregated {
  const txs = cloneDeep(transactions);
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
