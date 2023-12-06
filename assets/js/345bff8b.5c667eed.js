/*! For license information please see 345bff8b.5c667eed.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3301],{72947:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(85893),s=t(11151);const i={sidebar_label:"BrowserEvent"},a="BrowserEvent enum",o={id:"api/puppeteer.browserevent",title:"BrowserEvent enum",description:"All the events a browser instance may emit.",source:"@site/versioned_docs/version-21.5.2/api/puppeteer.browserevent.md",sourceDirName:"api",slug:"/api/puppeteer.browserevent",permalink:"/api/puppeteer.browserevent",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{sidebar_label:"BrowserEvent"},sidebar:"api",previous:{title:"BrowserContextOptions",permalink:"/api/puppeteer.browsercontextoptions"},next:{title:"BrowserEvents",permalink:"/api/puppeteer.browserevents"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Enumeration Members",id:"enumeration-members",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"browserevent-enum",children:"BrowserEvent enum"}),"\n",(0,n.jsxs)(r.p,{children:["All the events a ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser instance"})," may emit."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export declare const enum BrowserEvent\n"})}),"\n",(0,n.jsx)(r.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Member"}),(0,n.jsx)(r.th,{children:"Value"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Disconnected"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:'"disconnected"'})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)("p",{children:"Emitted when Puppeteer gets disconnected from the browser instance. This might happen because either:"}),(0,n.jsxs)("p",{children:["- The browser closes/crashes or - ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser.disconnect",children:"Browser.disconnect()"})," was called."]})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TargetChanged"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:'"targetchanged"'})}),(0,n.jsxs)(r.td,{children:["Emitted when the URL of a target changes. Contains a ",(0,n.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TargetCreated"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:'"targetcreated"'})}),(0,n.jsxs)(r.td,{children:[(0,n.jsxs)("p",{children:["Emitted when a target is created, for example when a new page is opened by ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open",children:"window.open"})," or by ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser.newpage",children:"browser.newPage"})]}),(0,n.jsxs)("p",{children:["Contains a ",(0,n.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TargetDestroyed"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:'"targetdestroyed"'})}),(0,n.jsxs)(r.td,{children:["Emitted when a target is destroyed, for example when a page is closed. Contains a ",(0,n.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:p,props:i,_owner:o.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>a});var n=t(67294);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);