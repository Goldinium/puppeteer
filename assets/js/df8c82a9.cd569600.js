"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89440],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,y=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(y,p(p({ref:r},u),{},{components:t})):n.createElement(y,p({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54579:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>u});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={sidebar_label:"ErrorCode"},c="ErrorCode type",i={unversionedId:"api/puppeteer.errorcode",id:"api/puppeteer.errorcode",title:"ErrorCode type",description:"Signature:",source:"@site/../docs/api/puppeteer.errorcode.md",sourceDirName:"api",slug:"/api/puppeteer.errorcode",permalink:"/next/api/puppeteer.errorcode",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ErrorCode"},sidebar:"api",previous:{title:"ElementScreenshotOptions",permalink:"/next/api/puppeteer.elementscreenshotoptions"},next:{title:"errors",permalink:"/next/api/puppeteer.errors"}},l={},u=[{value:"Signature:",id:"signature",level:4}],s={toc:u};function d(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"errorcode-type"}),"ErrorCode type"),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export type ErrorCode =\n  | 'aborted'\n  | 'accessdenied'\n  | 'addressunreachable'\n  | 'blockedbyclient'\n  | 'blockedbyresponse'\n  | 'connectionaborted'\n  | 'connectionclosed'\n  | 'connectionfailed'\n  | 'connectionrefused'\n  | 'connectionreset'\n  | 'internetdisconnected'\n  | 'namenotresolved'\n  | 'timedout'\n  | 'failed';\n")))}d.isMDXComponent=!0}}]);