// console.log("console is run...");
"use strict"

let menubar = document.querySelectorAll(".munues-shop-icon .menu-bar i")[0];
let menulinks = document.querySelectorAll(".menues")[0];

menubar.addEventListener("click", () => {
  let value = menulinks.classList.toggle("mn-remove");
  if (value) {
    menubar.style.color = "red";
    menubar.setAttribute("class", "fa-solid fa-xmark");
  } else {
    menubar.style.color = "black";
    menubar.setAttribute("class", "fa-solid fa-bars");
  }
});

let filters = document.querySelectorAll(".section-2 .filter-btn");
let search_btn = document.querySelectorAll(".section-2 .search-btn");
let input_search = document.querySelectorAll(".section-3 .search-bar");
let filter_links = document.querySelectorAll(".section-3 .filter-links");
let section_3 = document.querySelectorAll(".section-3");

section_3[0].setAttribute("style", "height:0px");
let s3Hv;

// /*
filters[0].addEventListener("click", () => {
  input_search[0].style.display = "none";
  filter_links[0].style.visibility = "visible";
  s3Hv = section_3[0].getAttribute("style");
  console.log(s3Hv);

  if (s3Hv == "height:0px") {
    section_3[0].setAttribute("style", "min-height:324px");
  } else if (s3Hv == "min-height:324px") {
    section_3[0].setAttribute("style", "height:0px");
  } else if (s3Hv == "height:60px") {
    section_3[0].setAttribute("style", "min-height:324px");
  }
});

search_btn[0].addEventListener("click", () => {
  input_search[0].style.display = "block";
  filter_links[0].style.visibility = "hidden";
  s3Hv = section_3[0].getAttribute("style");

  if (s3Hv == "height:0px" || s3Hv == "min-height:324px") {
    section_3[0].setAttribute("style", "height:60px");
  } else if (s3Hv == "height:60px") {
    section_3[0].setAttribute("style", "height:0px");
  }
  // console.log(s3Hv);
});





window.addEventListener("scroll",()=>{
  

  let winx = parseInt(this.scrollY);
  if(winx == 128 || winx >= 128){
    menulinks.classList.add("menue-fixed");
  }
  else{
    menulinks.classList.remove("menue-fixed");
  }



});


