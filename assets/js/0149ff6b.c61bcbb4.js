/*! For license information please see 0149ff6b.c61bcbb4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46654],{27790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(85893),a=t(11151);const i={sidebar_label:"Frame.waitForFunction"},o="Frame.waitForFunction() method",s={id:"api/puppeteer.frame.waitforfunction",title:"Frame.waitForFunction() method",description:"Signature:",source:"@site/../docs/api/puppeteer.frame.waitforfunction.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitforfunction",permalink:"/next/api/puppeteer.frame.waitforfunction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame.waitForFunction"},sidebar:"api",previous:{title:"Frame.url",permalink:"/next/api/puppeteer.frame.url"},next:{title:"Frame.waitForNavigation",permalink:"/next/api/puppeteer.frame.waitfornavigation"}},c={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"framewaitforfunction-method",children:"Frame.waitForFunction() method"}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Frame {\n  waitForFunction<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    options?: FrameWaitForFunctionOptions,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageFunction"}),(0,r.jsx)(n.td,{children:"Func | string"}),(0,r.jsx)(n.td,{children:"the function to evaluate in the frame context."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/next/api/puppeteer.framewaitforfunctionoptions",children:"FrameWaitForFunctionOptions"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," options to configure the polling method and timeout."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsx)(n.td,{children:"Params"}),(0,r.jsxs)(n.td,{children:["arguments to pass to the ",(0,r.jsx)("code",{children:"pageFunction"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/next/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]}),"\n",(0,r.jsxs)(n.p,{children:["the promise which resolve when the ",(0,r.jsx)(n.code,{children:"pageFunction"})," returns a truthy value."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"waitForFunction"})," can be used to observe viewport size change:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n.  const browser = await puppeteer.launch();\n.  const page = await browser.newPage();\n.  const watchDog = page.mainFrame().waitForFunction('window.innerWidth < 100');\n.  page.setViewport({width: 50, height: 50});\n.  await watchDog;\n.  await browser.close();\n})();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To pass arguments from Node.js to the predicate of ",(0,r.jsx)(n.code,{children:"page.waitForFunction"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const selector = '.foo';\nawait frame.waitForFunction(\n  selector => !!document.querySelector(selector),\n  {}, // empty options object\n  selector\n);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,n,t)=>{var r=t(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,i={},p=null,l=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:p,ref:l,props:i,_owner:s.current}}n.Fragment=i,n.jsx=p,n.jsxs=p},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);