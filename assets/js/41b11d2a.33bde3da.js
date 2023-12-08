/*! For license information please see 41b11d2a.33bde3da.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72916],{78935:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=t(85893),s=t(11151);const o={sidebar_label:"Frame.hover"},i="Frame.hover() method",a={id:"api/puppeteer.frame.hover",title:"Frame.hover() method",description:"Hovers the pointer over the center of the first element that matches the selector.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.frame.hover.md",sourceDirName:"api",slug:"/api/puppeteer.frame.hover",permalink:"/api/puppeteer.frame.hover",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"Frame.hover"},sidebar:"api",previous:{title:"Frame.goto",permalink:"/api/puppeteer.frame.goto"},next:{title:"Frame.isDetached",permalink:"/api/puppeteer.frame.isdetached"}},c={},h=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"framehover-method",children:"Frame.hover() method"}),"\n",(0,n.jsxs)(r.p,{children:["Hovers the pointer over the center of the first element that matches the ",(0,n.jsx)(r.code,{children:"selector"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  hover(selector: string): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"selector"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"The selector to query for."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,n.jsxs)(r.p,{children:["Throws if there's no element matching ",(0,n.jsx)(r.code,{children:"selector"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,t){var n,o={},h=null,l=null;for(n in void 0!==t&&(h=""+t),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:h,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=h,r.jsxs=h},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(67294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);