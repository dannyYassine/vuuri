(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{314:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(t,e,n){var r=n(28),i="["+n(314)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},317:function(t,e,n){var r=n(9),i=n(172);t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},344:function(t,e,n){},377:function(t,e,n){"use strict";var r=n(12),i=n(8),o=n(104),a=n(18),s=n(11),u=n(31),d=n(317),c=n(50),l=n(6),m=n(51),h=n(75).f,f=n(30).f,g=n(13).f,p=n(316).trim,b=i.Number,_=b.prototype,v="Number"==u(m(_)),I=function(t){var e,n,r,i,o,a,s,u,d=c(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=p(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+d}for(a=(o=d.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+d};if(o("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var N,M=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof M&&(v?l((function(){_.valueOf.call(n)})):"Number"!=u(n))?d(new b(I(e)),n,M):I(e)},x=r?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;x.length>C;C++)s(b,N=x[C])&&!s(M,N)&&g(M,N,f(b,N));M.prototype=_,_.constructor=M,a(i,"Number",M)}},383:function(t,e,n){"use strict";n(344)},398:function(t,e,n){"use strict";n.r(e);n(319),n(320),n(377);function r(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*r));return e}var i={name:"App",components:{vuuri:n(323).a},props:{min:{type:[Number,String],required:!1},max:{type:[Number,String],required:!1},adds:{type:[Number,String],required:!1,default:4},deletes:{type:[Number,String],required:!1},startingItems:{type:[Number,String],default:15}},data:function(){return{count:0,items:[],options:{showDuration:400,showEasing:"ease",hideDuration:400,hideEasing:"ease",layoutDuration:400,layoutEasing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",sortData:{title:function(t,e){return e.getAttribute("data-title")||""},color:function(t,e){return e.getAttribute("data-color")||""}},dragEnabled:!0,dragHandle:".grid-card-handle",dragContainer:document.querySelector(".add-delete-demo-muuri-grid"),dragRelease:{duration:400,easing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",useDragContainer:!0},dragPlaceholder:{enabled:!0,createElement:function(t){return t.getElement().cloneNode(!0)}},dragAutoScroll:{targets:[window],sortDuringScroll:!1,syncAfterScroll:!1}}}},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_startingItems:function(){return Number(this.startingItems)},_adds:function(){return Number(this.adds)},_deletes:function(){return Number(this.deletes)}},methods:{onDeleteClicked:function(t){var e=this.items.findIndex((function(e){return e.id===t.id}));this.items.splice(e,1)},onAddClicked:function(){this._buildItems(this._adds)},onDeleteMoreClicked:function(){var t=Math.max(1,Math.floor(Math.random()*this._deletes?this._deletes:this.items.length));console.log("numberOfTimesToDelete: ",t);for(var e=0;e<t;e++){var n=Math.floor(Math.random()*this.items.length);if(n<0)return;console.log("index",n,this.items.length),this.items.splice(n,1)}},getItemWidth:function(t){return"".concat(t.width,"px")},getItemHeight:function(t){return"".concat(t.height,"px")},getSize:function(){if(this.min&&this.max)return Math.floor(Math.random()*(Math.max(this._min,this._max)-Math.min(this._min,this._max)+1)+Math.min(this._min,this._max));var t=Math.random();return t<.333?75:t<.666?100:125},_buildItems:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=Math.max(1,Math.floor(Math.random()*t)),n=0;n<e;n++)this.items.push(this._buildItem())},_addItems:function(){var t=this;this.count>this._startingItems||setTimeout((function(){t.count++,t._buildItems(1),t._addItems()}),150)},_buildItem:function(){return{id:Math.random(),name:r(2),color:this._getColor(),width:this.getSize(),height:this.getSize()}},_getColor:function(){var t=Math.random();return t<.333?"#aaffdc":t<.666?"#ff69ea":"rgb(139, 152, 255)"}},mounted:function(){this._addItems()}},o=(n(383),n(48)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"code-demo-app"}},[n("div",{staticClass:"add-delete-buttons mb-2"},[n("b-button",{staticClass:"mr-2",on:{click:function(e){return t.onAddClicked()}}},[t._v("Add")]),t._v(" "),n("b-button",{on:{click:function(e){return t.onDeleteMoreClicked()}}},[t._v("Delete")])],1),t._v(" "),n("div",{staticClass:"vuuri-container"},[n("vuuri",{attrs:{items:t.items,"item-key":"id","class-name":"add-delete-demo-muuri-grid","get-item-width":t.getItemWidth,"get-item-height":t.getItemHeight,options:t.options},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[n("div",{staticClass:"demo-item",style:{backgroundColor:r.color}},[n("div",{staticClass:"grid-card-handle"}),t._v(" "),n("b-button",{staticClass:"delete-btn",attrs:{type:"is-danger"},on:{click:function(e){return t.onDeleteClicked(r)}}},[t._v("×")])],1)]}}])})],1)])}),[],!1,null,"d42cfcb4",null);e.default=a.exports}}]);