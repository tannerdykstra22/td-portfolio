
// if (onclick[Element] === 'portfolio.html') {
//     alert ("Portfolio still in progress - Come back soon!");
// }

// if (onclick.Element === 'portfolio.html') {
//     return alert ("Portfolio still in progress - Come back soon!");
// }

// CHECK THIS BELOW FUNCTION OUT!!
// function addRecommendation() {
//     // Get the message of the new recommendation
//     let recommendation = document.getElementById("new_recommendation");
//     // If the user has left a recommendation, display a pop-up
//     if (recommendation.value != null && recommendation.value.trim() != "") {
//       console.log("New recommendation added");
//       //Call showPopup here
//       showPopup(true);
  

const portfolioUnfinishedAlert = document.getElementsById("portfolio-nav")

portfolioUnfinishedAlert.onclick = function (event) {
    event.preventDefault();
    alert("Portfolio still in progress - Come back soon!");
}