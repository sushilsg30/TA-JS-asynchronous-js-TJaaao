const input = document.querySelector("input");
const name = document.querySelector(".name");
const userName = document.querySelector(".username");
const githubImage = document.querySelector(".githubImage");
const catImage = document.querySelector(".catImage");
const btn = document.querySelector("button");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const followerImg = document.querySelector(".follower-img");

function createUserUI(data) {
  githubImage.src = data.avatar_url;
  console.log(githubImage);
  name.innerText = data.login;
  userName.innerText = data.id;
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      createUserUI(userData);
    };
    xhr.send();
  }
}

input.addEventListener("keyup", handleChange);


btn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`
  );
  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);
    catImage.src = imageData[0].url;
  };
  xhr.send();
});

// xpYPyUl-RAKPCesI-7sABAeFxAgpemX815dnJ8UVWGs
// https://api.unsplash.com//photos/random/?client_id=xpYPyUl-RAKPCesI-7sABAeFxAgpemX815dnJ8UVWGs
