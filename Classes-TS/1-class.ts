class Vehicle {
  name: string;
  price: number;
  color: string = "black";

  drive(): void {
    console.log("Driving....");
  }
  horn(): void {
    console.log("horn....");
  }
  private p1(): void {
    console.log("Called p1....");
  }
  protected p2(): void {
    console.log("called p2....");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Car driving....");
    this.p2(); // able to call protected methodss...
  }
}

const car = new Car();
