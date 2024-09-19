gsap.fromTo(".footer",
    {
        opacity: 0,
        y: "30vh", 
        bottom: "20vh" 
    },
    {
        opacity: 1,
        y: "9vh", 
        bottom: "7vh",
        scrollTrigger: {
            trigger: ".containerlog2",
            start: "top bottom", 
            end: "top center", 
            scrub: true
        }
    }
);
let nextButton=document.getElementById('next-slide');
let prevButton=document.getElementById('prev-slide');
let infoButton=document.getElementById('info-button');
let carousel=document.querySelector('.project-carousel');
let listHTML=document.querySelector('.project-carousel .carousel-wrapper');
nextButton.onclick= function(){
    showSlider('next');
}
prevButton.onclick= function(){
    showSlider('prev');
}
let unAcceptClick;
const showSlider=(type)=>{
    nextButton.style.pointerEvents='none';
    prevButton.style.pointerEvents='none';
    carousel.classList.remove('prev','next');
    let items=document.querySelectorAll('.project-carousel .carousel-wrapper .item');
    if(type==='next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast=items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    unAcceptClick=setTimeout(()=>{
        nextButton.style.pointerEvents='auto';
        prevButton.style.pointerEvents='auto';
    },1000);
}
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        const link = item.querySelector('.item-link').href;
        window.location.href = link;
    });
});
function updateButtonText() {
    const button = document.getElementById('info-button');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
        button.textContent = 'Kliknij na ekran, aby zobaczyć projekt';
    } else if (screenWidth <= 768) {
        button.textContent = 'Dotknij ekranu, aby zobaczyć projekt';
    } else {
        button.textContent = 'Kliknij lub dotknij ekranu, aby zobaczyć project';
    }
}
window.onload = updateButtonText;
window.onresize = updateButtonText;