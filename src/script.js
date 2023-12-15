let currentImage = '../assets/only-image-support.webp';

    function showImage(imageSrc) {
        document.getElementById('placeholderImage').src = imageSrc;
        currentImage = imageSrc;
    }

    function hideImage() {
        // Set the image placeholder to the last hovered card image
        document.getElementById('placeholderImage').src = currentImage;
    }



//Testimonials
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
//console.log(testimonials)

function showTestimonial(index){
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'flex' : 'none';
        //console.log(testimonial)
    });
    updatePagination(index);
}

function updatePagination(index) {
    const paginationDots = document.getElementById('pagination');
    paginationDots.innerHTML = '';

    testimonials.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showTestimonial(i));
        if (i === index) {
            dot.classList.add('active');
        }
        paginationDots.appendChild(dot);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Show the initial testimonial
showTestimonial(currentTestimonial);
