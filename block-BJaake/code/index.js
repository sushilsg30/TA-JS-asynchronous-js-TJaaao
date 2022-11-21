let data = fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30");

function fetch(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function (){
         let userData = JSON.parse(xhr.response);
         console.log(userData);
    }
    xhr.onerror = function () {
        console.log('Something went Wrong!');
    };
    xhr.send();
}

fetch(data);

// All
