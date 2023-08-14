interface Summary {
  summary(): string;
}

const printSummary = (item: Summary): void => {
  console.log(item.summary());
};

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary() {
    return "Summary of Car: " + this.name;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return "My Drink ";
  },
};

printSummary(oldCivic);
printSummary(drink);
