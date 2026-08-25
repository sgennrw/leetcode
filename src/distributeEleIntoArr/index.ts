//https://leetcode.com/problems/distribute-elements-into-two-arrays-i/

const resultArray = (nums: number[]) => {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];

  nums.splice(2).forEach((n) => {
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr1.push(n);
    } else {
      arr2.push(n);
    }
  });

  return arr1.concat(arr2);
};

export { resultArray };
