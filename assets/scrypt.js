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


//information section
// let info = document.querySelector('.text-box');
// info.addEventListener('click', function() {
//     info.classList.toggle('expanded');
// });
// ScrollReveal({
//     reset:true,
//     distance:'60px',
//     duration:2000,
//     delay:400
// });
// ScrollReveal().reveal('.main-title',{delay:500,origin:'left'});
// ScrollReveal().reveal('.content2_container .image',{delay:500,origin:'left'});
// ScrollReveal().reveal('.text-box',{delay:500,origin:'right'});
// Animacja dla .image
if (window.innerWidth > 900) {
    ScrollTrigger.create({
        animation: gsap.from(".main-title", {
            x: "-100vw", 
            scale: 1.2,
        }),
        scrub: true,
        trigger: ".content1",
        start: "top 20%",
        endTrigger: ".content1",
        end: "bottom top",
    });
    ScrollTrigger.create({
        animation: gsap.from(".content2_container .image", {
            x: "-100vw", 
            delay: 0.5, 
        }),
        scrub: true,
        trigger: ".content2_container .image",
        start: "top 90%", 
        end: "top 30%",  
    });
    
    // Animacja dla .text-box
    ScrollTrigger.create({
        animation: gsap.from(".text-box", {
            x: "100vw", 
            delay: 0.5, 
        }),
        scrub: true,
        trigger: ".text-box",
        start: "top 90%", 
        end: "top 40%",  
    });
    
}else if (window.innerWidth<900){
ScrollTrigger.create({
    animation: gsap.fromTo(".main-title", 
        {
            y: "80vw", 
            scale: 1.2,
            filter: "blur(10px)", 
            opacity: 0 
        }, 
        {
            y: "0vw", 
            scale: 1,
            filter: "blur(0px)", 
            opacity: 1, 
            delay: 0.2,
            duration: 1 
        }
    ),
    scrub: true,
    trigger: ".content1",
    start: "top 20%", 
    endTrigger: ".content1",
    end: "bottom top", 
});
}
var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  gsap.fromTo(".footer",
    {
        opacity: 0,
        y: "30vh", 
        bottom: "0vh" 
    },
    {
        opacity: 1,
        y: "7vh", 
        bottom: "7vh",
        scrollTrigger: {
            trigger: ".containerlog2",
            start: "top bottom", 
            end: "top center", 
            scrub: true
        }
    }
);
$(document).ready(function(){
    $(".action").on("click", function(event){
        event.stopPropagation();
        $(".menu__dropdown").toggleClass("active");
    });
    $(document).on("click", function(){
        $(".menu__dropdown").removeClass("active");
    });
    $(".menu__dropdown").on("click", function(event){
        event.stopPropagation();
    });
});
