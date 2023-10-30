"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23187],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={sidebar_label:"Mouse"},p="Mouse class",i={unversionedId:"api/puppeteer.mouse",id:"version-21.4.1/api/puppeteer.mouse",title:"Mouse class",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-21.4.1/api/puppeteer.mouse.md",sourceDirName:"api",slug:"/api/puppeteer.mouse",permalink:"/api/puppeteer.mouse",draft:!1,tags:[],version:"21.4.1",frontMatter:{sidebar_label:"Mouse"},sidebar:"api",previous:{title:"Keyboard.up",permalink:"/api/puppeteer.keyboard.up"},next:{title:"Mouse.click",permalink:"/api/puppeteer.mouse.click"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}],d={toc:u};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"mouse-class"}),"Mouse class"),(0,r.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,r.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class Mouse\n")),(0,r.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ","[",(0,r.kt)("inlineCode",{parentName:"p"},"page.mouse"),"]","(","#","pagemouse)."),(0,r.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mouse")," class."),(0,r.kt)("h2",n({},{id:"example-1"}),"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The mouse events trigger synthetic ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseEvent"),"s. This means that it does not fully replicate the functionality of what a normal user would be able to do with their mouse."),(0,r.kt)("p",null,"For example, dragging and selecting text is not possible using ",(0,r.kt)("inlineCode",{parentName:"p"},"page.mouse"),". Instead, you can use the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection"}),"`","DocumentOrShadowRoot.getSelection()","`")," functionality implemented in the platform."),(0,r.kt)("h2",n({},{id:"example-2"}),"Example 2"),(0,r.kt)("p",null,"For example, if you want to select all content between nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.evaluate(\n  (from, to) => {\n    const selection = from.getRootNode().getSelection();\n    const range = document.createRange();\n    range.setStartBefore(from);\n    range.setEndAfter(to);\n    selection.removeAllRanges();\n    selection.addRange(range);\n  },\n  fromJSHandle,\n  toJSHandle\n);\n")),(0,r.kt)("p",null,"If you then would want to copy-paste your selection, you can use the clipboard api:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"// The clipboard api does not allow you to copy, unless the tab is focused.\nawait page.bringToFront();\nawait page.evaluate(() => {\n  // Copy the selected content to the clipboard\n  document.execCommand('copy');\n  // Obtain the content of the clipboard as a string\n  return navigator.clipboard.readText();\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If you want access to the clipboard API, you have to give it permission to do so:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await browser\n  .defaultBrowserContext()\n  .overridePermissions('<your origin>', ['clipboard-read', 'clipboard-write']);\n")),(0,r.kt)("h2",n({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.click"}),"click(x, y, options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Shortcut for ",(0,r.kt)("code",null,"mouse.move"),", ",(0,r.kt)("code",null,"mouse.down")," and ",(0,r.kt)("code",null,"mouse.up"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.down"}),"down(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Presses the mouse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.drag"}),"drag(start, target)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,r.kt)("code",null,"drag")," event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.draganddrop"}),"dragAndDrop(start, target, options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Performs a drag, dragenter, dragover, and drop in sequence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.dragenter"}),"dragEnter(target, data)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,r.kt)("code",null,"dragenter")," event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.dragover"}),"dragOver(target, data)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,r.kt)("code",null,"dragover")," event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.drop"}),"drop(target, data)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Performs a dragenter, dragover, and drop in sequence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.move"}),"move(x, y, options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Moves the mouse to the given coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.reset"}),"reset()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Resets the mouse to the default state: No buttons pressed; position at (0,0).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.up"}),"up(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Releases the mouse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.mouse.wheel"}),"wheel(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,r.kt)("code",null,"mousewheel")," event.")))))}m.isMDXComponent=!0}}]);