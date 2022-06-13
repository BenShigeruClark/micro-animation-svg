const tl = gsap.timeline({
    defaults: {duration: 0.35, ease: "power2.easeOut"}
});
// home animation
const home = document.querySelector(".home");
// notifications animation
const notifications = document.querySelector(".notifications");

// feather starts at center
gsap.set(".feather", {scale: 0, transformOrigin: "center"});

// Event Listeners 
home.addEventListener("click", () => {
    gsap.fromTo(".home-svg", {scale: 1}, {scale: 0.8, yoyo: true, repeat: 1});
    gsap.fromTo(".feather", {y: -5, scale: 0}, {y: 20, scale: 1.5, duration: 2, stagger: 0.2});
    gsap.fromTo(".right-feather", {x: 0}, {x: 5});
    gsap.fromTo(".left-feather", {x: 0}, {x: -2});
});
// Setting the transform origin
gsap.set(".bell", {transformOrigin: "top center"});
gsap.set(".ringer", {transformOrigin: "top center"});
gsap.set(".wave", {opacity: 0, transformOrigin: "bottom"});

notifications.addEventListener("click", () => {
    gsap.fromTo(".bell", {rotation: -8}, {rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)"});
    gsap.fromTo(".ringer", {rotation: -3, x: 0.5}, {rotation: 0, x: 0, duration: 2, ease: "elastic.out(5, 0.2)"});
    gsap.fromTo(".wave", {scale: 0, opacity: 1}, {scale: 1.3, opacity: 0, duration: 1});
});
