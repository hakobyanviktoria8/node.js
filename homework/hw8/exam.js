max = [
  [11, 2, 30],
  [2, 33, 4],
  [30, 4, 44],
];
let arr = [];
let arr2 = [];

for (let i = 0; i < max.length; i++) {
  arr.push(max[i][i]);
  console.log(max[i][max[i].length-i-1]);
}

console.log(1111, arr, arr2);
