// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('img');
var coverTitle = document.querySelector('h2');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var homeBtn = document.querySelector('.home-button');
var rdmCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var makeNewBtn = document.querySelector('.make-new-button');

var homeView = document.querySelector('.home-view');
var makeMyBookView = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
rdmCoverBtn.addEventListener('click', showRdmCover);
makeNewBtn.addEventListener('click', switchViewsToForm);
viewSavedBtn.addEventListener('click', switchViewsToSavedCovers);
homeBtn.addEventListener('click', switchViewsToHome);
window.addEventListener('load', showRdmCover);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRdmCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  if (currentCover.tagline1 === currentCover.tagline2) {
    currentCover.tagline2 = descriptors[getRandomIndex(descriptors)];
  }

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
};

function switchViewsToForm() {
  homeView.classList.add('hidden');
  savedCoversView.classList.add('hidden');
  makeMyBookView.classList.remove('hidden');

  rdmCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
}

function switchViewsToSavedCovers() {
  homeView.classList.add('hidden');
  savedCoversView.classList.remove('hidden');
  makeMyBookView.classList.add('hidden');

  rdmCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
}

function switchViewsToHome() {
  homeView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
  makeMyBookView.classList.add('hidden');

  rdmCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
  homeBtn.classList.add('hidden');
}
