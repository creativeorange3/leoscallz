_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{"0XID":function(e,s,a){"use strict";var c=a("nKUr"),i=a("KYPV"),l=a("UGp+"),t={email:"",password:""},n=l.b().shape({email:l.c().email("Email is invalid").required("Email is required"),password:l.c().min(6,"Password must be at least 6 characters").required("Password is required")});s.a=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.d,{initialValues:t,validationSchema:n,onSubmit:function(e){alert("SUCCESS!! :-)\n\n"+JSON.stringify(e,null,4))},children:function(e){var s=e.errors,a=(e.status,e.touched);return Object(c.jsxs)(i.c,{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-12 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Email"}),Object(c.jsx)(i.b,{name:"email",type:"text",className:"form-control"+(s.email&&a.email?" is-invalid":"")}),Object(c.jsx)(i.a,{name:"email",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-12 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Password"}),Object(c.jsx)(i.b,{name:"password",type:"text",className:"form-control"+(s.password&&a.password?" is-invalid":"")}),Object(c.jsx)(i.a,{name:"password",component:"div",className:"invalid-feedback"})]})]}),Object(c.jsx)("div",{className:"mt-3",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Save"})})]})}})})}},"8edq":function(e,s,a){"use strict";var c=a("nKUr"),i=a("YFqc"),l=a.n(i),t=a("20a2");s.a=function(){var e=Object(t.useRouter)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("ul",{className:"settings-menu",children:[Object(c.jsx)("li",{className:"/settings"==e.pathname?"active":"",children:Object(c.jsx)(l.a,{href:"/settings",children:Object(c.jsx)("a",{children:"Profile"})})}),Object(c.jsx)("li",{className:"/application"==e.pathname?"active":"",children:Object(c.jsx)(l.a,{href:"/application",children:Object(c.jsx)("a",{children:"Application"})})}),Object(c.jsx)("li",{className:"/security"==e.pathname?"active":"",children:Object(c.jsx)(l.a,{href:"/security",children:Object(c.jsx)("a",{children:"Security"})})}),Object(c.jsx)("li",{className:"/log"==e.pathname?"active":"",children:Object(c.jsx)(l.a,{href:"/log",children:Object(c.jsx)("a",{children:"Log"})})}),Object(c.jsx)("li",{className:"/payment"==e.pathname?"active":"",children:Object(c.jsx)(l.a,{href:"/payment",children:Object(c.jsx)("a",{children:"Payment Method"})})}),Object(c.jsx)("li",{className:"/apis"==e.pathname?"active":"",children:Object(c.jsx)(l.a,{href:"/apis",children:Object(c.jsx)("a",{children:"API"})})})]})})}},beIE:function(e,s,a){"use strict";var c=a("nKUr"),i=a("q1tI"),l=a("YFqc"),t=a.n(l),n=(a("FCqg"),a("Vvt1")),r=a.n(n)()((function(){return a.e(9).then(a.bind(null,"2l2w"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["2l2w"]},modules:["../../components/elements/ThemeSwitch"]}});var d=function(){var e=Object(i.useState)(!1);return e[0],e[1],Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"header landing",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-xl-12",children:Object(c.jsx)("div",{className:"navigation",children:Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",style:{display:"flex",justifyContent:"space-between"},children:[Object(c.jsx)("div",{className:"brand-logo",children:Object(c.jsx)(t.a,{href:"/",children:Object(c.jsx)("a",{children:"leos shit"})})}),Object(c.jsx)("div",{className:"d-flex align-items-center",children:Object(c.jsx)(r,{})})]})})})})})})})},j=a("F3op");var m=function(e){var s=e.pageTitle,a=e.pageTitleSub,i=e.parent,l=e.child;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"page-title",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row align-items-center justify-content-between",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsxs)("div",{className:"page-title-content",children:[Object(c.jsx)("h3",{children:s}),Object(c.jsx)("p",{className:"mb-2",children:a})]})}),Object(c.jsx)("div",{className:"col-auto",children:Object(c.jsxs)("div",{className:"breadcrumbs",children:[Object(c.jsxs)("a",{href:"#",children:[i," "]}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"ri-arrow-right-s-line"})}),Object(c.jsx)("a",{href:"#",children:l})]})})]})})})})};a("RqBM"),s.a=function(e){var s=e.headTitle,a=e.children,l=e.pageTitle,t=e.pageTitleSub,n=e.pageClass,r=e.parent,b=e.child,o=Object(i.useState)(),x=(o[0],o[1]);return Object(i.useEffect)((function(){x(window.screen.height)}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.a,{headTitle:s}),Object(c.jsxs)("div",{id:"main-wrapper",className:n,children:[Object(c.jsx)(d,{}),l&&Object(c.jsx)(m,{pageTitle:l,pageTitleSub:t,parent:r,child:b}),a]})]})}},fk9s:function(e,s,a){"use strict";var c=a("nKUr"),i=a("KYPV"),l=a("UGp+"),t={fullName:"",email:"",address:"",city:"",country:"",postal:""},n=l.b().shape({fullName:l.c().required("Full is required"),email:l.c().email("Email is invalid").required("Email is required"),address:l.c().required("Present Address is required"),city:l.c().required("City is required"),postal:l.c().required("Post code is required"),country:l.c().required("country is required")});s.a=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.d,{initialValues:t,validationSchema:n,onSubmit:function(e){alert("SUCCESS!! :-)\n\n"+JSON.stringify(e,null,4))},children:function(e){var s=e.errors,a=(e.status,e.touched);return Object(c.jsxs)(i.c,{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Full Name"}),Object(c.jsx)(i.b,{name:"fullName",type:"text",className:"form-control"+(s.fullName&&a.fullName?" is-invalid":"")}),Object(c.jsx)(i.a,{name:"fullName",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Email"}),Object(c.jsx)(i.b,{name:"email",type:"text",className:"form-control"+(s.email&&a.email?" is-invalid":"")}),Object(c.jsx)(i.a,{name:"email",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Address"}),Object(c.jsx)(i.b,{name:"address",type:"text",className:"form-control"+(s.address&&a.address?" is-invalid":"")}),Object(c.jsx)(i.a,{name:"address",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"City"}),Object(c.jsx)(i.b,{name:"city",type:"text",className:"form-control"+(s.city&&a.city?" is-invalid":"")}),Object(c.jsx)(i.a,{name:"city",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Post Code"}),Object(c.jsx)(i.b,{name:"postal",type:"text",className:"form-control"+(s.postal&&a.postal?" is-invalid":"")}),Object(c.jsx)(i.a,{name:"postal",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Country"}),Object(c.jsxs)(i.b,{name:"country",as:"select",className:"form-control"+(s.country&&a.country?" is-invalid":""),children:[Object(c.jsx)("option",{value:"Bangladesh",children:"Bangladesh"}),Object(c.jsx)("option",{value:"United States",children:"United States"}),Object(c.jsx)("option",{value:"United Kingdom",children:"United Kingdom"})]}),Object(c.jsx)(i.a,{name:"country",component:"div",className:"invalid-feedback"})]})]}),Object(c.jsx)("div",{className:"mt-3",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Save"})})]})}})})}},tJ1D:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return a("z/YS")}])},"z/YS":function(e,s,a){"use strict";a.r(s);var c=a("nKUr"),i=(a("0XID"),a("beIE")),l=(a("fk9s"),a("KYPV")),t=a("UGp+"),n={photo:"",itemName:"",description:"",royalties:"",size:"",price:""},r=t.b().shape({photo:t.c().required("Image required"),itemName:t.c().required("Item Name is required"),description:t.c().required("aaDescriptiona is required"),royalties:t.c().required("Royalties is required"),size:t.c().required("Size is required"),price:t.c().required("Price is required")});var d=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.d,{initialValues:n,validationSchema:r,onSubmit:function(e){alert("SUCCESS!! :-)\n\n"+JSON.stringify(e,null,4))},children:function(e){var s=e.errors,a=(e.status,e.touched);return Object(c.jsxs)(l.c,{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-xxl-12",children:Object(c.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(c.jsx)("img",{className:"me-3 rounded-circle me-0 me-sm-3",src:"images/items/1.jpg",width:"55",height:"55",alt:""}),Object(c.jsx)("div",{className:"media-body",children:Object(c.jsx)("h5",{className:"mb-0",children:"Max file size is 20mb"})})]})}),Object(c.jsxs)("div",{className:"col-12 mb-3",children:[Object(c.jsx)(l.b,{name:"photo",type:"file",className:s.photo&&a.photo?" is-invalid":""}),Object(c.jsx)(l.a,{name:"photo",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-12 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Item Name"}),Object(c.jsx)(l.b,{name:"itemName",type:"text",className:"form-control"+(s.itemName&&a.itemName?" is-invalid":"")}),Object(c.jsx)(l.a,{name:"itemName",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-12 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Description"}),Object(c.jsx)(l.b,{name:"description",type:"text",className:"form-control"+(s.description&&a.description?" is-invalid":"")}),Object(c.jsx)(l.a,{name:"description",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-12 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Royalties"}),Object(c.jsx)(l.b,{name:"royalties",type:"text",className:"form-control"+(s.royalties&&a.royalties?" is-invalid":"")}),Object(c.jsx)(l.a,{name:"royalties",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Size"}),Object(c.jsx)(l.b,{name:"size",type:"text",className:"form-control"+(s.size&&a.size?" is-invalid":"")}),Object(c.jsx)(l.a,{name:"size",component:"div",className:"invalid-feedback"})]}),Object(c.jsxs)("div",{className:"col-6 mb-3",children:[Object(c.jsx)("label",{className:"form-label",children:"Price"}),Object(c.jsx)(l.b,{name:"price",type:"text",className:"form-control"+(s.price&&a.price?" is-invalid":"")}),Object(c.jsx)(l.a,{name:"price",component:"div",className:"invalid-feedback"})]})]}),Object(c.jsx)("div",{className:"mt-3",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary mr-2 w-100",children:"Submit"})})]})}})})};a("8edq");s.default=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.a,{headTitle:"Profile",pageTitle:"Profile",pageClass:"admin",parent:"Settings",child:"Profile",children:Object(c.jsx)("div",{className:"upload-item section-padding",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row justify-content-center",children:[Object(c.jsxs)("div",{className:"col-xxl-6 col-xl-6 col-lg-6",children:[Object(c.jsx)("h4",{className:"card-title mb-3",children:"Upload Item"}),Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)(d,{})})})]}),Object(c.jsxs)("div",{className:"col-xxl-4 col-xl-4 col-lg-6",children:[Object(c.jsx)("h4",{className:"card-title mb-3",children:"Preview"}),Object(c.jsx)("div",{className:"card items",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("div",{className:"items-img position-relative",children:[Object(c.jsx)("img",{src:"/images/items/5.jpg",className:"img-fluid rounded mb-3",alt:""}),Object(c.jsx)("img",{src:"/images/avatar/5.jpg",className:"creator",width:"50",alt:""})]}),Object(c.jsx)("h4",{className:"card-title",children:"Liguid Wave"}),Object(c.jsx)("p",{}),Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsxs)("div",{className:"text-start",children:[Object(c.jsx)("p",{className:"mb-2",children:"Creator"}),Object(c.jsx)("h5",{className:"text-muted",children:"John Abrahmam"})]}),Object(c.jsxs)("div",{className:"text-end",children:[Object(c.jsx)("p",{className:"mb-2",children:"Price"}),Object(c.jsx)("h5",{className:"text-muted",children:"0.55 ETH"})]})]})]})})]})]})})})})})}}},[["tJ1D",0,1,5,2,3,4,6,7]]]);