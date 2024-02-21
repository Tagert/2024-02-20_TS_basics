"use strict";

// variables in TS

const userName: string = "Pikachu";

console.log(userName);

const userLastName: string = "Pokemon";

const userAge: number = 26;

console.log(userName, userLastName, userAge);

// combine two types

const year: string | number = 20;

// arrays in TS

const carsArray: string[] = ["Audi", "BMW", "Mercedes"];

const carDetails: (string | number)[] = ["Audi", "A7", "diesel;", 5604];

const info: any = [{ name: "Andrew", age: 27 }, "student", true];

// objects in TS

let employee1: object;

employee1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Surveyor",
};

let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "Tom",
  lastName: "Moe",
  age: 29,
  jobTitle: "Geodesist",
};

// functions in TS

const findNumber = (n1: number, n2: number, n3: number): number => {
  return Math.max(n1, n2, n3);
};

console.log(findNumber(7, 10, 5));

// classes in TS

class Cars {
  brand: string;
  model: string;
  engine: string;
  year: number;

  constructor(b: string, m: string, e: string, y: number) {
    this.brand = b;
    this.model = m;
    this.engine = e;
    this.year = y;
  }

  format(): string {
    return `Your car is ${this.brand} ${this.model} ${this.engine} and it's production year is ${this.year}`;
  }
}

class Houses {
  city: string;
  size: number;
  price: number;
  description: string;

  constructor(city: string, size: number, price: number, description: string) {
    this.city = city;
    this.size = size;
    this.price = price;
    this.description = description;
  }

  format(): string {
    return `City: ${this.city}, size: ${this.size} sq. m., price: ${this.price} Eur, description: ${this.description}`;
  }
}

class Sites extends Houses {
  constructor(city: string, size: number, price: number, description: string) {
    super(city, size, price, description);
  }

  getSquarePerMeter(): string {
    const squarePerMeter = Math.round(this.price / this.size);
    return `Your price square per meter is ${squarePerMeter} Eur / m2`;
  }
}

const carNo1 = new Cars("VW", "Golf", "1.9 TDI", 2012);
const houseNo1 = new Houses(
  "Kaunas",
  120,
  125000,
  "A spacious home has been placed in the city."
);
const siteNo1 = new Sites(
  "Vilnius",
  135,
  230000,
  "A spacious home has been placed in the city."
);

console.log(carNo1);
console.log(carNo1.format());
console.log(houseNo1);
console.log(houseNo1.format());
console.log(siteNo1.getSquarePerMeter());
