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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);

    Object.values(response.data.articles).forEach(topic => {
      topic.forEach(article => {
        let container = document.querySelector(".cards-container");
        container.appendChild(createCard(article));
      });
    });
  });

function createCard(arg) {
  //create elements
  const cardDiv = document.createElement("div");
  const cardHead = document.createElement("div");
  const cardAuthorDiv = document.createElement("div");
  const cardImgDiv = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardSpan = document.createElement("span");

  //class Lists
  cardDiv.classList.add("card");
  cardHead.classList.add("headline");
  cardAuthorDiv.classList.add("author");
  cardImgDiv.classList.add("img-container");

  // append Childern
  cardDiv.appendChild(cardHead);
  cardDiv.appendChild(cardAuthorDiv);
  cardAuthorDiv.appendChild(cardImgDiv);
  cardAuthorDiv.appendChild(cardSpan);
  cardImgDiv.appendChild(cardImg);

  //add content
  cardHead.textContent = arg.headline;
  cardImg.src = arg.authorPhoto;
  cardSpan.textContent = arg.authorName;

  return cardDiv;
}
