/*! For license information please see 43ce98c7.1c7a6169.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29556],{70579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(85893),s=r(11151);const i={sidebar_label:"HTTPRequest.continue"},o="HTTPRequest.continue() method",a={id:"api/puppeteer.httprequest.continue",title:"HTTPRequest.continue() method",description:"Continues request with optional request overrides.",source:"@site/versioned_docs/version-21.6.0/api/puppeteer.httprequest.continue.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.continue",permalink:"/api/puppeteer.httprequest.continue",draft:!1,unlisted:!1,tags:[],version:"21.6.0",frontMatter:{sidebar_label:"HTTPRequest.continue"},sidebar:"api",previous:{title:"HTTPRequest.abortErrorReason",permalink:"/api/puppeteer.httprequest.aborterrorreason"},next:{title:"HTTPRequest.continueRequestOverrides",permalink:"/api/puppeteer.httprequest.continuerequestoverrides"}},d={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"httprequestcontinue-method",children:"HTTPRequest.continue() method"}),"\n",(0,n.jsx)(t.p,{children:"Continues request with optional request overrides."}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract continue(\n    overrides?: ContinueRequestOverrides,\n    priority?: number\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"overrides"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.continuerequestoverrides",children:"ContinueRequestOverrides"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," optional overrides to apply to the request."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"priority"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["To use this, request interception should be enabled with ",(0,n.jsx)(t.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Exception is immediately thrown if the request interception is not enabled."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await page.setRequestInterception(true);\npage.on('request', request => {\n  // Override headers\n  const headers = Object.assign({}, request.headers(), {\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  });\n  request.continue({headers});\n});\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,p=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,n)&&!d.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:u,ref:p,props:i,_owner:a.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var n=r(67294);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);