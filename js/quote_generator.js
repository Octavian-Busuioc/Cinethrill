
const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('#next');
const getQuote = async ()=> {
    const res = await fetch('../quotes.json');
    const quotes = await res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;
    // console.log(item);
}

nextBtn.addEventListener('click', getQuote)

getQuote()