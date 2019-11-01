// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log("data: ", response);
    response.data.topics.forEach(item => {
      createTabs(item);
    });
    //step 4
  });

function createTabs(arg) {
  //create elements
  const tabDiv = document.createElement("div");

  //create class Lists
  tabDiv.classList.add("tab");

  //add Content
  tabDiv.textContent = arg;

  document.querySelector(".topics").appendChild(tabDiv);
}
