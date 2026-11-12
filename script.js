const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const toast = document.querySelector("#toast");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const testimonials = [
  {
    quote: "“Antixor Catering made our wedding day absolutely perfect! The food was amazing, the service was professional, and every detail was taken care of.”",
    name: "Sarah Ahmed",
    role: "Wedding Client",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
  },
  {
    quote: "“Our annual company event was effortless thanks to the Antixor team. Beautiful presentation, delicious dishes and a team that truly cares.”",
    name: "Michael Roberts",
    role: "Corporate Client",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
  },
  {
    quote: "“From the first menu discussion to the final serving, everything was thoughtful and polished. Our guests are still talking about the food!”",
    name: "Aisha Khan",
    role: "Private Event Client",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80"
  }
];
let currentTestimonial = 0;
function showTestimonial(index) {
  currentTestimonial = (index + testimonials.length) % testimonials.length;
  const item = testimonials[currentTestimonial];
  document.querySelector("#quote").textContent = item.quote;
  document.querySelector("#clientName").textContent = item.name;
  document.querySelector("#clientRole").textContent = item.role;
  document.querySelector("#clientPhoto").src = item.photo;
  document.querySelectorAll("#sliderDots button").forEach((dot, i) => dot.classList.toggle("selected", i === currentTestimonial));
}
document.querySelector("#prevTestimonial").addEventListener("click", () => showTestimonial(currentTestimonial - 1));
document.querySelector("#nextTestimonial").addEventListener("click", () => showTestimonial(currentTestimonial + 1));
document.querySelectorAll("#sliderDots button").forEach((dot, i) => dot.addEventListener("click", () => showTestimonial(i)));

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
document.querySelectorAll("[data-dish]").forEach(button => {
  button.addEventListener("click", () => showToast(`${button.dataset.dish} added to your enquiry. Contact us for availability.`));
});
