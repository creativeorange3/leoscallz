_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),i=n("elyg"),o=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,i.resolveHref)(c,e.as):o||a}}),[c,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,j=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=a.Children.only(h),x=g&&"object"===typeof g&&g.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),O=r(y,2),N=O[0],w=O[1],E=a.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,a.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,w,b,t,n]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:s,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,d,p,v,m,j,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof b?b:n&&n.locale,L=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);_.href=L||(0,i.addBasePath)((0,i.addLocale)(p,k,n&&n.defaultLocale))}return a.default.cloneElement(g,_)};t.default=f},nsgl:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/email",function(){return n("otjm")}])},otjm:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("YFqc"),a=n.n(c);t.default=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"verification section-padding",children:Object(r.jsx)("div",{className:"container h-100",children:Object(r.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:Object(r.jsxs)("div",{className:"col-xl-5 col-md-6",children:[Object(r.jsxs)("div",{className:"mini-logo text-center my-4",children:[Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{src:"./images/logo.png",alt:""})})}),Object(r.jsx)("h4",{className:"card-title mt-5",children:"Verify your Email"})]}),Object(r.jsx)("div",{className:"auth-form card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)("form",{className:"identity-upload",children:Object(r.jsxs)("div",{className:"identity-content",children:[Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"ri-mail-check-line"})}),Object(r.jsxs)("p",{children:["We sent verification email to \xa0",Object(r.jsx)("strong",{className:"text-dark",children:"example@email.com"}),". Click the link inside to get started!"]}),Object(r.jsx)(a.a,{href:"/signup",children:Object(r.jsx)("a",{children:"Email didn't arrive?"})})]})})})})]})})})})})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var o=new Map}},[["nsgl",0,1,2]]]);