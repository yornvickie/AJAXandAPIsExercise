// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);

// 1b
p1.innerText = jokeJS1.setup;
// 1c
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
.then(friendsJS2 => {
    p3.innerText = friendsJS2.data.quote;
    p4.innerText = friendsJS2.data.character;
})
.catch (err => {
    console.log(err);
})

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 3a
async function quoteFunc(){
    try {
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;

    } catch (err) {
        console.log(err);
    }
}
quoteFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
async function tvMazeFunc(){
    try {
       const shows = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
       p7.innerText = shows.data.name;

    } catch (err) {
        console.log(err);
    }
}
tvMazeFunc();

// BONUS
// 5
const body = document.querySelector(`body`);

axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then(res => {
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_shiny_female;
    body.append(img);
})
.catch (err => {
    console.log(err);
})

// 6
async function movie(){
    try {
        const poster = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=d34bfb74&t=Blade+Runner+2049`)
        const posterimg = document.createElement(`img`)
        posterimg.src = poster.data.Poster;
        body.append(posterimg);
    } catch (err) {
        console.log(err);
    }
}

movie();