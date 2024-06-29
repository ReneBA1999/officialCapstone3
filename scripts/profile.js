"use strict"

function getLoginData () {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}

function createpost (){
    const loginData = getLoginData();
    const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", `Bearer ${loginData.token}`);
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "text": `${document.getElementById("newpost").value}`
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://microbloglite.onrender.com/api/posts", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
    .catch((error) => console.error(error))};

  