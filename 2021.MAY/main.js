var minDeletionSize = function(strs) {
  let answer = 0;
  let strLength = strs[0].length;
  for(let i = 0; i < strLength; i++){
    for(let j = 0; j < strs.length - 1; j++){
      if(strs[j][i] > strs[j + 1][i]){
        answer ++;
        break;
      }
    }
  }

  return answer
};


console.log(minDeletionSize(["rrjk","furt","guzm"]))