(function(t){function e(e){for(var o,a,i=e[0],c=e[1],l=e[2],m=0,h=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/pasqualeponzi.de/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),s=n.n(o);s.a},"036c":function(t,e,n){"use strict";var o=n("8285"),s=n.n(o);s.a},"17ed":function(t,e,n){"use strict";var o=n("86b6"),s=n.n(o);s.a},3867:function(t,e,n){"use strict";var o=n("4353"),s=n.n(o);s.a},"3bdc":function(t,e,n){},4353:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TheNav"),t.$store.state.showGallery?n("TheGallery"):t._e(),t.$store.state.showOverlay?n("TheOverlay",{attrs:{img:t.$store.state.currImg}}):t._e(),t.$store.state.showContact?n("TheContact"):t._e(),t.$store.state.showImprint?n("TheImprint"):t._e(),n("TheFooter")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"the-nav"},[n("img",{staticClass:"logo",attrs:{src:"img/logo.png",alt:"Logo"}}),n("ul",{staticClass:"the-nav__list"},[n("li",{staticClass:"the-nav__link",on:{click:t.showGallery}},[t._v("Galerie")]),n("li",{staticClass:"the-nav__link"},[t._v("About")]),n("li",{staticClass:"the-nav__link",on:{click:t.showContact}},[t._v("Kontakt")])])])},i=[],c={name:"TheNav",components:{},data:function(){return{}},methods:{showGallery:function(){this.$store.commit("hideAll"),this.$store.commit("setShowGallery",!0)},showContact:function(){this.$store.commit("hideAll"),this.$store.commit("setShowContact",!0)}}},l=c,u=(n("62f4"),n("2877")),m=Object(u["a"])(l,a,i,!1,null,"e1bea1bc",null),h=m.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"the-gallery",class:{"the-gallery--no-padding":t.$store.state.windowWidth<=600}},[n("div",{staticClass:"columns"},t._l(t.columnsQty,(function(e,o){return n("GalleryColumn",{key:o,attrs:{imgs:t.imgs.filter((function(n,o){return(o+-1*(e-(t.columnsQty+1)))%t.columnsQty==0})),col:e}})})),1),n("BaseLoadmore"),n("TheTotop")],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gallery-column"},t._l(t.imgsShow,(function(e,o){return n("img",{key:o,staticClass:"column__img",class:{"column__img--full-width":t.$store.state.windowWidth<=600},attrs:{src:e,alt:"img",loading:"lazy"}})})),0)},v=[],w=(n("fb6a"),n("a9e3"),{name:"GalleryColumn",components:{},props:{imgs:Array,col:Number},data:function(){return{}},methods:{showOverlay:function(t){this.$store.commit("setCurrImg",t),this.$store.commit("setShowOverlay",!0)}},computed:{imgsShow:function(){return this.imgs.slice(0,this.$store.state.galleryImgsShow/this.$store.state.columnsQty)}}}),g=w,y=(n("3867"),Object(u["a"])(g,d,v,!1,null,"ccbbcdcc",null)),_=y.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"base-loadmore",class:{"base-loadmore--disabled":!t.isEnabled},on:{click:t.setGalleryImgsMax}},[n("svg",{staticClass:"base-loadmore__icon",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216\n\t\t\tv216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"}})])])]),n("span",{staticClass:"base-loadmore__text"},[t._v("Mehr laden")])])},C=[],$={name:"BaseLoadmore",components:{},data:function(){return{}},computed:{isEnabled:function(){return this.$store.state.galleryImgsShow<this.$store.state.galleryImgsMax}},methods:{setGalleryImgsMax:function(){this.$store.commit("setGalleryImgsShow",this.$store.state.galleryImgsShow+=24)}}},x=$,O=(n("036c"),Object(u["a"])(x,b,C,!1,null,"547fd5c2",null)),I=O.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"the-totop",on:{click:t.totop}},[n("img",{staticClass:"totop__icon",attrs:{src:"img/icons/totop.svg",alt:"Back"}})])},S=[],j={name:"TheTotop",components:{},data:function(){return{}},methods:{totop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},computed:{},created:function(){var t=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.querySelector(".the-totop").style.bottom=t>e&&window.scrollY>1200?"5vmin":"-11vmin",t=e}}},k=j,G=(n("afaa"),Object(u["a"])(k,T,S,!1,null,"75324236",null)),E=G.exports,M={name:"TheGallery",components:{GalleryColumn:_,BaseLoadmore:I,TheTotop:E},data:function(){return{}},computed:{columnsQty:function(){return this.$store.state.columnsQty},imgs:function(){for(var t=[],e=1;e<=this.$store.state.galleryImgsMax;e++)t.push("img/minified/".concat(e,".jpg"));return t}}},W=M,A=(n("8450"),Object(u["a"])(W,f,p,!1,null,"859fd674",null)),Q=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"the-overlay",on:{click:t.hideOverlay}},[n("img",{staticClass:"the-overlay__arrow",attrs:{src:"img/icons/back.svg",alt:"Back"}}),n("img",{staticClass:"the-overlay__img",attrs:{src:"img/a-normal/"+t.img.match(/\d+/g)+".jpg",alt:"img"}}),n("img",{staticClass:"the-overlay__arrow",attrs:{src:"img/icons/next.svg",alt:"Next"}})])},z=[],B={name:"TheOverlay",components:{},props:{img:String},data:function(){return{}},methods:{hideOverlay:function(){this.$store.commit("setShowOverlay",!1)}}},L=B,q=(n("6a3c"),Object(u["a"])(L,P,z,!1,null,"852c5ca4",null)),N=q.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"the-footer"},[n("span",{staticClass:"note"},[t._v("Lorem Ipsum 2020")]),n("span",{staticClass:"impressum",on:{click:t.showImprint}},[t._v("Impressum")])])},R=[],Y={name:"App",components:{},data:function(){return{}},methods:{showImprint:function(){this.$store.commit("hideAll"),this.$store.commit("setShowImprint",!0)}}},F=Y,J=(n("5f24"),Object(u["a"])(F,H,R,!1,null,"fea2158c",null)),V=J.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"the-contact"},[n("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusamus voluptatibus rerum modi eos vel nulla harum delectus aperiam quasi sit perspiciatis autem nisi, quaerat architecto labore non, exercitationem illo!")])])}],U={name:"TheContact",components:{},data:function(){return{}}},X=U,Z=(n("e81b"),Object(u["a"])(X,D,K,!1,null,"5801ea64",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"the-imprint"},[n("h1",{staticClass:"imprint__title"},[t._v("Impressum")]),n("p",{staticClass:"imprint__text"},[t._v(" Angaben gemäß § 5 TMG: "),n("br"),t._v("Pasqualino Ponzi "),n("br"),t._v("Herderstraße 2 "),n("br"),t._v("64285 Darmstadt "),n("br"),t._v("Telefon: auf Anfrage "),n("br"),t._v("E-Mail: max@muster.de ")])])}],ot={name:"TheImprint",components:{},data:function(){return{}}},st=ot,rt=(n("17ed"),Object(u["a"])(st,et,nt,!1,null,"bb1b4468",null)),at=rt.exports,it={name:"App",components:{TheGallery:Q,TheOverlay:N,TheNav:h,TheFooter:V,TheContact:tt,TheImprint:at},methods:{windowResize:function(){this.$store.commit("setWindowWidth",window.innerWidth),this.$store.commit("setColumnsQty",this.$store.state.windowWidth>1200?3:this.$store.state.windowWidth>600?2:1)}},created:function(){window.onresize=this.windowResize,this.windowResize()}},ct=it,lt=(n("034f"),Object(u["a"])(ct,s,r,!1,null,null,null)),ut=lt.exports,mt=n("2f62");o["a"].config.productionTip=!1,o["a"].use(mt["a"]);var ht=new mt["a"].Store({state:{galleryImgsMax:101,galleryImgsShow:34,showOverlay:!1,showGallery:!0,showContact:!1,showImprint:!1,currImg:"",columnsQty:void 0,windowWidth:void 0},mutations:{setGalleryImgsMax:function(t,e){return t.galleryImgsMax=e},setGalleryImgsShow:function(t,e){return t.galleryImgsShow=e},setShowOverlay:function(t,e){return t.showOverlay=e},setShowGallery:function(t,e){return t.showGallery=e},setShowContact:function(t,e){return t.showContact=e},setShowImprint:function(t,e){return t.showImprint=e},setCurrImg:function(t,e){return t.currImg=e},setColumnsQty:function(t,e){return t.columnsQty=e},setWindowWidth:function(t,e){return t.windowWidth=e},hideAll:function(t){t.showContact=!1,t.showGallery=!1,t.showOverlay=!1,t.showImprint=!1}}});new o["a"]({render:function(t){return t(ut)},store:ht}).$mount("#app")},"5f24":function(t,e,n){"use strict";var o=n("f7a0"),s=n.n(o);s.a},"62f4":function(t,e,n){"use strict";var o=n("3bdc"),s=n.n(o);s.a},"6a3c":function(t,e,n){"use strict";var o=n("bccb"),s=n.n(o);s.a},"77e6":function(t,e,n){},8285:function(t,e,n){},8450:function(t,e,n){"use strict";var o=n("77e6"),s=n.n(o);s.a},"85ec":function(t,e,n){},"86b6":function(t,e,n){},"89b0":function(t,e,n){},afaa:function(t,e,n){"use strict";var o=n("89b0"),s=n.n(o);s.a},bccb:function(t,e,n){},de0d:function(t,e,n){},e81b:function(t,e,n){"use strict";var o=n("de0d"),s=n.n(o);s.a},f7a0:function(t,e,n){}});
//# sourceMappingURL=app.f995500a.js.map