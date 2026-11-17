// https://leetcode.com/problems/mirror-distance-of-an-integer/

function mirrorDistance(n: number): number {
  return Math.abs(n - reverse(n));
}

function reverse(n: number) {
  let rev = 0;
  let _n = n;

  while (_n > 0) {
    rev = rev * 10 + (_n % 10);
    _n = Math.floor(_n / 10);
  }

  return rev;
}
