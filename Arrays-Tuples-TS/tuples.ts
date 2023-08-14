// tuples are a type that allows you to express an array with a fixed number of elements.
// Where each element can have a different type.
//  They provide a way to define and work with collections of values with known types at specific indices.

//* In Tuple Order of elements is important..
//* Can be used to create fixed size and know item types..

const drinks: [string, boolean, number] = ["Harshit", true, 2000];

////////////////////////////////////////////////////////////////

type drinkType = [string, boolean, number];
const t2: drinkType = ["Manikesh", false, 300];

////////////////////////////////////////////////////////////////

let readonlyTuple: readonly [number, string] = [42, "hello"];
// readonlyTuple.push(10); // Error: Property 'push' does not exist on type 'readonly [number, string]'.
