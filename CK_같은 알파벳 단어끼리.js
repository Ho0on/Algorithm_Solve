// 다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// output에서 순서는 상관없습니다.


const groupAnagrams = strs => {
  let results = [];
  for(let i = 0; i < strs.length; i++){
    let temp = [strs[i]];
    for(let j = i+1; j < strs.length; j++){
      let isTrue = true;
      for(let k = 0; k < strs[j].length; k++){
        if(!strs[i].includes(strs[j][k])){
          isTrue = false;
          break;
        }
      }
      if(isTrue){
        temp.push(strs[j]);
        strs[j] = ''
      }
    }
    let container = []
    while(temp.length){
      if(temp[0] !== ''){
        container.push(temp.shift());
      } else {
        temp.shift();
      }
    }
    if(container.length){
      results.push(container)
    }
  }
  return results;
}
