"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const o={sidebar_label:"ElementHandle.scrollIntoView"},i="ElementHandle.scrollIntoView() method",p={unversionedId:"api/puppeteer.elementhandle.scrollintoview",id:"version-21.4.1/api/puppeteer.elementhandle.scrollintoview",title:"ElementHandle.scrollIntoView() method",description:"Scrolls the element into view using either the automation protocol client or by calling element.scrollIntoView.",source:"@site/versioned_docs/version-21.4.1/api/puppeteer.elementhandle.scrollintoview.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.scrollintoview",permalink:"/api/puppeteer.elementhandle.scrollintoview",draft:!1,tags:[],version:"21.4.1",frontMatter:{sidebar_label:"ElementHandle.scrollIntoView"},sidebar:"api",previous:{title:"ElementHandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot"},next:{title:"ElementHandle.select",permalink:"/api/puppeteer.elementhandle.select"}},c={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],u={toc:s};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",l({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",l({},{id:"elementhandlescrollintoview-method"}),"ElementHandle.scrollIntoView() method"),(0,r.kt)("p",null,"Scrolls the element into view using either the automation protocol client or by calling element.scrollIntoView."),(0,r.kt)("h4",l({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  scrollIntoView(this: ElementHandle<Element>): Promise<void>;\n}\n")),(0,r.kt)("h2",l({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"this"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("a",l({parentName:"td"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Element",">"),(0,r.kt)("td",l({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0}}]);