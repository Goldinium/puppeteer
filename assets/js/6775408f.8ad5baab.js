/*! For license information please see 6775408f.8ad5baab.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51770],{5106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(85893),l=n(11151);const a={sidebar_label:"ElementHandle.$x"},s="ElementHandle.$x() method",i={id:"api/puppeteer.elementhandle._x",title:"ElementHandle.$x() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.elementhandle._x.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle._x",permalink:"/api/puppeteer.elementhandle._x",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"ElementHandle.$x"},sidebar:"api",previous:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"},next:{title:"ElementHandle.autofill",permalink:"/api/puppeteer.elementhandle.autofill"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandlex-method",children:"ElementHandle.$x() method"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle.__",children:"ElementHandle.$$()"})," with the ",(0,r.jsx)(t.code,{children:"xpath"})," prefix."]}),"\n",(0,r.jsxs)(t.p,{children:["Example: ",(0,r.jsx)(t.code,{children:"await elementHandle.$$('xpath/' + xpathExpression)"})]}),"\n",(0,r.jsxs)(t.p,{children:["The method evaluates the XPath expression relative to the elementHandle. If ",(0,r.jsx)(t.code,{children:"xpath"})," starts with ",(0,r.jsx)(t.code,{children:"//"})," instead of ",(0,r.jsx)(t.code,{children:".//"}),", the dot will be appended automatically."]}),"\n",(0,r.jsx)(t.p,{children:"If there are no such elements, the method will resolve to an empty array."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  $x(expression: string): Promise<Array<ElementHandle<Node>>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expression"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["Expression to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate",children:"evaluate"})]})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<Array<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Node>>>"]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var r=n(67294),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,p=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:d,ref:p,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);