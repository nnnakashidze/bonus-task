"use strict";

const githubUser = document.getElementById("githubUser");
const input = document.getElementById("userName");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const username = input.value.trim();

  let url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      githubUser.innerHTML = `<img src="${data.avatar_url}" alt="">
      <p>The Octocat:${data.login}</p>
     <img.src="${data.avatar_url}" alt="${data.name}" width="100"/>
     <p>Joined 25 Jan 2011:${data.created_at}</p>
     <P>This profile has no bio:${data.bio}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("User not found!");
    });
});
