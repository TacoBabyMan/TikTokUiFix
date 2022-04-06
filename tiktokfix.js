// ==UserScript==
// @name         Tiktok UI fix
// @namespace
// @version      0.1
// @description  Fixes the terrible UI on pc for tiktok
// @author       Neo
// @match        https://www.tiktok.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiktok.com
// @grant        none
// ==/UserScript==

(function() {
const svgInversion = "invert(100%) contrast(100%)";
const applied = () =>{
  if (document.querySelectorAll('[class*="-DivHeaderWrapperMain"]')[0].style.backgroundColor != 'black') apply();
};

const apply = () =>{
  document.getElementsByTagName('head')[0].getElementsByTagName('style')[0].prepend(`
  body{
    background-color:#141414 !important;
    color:white !important;
  }
  [class*="-DivBodyContainer"]{
    left:0px !important;
    position:absolute !important;
  }
  [class*="-DivMainContainer"]{
    position:relative !important;
    left:50%;
    transform:translate(-50%,0%);
  }
  [class*="-DivHeaderWrapperMain"], [class*="-DivScrollContainer"], [class*="-DivHeaderContainer"]{
      background-color:black !important;
  }
  strong, h3, h4, button[class*="-ButtonActionItem"], p{
    color:white !important;
  }
  button[data-e2e="feed-follow"]{
    filter:invert(100%) contrast(100%) saturate(0%) !important;
  }
  span[data-e2e="comment-icon"], [class*="-DivActionItemContainer"], h4[data-e2e="video-music"], a[data-e2e="upload-icon"], a[data-e2e="nav-following"], a[data-e2e="nav-live"], form span, button[data-e2e="search-button"], svg[alt="TikTok"]{
    filter:invert(100%) contrast(100%) !important;
  }
  `);

  document.querySelector('[class*="-DivBottomContainer"]').remove();
  var MainContent = document.querySelector('[class*="-DivMainNavContainer"]')
  document.querySelector('[class*="-DivScrollContainer"]').innerHTML="";
  document.querySelector('[class*="-DivScrollContainer"]').prepend(MainContent);
  document.querySelector('h2[data-e2e="recommend-video-text"]').remove();
};


window.onload=()=>{applied()};

document.querySelector('html').addEventListener('keypress',()=>{});
document.querySelector('html').addEventListener('click',()=>{});

})();
