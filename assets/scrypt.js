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
gsap.utils.toArray(".content").forEach((content) => {
    ScrollTrigger.create({
        trigger: content,
        start: "top 80%",
        end: "bottom top",
        onEnter: () => {
            gsap.to(content.querySelector(".name"), {
                opacity: 1,
                y: 0,
                filter: "blur(0)",
                duration: 1,
                ease: "power3.out",
                onStart: () => content.querySelector(".name").style.animation = 'animate 1s ease-in-out forwards'
            });
            gsap.to(content.querySelector(".des"), {
                opacity: 1,
                y: 0,
                filter: "blur(0)",
                delay: 0.2,
                duration: 1,
                ease: "power3.out",
                onStart: () => content.querySelector(".des").style.animation = 'animate 1s ease-in-out forwards'
            });
            gsap.to(content.querySelector("button"), {
                opacity: 1,
                y: 0,
                filter: "blur(0)",
                delay: 0.4,
                duration: 1,
                ease: "power3.out",
                onStart: () => content.querySelector("button").style.animation = 'animate 1s ease-in-out forwards'
            });
        },
    });
});

//buttons of content1
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.slides');
    document.querySelector('.slider').appendChild(items[0])
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.slides');
    document.querySelector('.slider').prepend(items[items.length-1])
})