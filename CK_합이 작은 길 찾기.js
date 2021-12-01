// 문제
// 양수로 이루어진 m x n 그리드를 인자로 드립니다. 상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때, 가장 작은 합을 찾아서 return 해주세요.

// 한 지점에서 우측이나 아래로만 이동할 수 있습니다.

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]

// Output: 7
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]

// Output: 7
// 설명: 1→3→1→1→1 의 합이 제일 작음



const minPathSum = grid => {
  const xlen = grid[0].length-1
  const ylen = grid.length-1

  const recursion = (i, j, sum) => {
    if (j===xlen && i===ylen){
      return sum+grid[i][j]
    } else if (j===xlen) {
      return recursion(i+1, j, sum+grid[i][j])
    } else if (i===ylen) {
      return recursion(i, j+1, sum+grid[i][j])
    } else {
      return Math.min(recursion(i+1, j, sum+grid[i][j]), recursion(i, j+1, sum+grid[i][j]))
    }
  }
  
  return recursion(0, 0, 0)
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))
