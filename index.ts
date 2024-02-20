"use strict";

const userName: string = "Pikachu";

console.log(userName);

const userLastName: string = "Pokemon";

const userAge: number = 26;

console.log(userName, userLastName, userAge);

const findNumber = (n1: number, n2: number, n3: number) => {
  return Math.max(n1, n2, n3);
};

console.log(findNumber(7, 9, 1));
