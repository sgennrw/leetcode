// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s: string) => {
  let max = 0;

  const sub = [];
  s.split("").forEach((_s) => {
    const idx = sub.findIndex((s) => s === _s);
    if (idx >= 0) {
      max = Math.max(max, sub.length);
      sub.splice(0, idx + 1);
    }

    sub.push(_s);
  });

  return Math.max(max, sub.length);
};

export { lengthOfLongestSubstring };
