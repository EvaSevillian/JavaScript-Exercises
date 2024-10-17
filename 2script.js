const input = 'whale talk';
let i;
const vowels = ['a','e','i','o','u'];
let j ;
let resultArray =[];

for (let i = 0; i<input.length ; i++){
  //console.log('inputIndex is' + i);
  if(input[i] === 'e'){
  resultArray.push(input[i])
  }
  if(input[i] === 'u'){
  resultArray.push(input[i])
  }
 for (let j = 0; j < vowels.length; j++) {
  //console.log('vowels is' + j)
  if(input[i] === vowels[j]){
  console.log(input[i]);
  resultArray.push(input[i]);
    }
   }
  }
  
  //console.log(resultArray);
  const resultString = resultArray.join('').toUpperCase();
  console.log(resultString);