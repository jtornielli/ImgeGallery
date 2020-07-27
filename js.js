const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-image");
const imageText = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Cambiar la imagen y el texto de forma dinamica
       const originalSource = preview.getAttribute("data-original");
        original.src = `./full/${originalSource}`;
        const altText = preview.alt;
        imageText.textContent = altText;
    });
});

modal.addEventListener('click',(e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
})