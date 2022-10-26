/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const crateCard = element => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.minWidth = "380px";
  card.style.maxWidth = "100%";
  card.style.border = "1px solid black";
  card.style.borderRadius = "25px";
  card.style.padding = "10px";
  card.style.margin = "5px";
  card.style.flex = "1";

  const login = document.createElement("p");
  login.textContent = `User login name: ${element.login}`;

  const avatarURL = document.createElement("p");
  avatarURL.textContent = `Avatar URL: ${element.avatar_url}`;

  card.append(login, avatarURL);
  document.getElementById("output").append(card);
};

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    data.forEach(element => crateCard(element));

    console.log(data); // trinti
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("btn").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("btn").disabled = true;
  document.getElementById("message").style.display = "none";
  document.getElementById("output").style.display = "flex";

  document.getElementById("output").style.flexWrap = "wrap";
  getUsers();
});
