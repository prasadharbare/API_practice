// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = 'https://dog.ceo/api/breeds/list/all'
const imageEl = document.querySelector("img");
const breedListEl=document.querySelector("data-Breed-List")

console.log(imgE1, breedListEl);

function getDogList() {
  fetch(`${BASE_URL} + breeds/list/all`)
    .then((res => res.json())
    .then((data=>console.log(data))
    .catch((err)=> console.log("error agaya",err));
    
}
getDogList();

function renderSelect() {
  getDogList().then((breedlist) => {
    for (let value in breedListEl) {
      const option = document.createElement("option");
      option.textContent = Breed;
      breedListEl.appendChild(option);
    }
  });
}
renderSelect();
  
    
  const option = document.createElement("option");
  option.textContent = "Some data";
  option.value="some value"
  breedListEl.appendChild(option);
}


function renderImage() {
  
}


// async function getImage() {
//   const res = await fetch(
//     `https://dog.ceo/api/breed/affenpinscher/images/random`
//   );
//   const data = await res.json();
//   console.log(data.message);

//   imageEl.src = data.message;
// }
// getImage();


