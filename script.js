// Shared APE Electric site behavior.
var primaryContact = {
  name: "Danny",
  phone: "+12673671497",
  displayPhone: "(267) 367-1497"
};

document.querySelectorAll(".year").forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll(".primary-call").forEach(function (link) {
  link.href = "tel:" + primaryContact.phone;
  link.textContent = "Call: " + primaryContact.displayPhone;
});

var quoteEmail = "Info@ApeElectricLLC.com";
var quoteSubject = "Electrical Estimate Request";
var mobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
var mobileEmailLink = "mailto:" + quoteEmail + "?subject=" + encodeURIComponent(quoteSubject);
var desktopEmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" +
  encodeURIComponent(quoteEmail) + "&su=" + encodeURIComponent(quoteSubject);

document.querySelectorAll(".email-action").forEach(function (link) {
  if (mobileDevice) {
    link.href = mobileEmailLink;
    link.removeAttribute("target");
    link.removeAttribute("rel");
  } else {
    link.href = desktopEmailLink;
    link.target = "_blank";
    link.rel = "noopener";
  }
});

document.querySelectorAll(".gallery-controls button").forEach(function (button) {
  button.addEventListener("click", function () {
    var gallery = button.closest(".gallery-group").querySelector(".gallery-grid");
    var direction = button.dataset.scroll === "right" ? 1 : -1;
    gallery.scrollBy({ left: direction * gallery.clientWidth * 0.8, behavior: "smooth" });
  });
});

// Add lightweight motion and a return-to-top control consistently on every page.
var revealItems = document.querySelectorAll("main > section, .home-services, .about-person, .contact-card, .business-hours");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("js-ready");
  revealItems.forEach(function (item) { item.classList.add("reveal-on-scroll"); });
  var revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach(function (item) { revealObserver.observe(item); });
}

var backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.type = "button";
backToTop.setAttribute("aria-label", "Back to top");
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);
window.addEventListener("scroll", function () {
  backToTop.classList.toggle("is-visible", window.scrollY > 420);
}, { passive: true });
backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
});
