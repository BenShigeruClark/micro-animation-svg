const tl = gsap.timeline({
    defaults: {duration: 0.35, ease: "power2.easeOut"}
});

const home = document.querySelector(".home");

home.addEventListener("click", () => {
    gsap.fromTo(".home-svg", {scale: 1}, {scale: 0.8, yoyo: true, repeat: 1})
})