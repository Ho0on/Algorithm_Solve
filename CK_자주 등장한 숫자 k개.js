// nums는 숫자로 이루어진 배열입니다. 가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

// nums = [1,1,1,2,2,3],
// k = 2
// 
// return [1,2]
// 
// nums = [1]
// k = 1
// 
// return [1]



function topK(nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  
  let answer = [];
  answer = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  return answer.slice(0, k).map(num => +num);
}
