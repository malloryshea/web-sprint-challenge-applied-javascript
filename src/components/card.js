import axios from 'axios'
const Card = (article) => {
  let card = document.createElement ("div");
  let headline = document.createElement ("div");
  let author = document.createElement ("div");
  let imgContainer = document.createElement ("div");
  let authorImg = document.createElement ("img");
  let authorName = document.createElement ("span");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(authorName);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container")

  headline.textContent = article.headline;
  authorName.textContent = article.authorName;
  authorImg.setAttribute("src", article.authorPhoto);

  card.addEventListener("click", () => {
    card.classList.toggle(console.log(headline));
  })
  
  return card;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  let results = axios.get(`http://localhost:5000/api/articles`)

  results.then((value)=>{

  let list = value.data.articles
  for(let key in list){
    list[key].forEach(element => {
      let test = Card(element)
      let cardContainer = document.querySelector(selector)
      cardContainer.appendChild(test)
    });
  }

  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
