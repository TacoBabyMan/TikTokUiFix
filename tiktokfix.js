// ==UserScript==
// @name         Tiktok UI fix
// @namespace
// @version      2.7
// @description  Fixes the terrible UI on pc for tiktok
// @author       Neo
// @match        https://www.tiktok.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiktok.com
// @grant        none
// ==/UserScript==

(function() {
document.querySelector('html').addEventListener('keypress',(event)=>{
  if(event.key=="Enter"){
    console.log("it worked;");
  }
});
try{
  document.querySelector('[data-e2e="profile-icon"]').addEventListener('mouseover',()=>{
    document.querySelector('[class*="-DivContainer"]').style.filter="invert(1)";
    document.querySelector('[class*="-DivProfileContainer"]').style.color="rgb(22, 24, 35)";
    document.querySelectorAll('[class*="-LiItemWrapper"]')[0].style.filter="invert(1)";
    document.querySelectorAll('[class*="-LiItemWrapper"]')[1].style.filter="invert(1)";
    document.querySelectorAll('[class*="-LiItemWrapper"]')[2].style.filter="invert(1)";
    document.querySelectorAll('[class*="-LiItemWrapper"]')[3].style.filter="invert(1)";
    document.querySelectorAll('[class*="-LiItemWrapper"]')[4].style.filter="invert(1)";
    document.querySelectorAll('[class*="-LiItemWrapper"]')[5].style.filter="invert(1)";
    document.querySelectorAll('[class*="-LiItemWrapper"]')[6].style.filter="invert(1)";
  });
}catch{};
const applied = () =>{
  if (document.querySelectorAll('[class*="-DivHeaderWrapperMain"]')[0].style.backgroundColor != 'black'){
    try{
      document.querySelector('[data-e2e="top-login-button"]').click();
    }catch{};
   apply();
  }
};

const apply = () =>{
  document.getElementsByTagName('head')[0].getElementsByTagName('style')[0].prepend(`
  ::-webkit-scrollbar {
    width:10px !important;
  }
  ::-webkit-scrollbar-thumb {
    background:#888 !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background:#555 !important;
  }

  body, [class*="-DivLiveSection"]{
    background-color:#141414 !important;
    color:white !important;
    margin:0px !important;
  }
  #loader{
    position:fixed;
    width:100vw;
    height:100vh;
    background-color:black;
  }

  [class*="-DivBodyContainer"]{
    left:0px !important;
    position:absolute !important;
  }
  [class*="-DivMainContainer"]{
    display:flex;
    justify-content:center;
    position:absolute !important;
    zoom:120%;
    min-width:80vw !important;
    max-width:80vw !important;
    margin:0px !important;
    padding-left:6px !important;
    padding-top:0px !important;
  }

  [class*="-DivHeaderCenterContainer"]{
      border:1px solid white;
      border-radius:36px;
  }

  [class*="-DivHeaderWrapperMain"]{
    display:flex !important;
    min-width:100vw;
  }

  [data-e2e="search-user-container"]{
    opacity:0.9;
    border-radius:16px;
  }
  [data-e2e="search-user-container"]:hover{
    background-color:black !important;
    border-radius:36px;
    opacity:1;
    transition:0.3s;
  }

  [class*="-DivTabsContainer"]{
      display:flex;
      justify-content:center;
  }

  [class*="-DivScrollContainer"]{
    max-width:204px !important;
    padding:0px;
  }
  [class*="-DivPanelContainer"]{
    margin-top:64px !important;
  }
  [class*="-DivTabsContainer"]{
    background-color:black !important;
    border-radius:24px;
    left:45% !important;
  }
  [class*="-DivHeaderWrapperMain"], [class*="-DivScrollContainer"], [class*="-DivHeaderContainer"], [data-e2e="sug-container"]{
      background-color:black !important;
  }
  [data-e2e="live-side-nav-channel-title"], [data-e2e="legal-link"], [data-e2e="program-link"], [data-e2e="page-link"], [class*="-DivSideNavNickName"], [data-e2e="person-count"], span, strong, h1, h2, h3, h4, h5, h6, h7, button[class*="-ButtonActionItem"], p, form input, [class*="-DivTab"], [class*="-DivSubTitleWrapper"]{
    color:white !important;
  }
  button[data-e2e="feed-follow"]{
    filter:invert(100%) contrast(100%) saturate(0%) !important;
  }
  [data-e2e="nav-foryou"], [class*="-DivHeaderRightContainer"], span[data-e2e="comment-icon"], [class*="-DivActionItemContainer"], h4[data-e2e="video-music"], a[data-e2e="nav-following"], a[data-e2e="nav-live"], form span, button[data-e2e="search-button"], svg[alt="TikTok"]{
    filter:invert(100%) contrast(100%) !important;
  }
  [data-e2e="profile-icon"], [data-e2e="like-icon"], [class*="-H2MainNavText"]{
    filter:invert(1) !important;
  }
  [class*="-H2MainNavText"]:hover{
    color:#ff0050 !important;
    transition:0.3s;
  }
  [data-e2e="like-count"], [data-e2e="comment-count"], [data-e2e="share-count"], [class*="-StyledInboxIcon"], [data-e2e="inbox-title"]{
    filter:invert(1) !important;
  }
  [class*="-DivHeaderInboxWrapper"], [class*="-StyledUploadIcon"], [class*="-StyledIcon"]{
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

})();
