(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{339:function(t,e,n){},376:function(t,e,n){"use strict";n(339)},388:function(t,e,n){"use strict";n.r(e);n(334),n(335);function i(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=n.length,o=0;o<t;o++)e+=n.charAt(Math.floor(Math.random()*i));return e}var o={name:"App",components:{vuuri:n(385).a},data:function(){return{count:0,items:[],options:{showDuration:400,showEasing:"ease",hideDuration:400,hideEasing:"ease",layoutDuration:400,layoutEasing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",sortData:{title:function(t,e){return e.getAttribute("data-title")||""},color:function(t,e){return e.getAttribute("data-color")||""}},dragEnabled:!0,dragHandle:".grid-card-handle",dragContainer:document.querySelector(".muuri-grid"),dragRelease:{duration:400,easing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",useDragContainer:!0},dragPlaceholder:{enabled:!0,createElement:function(t){return t.getElement().cloneNode(!0)}},dragAutoScroll:{targets:[window],sortDuringScroll:!1,syncAfterScroll:!1}}}},methods:{onDeleteClicked:function(t){var e=this.items.findIndex((function(e){return e.id===t.id}));this.items.splice(e,1)},onAddClicked:function(){this._buildItems()},onDeleteMoreClicked:function(){var t=Math.max(1,Math.floor(Math.random()*this.items.length));console.log("numberOfTimesToDelete: ",t);for(var e=0;e<t;e++){var n=Math.floor(Math.random()*this.items.length);if(n<0)return;console.log("index",n,this.items.length),this.items.splice(n,1)}},getItemWidth:function(t){return"".concat(t.width,"px")},getItemHeight:function(t){return"".concat(t.height,"px")},getSize:function(){var t=Math.random();return t<.333?100:t<.666?150:200},_buildItems:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=Math.max(1,Math.floor(Math.random()*t)),n=0;n<e;n++)this.items.push(this._buildItem())},_addItems:function(){var t=this;this.count>10||setTimeout((function(){t.count++,t._buildItems(1),t._addItems()}),150)},_buildItem:function(){return{id:Math.random(),name:i(2),color:this._getColor(),width:this.getSize(),height:this.getSize()}},_getColor:function(){var t=Math.random();return t<.333?"#aaffdc":t<.666?"#ff69ea":"rgb(139, 152, 255)"}},mounted:function(){this._addItems()}},r=(n(376),n(48)),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"code-demo-app"}},[n("div",{staticClass:"add-delete-buttons mb-2"},[n("b-button",{staticClass:"mr-2",on:{click:function(e){return t.onAddClicked()}}},[t._v("Add")]),t._v(" "),n("b-button",{on:{click:function(e){return t.onDeleteMoreClicked()}}},[t._v("Delete")])],1),t._v(" "),n("div",{staticClass:"vuuri-container"},[n("vuuri",{attrs:{items:t.items,"item-key":"id","get-item-width":t.getItemWidth,"get-item-height":t.getItemHeight,options:t.options},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[n("div",{staticClass:"demo-item",style:{backgroundColor:i.color}},[n("div",{staticClass:"grid-card-handle"}),t._v(" "),n("b-button",{staticClass:"delete-btn",attrs:{type:"is-danger"},on:{click:function(e){return t.onDeleteClicked(i)}}},[t._v("×")])],1)]}}])})],1)])}),[],!1,null,"4a332258",null);e.default=a.exports}}]);