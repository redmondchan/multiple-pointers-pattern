// fucntion that returns the first pair where the sum is 0. the function will accept a sorted array of integers. ex: [-3, -2, -1, 0, 1, 3] output: [-3,3]

function sumZero(array){
  let leftIndex = 0
  let rightIndex = array.length - 1

  while(leftIndex < rightIndex){
      let sum = array[rightIndex] + array[leftIndex]
    if(sum === 0){
      return [array[leftIndex], array[rightIndex]]
    } else if(sum > 0){
      rightIndex--
    } else {
      leftIndex++
    }
  }

  return "no matching pair"
}


console.log(sumZero([-3, -2, -1, 0, 1, 3])) //[-3, 3]
console.log(sumZero([-6, -3, -2, -1, 0, 1, 4, 5])) //[-1, 1]
console.log(sumZero([-9, -7, -3, -2, -1, 0, 2, 4, 5, 6, 10, 19])) //[-2, 2]
console.log(sumZero([2, 0, 1])) //no matching pair
