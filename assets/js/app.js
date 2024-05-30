function loadHtml(filePath, elementId) {
  return fetch(filePath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    });
}

function loadComponents() {
  // Define all the components to load with their file paths and corresponding element IDs
  const components = [
    { filePath: "assets/html/navbar.html", elementId: "navbarComponent" },
    { filePath: "assets/html/holiday.html", elementId: "holidayComponent" },
    { filePath: "assets/html/blogs.html", elementId: "blogsComponent" },
    { filePath: "assets/html/about.html", elementId: "aboutComponent" },
    {
      filePath: "assets/html/facilities.html",
      elementId: "facilitiesComponent",
    },
    { filePath: "assets/html/contact.html", elementId: "contactComponent" },
    {
      filePath: "assets/html/accommodation.html",
      elementId: "accommodationComponent",
    },
    {
      filePath: "assets/html/testimonial.html",
      elementId: "testimonialComponent",
    },
    {
      filePath: "assets/html/ota.html",
      elementId: "otaComponent",
    },
    {
      filePath: "assets/html/footer.html",
      elementId: "footerComponent",
    },
  ];

  // Create an array of promises for loading each component
  const loadPromises = components.map((component) =>
    loadHtml(component.filePath, component.elementId)
  );

  // Return a promise that resolves when all components have been loaded
  return Promise.all(loadPromises);
}

function initializeNavbar() {
  const header = document.getElementById("header");
  const toggleButton = document.getElementById("toggleButton");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".navlink");
  const currentUrl = window.location.href;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  overlay.addEventListener("click", function () {
    navMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });

  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    link.addEventListener("click", function () {
      navLinks.forEach(function (l) {
        l.classList.remove("active");
      });
      link.classList.add("active");
      navMenu.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
}

function startHeroVideo() {
  var backgroundVideo = document.getElementById("backgroundVideo");
  backgroundVideo.play();
}

function initializeCarousel() {
  $(".holiday.owl-carousel").owlCarousel({
    loop: true, // Loop is turned on
    margin: 32, // Increased margin to 32
    nav: true, // Next and prev arrows enabled
    dots: false, // Indicator dots enabled
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
  $(".blogs.owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
  $(".testimonial.owl-carousel").owlCarousel({
    loop: true,
    margin: 32,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 1,
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   768: {
    //     items: 2,
    //   },
    //   1024: {
    //     items: 4,
    //   },
    // },
  });
  $(".about.owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    center: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
  $(".accommodation.owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    // autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 1.85,
      },
    },
  });
}

const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

jQuery(window).on("load", function () {
  loadComponents().then(() => {
    initializeNavbar();
    startHeroVideo();
    initializeCarousel();
  });
});
