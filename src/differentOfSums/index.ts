// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference

function differenceOfSums(n: number, m: number): number {
  const total = sum(n);
  const k = sum(Math.floor(n / m)) * m;

  return total - 2 * k;
}

const sum = (n) => (n * (n + 1)) / 2;
