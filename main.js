const img1=document.querySelector("img")
async function getData() {
    const res = await fetch("https://dog.ceo/api/breed//images/random");
    const data = await res.json
}