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
if (window.innerWidth < 768){
    const user_div = document.querySelector(".profile-header");
    const user_menu = document.querySelector(".menu");
    user_div.addEventListener("click", () => {
        if (user_menu.style.display === "none" || user_menu.style.display === "") {
            user_menu.style.display = "block";
        } else {
            user_menu.style.display = "none";
        }
    });
}
const account_link = document.querySelector(".profile_link_account");
const notification_link = document.querySelector(".profile_link_notification");
const setting_link = document.querySelector(".profile_link_setting");
const account_info = document.querySelector(".account_info");
const account_notification = document.querySelector(".account_notification");
const account_setting = document.querySelector(".account");
account_link.addEventListener("click", (e) => {
    e.preventDefault();
    account_link.classList.add("active-link");
    notification_link.classList.remove("active-link");
    setting_link.classList.remove("active-link");
    account_info.style.display = "block"; 
    account_notification.style.display = "none";
    account_setting.style.display = "none";
});

notification_link.addEventListener("click", (e) => {
    e.preventDefault();
    account_link.classList.remove("active-link");
    notification_link.classList.add("active-link");
    setting_link.classList.remove("active-link");
    account_info.style.display = "none";
    account_notification.style.display = "block";

    account_setting.style.display = "none";
});

setting_link.addEventListener("click", (e) => {
    e.preventDefault();
    account_link.classList.remove("active-link");
    notification_link.classList.remove("active-link");
    setting_link.classList.add("active-link");
    account_info.style.display = "none";
    account_notification.style.display = "none";
    account_setting.style.display = "block";
});


