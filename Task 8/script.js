/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.sum = a + b;
  this.subtraction = a - b;
  this.multiplication = a * b;
  this.division = a / b;
}

const calculator = new Calculator(6, 3);
console.log(calculator.sum);
console.log(calculator.subtraction);
console.log(calculator.multiplication);
console.log(calculator.division);
