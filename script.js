const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9c7ca00360e402b5365f6803135f4327&page=1';
const APIKEY = '9c7ca00360e402b5365f6803135f4327';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=9c7ca00360e402b5365f6803135f4327&query=";

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');


returnMovies(APILINK);
function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            main.innerHTML = '';    // clear previous search results
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.className = 'card';
                const div_row = document.createElement('div');
                div_row.className = 'row';
                const div_column = document.createElement('div');
                div_column.className = 'column';
                const img = document.createElement('img');
                img.className = 'thambnail';
                const title = document.createElement('h3');
                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;
                img.src = IMGPATH + element.poster_path;

                center.appendChild(img);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);    
                main.appendChild(div_row);
            }
            );
        }
        );
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';
    const searchValue = search.value;
    console.log('Form submitted');
    console.log('Search value:', searchValue);

    if (searchValue) {
        console.log('Fetching:', SEARCHAPI + searchValue);
        returnMovies(SEARCHAPI + searchValue);
        search.value = '';
    } else {
        console.log('Fetching:', APILINK);
        returnMovies(APILINK);
    }
});


