// Creates a new Type.
// Describe the property names and values types of an objects

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle = (car: Vehicle): void => {
  console.log(car.name);
  console.log(car.year);
  console.log(car.broken);
};

const oldCivic: Vehicle = {
  name: "civic",
  year: 2000,
  broken: true,
};

printVehicle(oldCivic);
