gsap.fromTo(".footer",
    {
        opacity: 0,
        y: "30vh", 
        bottom: "20vh" 
    },
    {
        opacity: 1,
        y: "8vh", 
        bottom: "7vh",
        scrollTrigger: {
            trigger: ".containerlog2",
            start: "top bottom", 
            end: "top center", 
            scrub: true
        }
    }
);