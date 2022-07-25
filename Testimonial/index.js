
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function plusSlides(n){
    showSlides(slideIndex += n);
}


function showSlides(n){
    let i;
    let slides = document.querySelectorAll('.testimonial-card');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIndex-1].style.display = 'block'

    const prev = document.querySelectorAll('.prev');
    const next = document.querySelectorAll('.next');

    next.forEach(nextBtn => {
        nextBtn.addEventListener('click',  (e) => {
            if (slideIndex > 0 && slideIndex <= slides.length) {
                slides[slideIndex].style.display = 'block'
                slides[slideIndex-1].style.display = 'none'
            }
          
        })
    });


    prev.forEach(prevBtn => {
        prevBtn.addEventListener('click',  (e) => {
           if (slideIndex != 0) {
            slides[slideIndex].style.display = 'none'
            slides[slideIndex-1].style.display = 'block'
           }
           

        })
    });
}




