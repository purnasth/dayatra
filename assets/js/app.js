document.addEventListener("DOMContentLoaded", () => {
  function loadHtml(filePath, elementId) {
    return fetch(filePath)
      .then((response) => response.text())
      .then((html) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = html;
        }
      });
  }

  function loadComponents() {
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
      { filePath: "assets/html/ota.html", elementId: "otaComponent" },
      { filePath: "assets/html/footer.html", elementId: "footerComponent" },
    ];

    const loadPromises = components.map((component) =>
      loadHtml(component.filePath, component.elementId)
    );
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

    if (header) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    }

    if (toggleButton && navMenu && overlay && hamburgerIcon && closeIcon) {
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
    }

    if (navLinks) {
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
          if (navMenu && overlay && hamburgerIcon && closeIcon) {
            navMenu.classList.add("-translate-x-full");
            overlay.classList.add("hidden");
            hamburgerIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
          }
        });
      });
    }
  }

  function startHeroVideo() {
    const backgroundVideo = document.getElementById("backgroundVideo");
    if (backgroundVideo) {
      backgroundVideo.play();
    }
  }

  function initializeCarousel() {
    // Check if the carousels exist before initializing them
    if ($(".holiday.owl-carousel").length) {
      $(".holiday.owl-carousel").owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 4 },
        },
      });
    }

    if ($(".blogs.owl-carousel").length) {
      $(".blogs.owl-carousel").owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        },
      });
    }

    if ($(".testimonial.owl-carousel").length) {
      $(".testimonial.owl-carousel").owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 1,
      });
    }

    if ($(".about.owl-carousel").length) {
      $(".about.owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 1.5 },
        },
      });
    }

    if ($(".accommodation.owl-carousel").length) {
      $(".accommodation.owl-carousel").owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 1.85 },
        },
      });
    }
  }

  $(document).on("click", "#scroll-to-top", function (event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function initializeScrollTrigger() {
    if (typeof gsap !== "undefined" && gsap) {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".boat",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
          id: "scrub",
        },
      });
      tl.to(".boat", {
        duration: 50,
        x: -1100,
      });

      let paraglideTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".paraglide",
          start: "bottom bottom",
          end: "top top",
          scrub: true,
          markers: false,
          id: "paraglide",
        },
      });
      paraglideTl.to(".paraglide", {
        duration: 500,
        y: -200,
      });
    }
  }

  function initializeIsotopeAndLightGallery() {
    $(document).ready(function () {
      // var $grid = $("#image_gallery").isotope({
      //   itemSelector: ".element-item",
      // });

      $("#filter-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      lightGallery(document.getElementById("lightgallery"), {
        selector: "div",
      });
    });
  }

  jQuery(window).on("load", function () {
    loadComponents().then(() => {
      initializeNavbar();
      startHeroVideo();
      initializeCarousel();
      initializeScrollTrigger();
      initializeIsotopeAndLightGallery();
    });
  });
});
