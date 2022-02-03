const content = "소통하는 \n 프론트엔드 개발자가 \n 되고 싶습니다!!!";
const text = document.querySelector(".text_inner");
const blink = document.querySelector(".blink");
const down = document.querySelector(".down");
let i = 0;
const content_box = document.querySelector(".content")
const section = content_box.querySelectorAll("section");
const nav_list = document.querySelector('.nav_right');
const nav = nav_list.querySelectorAll('div');

function typing(){
    if(i<content.length){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    }else if(i==content.length){
        setTimeout(function(){
            blink.style.display="none";
            },2000);
    }
}

setInterval(typing, 200);

const option = {
    root : null,
    rootMargin : '0px',
    threshold: 0.5,

};
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {

            switch(entry.target.id){
                case "content__home": 
                nav.forEach((nav)=> nav.style.cssText='transform:none; color:black;  border-bottom:0px;');
                    nav[0].style.cssText='transform:scale(1.5); color:blue; border-bottom:1px solid black;';
                    break;
                case "content_about_1":
                    nav.forEach((nav)=> nav.style.cssText='transform:none; color:black; border-bottom:0px; ');
                    nav[1].style.cssText='transform:scale(1.5); color:blue; border-bottom:1px solid black;';
                    break;
                case"content_about_2":
                    nav.forEach((nav)=> nav.style.cssText='transform:none; color:black; border-bottom:0px;');
                    nav[1].style.cssText='transform:scale(1.5); color:blue; border-bottom:1px solid black;';
                    break;
                case "content__goal" :
                    nav.forEach((nav)=> nav.style.cssText='transform:none; color:black; border-bottom:0px;');
                    nav[2].style.cssText='transform:scale(1.5); color:blue; border-bottom:1px solid black;';
                    break;
                default: 
                    nav.forEach((nav)=> nav.style.cssText='transform:none; color:black; border-bottom:0px;');
                    break;
            }
        } else {
            nav.forEach((nav)=> nav.style.cssText='transform:none; color:black; border-bottom:0px;');
        }
    });
};

const observer = new IntersectionObserver(callback, option);
section.forEach((section)=>observer.observe(section));









