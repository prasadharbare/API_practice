import Option from "./components/Option";

// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = `https://dog.ceo/api/`;

const breedListEl = document.querySelector("#data-breed-list");
const imageEl = document.querySelector("img");

// === MARK: Fetch
function getDogsList() {
  try {
    return fetch(`${BASE_URL}breeds/list/all`)
      .then((res) => res.json())
      .then((data) => data.message)
  }catch(error){
      return console.error(error);
  }
}

// TODO: Implement this
function getDogImage(breed) {
  fetch(`${BASE_URL}breed/${breed}/images/random`)
    .then((res) => res.json())
    .then((data) => data.message);
}

// === MARK: Render
function renderSelect() {
  getDogsList().then((breedList) => {
    for (let breed in breedList) {
      breedListEl.appendChild(Option(breed));
    }
  });
}

renderSelect();

async function renderSelect() {
  const dogsList = await getDogsList();
  Object.keys(dogsList).forEach((dogName)=>{
  breedListEl.appendChild(Option(dogName));
});
}

 async function renderImage(breed) {
  getDogImage(breed).then((data) => {
    imageEl.src = dogsImage;
  });
}

renderImage("poodle");
renderSelect;
