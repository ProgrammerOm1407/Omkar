const modal = document.getElementById("modal");
const modalImg = document.getElementById("full-img");
const images = document.querySelectorAll(".photo-item img");
const closeBtn = document.querySelector(".close");

// Open Modal on click
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Close Modal
closeBtn.onclick = () => { modal.style.display = "none"; }

// Close Modal when clicking outside the image
window.onclick = (event) => {
    if (event.target == modal) { modal.style.display = "none"; }
}
