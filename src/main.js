var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('h2');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var buttonHome = document.querySelector('.home-button');
var buttonRandomCover = document.querySelector('.random-cover-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonViewSavedCovers = document.querySelector('.view-saved-button');
var buttonMakeNewCover = document.querySelector('.make-new-button');
var buttonMakeMyBook = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var makeMyBookView = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view');

var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDescriptor1 = document.querySelector('#descriptor1');
var userDescriptor2 = document.querySelector('#descriptor2');

var savedCoversSection = document.querySelector('.saved-covers-section');

var savedCovers = [];
var currentCover;

window.addEventListener('load', showRandomCover);
buttonRandomCover.addEventListener('click', showRandomCover);
buttonMakeNewCover.addEventListener('click', switchViewToMakeNewBook);
buttonViewSavedCovers.addEventListener('click', switchViewToSavedCovers);
buttonHome.addEventListener('click', switchViewToHome);
buttonMakeMyBook.addEventListener('click', saveUserInput);
buttonSaveCover.addEventListener('click', saveCover);
savedCoversSection.addEventListener('dblclick', deleteCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function showRandomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]);
  if (currentCover.tagline1 === currentCover.tagline2) {
    currentCover.tagline2 = descriptors[getRandomIndex(descriptors)];
  }

  renderCover();
}

function renderCover() {
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function switchViewToMakeNewBook() {
  hide(homeView);
  hide(savedCoversView);
  show(makeMyBookView);
  hide(buttonRandomCover);
  hide(buttonSaveCover);
  show(buttonHome);
}

function switchViewToSavedCovers() {
  hide(homeView);
  show(savedCoversView);
  hide(makeMyBookView);
  hide(buttonRandomCover);
  hide(buttonSaveCover);
  show(buttonHome);

  displaySavedCovers();
}

function switchViewToHome() {
  show(homeView);
  hide(savedCoversView);
  hide(makeMyBookView);
  show(buttonRandomCover);
  show(buttonSaveCover);
  hide(buttonHome);
}

function saveUserInput() {
  event.preventDefault();
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDescriptor1.value);
  descriptors.push(userDescriptor2.value);
  currentCover = new Cover(
    userCover.value,
    userTitle.value,
    userDescriptor1.value,
    userDescriptor2.value);

  switchViewToHome();
  renderCover();
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <section class='mini-cover' id=${savedCovers[i].id}>
        <img class='cover-image' src=${savedCovers[i].cover}>
        <h2 class='cover-title'>${savedCovers[i].title}</h2>
        <h3 class='tagline'> A tale of <span class='tagline-1'>${savedCovers[i].tagline1}</span> and <span class='tagline-2'>${savedCovers[i].tagline2}</span></h3>
        <img class='price-tag' src='./assets/price.png'>
        <img class='overlay' src='./assets/overlay.png'>
      </section>
    `;
  }
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function deleteCover(element) {
  savedCovers.forEach(savedCover => {
    if (parseInt(element.target.parentNode.id) === savedCover.id) {
      savedCovers.splice(savedCovers.indexOf(savedCover), 1);
    }
  });

  displaySavedCovers();
}
