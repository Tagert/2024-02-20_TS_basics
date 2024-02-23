"use strict";
// variables in TS
const userName = "Pikachu";
console.log(userName);
const userLastName = "Pokemon";
const userAge = 26;
console.log(userName, userLastName, userAge);
// combine two types
const year = 20;
// arrays in TS
const carsArray = ["Audi", "BMW", "Mercedes"];
const carDetails = ["Audi", "A7", "diesel;", 5604];
const info = [{ name: "Andrew", age: 27 }, "student", true];
// objects in TS
let employee1;
employee1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Surveyor",
};
let employee2 = {
    firstName: "Tom",
    lastName: "Moe",
    age: 29,
    jobTitle: "Geodesist",
};
// functions in TS
const findNumber = (n1, n2, n3) => {
    return Math.max(n1, n2, n3);
};
console.log(findNumber(7, 10, 5));
// classes in TS
class Cars {
    constructor(b, m, e, y) {
        this.brand = b;
        this.model = m;
        this.engine = e;
        this.year = y;
    }
    format() {
        return `Your car is ${this.brand} ${this.model} ${this.engine} and it's production year is ${this.year}`;
    }
}
class Houses {
    constructor(city, size, price, description) {
        this.city = city;
        this.size = size;
        this.price = price;
        this.description = description;
    }
    format() {
        return `City: ${this.city}, size: ${this.size} sq. m., price: ${this.price} Eur, description: ${this.description}`;
    }
}
class Sites extends Houses {
    constructor(city, size, price, description) {
        super(city, size, price, description);
    }
    getSquarePerMeter() {
        const squarePerMeter = Math.round(this.price / this.size);
        return `Your price square per meter is ${squarePerMeter} Eur / m2`;
    }
}
const carNo1 = new Cars("VW", "Golf", "1.9 TDI", 2012);
const houseNo1 = new Houses("Kaunas", 120, 125000, "A spacious home has been placed in the city.");
const siteNo1 = new Sites("Vilnius", 135, 230000, "A spacious home has been placed in the city.");
console.log(carNo1);
console.log(carNo1.format());
console.log(houseNo1);
console.log(houseNo1.format());
console.log(siteNo1.getSquarePerMeter());
const userNo1 = {
    userName: "Michael",
    userLocation: "Porto",
    userAge: 29,
};
const userNo2 = {
    userName: "Pedro",
    userLocation: "Santo Tirsa",
    userAge: 32,
};
const userNo3 = {
    userName: "Andrea",
    userLocation: "Santo Tirsa",
    userAge: 27,
};
const userNo4 = {
    userName: "Alex",
    userLocation: "Porto",
    userAge: 31,
};
const nwoProject = {
    projectName: "New World Order",
    projectType: "OUTSOURCE",
    location: {
        country: "Portugal",
        city: "Porto",
        address: "Rua do Campo Alegre",
    },
    contributors: [userNo1, userNo2],
};
const mpProject = {
    projectName: "My Place",
    projectType: "OUTSOURCE",
    location: {
        country: "Portugal",
        city: "Porto",
        address: "Rua da Torrinha",
    },
    contributors: [userNo3, userNo4],
};
const projects = [nwoProject, mpProject];
console.log(projects);
const addItemToChart = (product) => {
    console.log(product);
    console.log(product.productPrice);
};
addItemToChart({
    productName: "Equipment Box",
    productPrice: 89.99,
});
const carNo10 = {
    brand: "VW",
    model: "Gold",
    engine: "Diesel",
    color: "Dark Blue",
    year: 2012,
    price: 7800,
};
const carNo20 = {
    brand: "Skoda",
    model: "Octavia",
    engine: "Diesel",
    color: "Silver",
    year: 2014,
    price: 8800,
};
const getACar = (car, car2) => {
    console.log(car, car2);
    console.log(car.price);
    console.log(car2.price);
};
getACar(carNo10, carNo20);
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
const getModem = (modem) => {
    console.log(modem);
};
getModem(modemNo1);
let bookNo1 = {
    title: "Metro 2033",
    author: "Dmitry Glukhovsky",
    format: "E-book",
    genres: ["Post Apocalyptic", "Dystopia", "Science Fiction", "Horror"],
    description: "The year is 2033. The world has been reduced to rubble. Humanity is nearly extinct.",
    price: 9.59,
    firstPublished: 2002,
};
let bookNo2 = {
    title: "Roadside Picnic",
    author: "Arkady Strugatsky, Boris Strugatsky",
    format: "E-book",
    genres: ["Dystopia", "Science Fiction", "Novel", "Classic"],
    description: "Red Schuhart is a stalker, one of those young rebels who are compelled, in spite of extreme danger, to venture illegally into the Zone to collect the mysterious artifacts that the alien visitors left scattered around.",
    price: 9.99,
    firstPublished: 1972,
};
console.log(bookNo1);
const bookUniqueIdNo1 = {
    id: 1,
};
const bookTitleNo1 = {
    title: "Metro 2033",
    author: "Dmitry Glukhovsky",
};
const bookRatingNo1 = {
    rating: 4.02,
    moreInfo: "https://www.goodreads.com/book/show/17274667-metro-2033",
};
const bookRatingNo2 = {
    rating: 4.15,
    moreInfo: "https://www.goodreads.com/book/show/331256.Roadside_Picnic",
};
bookNo1 = Object.assign(Object.assign({}, bookNo1), bookRatingNo1);
bookNo2 = Object.assign(Object.assign({}, bookNo2), bookRatingNo2);
const getABook = (bookNo1, bookNo2) => {
    let bookLists = [];
    bookLists.push(bookNo1);
    bookLists.push(bookNo2);
    return bookLists;
};
const bookLists = getABook(bookNo1, bookNo2);
console.log(bookLists);
const bookListNumber = bookLists.length;
console.log(bookListNumber);
