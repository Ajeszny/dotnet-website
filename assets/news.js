
const btn_news=document.querySelector(".news_news");
const btn_events=document.querySelector(".news_events");
const content_news=document.querySelector(".news_news_div");
const content_events=document.querySelector(".events");
btn_events.addEventListener("click",()=>{
    content_events.style.display = "block"; 
    content_news.style.display = "none"; 
    btn_events.classList.add("news_active_button");
    btn_events.classList.remove("news_nonactive_button");
    btn_news.classList.remove("news_active_button");
    btn_news.classList.add("news_nonactive_button");
});
btn_news.addEventListener("click",()=>{
    content_events.style.display = "none"; 
    content_news.style.display = "block"; 
    btn_news.classList.add("news_active_button");
    btn_news.classList.remove("news_nonactive_button");
    btn_events.classList.remove("news_active_button");
    btn_events.classList.add("news_nonactive_button");
});