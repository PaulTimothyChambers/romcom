
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('h2');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var homeBtn = document.querySelector('.home-button');
var rdmCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var makeNewBtn = document.querySelector('.make-new-button');
var userBookBtn = document.querySelector('.create-new-book-button');
var homeView = document.querySelector('.home-view');
var makeMyBookView = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view');
var userCover = document.getElementById('cover');
var userTitle = document.getElementById('title');
var userDescriptor1 = document.getElementById('descriptor1');
var userDescriptor2 = document.getElementById('descriptor2');
var viewSavedCovers = document.querySelector('.saved-covers-section')
var savedCovers = [];
var currentCover;

rdmCoverBtn.addEventListener('click', showRdmCover);
makeNewBtn.addEventListener('click', switchViewsToForm);
viewSavedBtn.addEventListener('click', switchViewsToSavedCovers);
homeBtn.addEventListener('click', switchViewsToHome);
window.addEventListener('load', showRdmCover);
userBookBtn.addEventListener('click', saveUserInput);
saveCoverBtn.addEventListener('click', saveCover);
viewSavedCovers.addEventListener('dblclick', deleteCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRdmCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  if (currentCover.tagline1 === currentCover.tagline2) {
    currentCover.tagline2 = descriptors[getRandomIndex(descriptors)];
  }
  renderCover();
};

function renderCover() {
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
};

function switchViewsToSavedCovers() {
  homeView.classList.add('hidden');
  savedCoversView.classList.remove('hidden');
  makeMyBookView.classList.add('hidden');
  rdmCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  displaySavedCovers();
};

function switchViewsToHome() {
  homeView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
  makeMyBookView.classList.add('hidden');
  rdmCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
  homeBtn.classList.add('hidden');
};

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
  switchViewsToHome();
  renderCover();
};

function displaySavedCovers() {
  viewSavedCovers.innerHTML = "";
  for (var i=0; i<savedCovers.length; i++) {
    viewSavedCovers.innerHTML += `
      <section class='mini-cover' id=${savedCovers[i].id}>
        <img class='cover-image' src=${savedCovers[i].cover}>
        <h2 class='cover-title'>${savedCovers[i].title}</h2>
        <h3 class='tagline'> A tale of <span class='tagline-1'>${savedCovers[i].tagline1}</span> and <span class='tagline-2'>${savedCovers[i].tagline2}</span></h3>
        <img class='price-tag' src='./assets/price.png'>
        <img class='overlay' src='./assets/overlay.png'>
      </section>
    `;
  }
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

function deleteCover(element) {
  for (var i=0; i<savedCovers.length; i++) {
    if (element.target.parentNode.id == savedCovers[i].id) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
};
