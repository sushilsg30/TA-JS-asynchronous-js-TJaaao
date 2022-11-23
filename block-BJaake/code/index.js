let url = fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`);

let newsElm = document.querySelector('.news');

function renderNews(news) {
    news.forEach(newsItem => {
        console.log(newsItem.title);
        let li = document.createElement('li');
        let img  = document.createElement("img");
        img.src = newsItem.imageUrl;
        img.alt = newsItem.title; 
        let div = document.createElement("div");
        let span = document.createElement("span");
        span.innerText = newsItem.newsSite;
        let h3 = document.createElement("h3");
        h3.innerText = newsItem.title;
        let a = document.createElement('a');
        a.href = newsItem.url;
        a.append(button); 
        let button = document.createElement("button");
        button.innerText = 'Read More';
        div.append(span, h3, button);
        li.append(img, div);
        newsElm.append(li);
    });
}

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

fetch(url).then((resolve) => resolve.json())
    .then((news) => {
        console.log(news);
        renderNews(news);
    });
