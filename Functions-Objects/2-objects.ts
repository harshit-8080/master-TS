const o1 = {
  fname: "harshit",
  lname: "raj",
  age: 25,
  cords: {
    lat: 90,
    lan: 100,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const { age } = o1;
// const {
//   cords: { lat, lan },
// } = o1;

const { age }: { age: number } = o1; // destructuring with annotations..

const {
  cords: { lat, lan },
}: { cords: { lat: number; lan: number } } = o1; // destructuring with annotations..
