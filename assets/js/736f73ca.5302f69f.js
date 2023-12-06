/*! For license information please see 736f73ca.5302f69f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34697],{45157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(85893),n=r(11151);const o={sidebar_label:"Page.focus"},i="Page.focus() method",a={id:"api/puppeteer.page.focus",title:"Page.focus() method",description:"This method fetches an element with selector and focuses it. If there's no element matching selector, the method throws an error.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.page.focus.md",sourceDirName:"api",slug:"/api/puppeteer.page.focus",permalink:"/api/puppeteer.page.focus",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"Page.focus"},sidebar:"api",previous:{title:"Page.exposeFunction",permalink:"/api/puppeteer.page.exposefunction"},next:{title:"Page.frames",permalink:"/api/puppeteer.page.frames"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagefocus-method",children:"Page.focus() method"}),"\n",(0,s.jsxs)(t.p,{children:["This method fetches an element with ",(0,s.jsx)(t.code,{children:"selector"})," and focuses it. If there's no element matching ",(0,s.jsx)(t.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  focus(selector: string): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"selector"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:["A ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," of an element to focus. If there are multiple elements satisfying the selector, the first will be focused."]})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.p,{children:"Promise which resolves when the element matching selector is successfully focused. The promise will be rejected if there is no element matching selector."}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Shortcut for ",(0,s.jsx)(t.a,{href:"/api/puppeteer.frame.focus",children:"page.mainFrame().focus(selector)"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,o={},l=null,d=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var s=r(67294);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);