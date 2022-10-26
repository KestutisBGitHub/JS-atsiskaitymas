/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const myForm = document
  .querySelector("form")
  .addEventListener("submit", event => {
    event.preventDefault();

    const weightKG = document.getElementById("search").value;

    const weightLBs = Math.round(weightKG * 2.2046 * 100) / 100;
    const resultLbs = document.createElement("p");
    resultLbs.textContent = "Pounds " + weightLBs + " lb";

    const weightGrams = Math.round(weightKG / 0.001);
    const resultGrams = document.createElement("p");
    resultGrams.textContent = `Grams ${weightGrams} g`;

    const weightOz = Math.round(weightKG * 35.274 * 100) / 100;
    const resultOz = document.createElement("p");
    resultOz.textContent = `Ounces ${weightOz} Oz`;

    const text = "Your weight in:";

    document
      .getElementById("output")
      .append(text, resultLbs, resultGrams, resultOz);

    console.log(weightLBs);
    console.log(weightGrams);
    console.log(weightOz);
  });
