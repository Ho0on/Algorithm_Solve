// Selection Sort(선택정렬)

// 정렬을 해야하는 배열은 [7,5,4,2] 입니다.

// 첫 번째 loop에서는 index 0부터 3까지 확인하며 가장 작은 수를 찾습니다. 2 이므로 index 0의 7과 교체합니다. -> [2,5,4,7]

// 두 번째는 index 1부터 3까지 확인하며 가장 작은 수를 찾습니다. 4이므로 index 1의 5와 교체합니다 -> [2,4,5,7]

// 세 번째는 index 2부터 3까지.. 이런식으로 가장 작은 수를 선택해서 순서대로 교체하는 것을 선택정렬이라고 합니다.



const selectionSort = (nums) => {

  for(let i=0; i<nums.length; i++){
    let min=i;
    for(let j=i+1; j<nums.length; j++){
      if(nums[j]<nums[min]){
        min=j;
      }
    }
    if(min!==i){
      let temp=nums[min];
      nums[min]=nums[i];
      nums[i]=temp;
    }
  }
  return nums;
}
console.log(selectionSort([7,5,4,2]));
