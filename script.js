const slider = document.querySelector(".img");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

// Hide left button initially
leftBtn.style.display = "none";

function checkButtons() {

    // Beginning
    if (slider.scrollLeft <= 0) {
        leftBtn.style.display = "none";
    } else {
        leftBtn.style.display = "block";
    }

    // End
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        rightBtn.style.display = "none";
    } else {
        rightBtn.style.display = "block";
    }
}

// Right button
rightBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 300,
        behavior: "smooth"
    });

    // Check after scrolling finishes
    setTimeout(checkButtons, 500);
});

// Left button
leftBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -300,
        behavior: "smooth"
    });

    setTimeout(checkButtons, 500);
});

// Also works if user scrolls manually
slider.addEventListener("scroll", checkButtons);

// Initial check
checkButtons();

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{

    const btn = faq.querySelector("button");

    btn.addEventListener("click",()=>{

        faq.classList.toggle("active");

    });

});