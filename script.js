document.addEventListener("DOMContentLoaded", function(){
    const cToggle = document.getElementById("color-toggle");
    const bdy = document.getElementById("body");
    const tc = document.getElementById("top-c");
    const fb = document.getElementById("fb");
    const fb2 = document.getElementById("fb2");
    const fb3 = document.getElementById("fb3");
    const twtr = document.getElementById("twtr");
    const twtr2 = document.getElementById("twtr2");
    const twtr3 = document.getElementById("twtr3");
    const ig = document.getElementById("insgrm");
    const ig2 = document.getElementById("insgrm2");
    const ig3 = document.getElementById("insgrm3");
    const yt = document.getElementById("yutb");
    const yt2 = document.getElementById("yutb2");
    const yt3 = document.getElementById("yutb3");
    const title = document.getElementById("title-c");
    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");
    const h3 = document.getElementById("h3");
    const h4 = document.getElementById("h4");
    const h5 = document.getElementById("h5");
    const h6 = document.getElementById("h6");
    const h7 = document.getElementById("h7");
    const h8 = document.getElementById("h8");
    const h9 = document.getElementById("h9");
    const h10 = document.getElementById("h10");
    const h11 = document.getElementById("h11");
    const h12 = document.getElementById("h12");
    const ovrvw = document.getElementById("ovrvw");

    cToggle.addEventListener("click", function () {
        if (cToggle.checked){
            bdy.style.backgroundColor = "rgb(29, 32, 40)";
            tc.style.backgroundColor = "rgb(32, 34, 47)";
            fb.style.backgroundColor = "rgb(35, 41, 63)";
            fb2.style.backgroundColor = "rgb(35, 41, 63)";
            fb3.style.backgroundColor = "rgb(35, 41, 63)";
            twtr.style.backgroundColor = "rgb(35, 41, 63)";
            twtr2.style.backgroundColor = "rgb(35, 41, 63)";
            twtr3.style.backgroundColor = "rgb(35, 41, 63)";
            ig.style.backgroundColor = "rgb(35, 41, 63)";
            ig2.style.backgroundColor = "rgb(35, 41, 63)";
            ig3.style.backgroundColor = "rgb(35, 41, 63)";
            yt.style.backgroundColor = "rgb(35, 41, 63)";
            yt2.style.backgroundColor = "rgb(35, 41, 63)";
            yt3.style.backgroundColor = "rgb(35, 41, 63)";
            title.style.color = "white";
            h1.style.color = "white";
            h2.style.color = "white";
            h3.style.color = "white";
            h4.style.color = "white";
            h5.style.color = "white";
            h6.style.color = "white";
            h7.style.color = "white";
            h8.style.color = "white";
            h9.style.color = "white";
            h10.style.color = "white";
            h11.style.color = "white";
            h12.style.color = "white";
            ovrvw.style.color = "white";
        } else {
            bdy.style.backgroundColor = "white";
            tc.style.backgroundColor = "rgb(227, 227, 248)";
            fb.style.backgroundColor = "hsl(228, 41%, 88%)";
            fb2.style.backgroundColor = "hsl(228, 41%, 88%)";
            fb3.style.backgroundColor = "hsl(228, 41%, 88%)";
            twtr.style.backgroundColor = "hsl(228, 41%, 88%)";
            twtr2.style.backgroundColor = "hsl(228, 41%, 88%)";
            twtr3.style.backgroundColor = "hsl(228, 41%, 88%)";
            ig.style.backgroundColor = "hsl(228, 41%, 88%)";
            ig2.style.backgroundColor = "hsl(228, 41%, 88%)";
            ig3.style.backgroundColor = "hsl(228, 41%, 88%)";
            yt.style.backgroundColor = "hsl(228, 41%, 88%)";
            yt2.style.backgroundColor = "hsl(228, 41%, 88%)";
            yt3.style.backgroundColor = "hsl(228, 41%, 88%)";
            title.style.color = "black";
            h1.style.color = "black";
            h2.style.color = "black";
            h3.style.color = "black";
            h4.style.color = "black";
            h5.style.color = "black";
            h6.style.color = "black";
            h7.style.color = "black";
            h8.style.color = "black";
            h9.style.color = "black";
            h10.style.color = "black";
            h11.style.color = "black";
            h12.style.color = "black";
            ovrvw.style.color = "rgb(81, 83, 99)";
        }
        fb.addEventListener("mouseover", function(){
            if(cToggle.checked){
                fb.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                fb.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        fb.addEventListener("mouseout", function() {
            if(cToggle.checked){
                fb.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                fb.style.backgroundColor = "hsl(228, 41%, 88%)";
            } 
        })
        twtr.addEventListener("mouseover", function(){
            if(cToggle.checked){
                twtr.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                twtr.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        twtr.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                twtr.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                twtr.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        ig.addEventListener("mouseover", function(){
            if(cToggle.checked){
                ig.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                ig.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        ig.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                ig.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                ig.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        yt.addEventListener("mouseover", function(){
            if(cToggle.checked){
                yt.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                yt.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        yt.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                yt.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                yt.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        fb2.addEventListener("mouseover", function(){
            if(cToggle.checked){
                fb2.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                fb2.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        fb2.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                fb2.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                fb2.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        fb3.addEventListener("mouseover", function(){
            if(cToggle.checked){
                fb3.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                fb3.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        fb3.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                fb3.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                fb3.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        ig2.addEventListener("mouseover", function(){
            if(cToggle.checked){
                ig2.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                ig2.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        ig2.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                ig2.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                ig2.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        ig3.addEventListener("mouseover", function(){
            if(cToggle.checked){
                ig3.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                ig3.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        ig3.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                ig3.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                ig3.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        twtr2.addEventListener("mouseover", function(){
            if(cToggle.checked){
                twtr2.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                twtr2.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        twtr2.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                twtr2.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                twtr2.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        twtr3.addEventListener("mouseover", function(){
            if(cToggle.checked){
                twtr3.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                twtr3.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        twtr3.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                twtr3.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                twtr3.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        yt2.addEventListener("mouseover", function(){
            if(cToggle.checked){
                yt2.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                yt2.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        yt2.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                yt2.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                yt2.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
        yt3.addEventListener("mouseover", function(){
            if(cToggle.checked){
                yt3.style.backgroundColor = "rgba(50, 58, 84, 0.8)";
            } else {
                yt3.style.backgroundColor = "hsl(229, 17%, 74%)";
            }
        })
        yt3.addEventListener("mouseout", function() {
            if(cToggle.checked){    
                yt3.style.backgroundColor = "rgba(35, 41, 63)";
            } else {
                yt3.style.backgroundColor = "hsl(228, 41%, 88%)";
            }
        })
    })
})