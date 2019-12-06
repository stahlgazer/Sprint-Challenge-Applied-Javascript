// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entry = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response.data);
    const article = createArticle(response.data);
    entry.appendChild(article);
  })

function createArticle(object){
// elements
const card = document.createElement('div');
const headline = document.createElement('div');
const authorDiv = document.createElement('div');
const containerImg = document.createElement('div');
const img = document.createElement('img');
const authorName = document.createElement('span');

// classes
card.classList.add('card')
headline.classList.add('headline')
authorDiv.classList.add('div')
containerImg.classList.add('div')


// structure
card.appendChild(headline)
card.appendChild(authorDiv)
authorDiv.appendChild(containerImg)
containerImg.appendChild(img)
authorDiv.appendChild(authorName)

// content
img.src = object.authorPhoto
authorName.textContent = object.aurthorName;
headline.textContent = object.headline;


return card
}
const articles = document.querySelector(".cards-container");
articles.appendChild(createArticle());
console.log(articles)