var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));const t=document.querySelector(".nav__link--active"),o=document.querySelector(".header"),c=(document.querySelector(".nav"),document.querySelector(".burger"),document.querySelector(".logo"),document.querySelector(".socials"),document.querySelector(".logo span"));document.querySelectorAll(".nav__link").forEach((e=>{if(e.href===window.location.href&&(t.classList.remove("nav__link--active"),e.classList.add("nav__link--active")),console.log(window.location),window.location.href.includes("index")||"http://localhost:1234/"===window.location.href){c.style.color="#d8d7d7";o.classList.contains("header--dark-text")&&o.classList.remove("header--dark-text"),o.classList.add("header--light-text")}else c.style.color="#121212",o.classList.remove("header--light-text"),o.classList.add("header--dark-text")}));
//# sourceMappingURL=restaurant.e687f173.js.map