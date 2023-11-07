const gifsDiv = document.querySelector('#gifs');

const searchBtn = document.querySelector('#search');
const offset = document.querySelector('#offset');
const limit = document.querySelector('#limit');
const rating = document.querySelector('#rating');
const lang = document.querySelector('#language');
const searchInput = document.querySelector('#search-input');

let gifLinks = [];

async function fetchGifs(input, limit, offset, rating, lang) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=JhQdXH7rsDlWZ6GFhKXjwKulggGvLfJi&q=' + input + '&limit=' + limit + '&offset=' + offset + '&rating=' + rating + '&lang=' + lang)
        .then(response => response.json())
        .then(gifs => {
            gifLinks = [];
            gifs.data.forEach(gif => {
                gifLinks.push(gif.images.original.url);
            });
            renderGifs();
        });
}

function renderGifs() {
    gifsDiv.innerHTML = '';

    gifLinks.forEach(link => {
        let img = document.createElement('img');
        img.src = link;
        gifsDiv.appendChild(img);
    });
}

searchBtn.addEventListener('click', () => {
    fetchGifs(searchInput.value, limit.value, offset.value, rating.value, lang.value);
});