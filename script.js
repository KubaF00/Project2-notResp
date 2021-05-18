//Change web 1,2,3...
const page1 = document.querySelector(".page1:nth-child(1)");
const page2 = document.querySelector(".page2:nth-child(2)");
const page3 = document.querySelector(".page3:nth-child(3)");
const page4 = document.querySelector(".page4:nth-child(4)");
const page5 = document.querySelector(".page5:nth-child(5)");

const hero1 = document.querySelector("div#hero1");
const hero2 = document.querySelector("div#hero2");
const hero3 = document.querySelector("div#hero3");
const hero4 = document.querySelector("div#hero4");
const hero5 = document.querySelector("div#hero5");

page1.addEventListener("click", function() {
    page1.classList.add("actuall");
    page2.classList.remove("actuall");
    page3.classList.remove("actuall");
    page4.classList.remove("actuall");
    page5.classList.remove("actuall");


    hero2.classList.remove("on");
    hero3.classList.remove("on");
    hero4.classList.remove("on");
    hero5.classList.remove("on");
    hero1.classList.add("on");
});
page2.addEventListener("click", function() {
    page1.classList.remove("actuall");
    page2.classList.add("actuall");
    page3.classList.remove("actuall");
    page4.classList.remove("actuall");
    page5.classList.remove("actuall");


    hero2.classList.add("on");
    hero3.classList.remove("on");
    hero4.classList.remove("on");
    hero5.classList.remove("on");
    hero1.classList.remove("on");
});
page3.addEventListener("click", function() {
    page1.classList.remove("actuall");
    page2.classList.remove("actuall");
    page3.classList.add("actuall");
    page4.classList.remove("actuall");
    page5.classList.remove("actuall");


    hero2.classList.remove("on");
    hero3.classList.add("on");
    hero4.classList.remove("on");
    hero5.classList.remove("on");
    hero1.classList.remove("on");
});
page4.addEventListener("click", function() {
    page1.classList.remove("actuall");
    page2.classList.remove("actuall");
    page3.classList.remove("actuall");
    page4.classList.add("actuall");
    page5.classList.remove("actuall");


    hero2.classList.remove("on");
    hero3.classList.remove("on");
    hero4.classList.add("on");
    hero5.classList.remove("on");
    hero1.classList.remove("on");
});
page5.addEventListener("click", function() {
    page1.classList.remove("actuall");
    page2.classList.remove("actuall");
    page3.classList.remove("actuall");
    page4.classList.remove("actuall");
    page5.classList.add("actuall");


    hero2.classList.remove("on");
    hero3.classList.remove("on");
    hero4.classList.remove("on");
    hero5.classList.add("on");
    hero1.classList.remove("on");
});