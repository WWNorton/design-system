(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(5),a=n(1),i=(n(0),n(155)),s={title:"Design Tokens"},r={unversionedId:"foundations/design-tokens",id:"foundations/design-tokens",isDocsHomePage:!1,title:"Design Tokens",description:"We capture all of our design elements as discrete entities called design tokens.",source:"@site/docs/foundations/design-tokens.mdx",slug:"/foundations/design-tokens",permalink:"/design-system/docs/foundations/design-tokens",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/foundations/design-tokens.mdx",version:"current",lastUpdatedBy:"apatil",lastUpdatedAt:1618106805,sidebar:"foundations",previous:{title:"Accessibility",permalink:"/design-system/docs/foundations/accessibility"},next:{title:"Color",permalink:"/design-system/docs/foundations/color"}},c=[{value:"Types of Design Tokens",id:"types-of-design-tokens",children:[{value:"System Tokens",id:"system-tokens",children:[]},{value:"Role Tokens",id:"role-tokens",children:[]},{value:"Component Tokens",id:"component-tokens",children:[]}]},{value:"Token Conventions",id:"token-conventions",children:[{value:"Base Tokens",id:"base-tokens",children:[]},{value:"T-Shirt Sizing",id:"t-shirt-sizing",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We capture all of our design elements as discrete entities called ",Object(i.b)("strong",{parentName:"p"},"design tokens"),"."),Object(i.b)("p",null,"Design tokens have a ",Object(i.b)("strong",{parentName:"p"},"static name")," and a ",Object(i.b)("strong",{parentName:"p"},"variable value"),", allowing you to theme the entire design of an application with design tokens alone.\nMost design tokens have a default value assigned, which effectively represents the default theme of the Norton Design System.\nBut since token values can be changed, you can simply reassign the value to begin creating a theme for a Norton Design System application."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prefix Note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In CSS, our design tokens start with ",Object(i.b)("inlineCode",{parentName:"p"},"--nds-"),", but that prefix is omitted in most places in our documentation."))),Object(i.b)("h2",{id:"types-of-design-tokens"},"Types of Design Tokens"),Object(i.b)("p",null,"The Norton Design System contains three types of design tokens: ",Object(i.b)("a",{parentName:"p",href:"#system-tokens"},Object(i.b)("strong",{parentName:"a"},"system")),", ",Object(i.b)("a",{parentName:"p",href:"#role-tokens"},Object(i.b)("strong",{parentName:"a"},"role")),", and ",Object(i.b)("a",{parentName:"p",href:"#component-tokens"},Object(i.b)("strong",{parentName:"a"},"component"))," tokens, which are used in conjunction to capture the entire design of an application."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Inheritance")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The three types of tokens use the following system of inheritance in the Norton Design System."),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Abstract: ",Object(i.b)("inlineCode",{parentName:"li"},"component token")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"role token")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"system token")),Object(i.b)("li",{parentName:"ul"},"Concrete: ",Object(i.b)("inlineCode",{parentName:"li"},"button-color")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"primary-color")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"teal-60"))),Object(i.b)("p",{parentName:"div"},"And in CSS as implemented by ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core"),":"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-css"},":root {\n    --nds-teal-60: #1a8082; /* system token */\n    --nds-primary-color: var(--nds-teal-60); /* role token */\n}\n\n.my-button {\n    --nds-button-color: var(--nds-primary-color); /* component token */\n\n    background-color: var(--nds-button-color); /* token usage */\n}\n")))),Object(i.b)("h3",{id:"system-tokens"},"System Tokens"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"system")," token is associated with one of our various subsystems, such as the color, motion, spacing, or typography systems."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"System tokens are ",Object(i.b)("em",{parentName:"li"},"immutable"),"\u2014","their values cannot be changed","\u2014","because they are intended to act as a value store rather than part of the theming system."),Object(i.b)("li",{parentName:"ul"},"System token names don't give hints as to how they should be used. This is because they are simply property values and could be used in a variety of ways."),Object(i.b)("li",{parentName:"ul"},"System tokens should rarely be used directly.")),Object(i.b)("h3",{id:"role-tokens"},"Role Tokens"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"role")," token has a semantic purpose in an application's design."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Role tokens are customizable and together constitute the primary way to theme a Norton Design System application."),Object(i.b)("li",{parentName:"ul"},"Role token names do give hints about how they should be used."),Object(i.b)("li",{parentName:"ul"},"Role tokens are the primary interface for theming and should therefore be used directly whenever possible.")),Object(i.b)("h3",{id:"component-tokens"},"Component Tokens"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"component")," token is scoped to a specific component."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Component tokens are customizable but changing their values may result in inconsistency across components."),Object(i.b)("li",{parentName:"ul"},"Component token names generally follow the pattern of ",Object(i.b)("inlineCode",{parentName:"li"},"{component}-{property}"),", where ",Object(i.b)("inlineCode",{parentName:"li"},"component")," is the name of the component and ",Object(i.b)("inlineCode",{parentName:"li"},"property")," captures the CSS property where the token is used.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Examples: ",Object(i.b)("inlineCode",{parentName:"li"},"button-border-width")," or ",Object(i.b)("inlineCode",{parentName:"li"},"tooltip-offset-y"),"."))),Object(i.b)("li",{parentName:"ul"},"Component tokens can and should be used directly when creating custom components based on a Norton Design System component.")),Object(i.b)("h2",{id:"token-conventions"},"Token Conventions"),Object(i.b)("p",null,"In addition to the system of inheritance that our design tokens use, we follow a few key conventions that help you to better understand how to use them in your application."),Object(i.b)("h3",{id:"base-tokens"},"Base Tokens"),Object(i.b)("p",null,"Base tokens always have the ",Object(i.b)("inlineCode",{parentName:"p"},"-base")," suffix, denoting that they are used as the default value for the corresponding property across the application.\nCustomizing these will have the most wide-ranging impact on the design language of your application."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: custom base border-radius"',title:'"Example:',custom:!0,base:!0,'border-radius"':!0},"@use '@wwnds/core' as nds with (\n    $radius-base: var(--nds-radius-lg),\n);\n\n// buttons, text fields, and other inline components will all have more rounded corners\n")),Object(i.b)("h3",{id:"t-shirt-sizing"},"T-Shirt Sizing"),Object(i.b)("p",null,"For tokens that fall on a linear scale such as font size, we sometimes use t-shirt sizing suffixes of ",Object(i.b)("inlineCode",{parentName:"p"},"-xs"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-sm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-md"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"-lg")," to capture a normalized subset of values.\nCustomizing these will allow you to change the sense of scale across your application."))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,u=b["".concat(s,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(u,r(r({ref:t},l),{},{components:n})):a.a.createElement(u,r({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);