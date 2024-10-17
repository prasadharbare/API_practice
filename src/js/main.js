// MARK: Imports
import Option from "./components/Option";
import singleCarousel from "./components/SingleCarousel";

// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = `https://dog.ceo/api/`;

// === MARK: DOM Selection
const breedListEl = document.querySelector("#data-breed-list");
const carouselContainerEl = document.querySelector(".carousel-inner");

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

// Fetch a single dog breed image
async function getDogImages(breed) {
  try {
    const res = await fetch(`${BASE_URL}breed/${breed}/breed/images`);
    console.log(data.message);
    
    const data = await res.json();
    return data.message;
  } catch (error) {
    return console.error(error);
  }
}

// === MARK: Render
async function renderSelect() {
  const dogsList = await getDogsList();

  const fragment = document.createDocumentFragment();

  console.log(dogsList);

  Object.keys(dogsList).forEach((dogName) => {
    fragment.appendChild(Option(dogName));
  });

  breedListEl.append(fragment);
}
  //fetch images for a given breed
async function renderImageCarousel(breed) {
  carouselContainerEl.innerHTML = "";
  const data = await getDogImages(breed);
  const fragment = document.createDocumentFragment();
  data.forEach(link => fragment.appendChild(singleCarousel(link)));
  carouselContainerEl.appendChild(fragment);
}
renderImageCarousel("poodle");

// === MARK:  Events
//render multiple breed options
breedListEl.addEventListener("change", async (e) => {
  const currentInput = e.target.value;
  renderImageCarousel(currentValue);
});

// === Render on inital load
document.addEventListener("DOMContentLoaded", () => {
  renderSelect();
});

