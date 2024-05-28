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
    { filePath: "assets/html/about.html", elementId: "aboutComponent" },
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
  const logo = document.getElementById("logo");
  const toggleButton = document.getElementById("toggleButton");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");
  const header = document.querySelector(".blur-bg");

  toggleButton.addEventListener("click", function () {
    navLinks.classList.toggle("-translate-x-full");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  overlay.addEventListener("click", function () {
    navLinks.classList.add("-translate-x-full");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("backdrop-blur-sm");
      header.classList.remove("bg-transparent");
      logo.classList.add("scale-75");
    } else {
      header.classList.remove("backdrop-blur-sm");
      header.classList.add("bg-transparent");
      logo.classList.remove("scale-100");
    }
  });
}

function startHeroVideo() {
  var backgroundVideo = document.getElementById("backgroundVideo");
  backgroundVideo.play();
}

function initializeCarousel() {
  $(".holiday.owl-carousel").owlCarousel({
    loop: false, // Loop is turned off
    margin: 32, // Increased margin to 32
    nav: true, // Next and prev arrows enabled
    dots: false, // Indicator dots enabled
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
  $(".testimonial.owl-carousel").owlCarousel({
    loop: false,
    margin: 32,
    nav: true,
    dots: false,
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

jQuery(window).on("load", function () {
  loadComponents().then(() => {
    initializeNavbar();
    startHeroVideo();
    initializeCarousel();
  });
});
