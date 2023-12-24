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

    // Dropdown functionality for "Extra Links ↓"
    let extraLinksDropdownLink = document.querySelector('.navbar a[href="#"]');
    let extraLinksDropdown = document.querySelector('.dropdown');

    extraLinksDropdownLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        extraLinksDropdown.style.display = (extraLinksDropdown.style.display === 'block') ? 'none' : 'block';
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.navbar a[href="#"]')) {
            extraLinksDropdown.style.display = 'none';
        }
    });
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
    // reset: true,
    distance: '20px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.right',  { origin: 'right' });
ScrollReveal().reveal('.left, .content', { origin: 'left' });

var swiper = new Swiper(".group-slider", {
    spaceBetween: 15,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });





  document.addEventListener('DOMContentLoaded', function () {
    // Data for the bar graph
    const labels = ['Total Revenues', 'Total Expenses', 'Profit'];
    const totalRevenuesData = [434000 + 30000, 0, 0]; // Combine "Medical Revenues" and "Research Revenues"
    const expensesData = [0, 124000 + 1667 + 23000 + 35000 + 15000 + 3000 + 5000 + 9000 + 28000, 0]; // Sum of expenses
    const profitData = [0, 0, 434000 + 30000 - (124000 + 1667 + 23000 + 35000 + 15000 + 3000 + 5000 + 9000 + 28000)];

    // Get the canvas element
    const ctx = document.getElementById('incomeStatementChart').getContext('2d');

    // Create the bar graph
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Revenues',
                    backgroundColor: 'rgba(0, 128, 0, 0.5)', // Green color
                    borderColor: 'rgba(0, 128, 0, 1)',
                    borderWidth: 1,
                    data: totalRevenuesData,
                },
                {
                    label: 'Expenses',
                    backgroundColor: 'rgba(255, 165, 0, 0.5)', // Orange color
                    borderColor: 'rgba(255, 165, 0, 1)',
                    borderWidth: 1,
                    data: expensesData,
                },
                {
                    label: 'Profit',
                    backgroundColor: 'rgba(0, 0, 255, 0.5)', // Blue color
                    borderColor: 'rgba(0, 0, 255, 1)',
                    borderWidth: 1,
                    data: profitData,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Income Statement Chart',
                    font: {
                        size: 20,
                    },
                },
            },
        },
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('ownerEquityChart').getContext('2d');
    const data = {
        labels: ['Starting', 'ADD: Profit', 'Balance', 'Less: Withdrawal', 'Ending'],
        datasets: [{
            label: 'Marasigan, Capital',
            borderColor: 'rgba(40, 191, 150, 1)', // New color
            backgroundColor: 'rgba(40, 191, 150, 0.2)', // New light color
            borderWidth: 2,
            fill: true, // Fill the area under the line
            data: [250000, 220333.33, 470333.33, -200000, 270333.33],
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Data for the horizontal bar chart
    const labels = ['Total Assets', 'Non-Current Assets', 'Total Owner\'s Equity', 'Total Liability and Owner\'s Equity'];
    const data = [2058333.33, 1701000, 270333, 1788000];
    const colors = ['#F2AFEF', '#C499F3', '#7360DF', '#33186B']; // Red, Blue, Purple, YellowGreen

    // Get the canvas element
    const ctx = document.getElementById('balanceSheetChart').getContext('2d');

    // Create the horizontal bar chart
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors
            }]
        },
        options: {
            indexAxis: 'y', // Specify horizontal orientation
            scales: {
                x: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            cornerRadius: 0.5 // Set the border radius
        }
    });
});