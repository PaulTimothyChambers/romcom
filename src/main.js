// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('img');
var coverTitle = document.querySelector('h2');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var homeBtn = document.querySelector('.home-button hidden');
var rdmCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var makeNewBtn = document.querySelector('.make-new-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var newCover = covers[getRandomIndex(covers)];
var newTitle = titles[getRandomIndex(titles)];
var newDescrip1 = descriptors[getRandomIndex(descriptors)];
var newDescrip2 = descriptors[getRandomIndex(descriptors)];

// decide where this goes
if (newDescrip1 === newDescrip2) {
  newDescrip2 = descriptors[getRandomIndex(descriptors)];
}

currentCover = new Cover(newCover, newTitle, newDescrip1, newDescrip2);

coverImage.src = currentCover.cover;
coverTitle.innerText = currentCover.title;
descriptor1.innerText = currentCover.tagline1;
descriptor2.innerText = currentCover.tagline2;
