"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={sidebar_label:"ElementHandle.uploadFile"},o="ElementHandle.uploadFile() method",i={unversionedId:"api/puppeteer.elementhandle.uploadfile",id:"api/puppeteer.elementhandle.uploadfile",title:"ElementHandle.uploadFile() method",description:"Sets the value of an input element to the given file paths.",source:"@site/../docs/api/puppeteer.elementhandle.uploadfile.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.uploadfile",permalink:"/next/api/puppeteer.elementhandle.uploadfile",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ElementHandle.uploadFile"},sidebar:"api",previous:{title:"ElementHandle.type",permalink:"/next/api/puppeteer.elementhandle.type"},next:{title:"ElementHandle.waitForSelector",permalink:"/next/api/puppeteer.elementhandle.waitforselector"}},u={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:s};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"elementhandleuploadfile-method"}),"ElementHandle.uploadFile() method"),(0,r.kt)("p",null,"Sets the value of an ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," to the given file paths."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  uploadFile(\n    this: ElementHandle<HTMLInputElement>,\n    ...paths: string[]\n  ): Promise<void>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"this"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.elementhandle"}),"ElementHandle"),"<","HTMLInputElement",">"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"paths"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string","[","]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"This will not validate whether the file paths exists. Also, if a path is relative, then it is resolved against the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". For locals script connecting to remote chrome environments, paths must be absolute."))}c.isMDXComponent=!0}}]);