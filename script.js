function toggleNavbar() {
    const navbarLinksContainer = document.querySelector(
        ".navbar-links-container"
    );
    navbarLinksContainer.classList.toggle("hidden-menu");
    const button = document.querySelector(".hamburger-btn");
    if (button.innerHTML !== `❌`) {
        button.innerHTML = "❌";
    } else {
        button.innerHTML = `<svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 6H21M3 12H21M3 18H21"
                            stroke="#121112"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>`;
    }
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2700,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 30,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            425: {
                items: 2,
            },
            767: {
                items: 3,
            },
        },
    });
});
