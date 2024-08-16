const individuals = document.querySelectorAll('.comp');
let currentIndex = 0;

function showNextTestimonial() {
    individuals[currentIndex].classList.remove('show');
    individuals[currentIndex].classList.add('hide-left');

    currentIndex = (currentIndex + 1) % individuals.length;

    individuals[currentIndex].classList.remove('hide-right');
    individuals[currentIndex].classList.add('show');

    setTimeout(() => {
        individuals[currentIndex].classList.add('hide-left');
    }, 4000); 
}


function startSliding() {
    setInterval(showNextTestimonial, 4000); 
}

window.onload = () => {
    individuals[0].classList.add('show');
    startSliding();
};

const heading = document.querySelector('.heading');

heading.addEventListener('mouseover', () => {
    heading.style.animationPlayState = 'paused';
});

heading.addEventListener('mouseout', () => {
    heading.style.animationPlayState = 'running';
});


// navbar
function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    var barIcon = document.querySelector('.bar i');

    if (navbar.style.maxHeight === "0px" || navbar.style.maxHeight === "") {
        navbar.style.maxHeight = navbar.scrollHeight + "px"; 
        navbar.style.opacity = "1";
        barIcon.classList.remove('fa-bars');
        barIcon.classList.add('fa-times');
    } else {
        closeNavbar(navbar, barIcon);
    }

    navbar.querySelectorAll('ul li a').forEach(link => {
        link.addEventListener('click', function() {
            closeNavbar(navbar, barIcon);
        });
    });
}

function closeNavbar(navbar, barIcon) {
    navbar.style.maxHeight = "0px"; 
    navbar.style.opacity = "0";
    barIcon.classList.remove('fa-times');
    barIcon.classList.add('fa-bars');
}