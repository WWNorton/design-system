(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return m}));var i=t(2),a=t(6),o=(t(0),t(103)),s={title:"Motion"},r={unversionedId:"motion",id:"motion",isDocsHomePage:!1,title:"Motion",description:"This page is incomplete and may see significant changes.",source:"@site/docs/motion.md",permalink:"/design-system/docs/motion",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/motion.md",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1598033281,sidebar:"docs",previous:{title:"Color",permalink:"/design-system/docs/color"},next:{title:"Typography",permalink:"/design-system/docs/typography"}},d=[{value:"Reduced motion",id:"reduced-motion",children:[]},{value:"Debugging motion",id:"debugging-motion",children:[]}],c={rightToc:d};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Work in progress")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This page is incomplete and may see significant changes.\nPlease ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wwnorton/design-system/issues"}),"submit feedback on GitHub"),"\nif you would like to contribute."))),Object(o.b)("p",null,"The Norton design system has fully implemented the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://material.io/design/motion"}),"Material Design's motion system"),"\nand it is highly recommended that you reference Material's guidance when designing\nfor motion. All motion tokens and utilities are available in the ",Object(o.b)("inlineCode",{parentName:"p"},"@wwnds/core")," library."),Object(o.b)("h2",{id:"reduced-motion"},"Reduced motion"),Object(o.b)("p",null,"To ensure that ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"}),"prefers-reduced-motion"),"\nis always followed, it is highly recommend that you use the ",Object(o.b)("inlineCode",{parentName:"p"},"transition")," Sass\nfunction in ",Object(o.b)("inlineCode",{parentName:"p"},"@wwnds/core")," to set your transitions.\nThis will multiply the provided duration by the ",Object(o.b)("inlineCode",{parentName:"p"},"duration-scalar")," token, which\nis automatically set to ",Object(o.b)("inlineCode",{parentName:"p"},"0")," when the user prefers reduced motion."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core' as nds;\n\n.my-sidebar {\n    transition: nds.transition(transform, var(--nds-duration-close));\n}\n\n.my-sidebar.open {\n    transition: nds.transition(transform, var(--nds-duration-open));\n}\n")),Object(o.b)("h2",{id:"debugging-motion"},"Debugging motion"),Object(o.b)("p",null,"During development, it can be useful to slow down durations and easings to ensure\nso that you can see the animations in greater detail.\nThe design system provides a special ",Object(o.b)("inlineCode",{parentName:"p"},"duration-scalar")," token to help with this.\nTo modify it, simply open your dev tools, click on the ",Object(o.b)("inlineCode",{parentName:"p"},"<html>")," element, and\nchange the value of the ",Object(o.b)("inlineCode",{parentName:"p"},"--nds-duration-scalar")," property to any number.\nSince all durations are multiplied by this token, all motion will automatically\nscale along with it."))}m.isMDXComponent=!0}}]);