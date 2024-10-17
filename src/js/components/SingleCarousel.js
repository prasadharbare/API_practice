export default function singleCarousel() {
    const div = document.singleCarousel("div");
    div.classList.add("carousel-item", "active");
    div.innerHTML = `<img 
    src="${src}"
    class="d-block w-100 rounded-3"
    alt="dogName"
    />`;
    return div;
}
