(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(t,e,i){},316:function(t,e,i){"use strict";i(314)},317:function(t,e,i){"use strict";i(172),i(28),i(315),i(318),i(102),i(173),i(319),i(321),i(14),i(323),i(50),i(75),i(103);var r=i(322),n=i(324),s=i(325),o=i(326),u={synchronize:"synchronize",layoutStart:"layoutStart",layoutEnd:"layoutEnd",layoutAbort:"layoutAbort",add:"add",remove:"remove",showStart:"showStart",showEnd:"showEnd",hideStart:"hideStart",hideEnd:"hideEnd",filter:"filter",sort:"sort",move:"move",send:"send",beforeSend:"beforeSend",receive:"receive",beforeReceive:"beforeReceive",dragInit:"dragInit",dragStart:"dragStart",dragMove:"dragMove",dragScroll:"dragScroll",dragEnd:"dragEnd",dragReleaseStart:"dragReleaseStart",dragReleaseEnd:"dragReleaseEnd",destroy:"destroy"},a=(i(327),i(30),i(35),i(29)),d=i(51),c=new(function(){function t(){Object(a.a)(this,t),this._store=new Map,this._itemStore=new Map,this._draggingGridItem=null,this._draggingItem=null}return Object(d.a)(t,[{key:"setItemsForGridId",value:function(t,e){this._itemStore.set(t,e)}},{key:"getItemFromGridId",value:function(t,e){return this._itemStore.get(t).find((function(t){return t.id==e.getElement().dataset.itemKey}))}},{key:"setDraggingGridItem",value:function(t){this._draggingGridItem=t}},{key:"setDraggingItem",value:function(t){this._draggingItem=t}},{key:"getDraggingGridItem",value:function(){return this._draggingGridItem}},{key:"getDraggingItem",value:function(){return this._draggingItem}},{key:"addGrid",value:function(t,e){var i=t+"";this._store.has(i)||this._store.set(i+"",[]),this._store.get(i).push(e)}},{key:"addGridToGroups",value:function(t,e){var i=this;t.forEach((function(t){return i.addGrid(t,e)}))}},{key:"getGrids",value:function(t){var e=this;if(Array.isArray(t)){var i=[];return t.forEach((function(t){return i=i.concat(e._store.get(t+""))})),i}var r=t+"";return this._store.get(r)}}]),t}()),m=function(){function t(){Object(a.a)(this,t)}return Object(d.a)(t,[{key:"isUnitTesting",value:function(){return void 0!==process.env.JEST_WORKER_ID}}]),t}(),l="_$muuri_id",h="100px",g="100px",f={name:"Vuuri",props:{className:{type:String,required:!1,default:function(){return"class".concat(Object(o.v4)().replace(/-/g,""))}},options:{type:Object,required:!1,default:function(){return{}}},value:{type:Array,required:!1},itemKey:{type:String,required:!1,default:function(){return l}},getItemWidth:{type:Function,required:!1,default:function(){return h}},getItemHeight:{type:Function,required:!1,default:function(){return g}},dragEnabled:{type:Boolean,required:!1,default:!1},dragHandle:{type:String,required:!1,default:{selector:".muuri-item:first-child"}.select},groupId:{type:[String,Number],required:!1},groupIds:{type:[Array],required:!1}},data:function(){return{copiedItems:[],events:{},muuriOptions:{}}},watch:{value:function(t){this.internallySet||this._sync(t,this.copiedItems)}},computed:{selector:function(){return".".concat(this.className)}},methods:{update:function(){var t=this;this.$nextTick((function(){t.muuri.refreshItems().layout(!0,(function(){return t.$emit("updated")}))}))},_setup:function(){var t=this;this.muuri=new s.a(this.selector,this.muuriOptions),this.groupId&&c.addGrid(this.groupId,this.muuri),this.groupIds&&c.addGridToGroups(this.groupIds,this.muuri),m.isUnitTesting||(this.observer=new ResizeObserver((function(){t._resizeOnLoad()})),this.observer.observe(this.$refs.muuri)),this._sync(this.value,[]),this.$nextTick((function(){c.setItemsForGridId(t.gridKey,t.value)}))},_setupNonReactiveProps:function(){this.muuri=void 0,this.observer=void 0,this.gridKey=Object(o.v4)().replace(/-/g,"")},_setupOptions:function(){if(this.dragEnabled&&(this.muuriOptions=Object(r.a)(Object(r.a)({},this._generateDragOptions()),this.muuriOptions)),this.groupId||this.groupIds){var t=[];this.groupId&&t.push(this.groupId),this.groupIds&&(t=t.concat(this.groupIds)),this.muuriOptions.dragSort=function(){return c.getGrids(t)}}this.muuriOptions=Object(r.a)(Object(r.a)({},this.options),this.muuriOptions)},_generateDragOptions:function(){return{dragEnabled:!0,dragHandle:this.dragHandle,dragContainer:document.querySelector(".muuri-grid".concat(this.selector)),dragRelease:{duration:400,easing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",useDragContainer:!0},dragPlaceholder:{enabled:!0,createElement:function(t){return t.getElement().cloneNode(!0)}},dragAutoScroll:{targets:[window],sortDuringScroll:!1,syncAfterScroll:!1}}},_registerEvents:function(){var t=this;Object.values(u).forEach((function(e){t.events[e]=function(){for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];t.$emit.apply(t,[e].concat(r))},t.muuri.on(e,t.events[e]),e===u.dragStart&&t.muuri.on(e,t._onDragStart),e===u.send&&t.muuri.on(e,t._onItemSend),e===u.receive&&t.muuri.on(e,t._onItemReceive),e===u.move&&t.muuri.on(e,t._onItemMove),e===u.dragEnd&&t.muuri.on(e,t._onDragEnd)}))},_unregisterEvents:function(){var t=this;Object.values(u).forEach((function(e){t.muuri.off(e,t.events[e]),delete t.events[e]}))},_onDragStart:function(t){c.setDraggingGridItem(t)},_onItemMove:function(t){var e=t.item,i=this._reOrderWithItem(e);this._emitValue(i)},_onItemSend:function(t){var e=t.item,i=this.value.findIndex((function(t){return t.id==e.getElement().dataset.itemKey})),r=this.value.splice(i,1)[0];c.setDraggingItem(r),this._emitValue(this.value)},_onItemReceive:function(){var t=c.getDraggingItem();this.value.push(t);var e=this._reOrderWithItem(c.getDraggingGridItem());this._emitValue(e)},_onDragEnd:function(){c.setDraggingGridItem(null),c.setDraggingItem(null)},_reOrderWithItem:function(t){var e=this,i=t.getGrid(),r=0,n=i.getItems().reduce((function(t,e){return t[e.getElement().dataset.itemKey]=r,r+=1,t}),{});return this.value.reduce((function(t,i){return t[n[i[e.itemKey]]]=i,t}),[])},_getItemStyles:function(t){return{width:this.getItemWidth(t),height:this.getItemHeight(t)}},_generateItemKey:function(t){t._$muuri_id=Object(o.v4)()},_resizeOnLoad:Object(n.debounce)((function(){var t=this;this.$nextTick((function(){t.update()}),100)})),_getDiff:function(t,e){var i=this;return Object(n.differenceWith)(t,e,(function(t,e){return t[i.itemKey]===e[i.itemKey]}))},_sync:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&i&&this._remove(e,i).then((function(){t.update(),t._add(e,i),c.setItemsForGridId(t.gridKey,t.copiedItems)}))},_remove:function(t,e){var i=this,r=this._getDiff(e,t);if(!r.length)return Promise.resolve();var n=[];return r.forEach((function(t){var e=i.muuri.getItems().find((function(e){return t[i.itemKey]+""===e.getElement().dataset.itemKey}));e&&n.push(e)})),n.length?new Promise((function(t){i.muuri.hide(n,{onFinish:function(){i.muuri.remove(n),r.forEach((function(t){var e=i.copiedItems.findIndex((function(e){return e.id===t.id}));i.copiedItems.splice(e,1)})),t()}})})):Promise.resolve()},_add:function(t,e){var i=this,r=this._getDiff(t,e);(r=this._getDiff(r,this.copiedItems)).length&&(this.itemKey===l&&r.forEach((function(t){return i._generateItemKey(t)})),this.copiedItems=this.copiedItems.concat(r),this.$nextTick((function(){r.forEach((function(t){var e=document.querySelector("".concat(i.selector,' [data-item-key="').concat(t[i.itemKey],'"]'));i.muuri.add(e,{layout:!1,active:!1})})),i.muuri.filter((function(){return!0}))})))},_copyItems:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.value;this.copiedItems=Object(n.cloneDeep)(t)},_emitValue:function(t){var e=this;this.internallySet=!0,this.$emit("input",t),this.$nextTick((function(){e.internallySet=!1,c.setItemsForGridId(e.gridKey,e.value)}))}},created:function(){this._setupNonReactiveProps(),this._setupOptions()},mounted:function(){this._setup(),this._registerEvents()},beforeDestroy:function(){this._unregisterEvents()}},v=(i(316),i(49)),_=Object(v.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"muuri",staticClass:"muuri-grid",class:t.className,attrs:{"data-grid-key":t.gridKey}},t._l(t.copiedItems,(function(e){return i("div",{key:e[t.itemKey],staticClass:"muuri-item",style:t._getItemStyles(e),attrs:{"data-item-key":e[t.itemKey]}},[i("div",{staticClass:"muuri-item-content"},[t._t("item",null,{item:e})],2)])})),0)}),[],!1,null,"60c8bfc4",null).exports;e.a=_},364:function(t,e,i){},409:function(t,e,i){"use strict";i(364)},430:function(t,e,i){"use strict";i.r(e);function r(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=i.length,n=0;n<t;n++)e+=i.charAt(Math.floor(Math.random()*r));return e}var n={name:"KanBanDemo",components:{vuuri:i(317).a},data:function(){return{count:0,todoItems:[],doneItems:[],binItems:[]}},methods:{_buildItems:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=Math.max(1,Math.floor(Math.random()*t)),i=0;i<e;i++)this.todoItems.push(this._buildItem()),this.doneItems.push(this._buildItem())},_addItems:function(){var t=this;this.count>3||setTimeout((function(){t.count++,t._buildItems(1),t._addItems()}),150)},_buildItem:function(){return{id:Math.random(),name:r(2),color:this._getColor()}},_getColor:function(){var t=Math.random();return t<.333?"#aaffdc":t<.666?"#ff69ea":"rgb(139, 152, 255)"}},mounted:function(){this._addItems()}},s=(i(409),i(49)),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"groups-example"}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[t._m(0),t._v(" "),i("vuuri",{attrs:{"item-key":"id","drag-enabled":"","group-ids":["grid_a","grid_c"]},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[i("div",{staticClass:"demo-item",style:{border:"4px "+r.color+" solid",backgroundColor:"white"}},[t._v("\n            "+t._s(r.name)+"\n          ")])]}}]),model:{value:t.todoItems,callback:function(e){t.todoItems=e},expression:"todoItems"}})],1),t._v(" "),i("div",{staticClass:"column"},[t._m(1),t._v(" "),i("vuuri",{attrs:{"item-key":"id","drag-enabled":"","group-ids":["grid_b","grid_d"]},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[i("div",{staticClass:"demo-item",style:{border:"4px "+r.color+" solid",backgroundColor:"white"}},[t._v("\n            "+t._s(r.name)+"\n          ")])]}}]),model:{value:t.doneItems,callback:function(e){t.doneItems=e},expression:"doneItems"}})],1),t._v(" "),i("div",{staticClass:"column"},[t._m(2),t._v(" "),i("vuuri",{attrs:{"item-key":"id","drag-enabled":"","group-ids":["grid_c","grid_d"]},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[i("div",{staticClass:"demo-item",style:{border:"4px "+r.color+" solid",backgroundColor:"white"}},[t._v("\n            "+t._s(r.name)+"\n          ")])]}}]),model:{value:t.binItems,callback:function(e){t.binItems=e},expression:"binItems"}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Grid A")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Grid B")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Grid C")])])}],!1,null,"48b9252a",null);e.default=o.exports}}]);