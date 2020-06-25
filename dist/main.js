var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:m(f,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach(function(e){t.setAttribute(e,o[e])}),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var h=null,p=0;function m(e,t){var n,o,r;if(t.singleton){var i=p++;n=h||(h=l(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(t),o=function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'html{height:100%;font-size:100%}h1{font-family:"Roboto Slab",serif}h3{font-size:1.125rem;margin:0}a{color:#5785E8}body{display:flex;font-family:"Open Sans",sans-serif;width:80%;height:100%;margin:0 auto}body #intro-content{display:flex;flex-direction:column;justify-content:center;padding:0 1rem 0 0;width:50%;height:100%;background:radial-gradient(ellipse farthest-corner at 100% 50%, #ecf1f6 0%, rgba(236,241,246,0) 70%)}body #intro-content h1{margin:0}body #secondary-content{width:50%;display:flex;flex-direction:column;justify-content:center;padding:0 0 0 1rem}body #secondary-content form{width:100%}body #secondary-content #results{display:grid;grid-template-columns:50% 50%;grid-template-areas:"your-text your-text" "polarity subjectivity"}body #secondary-content #results p{margin-bottom:0}body #secondary-content #results #your-text{grid-area:your-text;margin-bottom:1.25rem}body #secondary-content #results #polarity{grid-area:polarity}body #secondary-content #results #subjectivity{grid-area:subjectivity}p{margin:0 0 1rem 0;font-size:0.875rem;color:#6E727D}#name{height:2.5rem;width:100%;border-radius:0.5rem;border:1px solid #BFC4D1;color:#6E727D;font-size:0.9rem;padding:0 0.6rem 0 0.6rem;margin:0;box-sizing:border-box}#name::placeholder{color:#BFC4D1}#name:focus{outline:none}#submit-button{background-color:#6236FF;padding:0.68rem 3rem;color:#fff;font-family:"Roboto Slab",serif;border-radius:0.5rem;font-size:0.875rem;margin-top:0.75rem;margin-left:auto;margin-right:0;text-align:right;display:block}#submit-button:focus{outline:none}#submit-button:active{background-color:#380EB0}#divider{border-bottom:1px solid #BFC4D1;margin:1.25rem 0 0 0;display:block}.subtitle{color:#BFC4D1}#logo{color:#6236FF}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";function o(e){console.log("::: Running checkForName :::",e);["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e)&&alert("Welcome, Captain!")}function r(e){e.preventDefault();let t=document.getElementById("name").value;console.log("------------------------------------------------------------"),console.log(`The string that we are going to be checking is: ${t}`),async function(e){try{const t={method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({text:e})};return await fetch("http://localhost:8080/api/",t)}catch(e){console.log("An error has occured",e)}}(t).then(e=>e.json()).then(e=>{let n=document.createDocumentFragment();n=`\n                    <div id="divider"></div>\n                        <h1>Results</h1>\n                        <div id="results">\n                        <div id="your-text">\n                            <h3>Your text</h3>\n                            <p>${t}</p>\n                        </div>\n                        <div id="polarity">\n                            <h3>Polarity</h3>\n                            <p id="polarity-data">${e.polarity}</p> \n                            <p class="subtitle" id="polarity-confidence-data">(${e.polarity_confidence.toFixed(2)}% confidence)</p>\n                        </div>\n                        <div id="subjectivity">\n                            <h3>Subjectivity</h3>\n                            <p id="polarity-data">${e.subjectivity}</p> \n                            <p class="subtitle" id="polarity-confidence-data">(${e.subjectivity_confidence.toFixed(2)}% confidence)</p>\n                        </div>\n                    </div>\n                    `,document.getElementById("results-group").innerHTML=n,console.log(e),console.log(`Polarity: ${e.polarity} (${e.polarity_confidence.toFixed(2)}% confident)`),console.log(`Subjectivity: ${e.subjectivity} (${e.subjectivity_confidence.toFixed(2)}% confidence)`),console.log("------------------------------------------------------------")})}function i(){event.preventDefault(),console.log("::: generating headlines :::");let e=["Twitter hides 'abusive' Trump tweet targeting protesters","FBI finds black driver Bubba Wallace not targeted by hate crime in 'noose' incident: NASCAR","China reports 12 new coronavirus cases on the mainland","Asian stocks under pressure after spike in coronavirus cases","Jimmy Kimmel apologizes for ‘embarrassing’ sketches as Hollywood reckons with its use of blackface","Who Can We Trust With the Nuclear Button? No One","Is It Finally Hammer Time for Apple and Its App Store?","What if the Supreme Court Rules on Abortion and the Country Shrugs?","Why Is the G.O.P. Fighting to Preserve Monuments to Traitors in the Capitol?","Chile celebrated success against the coronavirus — and began to open up. Infections have soared.","The Climate Struggle Within the Civil Service","Your Climate Disaster Tax Bill Is Growing","Journalists believe news and opinion are separate, but readers can’t tell the difference","Smart thinking needed as event caterers pick up the pieces","Hiring a domestic helper in Singapore: how to interview and employ a maid","In emerging Asia, independent grocery stores remain a vital channel for consumer-packaged-goods companies. ","In stores or on the couch, Asia Pacific consumers shift rapidly to digital commerce and show no signs of turning back – Mastercard study","The Shah Jahan Mosque – also known as the Jamia Masjid – is located in Thatta, a town in Pakistan’s Sindh province. It’s widely known for having the most elaborate display of tile work in all of South Asia","Students for Trump co-founder pleads guilty to $46,000 fraud scheme","BREAKING: At the Students For Trump rally in Phoenix, Arizona today Trump said of Democrats: 'While their movement is based on hate, ours is based on love.''","Students for trump graduated from trump University and doused themselves in coronavirus with a mist spray fan beforehand so no worries folks","FBI announces noose found in Bubba Wallace's garage had been there since 2019; no federal crime committed.","Does anyone else feel like everything is opening wayyy too soon? Like we're still having 100+ deaths a day and yet Boris Johnson and his government don't seem to care because we're 'Winning the war against Covid-19' #lockdownuk","If you're one of the people who are excited that pubs are reopening, you may need to sort your priorities out. ","I don't care what anyone says especially the government but I am 100% staying at least 2m away from strangers for the foreseeable future.","So we can have 2 households meet up as long as we social distancing,  but we can also go to the pub and meet up with 10+ households for drunken banter? Makes sense.","Stop complaining, it's embarrassing. Just do what you want, go about your day, but for the sake of others, learn how to keep your distance."];console.log("::: Replacing value :::"),document.getElementById("name").value=e[Math.floor(Math.random()*e.length)]}n.r(t);n(0);var a=n.p+"img/illustration.svg";n.d(t,"checkForName",function(){return o}),n.d(t,"handleSubmit",function(){return r}),n.d(t,"generateHeadline",function(){return i}),n.d(t,"img",function(){return a}),console.log("Load successful")}]);