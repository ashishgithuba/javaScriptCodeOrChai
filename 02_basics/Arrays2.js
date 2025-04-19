const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 8, 9, [3, 9]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
