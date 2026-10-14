// Shared APE Electric site behavior.
var primaryContact = {
  phone: "+12673671497",
  displayPhone: "(267) 367-1497"
};

document.querySelectorAll(".year").forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll(".primary-call").forEach(function (link) {
  link.href = "tel:" + primaryContact.phone;
  link.textContent = "Call our team: " + primaryContact.displayPhone;
});
