_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"8edq":function(e,c,a){"use strict";var i=a("nKUr"),t=a("YFqc"),n=a.n(t),s=a("20a2");c.a=function(){var e=Object(s.useRouter)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("ul",{className:"settings-menu",children:[Object(i.jsx)("li",{className:"/settings"==e.pathname?"active":"",children:Object(i.jsx)(n.a,{href:"/settings",children:Object(i.jsx)("a",{children:"Profile"})})}),Object(i.jsx)("li",{className:"/application"==e.pathname?"active":"",children:Object(i.jsx)(n.a,{href:"/application",children:Object(i.jsx)("a",{children:"Application"})})}),Object(i.jsx)("li",{className:"/security"==e.pathname?"active":"",children:Object(i.jsx)(n.a,{href:"/security",children:Object(i.jsx)("a",{children:"Security"})})}),Object(i.jsx)("li",{className:"/log"==e.pathname?"active":"",children:Object(i.jsx)(n.a,{href:"/log",children:Object(i.jsx)("a",{children:"Log"})})}),Object(i.jsx)("li",{className:"/payment"==e.pathname?"active":"",children:Object(i.jsx)(n.a,{href:"/payment",children:Object(i.jsx)("a",{children:"Payment Method"})})}),Object(i.jsx)("li",{className:"/apis"==e.pathname?"active":"",children:Object(i.jsx)(n.a,{href:"/apis",children:Object(i.jsx)("a",{children:"API"})})})]})})}},ObJs:function(e,c,a){"use strict";a.r(c);var i=a("nKUr"),t=a("KYPV"),n=a("UGp+"),s={language:"",currency:"",theme:"",timeZone:""},l=n.b().shape({language:n.c().required("Language is required"),currency:n.c().required("Currency is required"),theme:n.c().required("Theme is required"),timeZone:n.c().required("Timezone is required")});var r=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(t.d,{initialValues:s,validationSchema:l,onSubmit:function(e){alert("SUCCESS!! :-)\n\n"+JSON.stringify(e,null,4))},children:function(e){var c=e.errors,a=(e.status,e.touched);return Object(i.jsxs)(t.c,{children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(i.jsx)("label",{className:"form-label",children:"Language Default"}),Object(i.jsxs)(t.b,{name:"language",as:"select",className:"form-control"+(c.language&&a.language?" is-invalid":""),children:[Object(i.jsx)("option",{value:"Bangladesh",children:"Bangladesh"}),Object(i.jsx)("option",{value:"United States",children:"United States"}),Object(i.jsx)("option",{value:"United Kingdom",children:"United Kingdom"})]}),Object(i.jsx)(t.a,{name:"language",component:"div",className:"invalid-feedback"})]}),Object(i.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(i.jsx)("label",{className:"form-label",children:"Currency"}),Object(i.jsxs)(t.b,{name:"currency",as:"select",className:"form-control"+(c.currency&&a.currency?" is-invalid":""),children:[Object(i.jsx)("option",{value:"",children:"USD"}),Object(i.jsx)("option",{value:"",children:"Euro"}),Object(i.jsx)("option",{value:"",children:"BDT"})]}),Object(i.jsx)(t.a,{name:"currency",component:"div",className:"invalid-feedback"})]}),Object(i.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(i.jsx)("label",{className:"form-label",children:"Theme"}),Object(i.jsxs)(t.b,{name:"theme",as:"select",className:"form-control"+(c.theme&&a.theme?" is-invalid":""),children:[Object(i.jsx)("option",{value:"",children:"Light"}),Object(i.jsx)("option",{value:"",children:"Dark"}),Object(i.jsx)("option",{value:"",children:"Blue"})]}),Object(i.jsx)(t.a,{name:"theme",component:"div",className:"invalid-feedback"})]}),Object(i.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(i.jsx)("label",{className:"form-label",children:"Time Zone"}),Object(i.jsxs)(t.b,{name:"timeZone",as:"select",className:"form-control"+(c.timeZone&&a.timeZone?" is-invalid":""),children:[Object(i.jsx)("option",{children:"(GMT-12:00) International Date Line West"}),Object(i.jsx)("option",{children:"(GMT-11:00) Midway Island, Samoa"}),Object(i.jsx)("option",{children:"(GMT-10:00) Hawaii"}),Object(i.jsx)("option",{children:"(GMT-09:00) Alaska"}),Object(i.jsx)("option",{children:"(GMT-08:00) Pacific Time (US & Canada)"})]}),Object(i.jsx)(t.a,{name:"timeZone",component:"div",className:"invalid-feedback"})]})]}),Object(i.jsx)("div",{className:"mt-3",children:Object(i.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Save"})})]})}})})},j=a("XuK9"),d=a("8edq");c.default=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(j.a,{headTitle:"Application",pageTitle:"Application",pageClass:"admin",parent:"Settings",child:"Application",children:[Object(i.jsx)(d.a,{}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-xxl-12",children:[Object(i.jsx)("h4",{className:"card-title mb-3",children:"Preperences"}),Object(i.jsx)("div",{className:"card",children:Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)(r,{})})})]})})]})})}},XuK9:function(e,c,a){"use strict";var i=a("nKUr"),t=a("q1tI"),n=a("FCqg"),s=a("F3op");var l=function(e){var c=e.pageTitle,a=e.pageTitleSub,t=e.parent,n=e.child;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"page-title",children:Object(i.jsxs)("div",{className:"row align-items-center justify-content-between",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsxs)("div",{className:"page-title-content",children:[Object(i.jsx)("h3",{children:c}),Object(i.jsx)("p",{className:"mb-2",children:a})]})}),Object(i.jsx)("div",{className:"col-auto",children:Object(i.jsxs)("div",{className:"breadcrumbs",children:[Object(i.jsxs)("a",{href:"#",children:[t," "]}),Object(i.jsx)("span",{children:Object(i.jsx)("i",{className:"ri-arrow-right-s-line"})}),Object(i.jsx)("a",{href:"#",children:n})]})})]})})})},r=a("RqBM");c.a=function(e){var c=e.headTitle,a=e.children,j=e.pageTitle,d=e.pageTitleSub,b=e.pageClass,o=e.parent,h=e.child,m=Object(t.useState)(),x=m[0],O=m[1];return Object(t.useEffect)((function(){O(window.screen.height)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.a,{headTitle:c}),Object(i.jsxs)("div",{id:"main-wrapper",className:b,children:[Object(i.jsx)(n.a,{}),Object(i.jsx)(r.a,{}),Object(i.jsx)("div",{className:"content-body",style:{minHeight:x-122},children:Object(i.jsxs)("div",{className:"container",children:[j&&Object(i.jsx)(l,{pageTitle:j,pageTitleSub:d,parent:o,child:h}),a]})})]})]})}},udbt:function(e,c,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/application",function(){return a("ObJs")}])}},[["udbt",0,1,5,2,3,4,6,7]]]);