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
