(this["webpackJsonpnews.io"]=this["webpackJsonpnews.io"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(16),a=c.n(s),i=(c(25),c(26),c(0)),l=function(e){return Object(i.jsx)("div",{className:"line"})},j=c(17),o=c(18),b=(c(32),function(e){return Object(i.jsxs)("form",{role:"search",children:[Object(i.jsx)("label",{htmlFor:"search"}),Object(i.jsx)("input",{type:"search",name:"search","aria-label":"search text",placeholder:"Search Articles..."}),Object(i.jsx)("label",{htmlFor:"submit"}),Object(i.jsx)(j.a,{icon:o.a,className:"search-icon",name:"submit","aria-label":"submit search"})]})}),u=(c(33),function(){return Object(i.jsxs)("header",{"data-test-id":"header",children:[Object(i.jsx)(l,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"News.io"}),Object(i.jsx)(b,{})]}),Object(i.jsx)(l,{})]})}),h=c(20),d=c(19),x=c.n(d),O=r.a.createContext(),f=function(e){var t=Object(n.useState)(),c=Object(h.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){x.a.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=".concat("Dg7aANgxQSDGc1cfAZ64paMSJRW6aLoA")).then((function(e){console.log("success"),s(e.data)})).catch((function(e){console.log("error"),console.log(e)})).then((function(){console.log("API GET completed")}))}),[]),Object(i.jsx)(O.Provider,{value:r,children:e.children})},m=function(e){var t=e.articleData;return Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:t.title}),Object(i.jsx)("img",{src:t.multimedia[0].url,alt:t.multimedia[0].caption}),Object(i.jsx)("p",{children:t.abstract}),Object(i.jsx)("p",{children:t.byline}),Object(i.jsx)("p",{children:t.published_date}),Object(i.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:"Read Article"})]})},p=function(e){var t=Object(n.useContext)(O);return Object(i.jsx)("div",{children:t?t.results.map((function(e){return Object(i.jsx)(m,{articleData:e},e.title+e.url)})):Object(i.jsx)(i.Fragment,{})})};c(51);var v=function(){return Object(i.jsxs)(f,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(p,{})]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.2286e288.chunk.js.map