import Option from "./components/Option";

// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = `https://dog.ceo/api/`;

const breedListEl = document.querySelector("#data-breed-list");
const imageEl = document.querySelector("img");

// === MARK: Fetch
async function getDogsList() {
  let breeds = JSON.parse(localStorage.getItem("breeds"));

  if (!breeds) {
    try {
      const res = await fetch(`${BASE_URL}breeds/list/all`);
      const data = await res.json();
      localStorage.setItem("breeds", JSON.stringify(data.message));
      breeds = data.message;
    } catch (err) {
      console.error("Error occured", err);
    }
  }

  return breeds;
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
    const fragment = document.createDocumentFragment();
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
   imageEl.src= "giphy.webp"
  getDogImage(breed).then((data) => {
    imageEl.src = dogsImage;
    imageEl.alt = breed;
  });
}

renderImage("poodle");
renderSelect;
