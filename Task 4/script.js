/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const crateCard = position => {
  const card = document.createElement("div");
  card.style.border = "1px solid black";
  card.style.borderRadius = "25px";
  card.style.padding = "10px";
  card.style.margin = "5px";
  card.style.flex = "1";
  card.style.minWidth = "380px";
  card.style.maxWidth = "100%";

  const brand = document.createElement("h2");
  brand.textContent = position.brand;
  brand.style.textAlign = "center";

  const models = document.createElement("p");

  let modelsByOne = "";
  position.models.forEach(element => {
    modelsByOne += `${element}, `;
  });
  models.textContent = modelsByOne;

  card.append(brand, models);
  document.getElementById("output").append(card);
};

const getCars = async () => {
  try {
    const response = await fetch("./cars.json");
    const data = await response.json();

    data.forEach(element => crateCard(element));
  } catch (err) {
    console.error(err);
  }

  document.getElementById("output").style.display = "flex";

  document.getElementById("output").style.flexWrap = "wrap";
};

getCars();
