/*! For license information please see eac66d2e.274c68d4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return f}));var a=n(157),r=n(1),i=(n(0),n(158)),o=n(176),s={title:"Foundations",slug:"/foundations"},c={unversionedId:"foundations/index",id:"foundations/index",isDocsHomePage:!1,title:"Foundations",description:"Foundations are guidelines for using elements of visual design and interaction.",source:"@site/docs/foundations/index.mdx",slug:"/foundations",permalink:"/design-system/docs/foundations",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/foundations/index.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618111803,formattedLastUpdatedAt:"4/11/2021",sidebar:"foundations",next:{title:"Accessibility",permalink:"/design-system/docs/foundations/accessibility"}},u=[],l={toc:u};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Foundations are guidelines for using elements of visual design and interaction.")),Object(i.b)("p",null,"Our foundations provide guidance on using visual elements like color and typography, as well as framing for broad design concepts such as design tokens and accessibility."),Object(i.b)(o.c,{basePath:"/docs/foundations/",columns:2,mdxType:"Features"},Object(i.b)(o.a,{title:"Accessibility",slug:"accessibility",mdxType:"FeatureCard"},"Designing for accessibility ensures that interfaces and content are meaningful and effective for everyone."),Object(i.b)(o.a,{title:"Design Tokens",slug:"design-tokens",mdxType:"FeatureCard"},"Reusable elements of design are captured as design tokens to ensure consistency without sacrificing flexibility."),Object(i.b)(o.a,{title:"Color",slug:"color",mdxType:"FeatureCard"},"A color system defines visual hierarchy and identity through a consistent experience of color."),Object(i.b)(o.a,{title:"Typography",slug:"typography",mdxType:"FeatureCard"},"Effective typography adds clarity and purpose to the flow of your content."),Object(i.b)(o.a,{title:"Spacing",slug:"spacing",mdxType:"FeatureCard"},"Consistent spacing within and between visual elements balances a design and makes it easier to scan."),Object(i.b)(o.a,{title:"Motion",slug:"motion",mdxType:"FeatureCard"},"Careful use of motion can highlight important information and relationships in an expressive way.")))}f.isMDXComponent=!0},157:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,m=f["".concat(o,".").concat(p)]||f[p]||d[p]||i;return n?r.a.createElement(m,s(s({ref:t},u),{},{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},164:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return b}));var a=n(157),r=n(0),i=n.n(r),o=n(164),s=n.n(o),c=n(26),u=n(36),l=n(35),f=n(177),d=n.n(f),p=function(e){var t,n=e.title,r=e.media,o=e.children,f=e.icon,p=e.href,m=e.basePath,b=void 0===m?"/":m,y=e.slug,g=void 0===y?"":y,v=e.tag,_=void 0===v?"div":v,h=e.columns,O=void 0===h?3:h,w=e.linkArrow,j=void 0!==w&&w,E=i.a.useState(null),x=E[0],k=E[1],P=Object(u.a)(p||g?b+g:void 0),T=i.a.useMemo((function(){return"string"==typeof f?{variant:f}:"object"==typeof f?{icon:f}:{}}),[f]),C=i.a.useCallback((function(e){var t=e.children;return P?i.a.createElement(l.a,{to:P,className:d.a.feature__link},t):i.a.createElement("span",{className:d.a.feature__link},t)}),[P]);return i.a.createElement(_,{className:s()(d.a.feature,d.a["col-"+O],(t={},t[d.a["feature--linked"]]=Boolean(P),t)),onClick:function(e){if(P){var t=window.getSelection();x&&t&&t.toString()&&t.containsNode(x,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=P)}},ref:k},r,i.a.createElement("div",{className:d.a.feature__header},f&&i.a.createElement("span",{className:d.a.feature__icon},i.a.createElement(c.Icon,Object(a.a)({},T,{size:32}))),i.a.createElement(C,null,n,P&&j&&i.a.createElement(c.Icon,{variant:"arrow-right",className:d.a.feature__arrow}))),i.a.createElement("div",{className:d.a.feature__body},o))},m=function(e){var t=e.src,n=e.alt,a=void 0===n?"":n,r=Object(u.a)(t);return r?i.a.createElement("div",{className:d.a.feature__media},i.a.createElement("img",{className:d.a.feature__img,src:r,alt:a})):i.a.createElement("div",{className:d.a.feature__tk},i.a.createElement("abbr",{title:"Media to come"},"TK"))},b=function(e){var t=e.basePath,n=void 0===t?"/":t,r=e.columns,o=void 0===r?3:r,s=e.children;return i.a.createElement("ul",{className:d.a.features},i.a.Children.map(s,(function(e){if(i.a.isValidElement(e)){var t=e.props;return i.a.createElement(p,Object(a.a)({columns:o},t,{basePath:n,tag:"li"}))}return null})))}},177:function(e,t,n){e.exports={features:"features_9HSF",feature__arrow:"feature__arrow_376y",feature:"feature_30-4","feature--linked":"feature--linked_1VBY",feature__header:"feature__header_1PNa",feature__icon:"feature__icon_3PKn",feature__media:"feature__media_hUAS",feature__img:"feature__img_302D",feature__tk:"feature__tk_XUze",feature__link:"feature__link_12rG","col-2":"col-2_34O8","col-3":"col-3_3y-E"}}}]);