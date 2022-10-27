/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true }
];

/*  */
const filterDogOwers = users.filter(user => user.hasDog === true);
console.log(filterDogOwers);
const cardDogs = document.createElement("div");
cardDogs.style.width = "300px";

cardDogs.style.border = "1px solid black";
cardDogs.style.borderRadius = "25px";
cardDogs.style.padding = "10px";
cardDogs.style.margin = "5px";

const h2Dogs = document.createElement("h2");
h2Dogs.textContent = "Users that have dog";

filterDogOwers.forEach(item => {
  const dogLover = document.createElement("p");
  dogLover.textContent = item.name;
  cardDogs.append(dogLover);
});
cardDogs.prepend(h2Dogs);
document.body.append(cardDogs);

/*  */
const filterAdults = users.filter(user => user.age >= 18);
console.log(filterAdults);

const cardAdults = document.createElement("div");
cardAdults.style.width = "300px";

cardAdults.style.border = "1px solid black";
cardAdults.style.borderRadius = "25px";
cardAdults.style.padding = "10px";
cardAdults.style.margin = "5px";

const h2Adults = document.createElement("h2");
h2Adults.textContent = "Users that are adults";

filterAdults.forEach(item => {
  const adult = document.createElement("p");
  adult.textContent = item.name;
  cardAdults.append(adult);
});
cardAdults.prepend(h2Adults);
document.body.append(cardAdults);
document.querySelector("body").style.display = "flex";
document.querySelector("body").style.justifyContent = "center";
document.querySelector("body").style.flexWrap = "wrap";
