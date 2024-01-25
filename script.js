"use strict";

const btn = document.querySelector(".nav-menu-toggle-btn");
const searchBox = document.querySelector(".search-box");
const navRightBtns = document.querySelector(".nav-right-btns");
const leftSideBar = document.querySelector(".left-sidebar");

const nightModeEle = document.createElement("style");
nightModeEle.innerHTML = `
    * {
        background-color: black !important;
        color:  white !important;
    }
`;

const logo = document.querySelector(".navbar-brand");
let isNightMode = localStorage.getItem("isNightMode") === "true";

function setCurrMode(){
    if(isNightMode) document.head.appendChild(nightModeEle);
    else nightModeEle.remove();
}

setCurrMode(); // on initial page load

function toggleNightMode(){
    isNightMode = !isNightMode;
    localStorage.setItem('isNightMode', isNightMode);
    setCurrMode();
};

logo.onclick = toggleNightMode;


btn.onclick = () => {
    searchBox.classList.toggle("d-block");
    navRightBtns.classList.toggle("d-block");
    leftSideBar.classList.toggle("expand");
}