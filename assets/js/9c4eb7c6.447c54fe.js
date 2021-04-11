(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(157),r=n(1),o=(n(0),n(158)),i={title:"Layout Grid",description:"The layout grid allows us to create responsive page layouts at every screen size."},s={unversionedId:"components/layout-grid",id:"components/layout-grid",isDocsHomePage:!1,title:"Layout Grid",description:"The layout grid allows us to create responsive page layouts at every screen size.",source:"@site/docs/components/layout-grid.mdx",slug:"/components/layout-grid",permalink:"/design-system/docs/components/layout-grid",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/layout-grid.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618111803,formattedLastUpdatedAt:"4/11/2021"},c=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The layout grid allows us to create responsive page layouts at every screen size.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("p",null,"A Layout Grid includes:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Columns"),Object(o.b)("li",{parentName:"ol"},"Gutters"),Object(o.b)("li",{parentName:"ol"},"Margins"),Object(o.b)("li",{parentName:"ol"},"Breakpoint Ranges")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Columns set the widths of page regions and align content to consistent guides. All columns are of equal width."),Object(o.b)("li",{parentName:"ul"},"Gutters are the spaces between columns that help separate content. All gutters are of equal width."),Object(o.b)("li",{parentName:"ul"},"Margins are the spaces between the content and the left/right edges of the screen. Left and right margins should be the same width."),Object(o.b)("li",{parentName:"ul"},"Margins can be adjusted to ensure appropriate line length at each breakpoint range.\nGutters and margins can be different widths."),Object(o.b)("li",{parentName:"ul"},"A Breakpoint Range is a range of screen sizes that have the same layout. At each breakpoint, the layout may adjust to better fit the screen size."),Object(o.b)("li",{parentName:"ul"},"The number of columns and the width of the margins and gutters is determined by each breakpoint range.")),Object(o.b)("p",null,"::: tip Dos"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Do align major content areas or regions of the page to the layout grid."),Object(o.b)("li",{parentName:"ul"},"Do design layouts for the smallest screen sizes first."),Object(o.b)("li",{parentName:"ul"},"Do set a maximum width for the layout grid or content areas within the grid, to avoid long line lengths.\n:::")),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Don\u2019t set margins so large that there isn\u2019t enough room for content."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t include fixed-width sidebars in the layout grid."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t visually reorder columns independently from their position in the markup.")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"\n## Types\n\n### Fluid Grid\n\n- By default, use a fluid grid so that content areas flexibly scale to fit any screen width.\n- Column widths are set as percentages of the overall screen width.\n- Margins and gutters have a fixed width at each breakpoint range.\n\n### Fixed Grid\n\n- Use a fixed grid if it is important for the width of the content area to be static within a breakpoint range.\n- Gutters and column widths have a fixed width at each breakpoint range, so the content only changes at each breakpoint.\n- Margins scale fluidly as the overall screen width changes.\n\n")))))}u.isMDXComponent=!0},157:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);