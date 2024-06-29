/* Posts Page JavaScript */

"use strict";

   window.onload = (e) => {
    console.log("getpost");
    getpost();
};
//Function to retrieve login data
function getLoginData() {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}
//function to retrieve posts
async function getpost() {
    console.log("ingetpost");
    const loginData = getLoginData();
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${loginData.token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    console.log("beforefetch");
    fetch("https://microbloglite.onrender.com/api/posts?limit=100&offset=0", requestOptions)
        .then((response) => response.json())  // Parse response as JSON
        .then((result) => {
            console.log(result);
            console.log("results");
            showData(result);  // Pass the fetched data to showData function
        })
        .catch((error) => console.error(error));
}
//function to dislay data
function showData(data) {
    console.log('test')
    const content = document.querySelector('#postContent');  // we are selecting the correct container
    content.innerHTML = '';  
    data.forEach(post => {
        content.innerHTML += `
            <div class="post">
                <p>User Name: ${post.username}<br>${post.text}<br>${post.createdAt}</p>
            </div>
        `;
    });
}