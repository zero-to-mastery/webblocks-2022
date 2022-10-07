//DOM Declarations
const openAccordion = document.querySelector(".accordion-head");
const accordionBody = document.querySelector(".accordion-body");
const accordionIcon = document.querySelector(".fa-chevron-down");

openAccordion.addEventListener('click', () => {
    openAccordion.classList.toggle("active");
    accordionBody.classList.toggle("hidden");
    accordionIcon.classList.toggle("fa-rotate-180")
})