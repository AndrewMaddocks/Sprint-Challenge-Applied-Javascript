// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());

function Header() {
  //create elements
  const headerDiv = document.createElement("div");
  const date = document.createElement("span");
  const h1 = document.createElement("h1");
  const temperature = document.createElement("span");

  //create class Lists
  headerDiv.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  //append Children
  headerDiv.appendChild(date);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(temperature);

  //add COntent

  date.textContent = "MARCH 28, 2019";
  h1.textContent = "Lambda Times";
  temperature.textContent = "98°";

  return headerDiv;
}
