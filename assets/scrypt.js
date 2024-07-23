gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.content .name, .content .des, .content button').forEach(element => {
    element.style.animation = 'none';
});

// ScrollTrigger animations
ScrollTrigger.create({
    animation: gsap.from(".logo", {
        y: "50vh",
        scale: 10,
        yPercent: -50,
    }),
    scrub: true,
    trigger: ".content1",
    start: "top bottom",
    endTrigger: ".content1",
    end: "top center",
});

ScrollTrigger.create({
    animation: gsap.from(".logo2", {
        y: "50vh",
        scale: 3,
        yPercent: -50,
    }),
    scrub: true,
    trigger: ".content1",
    start: "top bottom",
    endTrigger: ".content1",
    end: "top center",
});