"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15785],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,h=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(h,p(p({ref:r},l),{},{components:t})):n.createElement(h,p({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27964:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={sidebar_label:"HTTPResponse.headers"},s="HTTPResponse.headers() method",i={unversionedId:"api/puppeteer.httpresponse.headers",id:"version-21.4.1/api/puppeteer.httpresponse.headers",title:"HTTPResponse.headers() method",description:"An object with HTTP headers associated with the response. All header names are lower-case.",source:"@site/versioned_docs/version-21.4.1/api/puppeteer.httpresponse.headers.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.headers",permalink:"/api/puppeteer.httpresponse.headers",draft:!1,tags:[],version:"21.4.1",frontMatter:{sidebar_label:"HTTPResponse.headers"},sidebar:"api",previous:{title:"HTTPResponse.fromServiceWorker",permalink:"/api/puppeteer.httpresponse.fromserviceworker"},next:{title:"HTTPResponse.json",permalink:"/api/puppeteer.httpresponse.json"}},c={},l=[{value:"Signature:",id:"signature",level:4}],u={toc:l};function d(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"httpresponseheaders-method"}),"HTTPResponse.headers() method"),(0,n.kt)("p",null,"An object with HTTP headers associated with the response. All header names are lower-case."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class HTTPResponse {\n  headers(): Record<string, string>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Record","<","string, string",">"))}d.isMDXComponent=!0}}]);