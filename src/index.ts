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

// types in TS

// part1 practice
type LocationType = {
  country: string;
  city: string;
  address: string;
};

type UserType = {
  userName: string;
  userLocation: string;
  userAge: number;
};

type ProjectType = {
  projectName: string;
  projectType: "IN_HOUSE" | "OUTSOURCE";
  location: LocationType;
  contributors: UserType[];
};

const userNo1: UserType = {
  userName: "Michael",
  userLocation: "Porto",
  userAge: 29,
};

const userNo2: UserType = {
  userName: "Pedro",
  userLocation: "Santo Tirsa",
  userAge: 32,
};

const userNo3: UserType = {
  userName: "Andrea",
  userLocation: "Santo Tirsa",
  userAge: 27,
};

const userNo4: UserType = {
  userName: "Alex",
  userLocation: "Porto",
  userAge: 31,
};

const nwoProject: ProjectType = {
  projectName: "New World Order",
  projectType: "OUTSOURCE",
  location: {
    country: "Portugal",
    city: "Porto",
    address: "Rua do Campo Alegre",
  },
  contributors: [userNo1, userNo2],
};

const mpProject: ProjectType = {
  projectName: "My Place",
  projectType: "OUTSOURCE",
  location: {
    country: "Portugal",
    city: "Porto",
    address: "Rua da Torrinha",
  },
  contributors: [userNo3, userNo4],
};

const projects: ProjectType[] = [nwoProject, mpProject];

console.log(projects);

// part2 practice

type ItemBuyingType = {
  productName: string;
  productPrice: number;
};

const addItemToChart = (product: ItemBuyingType) => {
  console.log(product);
  console.log(product.productPrice);
};

addItemToChart({
  productName: "Equipment Box",
  productPrice: 89.99,
});

// part3 practice

interface Car {
  brand: string;
  model: string;
  engine: string;
  color: string;
  year: number;
  price: number;
}

const carNo10: Car = {
  brand: "VW",
  model: "Gold",
  engine: "Diesel",
  color: "Dark Blue",
  year: 2012,
  price: 7800,
};

const carNo20: Car = {
  brand: "Skoda",
  model: "Octavia",
  engine: "Diesel",
  color: "Silver",
  year: 2014,
  price: 8800,
};

const getACar = (car: Car, car2: Car): void => {
  console.log(car, car2);
  console.log(car.price);
  console.log(car2.price);
};

getACar(carNo10, carNo20);

// part4 practice

interface Modem {
  id: string;
  charger: Charger;
  location: Locations;
}

type Charger = {
  power: number;
  port: string;
};

type Locations = {
  address: string;
  city: string;
};

const modemNo1 = {
  id: "uayvw6127",
  charger: {
    power: 150,
    port: "ChamDo",
  },
  location: {
    address: "Street 123",
    city: "London",
  },
};

const getModem = (modem: Modem) => {
  console.log(modem);
};

getModem(modemNo1);

//OMIT method in TS

type BookType = {
  title: string;
  author: string;
  format: "Hardcover" | "Softcover" | "E-book";
  genres: string[];
  description: string;
  price: number;
  firstPublished: number;
  id: number;
};

type BookCreationType = Omit<BookType, "id">;

let bookNo1: BookCreationType = {
  title: "Metro 2033",
  author: "Dmitry Glukhovsky",
  format: "E-book",
  genres: ["Post Apocalyptic", "Dystopia", "Science Fiction", "Horror"],
  description:
    "The year is 2033. The world has been reduced to rubble. Humanity is nearly extinct.",
  price: 9.59,
  firstPublished: 2002,
};

let bookNo2: BookCreationType = {
  title: "Roadside Picnic",
  author: "Arkady Strugatsky, Boris Strugatsky",
  format: "E-book",
  genres: ["Dystopia", "Science Fiction", "Novel", "Classic"],
  description:
    "Red Schuhart is a stalker, one of those young rebels who are compelled, in spite of extreme danger, to venture illegally into the Zone to collect the mysterious artifacts that the alien visitors left scattered around.",
  price: 9.99,
  firstPublished: 1972,
};

console.log(bookNo1);

//track a type in TS

type BookUniqueType = {
  id: BookType["id"];
};

const bookUniqueIdNo1 = {
  id: 1,
};

//PICK method in TS

type BookTitleType = Pick<BookType, "title" | "author">;

const bookTitleNo1: BookTitleType = {
  title: "Metro 2033",
  author: "Dmitry Glukhovsky",
};

// PARTIAL (update your object) method in TS

type BookRatingType = {
  rating: number;
  moreInfo: string;
};

type BookUpdateType = Partial<BookRatingType>;

const bookRatingNo1: BookUpdateType = {
  rating: 4.02,
  moreInfo: "https://www.goodreads.com/book/show/17274667-metro-2033",
};

const bookRatingNo2: BookUpdateType = {
  rating: 4.15,
  moreInfo: "https://www.goodreads.com/book/show/331256.Roadside_Picnic",
};

bookNo1 = { ...bookNo1, ...bookRatingNo1 };
bookNo2 = { ...bookNo2, ...bookRatingNo2 };

const getABook = (bookNo1: object, bookNo2: object): object[] => {
  let bookLists = [];

  bookLists.push(bookNo1);
  bookLists.push(bookNo2);

  return bookLists;
};

const bookLists = getABook(bookNo1, bookNo2);

console.log(bookLists);

const bookListNumber: number = (bookLists as []).length;

console.log(bookListNumber);
