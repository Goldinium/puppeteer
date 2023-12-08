/*! For license information please see 0034b02d.77c1b512.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92728],{27046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(85893),a=r(11151);const l={sidebar_label:"Page.emulateCPUThrottling"},o="Page.emulateCPUThrottling() method",s={id:"api/puppeteer.page.emulatecputhrottling",title:"Page.emulateCPUThrottling() method",description:"Enables CPU throttling to emulate slow CPUs.",source:"@site/../docs/api/puppeteer.page.emulatecputhrottling.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatecputhrottling",permalink:"/next/api/puppeteer.page.emulatecputhrottling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.emulateCPUThrottling"},sidebar:"api",previous:{title:"Page.emulate",permalink:"/next/api/puppeteer.page.emulate"},next:{title:"Page.emulateIdleState",permalink:"/next/api/puppeteer.page.emulateidlestate"}},i={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pageemulatecputhrottling-method",children:"Page.emulateCPUThrottling() method"}),"\n",(0,n.jsx)(t.p,{children:"Enables CPU throttling to emulate slow CPUs."}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateCPUThrottling(factor: number | null): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"factor"}),(0,n.jsx)(t.td,{children:"number | null"}),(0,n.jsx)(t.td,{children:"slowdown factor (1 is no throttle, 2 is 2x slowdown, etc)."})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,l={},p=null,c=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:a,type:e,key:p,ref:c,props:l,_owner:s.current}}t.Fragment=l,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const a={},l=n.createContext(a);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);