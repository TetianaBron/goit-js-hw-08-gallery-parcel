parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"MbMm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=r(require("./gallery-items"));function r(e){return e&&e.__esModule?e:{default:e}}function a(){return e.default.map(function(e){var r=e.preview,a=e.original,t=e.description;return'<li class=\'gallery__item\'><a class="gallery__link" href="'.concat(a,"\"><img class='gallery__image' src=\"").concat(r,'" data-source="').concat(a,'" alt="').concat(t,'"></li>')}).join("")}
},{"./gallery-items":"q5Rn"}],"ar0g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openModal=n,exports.closeModal=s;var e=document.querySelector(".lightbox__image"),t=document.querySelector(".js-lightbox"),o=document.querySelector(".lightbox__image"),r=document.querySelector(".lightbox__overlay");function n(o){o.preventDefault(),"IMG"===o.target.nodeName&&(window.addEventListener("keydown",c),t.classList.add("is-open"),e.src=o.target.dataset.source,e.alt=o.target.alt)}function c(e){"Escape"===e.code&&s()}function s(){window.removeEventListener("keydown",c),t.classList.remove("is-open"),o.removeAttribute("src")}function i(){s()}r.addEventListener("click",i);
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=r(require("./js/create-html")),t=require("./js/open-close-modal");function r(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector(".js-gallery"),o=document.querySelector(".js-gallery"),c=document.querySelector('button[data-action="close-lightbox"]');l.insertAdjacentHTML("afterbegin",(0,e.default)()),o.addEventListener("click",t.openModal),c.addEventListener("click",t.closeModal);
},{"./js/create-html":"MbMm","./js/open-close-modal":"ar0g"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery-parcel/src.d54208b1.js.map