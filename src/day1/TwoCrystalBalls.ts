export default function two_crystal_balls(breaks: boolean[]): number {
  /* 
  jump sqrt n
  if f check next v ((x+1) * Sqrt of n, as long as it's < n)
  if it's > n return false not found
  it's t check from prev index (x)*n + 1
  then for loop after it too with x*n +i < (x+1)*n
  */

  const n = breaks.length;
  const jump = Math.floor(Math.sqrt(n))
  let i = jump;
  for(; i< n; i+= jump){
    if(breaks[i]){
      break;      
    }
  }
  i-=jump;

  for(let j = 0; j<jump && i<n; j++, i++ ){
    if(breaks[i]){
      return i;
    }
  }
  return -1;



  // for (let i=jump; i< n; i+=jump ){
  //   if(breaks[i] === true) {
  //     for(let j = i-jump; j<= i; j++){
  //       if(breaks[j] ===true) return j;
  //     }
  //   }
  // }
  // return -1;
}