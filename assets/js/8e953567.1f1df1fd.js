/*! For license information please see 8e953567.1f1df1fd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72179],{60021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=n(85893),s=n(11151);const i={},o="FAQ",a={id:"faq",title:"FAQ",description:"Q: Who maintains Puppeteer?",source:"@site/versioned_docs/version-21.5.2/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,unlisted:!1,tags:[],version:"21.5.2",frontMatter:{},sidebar:"docs",previous:{title:"Contributing",permalink:"/contributing"}},p={},h=[{value:"Q: Who maintains Puppeteer?",id:"q-who-maintains-puppeteer",level:2},{value:"Q: What is the status of cross-browser support?",id:"q-what-is-the-status-of-cross-browser-support",level:2},{value:"Q: What are Puppeteer\u2019s goals and principles?",id:"q-what-are-puppeteers-goals-and-principles",level:2},{value:"Q: Is Puppeteer replacing Selenium/WebDriver?",id:"q-is-puppeteer-replacing-seleniumwebdriver",level:2},{value:"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?",id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",level:2},{value:"Q: Which Chrome version does Puppeteer use?",id:"q-which-chrome-version-does-puppeteer-use",level:2},{value:"Q: Which Firefox version does Puppeteer use?",id:"q-which-firefox-version-does-puppeteer-use",level:2},{value:"Q: What\u2019s considered a \u201cNavigation\u201d?",id:"q-whats-considered-a-navigation",level:4},{value:"Q: What\u2019s the difference between a \u201ctrusted&quot; and &quot;untrusted&quot; input event?",id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",level:4},{value:"Q: What features does Puppeteer not support?",id:"q-what-features-does-puppeteer-not-support",level:4},{value:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?",id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",level:4},{value:"Q: I have more questions! Where do I ask?",id:"q-i-have-more-questions-where-do-i-ask",level:4}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(t.h2,{id:"q-who-maintains-puppeteer",children:"Q: Who maintains Puppeteer?"}),"\n",(0,r.jsxs)(t.p,{children:["The Chrome DevTools team maintains the library, but we'd love your help and\nexpertise on the project! See our\n",(0,r.jsx)(t.a,{href:"https://pptr.dev/contributing",children:"contributing guide"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"q-what-is-the-status-of-cross-browser-support",children:"Q: What is the status of cross-browser support?"}),"\n",(0,r.jsx)(t.p,{children:"Official Firefox support is currently experimental. The ongoing collaboration\nwith Mozilla aims to support common end-to-end testing use cases, for which\ndevelopers expect cross-browser coverage. The Puppeteer team needs input from\nusers to stabilize Firefox support and to bring missing APIs to our attention."}),"\n",(0,r.jsxs)(t.p,{children:["From Puppeteer v2.1.0 onwards you can specify\n",(0,r.jsx)(t.a,{href:"./api/puppeteer.puppeteernode.launch",children:(0,r.jsx)(t.code,{children:"puppeteer.launch({product: 'firefox'})"})}),"\nto run your Puppeteer scripts in Firefox Nightly, without any additional custom\npatches. While\n",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/puppeteer-firefox",children:"an older experiment"})," required\na patched version of Firefox,\n",(0,r.jsx)(t.a,{href:"https://wiki.mozilla.org/Remote",children:"the current approach"})," works with \u201cstock\u201d\nFirefox."]}),"\n",(0,r.jsx)(t.p,{children:"We will continue to collaborate with other browser vendors to bring Puppeteer\nsupport to browsers such as Safari. This effort includes exploration of a\nstandard for executing cross-browser commands (instead of relying on the\nnon-standard DevTools Protocol used by Chrome)."}),"\n",(0,r.jsx)(t.h2,{id:"q-what-are-puppeteers-goals-and-principles",children:"Q: What are Puppeteer\u2019s goals and principles?"}),"\n",(0,r.jsx)(t.p,{children:"The goals of the project are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Provide a slim, canonical library that highlights the capabilities of the\n",(0,r.jsx)(t.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol"})," and\n",(0,r.jsx)(t.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Provide a reference implementation for similar testing libraries. Eventually,\nthese other frameworks could adopt Puppeteer as their foundational layer."}),"\n",(0,r.jsx)(t.li,{children:"Grow the adoption of headless/automated browser testing."}),"\n",(0,r.jsx)(t.li,{children:"Help dogfood new DevTools Protocol features...and catch bugs!"}),"\n",(0,r.jsx)(t.li,{children:"Learn more about the pain points of automated browser testing and help fill\nthose gaps."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["We adapt\n",(0,r.jsx)(t.a,{href:"https://www.chromium.org/developers/core-principles",children:"Chromium principles"})," to\nhelp us drive product decisions:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Speed"}),": Puppeteer has almost zero performance overhead over an automated\npage."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Security"}),": Puppeteer operates off-process with respect to Chromium, making\nit safe to automate potentially malicious pages."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Stability"}),": Puppeteer should not be flaky and should not leak memory."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Simplicity"}),": Puppeteer provides a high-level API that\u2019s easy to use,\nunderstand, and debug."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"q-is-puppeteer-replacing-seleniumwebdriver",children:"Q: Is Puppeteer replacing Selenium/WebDriver?"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"No"}),". Both projects are valuable for very different reasons:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Selenium/WebDriver focuses on cross-browser automation; its value proposition\nis a single standard API that works across all major browsers."}),"\n",(0,r.jsx)(t.li,{children:"Puppeteer focuses on Chromium; its value proposition is richer functionality\nand higher reliability."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["That said, you ",(0,r.jsx)(t.strong,{children:"can"})," use Puppeteer to run tests against Chromium, e.g. using\nthe community-driven\n",(0,r.jsx)(t.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"jest-puppeteer"}),". While this\nprobably shouldn\u2019t be your only testing solution, it does have a few good points\ncompared to WebDriver:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Puppeteer requires zero setup and comes bundled with the Chromium version it\nworks best with, making it\n",(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/#getting-started",children:"very easy to start with"}),".\nAt the end of the day, it\u2019s better to have a few tests running chromium-only,\nthan no tests at all."]}),"\n",(0,r.jsx)(t.li,{children:"Puppeteer has event-driven architecture, which removes a lot of potential\nflakiness. There\u2019s no need for evil \u201csleep(1000)\u201d calls in puppeteer scripts."}),"\n",(0,r.jsx)(t.li,{children:"Puppeteer runs headless by default, which makes it fast to run. Puppeteer\nv1.5.0 also exposes browser contexts, making it possible to efficiently\nparallelize test execution."}),"\n",(0,r.jsx)(t.li,{children:"Puppeteer shines when it comes to debugging: flip the \u201cheadless\u201d bit to false,\nadd \u201cslowMo\u201d, and you\u2019ll see what the browser is doing. You can even open\nChrome DevTools to inspect the test environment."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",children:"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?"}),"\n",(0,r.jsxs)(t.p,{children:["We see Puppeteer as an ",(0,r.jsx)(t.strong,{children:"indivisible entity"})," with Chromium. Each version of\nPuppeteer bundles a specific version of Chromium \u2013 ",(0,r.jsx)(t.strong,{children:"the only"})," version it is\nguaranteed to work with."]}),"\n",(0,r.jsx)(t.p,{children:"This is not an artificial constraint: A lot of work on Puppeteer is actually\ntaking place in the Chromium repository. Here\u2019s a typical story:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A Puppeteer bug is reported:\n",(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/issues/2709",children:"https://github.com/puppeteer/puppeteer/issues/2709"})]}),"\n",(0,r.jsxs)(t.li,{children:["It turned out this is an issue with the DevTools protocol, so we\u2019re fixing it\nin Chromium: ",(0,r.jsx)(t.a,{href:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154",children:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154"})]}),"\n",(0,r.jsxs)(t.li,{children:["Once the upstream fix is landed, we roll updated Chromium into Puppeteer:\n",(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/pull/2769",children:"https://github.com/puppeteer/puppeteer/pull/2769"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"q-which-chrome-version-does-puppeteer-use",children:"Q: Which Chrome version does Puppeteer use?"}),"\n",(0,r.jsxs)(t.p,{children:["Look for the ",(0,r.jsx)(t.code,{children:"chrome"})," entry in\n",(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"q-which-firefox-version-does-puppeteer-use",children:"Q: Which Firefox version does Puppeteer use?"}),"\n",(0,r.jsxs)(t.p,{children:["Since Firefox support is experimental, Puppeteer downloads the latest\n",(0,r.jsx)(t.a,{href:"https://wiki.mozilla.org/Nightly",children:"Firefox Nightly"})," when the ",(0,r.jsx)(t.code,{children:"PUPPETEER_PRODUCT"}),"\nenvironment variable is set to ",(0,r.jsx)(t.code,{children:"firefox"}),". That's also why the value of ",(0,r.jsx)(t.code,{children:"firefox"}),"\nin\n",(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"\nis ",(0,r.jsx)(t.code,{children:"latest"})," -- Puppeteer isn't tied to a particular Firefox version."]}),"\n",(0,r.jsx)(t.p,{children:"To fetch Firefox Nightly as part of Puppeteer installation:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"PUPPETEER_PRODUCT=firefox npm i puppeteer\n"})}),"\n",(0,r.jsx)(t.h4,{id:"q-whats-considered-a-navigation",children:"Q: What\u2019s considered a \u201cNavigation\u201d?"}),"\n",(0,r.jsxs)(t.p,{children:["From Puppeteer\u2019s standpoint, ",(0,r.jsx)(t.strong,{children:"\u201cnavigation\u201d is anything that changes a page\u2019s\nURL"}),". Aside from regular navigation where the browser hits the network to fetch\na new document from the web server, this includes\n",(0,r.jsx)(t.a,{href:"https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid",children:"anchor navigations"}),"\nand ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"}),"\nusage."]}),"\n",(0,r.jsxs)(t.p,{children:["With this definition of \u201cnavigation,\u201d ",(0,r.jsx)(t.strong,{children:"Puppeteer works seamlessly with\nsingle-page applications."})]}),"\n",(0,r.jsx)(t.h4,{id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",children:'Q: What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?'}),"\n",(0,r.jsx)(t.p,{children:"In browsers, input events could be divided into two big groups: trusted vs.\nuntrusted."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Trusted events"}),": events generated by users interacting with the page, e.g.\nusing a mouse or keyboard."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Untrusted event"}),": events generated by Web APIs, e.g. ",(0,r.jsx)(t.code,{children:"document.createEvent"}),"\nor ",(0,r.jsx)(t.code,{children:"element.click()"})," methods."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Websites can distinguish between these two groups:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["using an\n",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted",children:(0,r.jsx)(t.code,{children:"Event.isTrusted"})}),"\nevent flag"]}),"\n",(0,r.jsxs)(t.li,{children:["sniffing for accompanying events. For example, every trusted ",(0,r.jsx)(t.code,{children:"'click'"})," event\nis preceded by ",(0,r.jsx)(t.code,{children:"'mousedown'"})," and ",(0,r.jsx)(t.code,{children:"'mouseup'"})," events."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For automation purposes it\u2019s important to generate trusted events. ",(0,r.jsx)(t.strong,{children:"All input\nevents generated with Puppeteer are trusted and fire proper accompanying\nevents."})," If, for some reason, one needs an untrusted event, it\u2019s always\npossible to hop into a page context with ",(0,r.jsx)(t.code,{children:"page.evaluate"})," and generate a fake\nevent:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n"})}),"\n",(0,r.jsx)(t.h4,{id:"q-what-features-does-puppeteer-not-support",children:"Q: What features does Puppeteer not support?"}),"\n",(0,r.jsxs)(t.p,{children:["You may find that Puppeteer does not behave as expected when controlling pages\nthat incorporate audio and video. (For example,\n",(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/issues/291",children:"video playback/screenshots is likely to fail"}),".)\nThere are two reasons for this:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Puppeteer is bundled with ",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," \u2014 not the regular Chrome \u2014 and so by default, it\ninherits all of\n",(0,r.jsx)(t.a,{href:"https://www.chromium.org/audio-video",children:"Chromium's media-related limitations"}),".\nThis means that Puppeteer does not support licensed formats such as AAC or\nH.264. (However, it is possible to force Puppeteer to use a\nseparately-installed version Chrome instead of Chromium via the\n",(0,r.jsxs)(t.a,{href:"./api/puppeteer.launchoptions",children:[(0,r.jsx)(t.code,{children:"executablePath"})," option to ",(0,r.jsx)(t.code,{children:"puppeteer.launch"})]}),".\nYou should only use this configuration if you need an official release of\nChrome that supports these media formats.)"]}),"\n",(0,r.jsxs)(t.li,{children:["Since Puppeteer (in all configurations) controls a desktop version of\nChromium/Chrome, features that are only supported by the mobile version of\nChrome are not supported. This means that Puppeteer\n",(0,r.jsx)(t.a,{href:"https://caniuse.com/#feat=http-live-streaming",children:"does not support HTTP Live Streaming (HLS)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",children:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?"}),"\n",(0,r.jsxs)(t.p,{children:["We have a\n",(0,r.jsx)(t.a,{href:"https://pptr.dev/troubleshooting",children:"troubleshooting"}),"\nguide for various operating systems that lists the required dependencies."]}),"\n",(0,r.jsx)(t.h4,{id:"q-i-have-more-questions-where-do-i-ask",children:"Q: I have more questions! Where do I ask?"}),"\n",(0,r.jsx)(t.p,{children:"There are many ways to get help on Puppeteer:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/issues",children:"bugtracker"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://stackoverflow.com/questions/tagged/puppeteer",children:"Stack Overflow"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Make sure to search these channels before posting your question."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var r,i={},h=null,l=null;for(r in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!p.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:h,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=h,t.jsxs=h},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);