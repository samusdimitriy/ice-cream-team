let e=0;var t;!function t(){let n,o=document.getElementsByClassName("mySlides");for(n=0;n<o.length;n++)o[n].style.display="none";e++,e>o.length&&(e=1);o[e-1].style.display="block",setTimeout(t,3e3)}(),"function"!=typeof(t=window.Element.prototype).matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof t.closest&&(t.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-pagination");swiper=new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},on:{transitionStart:function(){let t=this.previousIndex,n=e.getElementsByClassName("swiper-slide")[t];n&&setTimeout((function(){n.classList.remove("is-play")}),1e3)},transitionEnd:function(){let t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}}})}))}),!1);var n=[].slice.call(document.querySelectorAll(".franchise-js")),o=document.querySelector(".franchise-button-js");function l(){var e=n.filter((function(e){return""===e.value.trim()})).length;o.disabled=0!==e}n.forEach((function(e){e.addEventListener("input",l,!1)})),l();var c=[].slice.call(document.querySelectorAll(".buynow-js")),r=document.querySelector(".buynow-button-js");function i(){var e=c.filter((function(e){return""===e.value.trim()})).length;r.disabled=0!==e}c.forEach((function(e){e.addEventListener("input",i,!1)})),i(),document.addEventListener("scroll",(function(){var e=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop/e>.1?s.style.display="block":s.style.display="none"}));var s=document.querySelector(".scrollToTopBtn");s.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var a=[].slice.call(document.querySelectorAll(".products-green-js")),d=document.querySelector(".products-button-green-js");function u(){var e=a.filter((function(e){return""===e.value.trim()})).length;d.disabled=0!==e}a.forEach((function(e){e.addEventListener("input",u,!1)})),u();var m=[].slice.call(document.querySelectorAll(".products-coffee-js")),v=document.querySelector(".products-button-coffee-js");function f(){var e=m.filter((function(e){return""===e.value.trim()})).length;v.disabled=0!==e}m.forEach((function(e){e.addEventListener("input",f,!1)})),f();var p=[].slice.call(document.querySelectorAll(".products-milkshakes-js")),y=document.querySelector(".products-button-milkshakes-js");function h(){var e=p.filter((function(e){return""===e.value.trim()})).length;y.disabled=0!==e}p.forEach((function(e){e.addEventListener("input",h,!1)})),h();let E=window.innerHeight,S=.7*E;const L=(e,t,n)=>{if(document.getElementsByClassName(e).length>0){let o=document.getElementsByClassName(e);const l=()=>{for(let e=0;e<o.length;e++){o[e].getBoundingClientRect().top<=t?o[e].classList.add(n):o[e].classList.remove(n)}requestAnimationFrame(l)};requestAnimationFrame(l)}};L("about__img",.2*E,"in-viewport"),L("products__item--green",S,"in-viewport"),L("products__item--coffee",S,"in-viewport"),L("products__item--milkshakes",S,"in-viewport");let g,w=e=>e;document.addEventListener("DOMContentLoaded",(()=>{for(const e of document.querySelectorAll("[placeholder][data-slots]")){const t=e.getAttribute("placeholder"),n=new Set(e.dataset.slots||"_"),o=(e=>Array.from(t,((t,o)=>n.has(t)?e=o+1:e)))(0),l=[...t].findIndex((e=>n.has(e))),c=new RegExp(e.dataset.accept||"\\d","g"),r=e=>(e=e.match(c)||[],Array.from(t,(t=>(e[0]===t||n.has(t))&&e.shift()||t))),i=()=>{const[t,c]=[e.selectionStart,e.selectionEnd].map((t=>(t=r(e.value.slice(0,t)).findIndex((e=>n.has(e))))<0?o[o.length-1]:s?o[t-1]||l:t));e.value=r(e.value).join(g||(g=w``)),e.setSelectionRange(t,c),s=!1};let s=!1;e.addEventListener("keydown",(e=>s="Backspace"===e.key)),e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("blur",(()=>e.value===t&&(e.value="")))}}));
//# sourceMappingURL=index.3e3fb4b3.js.map
