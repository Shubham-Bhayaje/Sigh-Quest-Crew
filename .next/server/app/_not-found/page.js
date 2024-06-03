(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5034:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>d}),r(7352),r(5866),r(5582);var n=r(3191),s=r(8716),a=r(7922),i=r.n(a),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5582)),"C:\\Next\\next\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found/page",x={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3643:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8943:(e,t,r)=>{Promise.resolve().then(r.bind(r,5618))},5618:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var n=r(326),s=r(7577),a=r(7316),i=r(434);r(6226);let o={type:"spring",mass:.5,damping:11.5,stiffness:100,restDelta:.001,restSpeed:.001},l=({setActive:e,active:t,item:r,children:s})=>(0,n.jsxs)("div",{onMouseEnter:()=>e(r),className:"relative ",children:[n.jsx(a.E.p,{transition:{duration:.3},className:"cursor-pointer text-black hover:opacity-[0.9] dark:text-white",children:r}),null!==t&&n.jsx(a.E.div,{initial:{opacity:0,scale:.85,y:10},animate:{opacity:1,scale:1,y:0},transition:o,children:t===r&&s&&n.jsx("div",{className:"absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4",children:n.jsx(a.E.div,{transition:o,layoutId:"active",className:"bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl",children:n.jsx(a.E.div,{layout:!0,className:"w-max h-full p-4",children:s})})})})]}),d=({setActive:e,children:t})=>n.jsx("nav",{onMouseLeave:()=>e(null),className:"relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 ",children:t}),c=({children:e,...t})=>n.jsx(i.default,{...t,className:"text-neutral-700 dark:text-neutral-200 hover:text-black ",children:e});var u=r(7524);let x=function({className:e}){let[t,r]=(0,s.useState)(null);return n.jsx("div",{className:(0,u.cn)("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-[1px] rounded-full",e),children:(0,n.jsxs)(d,{setActive:r,children:[n.jsx(i.default,{href:"/",children:n.jsx(l,{setActive:r,active:t,item:"Home"})}),n.jsx(l,{setActive:r,active:t,item:"About"}),n.jsx(l,{setActive:r,active:t,item:"Contact",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-4 text-sm",children:[n.jsx(c,{href:"/Instagram",className:"flex-row items-center justify-center",children:"Instagram"}),n.jsx(c,{href:"/Tweeter",children:"Tweeter"})]})}),n.jsx(l,{setActive:r,active:t,item:"Projects"}),n.jsx(l,{setActive:r,active:t,item:"Services",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-4 text-sm",children:[n.jsx(c,{href:"/Web Development",children:"Web Development"}),n.jsx(c,{href:"/Android Development",children:"Android Development"}),n.jsx(c,{href:"/Machine learning",children:"Machine learning"}),n.jsx(c,{href:"/Documentation Management",children:"Documentation Management"})]})})]})})}},7524:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var n=r(1135),s=r(1009);function a(...e){return(0,s.m6)((0,n.W)(e))}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return s},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return s},default:function(){return a}});let n=r(6399),s="next/dist/client/components/parallel-route-default.js";function a(){(0,n.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5582:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>u});var n=r(9510),s=r(5384),a=r.n(s);r(5023);var i=r(8570);let o=(0,i.createProxy)(String.raw`C:\Next\next\src\components\Navbar.tsx`),{__esModule:l,$$typeof:d}=o;o.default;let c=(0,i.createProxy)(String.raw`C:\Next\next\src\components\Navbar.tsx#default`),u={title:"Create Next App",description:"Generated by create next app"};function x({children:e}){return n.jsx("html",{lang:"en",className:"dark",children:(0,n.jsxs)("body",{className:a().className,children:[n.jsx("div",{className:"relative w-full flex items-center justify-center",children:n.jsx(c,{})}),e]})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,568],()=>r(5034));module.exports=n})();