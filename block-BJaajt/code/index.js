// const input = document.querySelector("input");
// const name = document.querySelector(".name");
// const userName = document.querySelector(".username");
// const githubImage = document.querySelector(".githubImage");
// const catImage = document.querySelector(".catImage");
// const btn = document.querySelector("button");
// const followers = document.querySelector(".followers");
// const following = document.querySelector(".following");
// const followerImg = document.querySelector(".follower-img");

// function createUserUI(data) {
//   githubImage.src = data.avatar_url;
//   console.log(githubImage);
//   name.innerText = data.login;
//   userName.innerText = data.id;
// }

// function handleChange(event) {
//   if (event.keyCode === 13) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
//     xhr.onload = function () {
//       let userData = JSON.parse(xhr.response);
//       createUserUI(userData);
//     };
//     xhr.send();
//   }
// }

// input.addEventListener("keyup", handleChange);

// btn.addEventListener("click", () => {
//   let xhr = new XMLHttpRequest();
//   xhr.open(
//     "GET",
//     `https://api.thecatapi.com/v1/images/search?limit=1&size=full`
//   );
//   xhr.onload = function () {
//     let imageData = JSON.parse(xhr.response);
//     catImage.src = imageData[0].url;
//   };
//   xhr.send();
// });

// // xpYPyUl-RAKPCesI-7sABAeFxAgpemX815dnJ8UVWGs
// // https://api.unsplash.com//photos/random/?client_id=xpYPyUl-RAKPCesI-7sABAeFxAgpemX815dnJ8UVWGs

let input = document.querySelector("input");
let info = document.querySelector(".info");
let userImage = document.querySelector(".info img");
let userName = document.querySelector(".info h3");
let userLogin = document.querySelector(".info p");
let followersUL = document.querySelector(".followers");
let followingUL = document.querySelector(".following");

function fetch(url, successHnadler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => successHnadler(JSON.parse(xhr.response));

  xhr.onerror = function () {
    console.error("Something Went worng...");
  };
  xhr.send();
}
function displayExtraInfo(url, rootEml) {
  rootEml.innerHTML = "";
  fetch(url, function (followersList) {
    let topFive = followersList.slice(0, 5);

    topFive.forEach((info) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = info.avatar_url;
      img.alt = info.name;
      li.append(img);
      rootEml.append(li);
    });
  });
}

function handleDisplay(userInfo) {
  userImage.src = userInfo.avatar_url;
  userImage.alt = userInfo.name;
  userName.innerText = userInfo.name;
  userLogin.innerText = "@" + userInfo.login;
  displayExtraInfo(
    `https://api.github.com/users/${userInfo.login}/followers`,
    followersUL
  );
  displayExtraInfo(
    `https://api.github.com/users/${userInfo.login}/following`,
    followingUL
  );
}

function handleInput(event) {
  if(event.keyCode === 13 && input.value) {
    const url = `https://api.github.com/users/`;
    let username = input.value;
    fetch(url + username, handleDisplay);
    input.value = '';
  }
}

input.addEventListener('keydown', handleInput);

let catsImage = document.querySelector('.cats img');
let catsButton = document.querySelector('.cats button');

function handleClick() {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=1&size=full`, function(catInfo){
    catsImage.src = catInfo[0].url;
  });
}
catsButton.addEventListener('click', handleClick)


