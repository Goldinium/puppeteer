/*! For license information please see ac64951e.72e21cf8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35435],{62574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(85893),n=r(11151);const a={sidebar_label:"Page.setCookie"},s="Page.setCookie() method",i={id:"api/puppeteer.page.setcookie",title:"Page.setCookie() method",description:"Signature:",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.page.setcookie.md",sourceDirName:"api",slug:"/api/puppeteer.page.setcookie",permalink:"/api/puppeteer.page.setcookie",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Page.setCookie"},sidebar:"api",previous:{title:"Page.setContent",permalink:"/api/puppeteer.page.setcontent"},next:{title:"Page.setDefaultNavigationTimeout",permalink:"/api/puppeteer.page.setdefaultnavigationtimeout"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"pagesetcookie-method",children:"Page.setCookie() method"}),"\n",(0,o.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setCookie(...cookies: Protocol.Network.CookieParam[]): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"cookies"}),(0,o.jsx)(t.td,{children:"Protocol.Network.CookieParam[]"}),(0,o.jsx)(t.td,{})]})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"await page.setCookie(cookieObject1, cookieObject2);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var o=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var o,a={},l=null,p=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:n,type:e,key:l,ref:p,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var o=r(67294);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);