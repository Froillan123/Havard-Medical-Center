document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        let scrollY = window.scrollY;

        // Toggle 'sticky' class for the header
        let header = document.querySelector('header');
        header.classList.toggle('sticky', scrollY > 100);

        // Highlight the active section in the navigation
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (scrollY >= offset && scrollY < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
});



function toggleDetails() {
    var details = document.getElementById("details");
    var content = document.querySelector(".content");
    var readMoreBtn = document.querySelector(".btn");

    details.classList.toggle("hidden");
    content.classList.toggle("expanded");

    // Change button text based on the current state
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Show Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
}


ScrollReveal({ 
    distance: '50px',
    duration: 1600,
    delay: 200
});

ScrollReveal().reveal('.right',  { origin: 'right' });
ScrollReveal().reveal('.left',  { origin: 'left' });