// reverse 함수에 정수인 숫자를 인자로 받습니다. 그 숫자를 뒤집어서 return해주세요.

// x: 숫자 return: 뒤집어진 숫자를 반환!

// 예들 들어, x: 1234 return: 4321

// x: -1234 return: -4321

// x: 1230 return: 321

//----------------------------------------------------------------

const reverse = x => {
 if(x<0){
  const aa= Math.abs(x).toString().split("").reverse().join("");
  return -aa;
}else if(x>0){
  const bb=x.toString().split("").reverse().join("");
  return +bb;
}else{
  return 0;
}
}
console.log(reverse(0));


// const reverse = x => {
//   let strX=x.toString();
//   const arr=[];
  
//   if(x>0){
//     for(let i=strX.length-1; i>=0; i--){
//       arr.push(strX[i]);  
//     }
//     return Number(arr.join(""));
//   }else if(x<0){
//     for(let i=strX.length-1; i>0; i--){
//       arr.push(strX[i]);
//   }
//     arr.unshift(strX[0]);
//     return Number(arr.join(""));
// }else{
//   return 0;
// }
// }
// console.log(reverse(1230));
