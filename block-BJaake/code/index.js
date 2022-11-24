let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;

let newsElm = document.querySelector('.news');
let select = document.querySelector('select');
let allNews = [];

function renderNews(news) {
    newsElm.innerHTML = '';
    news.forEach(newsItem => {
        let li = document.createElement('li');
        li.classList = 'flex';
        let img  = document.createElement("img");
        img.classList = "article-width";
        img.src = newsItem.imageUrl;
        img.alt = newsItem.title; 
        let div = document.createElement("div");
        div.classList = "article-width";
        let span = document.createElement("span");
        span.innerText = newsItem.newsSite;
        span.classList = "source";
        let h3 = document.createElement("h3");
        h3.innerText = newsItem.title;
        let a = document.createElement('a');
        a.href = newsItem.url;
        let button = document.createElement("button");
        button.innerText = 'Read More';
        a.append(button); 
        div.append(span, h3, a);
        li.append(img, div);
        newsElm.append(li);
    });
}
function displayOptions(sources) {
    sources.forEach(source => {
        let option = document.createElement("option");
        option.innerText = source;
        option.value = source
        select.append(option)
    })
}

fetch(url).then((resolve) => resolve.json())
    .then((news) => {
        allNews = news;
        renderNews(news);
        let allSources = Array.from(new Set(news.map((n) => n.newsSite)));
        displayOptions(allSources);
    });


select.addEventListener('change', (event) => {
    let source = event.target.value.trim();
    if(source) {
            var filteredNews = allNews.filter(
              (news) => news.newsSite === source
            );
    } else {
        filteredNews = allNews;
    }
    renderNews(filteredNews);
})