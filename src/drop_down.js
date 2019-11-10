
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {

  const dogLinks = [];

  for (let key in dogs) {
    let aElement = document.createElement('a');
    aElement.innerHTML = key;
    aElement.href = dogs[key];

    let liElement = document.createElement('li');
    liElement.classList.add('dog-link');
    liElement.append(aElement);

    dogLinks.push(liElement);
  }
  return dogLinks;
}

function attachDogLinks() {
  const dropDownList = document.getElementsByClassName('drop-down-dog-list')[0];
  const dogLinks = dogLinkCreator();

  dogLinks.forEach(dogLink => {
    dropDownList.append(dogLink);
  })
}

function handleEnter() {
  const dogLinks = document.getElementsByClassName('dog-link');
  Array(...dogLinks).forEach(dogLink => {
    dogLink.style.display = 'block';
  })
}

function handleLeave() {
  const dogLinks = document.getElementsByClassName('dog-link');
  Array(...dogLinks).forEach(dogLink => {
    dogLink.style.display = 'none';
  })
}

attachDogLinks();

const navElement = document.getElementsByClassName('drop-down-dog-nav')[0];
navElement.addEventListener('mouseenter', handleEnter);
navElement.addEventListener('mouseleave', handleLeave);