const arr1 = [1, 2, 3, 4, 5, 6];

Array.prototype.myArrMap = function (fn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i], i, this));
  }
  return newArr;
};
console.log(arr1.myArrMap((x) => x + 1));
console.log(arr1.map((x) => x + 1));
