// Your code goes here

// QuerySelectors to grab HTML Elements
const pageBackground = document.querySelector('body')
const headerTitle = document.querySelector(".logo-heading")
const linkChange = document.querySelectorAll(".nav-link");
const welcomeText = document.querySelector(".intro p")
const letsGoText = document.querySelector(".text-content p")
const letsGoImg = document.querySelector(".img-content img")
console.log(pageBackground)

// console.log(headerTitle)

// Event Listeners and functions
headerTitle.addEventListener('mouseover', (event) => headerTitle.style.color = "red");
headerTitle.addEventListener('mouseout', (event) => headerTitle.style.color = "black");

linkChange[0].addEventListener('click', (event) => linkChange[0].style.color = "purple");
linkChange[1].addEventListener('click', (event) => linkChange[1].style.color = "purple");
linkChange[2].addEventListener('click', (event) => linkChange[2].style.color = "purple");
linkChange[3].addEventListener('click', (event) => linkChange[3].style.color = "purple");

welcomeText.addEventListener('click', (event) => welcomeText.style.backgroundColor = "Pink");
welcomeText.addEventListener('dblclick', (event) => welcomeText.style.backgroundColor = "white");

pageBackground.addEventListener('wheel', (event) => pageBackground.style.backgroudColor = "Grey");

