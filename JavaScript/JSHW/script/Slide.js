document.addEventListener('DOMContentLoaded', () => {
    let slides = document.getElementById("slides")
    let firstImgClone = slides.firstElementChild.cloneNode(true)
    let lastImgClone = slides.lastElementChild.cloneNode(true)

    slides.appendChild(firstImgClone)
    slides.insertBefore(lastImgClone, slides.firstElementChild)

    // slides.style.transitionDuration = "0.0s";
    slides.style.transform = "translate(-800px)";



    let preBtn = document.getElementById("preBtn")
    let nextBtn = document.getElementById("nextBtn")
    let currentImg = 1;






    nextBtn.addEventListener('click', () => {
        if (!(currentImg > slides.children.length)) {
            setTimeout(() => {
                currentImg++;
                slides.style.transitionDuration = "0.5s";
                slides.style.transform =
                    `translate(-${currentImg * 800}px)`;
                setTimeout(() => {
                    if (currentImg === slides.children.length - 2) {
                        slides.style.transitionDuration = "0.0s";
                        slides.style.transform =
                            `translate(-${(0) * 800}px)`;
                        currentImg = 0;
                    }
                }, 505)
            }, 10);
        } else {
            return;
        }
    });
    preBtn.addEventListener('click', () => {
        if ((currentImg > 0)) {
            setTimeout(() => {
                currentImg--;
                slides.style.transitionDuration = "0.5s";
                slides.style.transform =
                    `translate(-${currentImg * 800}px)`;
                setTimeout(() => {
                    if (currentImg === 0) {
                        slides.style.transitionDuration = "0.0s";
                        slides.style.transform =
                            `translate(-${(slides.children.length - 2) * 800}px)`;
                        currentImg = slides.children.length - 2;
                    }
                }, 505)
            }, 10);
        } else {
            return;
        }
    });




    let showNext = () => {
        if (!(currentImg > slides.children.length)) {
            setTimeout(() => {
                currentImg++;
                slides.style.transitionDuration = "0.5s";
                slides.style.transform =
                    `translate(-${currentImg * 800}px)`;
                setTimeout(() => {
                    if (currentImg === slides.children.length - 2) {
                        slides.style.transitionDuration = "0.0s";
                        slides.style.transform =
                            `translate(-${(0) * 800}px)`;
                        currentImg = 0;
                    }
                }, 505)
            }, 10);
        } else {
            return;
        }
    }
    let slideauto = setInterval(showNext, 5000);
    slides.addEventListener("mouseover", () => { clearInterval(slideauto) });
    slides.addEventListener("mouseout", () => { slideauto = setInterval(showNext, 5000) })

});