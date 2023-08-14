// class ArrayOfNumber {
//   arr: number[];
//   constructor(arr: number[]) {
//     this.arr = arr;
//   }
//   byIndex(index: number): void {
//     console.log(this.arr[index]);
//   }
// }

// class ArrayOfString {
//   arr: string[];
//   constructor(arr: string[]) {
//     this.arr = arr;
//   }
//   byIndex(index: number): void {
//     console.log(this.arr[index]);
//   }
// }

// const n1 = new ArrayOfNumber([10, 20, 30, 40, 50, 60]);

// n1.byIndex(4);

// const s1 = new ArrayOfString(["a", "b", "c", "d", "e", "f"]);

// s1.byIndex(4);

class ArrayOfItem<T> {
  arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }
  byIndex(index: number): void {
    console.log(this.arr[index]);
  }
}

const n1 = new ArrayOfItem<number>([10, 20, 30, 40, 50, 60]);

n1.byIndex(2);

const s1 = new ArrayOfItem<string>(["a", "b", "c", "d", "e", "f"]);

s1.byIndex(3);
