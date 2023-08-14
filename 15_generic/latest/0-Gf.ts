function addArray<T>(arr: T[], extra: number | string): T[] {
  return new Array().concat(arr, extra);
}

let x = addArray<number>([10, 20, 30, 40, 50, 60, 70, 80], 1000);
console.log(x);

// x[0].valueOf();

let y = addArray<string>(["a", "b", "c", "d", "e", "f"], "harshit");
console.log(y);

// y[0].toUpperCase()
