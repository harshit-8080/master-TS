interface Vehicle {
  name: string;
  year: number;
  broken?: boolean;
  summary(x: number): string;
  print?(): string;
}

const oldCivic: Vehicle = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return "Summary of Car: " + this.name;
  },
};

console.log(oldCivic.summary(10));
