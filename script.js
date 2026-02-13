const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");


// YES CLICK
yesBtn.addEventListener("click", function(){
    result.innerHTML = "YAYYY ❤️ I knew it!! Happy Valentine's Day 💞";

    // create hearts animation
    for(let i=0;i<20;i++){
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        let x = Math.random()*window.innerWidth;
        let y = Math.random()*window.innerHeight;

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        setTimeout(()=>{
            heart.remove();
        },2000);
    }
});


// NO BUTTON RUNS AWAY
noBtn.addEventListener("mouseover", function(){

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
