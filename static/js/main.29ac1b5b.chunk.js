(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{27:function(e,s,t){},51:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),r=t(8),n=t.n(r),l=(t(27),t(9)),i=(t(28),t(12)),j=t(1);var o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.a,{bg:"dark",variant:"dark",className:"justify-content-center",children:Object(j.jsx)(i.a.Brand,{children:"Employee Directory"})})})};var m=function(e){var s=e.results&&e.results.filter((function(s){var t=s.name.first.toLowerCase(),c=s.name.last.toLowerCase();return-1!==t.concat(" ",c).indexOf(e.search.toLowerCase())}));return"asc"===e.sort?s.sort((function(e,s){return e.name.first<s.name.first?-1:e.name.first>s.name.first?1:void 0})):"desc"===e.sort&&s.sort((function(e,s){return e.name.first<s.name.first?1:e.name.first>s.name.first?-1:void 0})),console.log(s),e.results?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"list-group search-results",children:s.length||e.search?s.map((function(e){return Object(j.jsx)("li",{className:"list-group-item container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("img",{alt:"employee",src:e.picture.thumbnail,className:"img-fluid"})}),Object(j.jsxs)("p",{className:"col-3",children:[e.name.first," ",e.name.last]}),Object(j.jsx)("p",{className:"col-5",children:e.email})]})},e.cell)})):e.results.map((function(e){return Object(j.jsx)("li",{className:"list-group-item container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("img",{alt:"employee",src:e.picture.thumbnail,className:"img-fluid"})}),Object(j.jsxs)("p",{className:"col-3",children:[e.name.first," ",e.name.last]}),Object(j.jsx)("p",{className:"col-5",children:e.email})]})},e.cell)}))})}):null},d=t(13);var u=function(e){var s=Object(c.useState)(""),t=Object(l.a)(s,2),a=t[0],r=t[1],n=Object(c.useState)(""),i=Object(l.a)(n,2),o=i[0],u=i[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsx)("div",{className:"col-8",children:Object(j.jsx)("form",{className:"search my-3",children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"language",children:"Search Employees:"}),Object(j.jsx)("input",{value:a,onChange:function(e){r(e.target.value)},name:"search",list:"search",type:"text",className:"form-control",placeholder:"Start typing a name...",id:"term"})]})})}),Object(j.jsxs)("div",{className:"row mb-3 justify-content-center",children:[Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsx)(d.a,{onClick:function(){u("asc")},variant:"dark",children:"Sort Ascending (A to Z)"})," "]}),Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsx)(d.a,{onClick:function(){u("desc")},variant:"dark",children:"Sort Descending (Z to A)"})," "]})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(m,{results:e.results,search:a,sort:o})})]})})})},b=t(22),h=t.n(b);var O=function(){var e=Object(c.useState)(),s=Object(l.a)(e,2),t=s[0],a=s[1];return Object(c.useEffect)((function(){h.a.get("https://randomuser.me/api/?results=100").then((function(e){a(e.data.results)}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(o,{}),Object(j.jsx)(u,{results:t})]})})};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.29ac1b5b.chunk.js.map