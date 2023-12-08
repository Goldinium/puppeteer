/*! For license information please see 4235d649.21ea923f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91368],{37773:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(85893),r=t(11151);const i={sidebar_label:"Accessibility.snapshot"},o="Accessibility.snapshot() method",a={id:"api/puppeteer.accessibility.snapshot",title:"Accessibility.snapshot() method",description:"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.",source:"@site/../docs/api/puppeteer.accessibility.snapshot.md",sourceDirName:"api",slug:"/api/puppeteer.accessibility.snapshot",permalink:"/next/api/puppeteer.accessibility.snapshot",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Accessibility.snapshot"},sidebar:"api",previous:{title:"Accessibility",permalink:"/next/api/puppeteer.accessibility"},next:{title:"Keyboard",permalink:"/next/api/puppeteer.keyboard"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"accessibilitysnapshot-method",children:"Accessibility.snapshot() method"}),"\n",(0,n.jsx)(s.p,{children:"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."}),"\n",(0,n.jsx)(s.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"class Accessibility {\n  snapshot(options?: SnapshotOptions): Promise<SerializedAXNode | null>;\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"options"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/next/api/puppeteer.snapshotoptions",children:"SnapshotOptions"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.em,{children:"(Optional)"})})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(s.p,{children:["Promise<",(0,n.jsx)(s.a,{href:"/next/api/puppeteer.serializedaxnode",children:"SerializedAXNode"})," | null>"]}),"\n",(0,n.jsx)(s.p,{children:"An AXNode object representing the snapshot."}),"\n",(0,n.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE"})," The Chrome accessibility tree contains nodes that go unused on most platforms and by most screen readers. Puppeteer will discard them as well for an easier to process tree, unless ",(0,n.jsx)(s.code,{children:"interestingOnly"})," is set to ",(0,n.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(s.p,{children:"An example of dumping the entire accessibility tree:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n"})}),"\n",(0,n.jsx)(s.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(s.p,{children:"An example of logging the focused node's name:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused) return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,s,t)=>{var n=t(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var n,i={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)o.call(s,n)&&!c.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:a.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},85893:(e,s,t)=>{e.exports=t(75251)},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(67294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);