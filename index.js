document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-profile-card").addEventListener("click", function() {
    document.querySelector("#profile-card-container").scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-about").addEventListener("click", function() {
    document.querySelector("#about-section").scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-experience").addEventListener("click", function() {
    document.querySelector("#experience-section").scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-projects").addEventListener("click", function() {
    document.querySelector("#projects-section").scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-contact").addEventListener("click", function() {
    document.querySelector("#footer-section").scrollIntoView({ behavior: "smooth" });
  });
});




function toggleDescription(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }