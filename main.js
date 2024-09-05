
// if (onclick[Element] === 'portfolio.html') {
//     alert ("Portfolio still in progress - Come back soon!");
// }

// if (onclick.Element === 'portfolio.html') {
//     return alert ("Portfolio still in progress - Come back soon!");
// }

const portfolioUnfinishedAlert = document.getElementsById("portfolio-nav")

portfolioUnfinishedAlert.onclick = function (event) {
    event.preventDefault();
    alert("Portfolio still in progress - Come back soon!");
}