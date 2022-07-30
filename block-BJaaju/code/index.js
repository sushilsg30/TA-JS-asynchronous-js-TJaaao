let input = document.querySelector("input");
let imageUL = document.querySelector(".imageUL");
let img = document.querySelector("img");

function imageUI(data) {
    img.src = data.regular;
}

function handleKey(event) {
  if (event.keyCode === 13 && input.value) {
    const url = `https://api.unsplash.com/photos/random/?client_id=VfL0XFpXFqTwGZlOJ7FRR6vSy-XsLxLqBcaNurVP2Pk`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = function () {
        let imageData = JSON.parse(xhr.response);
        imageUI(imageData);
        console.log(imageData);
    };
    xhr.onerror = function () {
        console.log(' Something went Wrong ...');
    };
    xhr.send();
  }
}

input.addEventListener("keyup", handleKey);


// xpYPyUl-RAKPCesI-7sABAeFxAgpemX815dnJ8UVWGs

// https://api.unsplash.com//search/photos/?client_id=VfL0XFpXFqTwGZlOJ7FRR6vSy-XsLxLqBcaNurVP2Pk