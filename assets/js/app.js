document.addEventListener("DOMContentLoaded", function () {
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
    } else {
      header.classList.remove("backdrop-blur-sm");
      header.classList.add("bg-transparent");
    }
  });
});

// for dropdown
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".dropdown > a");
  var dropdowns = document.querySelectorAll(".dropdown");

  document.addEventListener("click", function (event) {
    var isInsideDropdown = false;

    dropdowns.forEach(function (dropdown) {
      if (dropdown.contains(event.target)) {
        isInsideDropdown = true;
      }
    });

    if (!isInsideDropdown) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("active");
      });
    }
  });

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var parentLi = link.parentElement;
      dropdowns.forEach(function (dropdown) {
        if (dropdown !== parentLi) {
          dropdown.classList.remove("active");
        }
      });

      parentLi.classList.toggle("active");
    });
  });
});

//! important for the hero section video.

function startVideo() {
  var backgroundVideo = document.getElementById("backgroundVideo");
  backgroundVideo.play();
}
