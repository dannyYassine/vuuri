(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{336:function(t,a,s){"use strict";s.d(a,"b",(function(){return n})),s.d(a,"c",(function(){return e})),s.d(a,"a",(function(){return i}));var n="\n  $ yarn add vuuri\n",e='\n<vuuri v-model="items">\n  <template #item="{ item }">\n    <YourComponent :item="item" />\n  </template>\n</vuuri>\n',i="\n// adding\nthis.items.push(newItem);\n\n// removing\nthis.items.splice(1, 0);\n"},360:function(t,a,s){},404:function(t,a,s){"use strict";s(360)},424:function(t,a,s){"use strict";s.r(a);var n=s(336),e={name:"CodeDemo",components:{AutoSort:s(419).default},data:function(){return{code:n.c,crudCode:n.a}},methods:{}},i=(s(404),s(49)),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"crud-updates full-height max-width-800 margin-auto"},[s("h2",[t._v("Automatic CRUD Updates")]),t._v(" "),s("h2",[t._v("You just worry about writing javascript")]),t._v(" "),t._m(1),t._v(" "),s("ClientOnly",[s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("AddDeleteDemo",{staticClass:"add-delete-demo",attrs:{deletes:"false"}})],1)],1),t._v(" "),s("div",{staticClass:"groups full-height max-width-800 margin-auto"},[s("h2",[t._v("Create Groups")]),t._v(" "),s("h4",[t._v("Vuuri automatically handles the model updates for you")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("ClientOnly",[s("AutoSort")],1)],1),t._v(" "),s("div",{staticClass:"half-height"},[s("h2",[t._v("Vuuri takes care of the rest")]),t._v(" "),s("div",{staticClass:"text-center mt-4"},[s("router-link",{attrs:{to:"/guide/install"}},[s("b-button",{staticClass:"get-started",attrs:{type:"is-dark"}},[t._v("Get Started ➞")])],1)],1)])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"full-height"},[s("h2",[t._v("Usage")]),t._v(" "),s("div",{staticClass:"pre-code"},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{staticClass:"language-vue"},[s("code",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("vuuri")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("v-model")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation attr-equals"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("items"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("#item")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation attr-equals"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("{ item }"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("YourComponent")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v(":item")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation attr-equals"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("item"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("/>")])]),t._v("\n  "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("vuuri")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pre-code"},[s("div",{staticClass:"language-js extra-class"},[s("pre",{staticClass:"language-js"},[s("code",[s("span",{staticClass:"token comment"},[t._v("// adding")]),t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("this")]),s("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("items"),s("span",{staticClass:"token punctuation"},[t._v(".")]),s("span",{staticClass:"token function"},[t._v("push")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("newItem"),s("span",{staticClass:"token punctuation"},[t._v(")")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),s("span",{staticClass:"token comment"},[t._v("// removing")]),t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("this")]),s("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("items"),s("span",{staticClass:"token punctuation"},[t._v(".")]),s("span",{staticClass:"token function"},[t._v("splice")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token"},[t._v("1")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token"},[t._v("0")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])])])])}],!1,null,"1d96ea1a",null);a.default=o.exports}}]);