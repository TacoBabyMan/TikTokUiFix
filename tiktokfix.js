// ==UserScript==
// @name         Tiktok UI fix
// @namespace
// @version      2
// @description  Fixes the terrible UI on pc for tiktok
// @author       Neo
// @match        https://www.tiktok.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiktok.com
// @grant        none
// ==/UserScript==

(function() {
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
    padding:0px !important;
    margin:0px !important;
  }

  [class*="-DivHeaderCenterContainer"]{
      border:1px solid white;
      border-radius:36px;
  }

  [class*="-DivHeaderWrapperMain"]{
    display:flex !important;
    min-width:100vw;
  }

  [class*="-DivTabsContainer"]{
      display:flex;
      justify-content:center;
  }

  [class*="-DivScrollContainer"]{
    max-width:204px !important;
    padding:0px;
  }
  [class*="-DivTabsContainer"]{
    background-color:transparent !important;
  }
  [class*="-DivHeaderWrapperMain"], [class*="-DivScrollContainer"], [class*="-DivHeaderContainer"], [data-e2e="sug-container"]{
      background-color:black !important;
  }
  strong, h3, h4, button[class*="-ButtonActionItem"], p, form input, [class*="-DivTab"]{
    color:white !important;
  }
  button[data-e2e="feed-follow"]{
    filter:invert(100%) contrast(100%) saturate(0%) !important;
  }
  [data-e2e="nav-foryou"], [class*="-DivHeaderRightContainer"], span[data-e2e="comment-icon"], [class*="-DivActionItemContainer"], h4[data-e2e="video-music"], a[data-e2e="nav-following"], a[data-e2e="nav-live"], form span, button[data-e2e="search-button"], svg[alt="TikTok"]{
    filter:invert(100%) contrast(100%) !important;
  }
  [data-e2e="profile-icon"], [data-e2e="like-icon"]{
    filter:invert(1) !important;
  }
  [data-e2e="like-count"], [data-e2e="comment-count"], [data-e2e="share-count"], [class*="-StyledInboxIcon"], [data-e2e="inbox-title"]{
    filter:invert(1) !important;
  }
  [class*="-DivHeaderInboxWrapper"]{
    filter:invert(1) !important;
    background-color:black !important;
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
