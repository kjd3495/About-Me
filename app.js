const content = "소통하는 \n 프론트엔드 개발자가 \n 되고 싶습니다!!!";
const text = document.querySelector(".text_inner");
const blink = document.querySelector(".blink");
const down = document.querySelector(".down");
let i = 0;

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
