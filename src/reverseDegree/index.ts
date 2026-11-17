// https://leetcode.com/problems/reverse-degree-of-a-string

function reverseDegree(s: string): number {
  let sum = 0;
  s.split("").forEach((c, i) => {
    const idxA = (c.charCodeAt(0) - 97 - 26) * -1;
    sum += idxA * (i + 1);
  });

  return sum;
}
