'use strict';

let data = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

let count = 0
function quickSort(arr, start = 0, end = arr.length) {
  count++
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = quickSort(arr, start, middle);
  arr = quickSort(arr, middle + 1, end);
  return arr;
}
// quickSort(data)
// mergeSort(data)
// console.log(`it took ${count} to sort`);


function partition(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end - 1, j);
  return j;
}
// quickSort(data);

function merge(left, right, arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++];
    } else {
      arr[outputIndex++] = right[rightIndex++];
    }
    // console.log(arr);
  }
  for (let i = leftIndex; i < left.length; i++) {
    arr[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    arr[outputIndex++] = right[i];
  }
  return arr;
}

function mergeSort(arr) {
  count++
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right, arr);
}
//console.log(mergeSort(data));

function bucketSort(arr,lowest,highest){
  let lower =[]
  let higher = []
  let newArr = [] 
  let middle = Math.floor(highest-lowest)
  
  for(let i = 0;i <arr.length; i++){
    if(arr[i]>middle){
      higher.push(arr[i])
    }else{
      lower.push(arr[i])
    }
  };
    newArr.push(...lower,...higher)
    return newArr 
};

const data2 = [6,4,2,1,8,9,7,10,6,5,3]

//console.log(bucketSort(data2,1,10))


function randomSort(arr){
  for(let i = 0;i<arr.length;i++){
    let i = Math.floor(Math.random()*arr.length)
    let j =Math.floor(Math.random()*arr.length)
    swap(arr,i,j)
  }
  return arr
}

// console.log(randomSort(data2))



// aba
//akaer
//aaaaa
//bee

//aba akaer aaaa
//aa ///ba //kaer 
//bee