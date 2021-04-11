(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(5),a=n(1),o=(n(0),n(155)),c=n(27),i=n(158),l={title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay."},s={unversionedId:"components/modal",id:"components/modal",isDocsHomePage:!1,title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay.",source:"@site/docs/components/modal.mdx",slug:"/components/modal",permalink:"/design-system/docs/components/modal",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/modal.mdx",version:"current",lastUpdatedBy:"apatil",lastUpdatedAt:1618106805,sidebar:"components",previous:{title:"Link",permalink:"/design-system/docs/components/link"},next:{title:"Popover",permalink:"/design-system/docs/components/popover"}},u=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"React API",id:"react-api",children:[{value:"Modal",id:"modal",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A modal presents important information or simple tasks to the user in an overlay.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Modal container")," - the modal container provides a boundary for the contents of the modal."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Backdrop overlay")," - an overlay that prevents the user from interacting with the page's main content."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Title")," (",Object(o.b)("em",{parentName:"li"},"recommended"),") - the name of the modal lets the user know what to expect from it and functions as a header for the body of the modal."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Body")," - the main content of the modal presents important information to the user or asks them to perform simple tasks before exiting the modal."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Close button")," (",Object(o.b)("em",{parentName:"li"},"optional"),") - a button that will always close the modal.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This should always be included when no other controls exist inside the modal."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Action buttons")," (",Object(o.b)("em",{parentName:"li"},"optional"),") - one or more actions that will result in the dismissal of the modal.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,'Use modals to present important information or simple tasks to the user, disabling all access to the main content while the modal is active.\nModals are sometimes called "modal dialogs" because they create a dialog between the application and the user in a different modality from the main content.'),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dos")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Do use a modal to confirm irreversible actions, such as deleting content."),Object(o.b)("li",{parentName:"ul"},"Do use a modal to interrupt the user when it will help them accomplish their tasks."),Object(o.b)("li",{parentName:"ul"},'Do be careful about ambiguous action buttons, such as "Yes" or "No".')))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Don't overuse modals. They should be used sparingly and thoughtfully."),Object(o.b)("li",{parentName:"ul"},"Don't write long titles for modals. They should be clear and concise.")))),Object(o.b)("h2",{id:"react-api"},"React API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Modal } from '@wwnds/react';\n")),Object(o.b)("h3",{id:"modal"},"Modal"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function ModalWithButton() {\n    const [isOpen, setIsOpen] = React.useState(false);\n    const open = () => setIsOpen(true);\n    const close = () => setIsOpen(false);\n    return (\n        <>\n            <Button variant="solid" onClick={open}>Open the modal</Button>\n            <Modal\n                title="Confirm the prompt"\n                isOpen={isOpen}\n                onRequestClose={close}\n                actions={[\n                    <Button variant="outline" color="base" onClick={close}>\n                        Also confirm\n                    </Button>,\n                    <Button variant="solid" onClick={close}>\n                        Confirm\n                    </Button>,\n                ]}\n            >\n                <p>\n                    This is a demo modal.\n                    Real modals should have useful information here.\n                </p>\n            </Modal>\n        </>\n    );\n}\n')),Object(o.b)(i.a,{from:c.Modal,mdxType:"PropsTable"}))}m.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},157:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return qe}));var r=n(5),a=n(0),o=n.n(a),c=n(27),i=n(157),l=n.n(i),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},m={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},d=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,h=/mailto:/i,b=/\n{2,}$/,y=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,v=/^ {2,}\n/,k=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,O=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,j=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,w=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,N=/^(?:\n *)*\n/,x=/\r\n?/g,E=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,C=/\f/g,T=/^\s*?\[(x|\s)\]/,P=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,M=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,B=/&([a-z]+);/g,D=/^<!--.*?-->/,I=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,$=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,z=/^\{.*\}$/,U=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,_=/^<([^ >]+@[^ >]+)>/,L=/^<([^ >]+:\/[^ >]+)>/,R=/ *\n+$/,q=/(?:^|\n)( *)$/,F=/-([a-z])?/gi,Z=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,H=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,X=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,J=/^\[([^\]]*)\] ?\[([^\]]*)\]/,V=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,K=/\t/g,Q=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,re=/^ *-+: *$/,ae=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ce=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ie=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,pe=/\\([^0-9A-Z\s])/gi,me=/^( *)((?:[*+-]|\d+\.)) +/,de=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,fe=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,he=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,be=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ye=[y,j,O,P,A,M,D,$,de,fe,Z,H];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return re.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function ke(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(ee,"")),o[o.length-1].push(e))})),o}function Oe(e,t,n){n.inline=!0;var r=ke(e[1],t,n),a=function(e){return e.replace(Y,"").split("|").map(ve)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ke(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function je(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function we(e){function t(r,a){for(var o=[],c="";r;)for(var i=0;i<n.length;){var l=n[i],s=e[l],u=s.match(r,a,c);if(u){var p=u[0];r=r.substring(p.length);var m=s.parse(u,t,a);null==m.type&&(m.type=l),o.push(m),c=p;break}i++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(x,"\n").replace(C,"").replace(K,"    ")}(e),n)}}function Ne(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Ee(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function Ce(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Te(e){return e.replace(pe,"$1")}function Pe(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ae(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Me(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Be(e,t,n){return{content:Pe(t,e[1],n)}}function De(){return{}}function Ie(){return null}function $e(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function ze(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Ue(e,t){var n=ze(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:ze(t,e+".component",e):e}function _e(e,t){function n(e,n){for(var r=ze(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return c.apply(void 0,[Ue(e,t.overrides),s({},n,r,{className:$e(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===W.test(e));var a=K(C(r?e:e.replace(se,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function a(e){var t=e.match(f);return t?t.reduce((function(e,t,n){var a=t.indexOf("=");if(-1!==a){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(I)&&(e=e.replace(F,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),i=l()(t.slice(a+1).trim()),s=p[c]||c,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ce(t):(t.match(z)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,i);(M.test(u)||$.test(u))&&(e[s]=o.a.cloneElement(r(u.trim()),{key:n}))}else"style"!==t&&(e[p[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ge,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},m,t.namedCodesToUnicode):m;var c=t.createElement||o.a.createElement;var i=[],u={},x={blockQuote:{match:Ee(y),order:2,parse:function(e,t,n){return{content:t(e[0].replace(g,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Se(v),order:2,parse:De,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Ee(k),order:2,parse:De,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Ee(j),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Ee(O),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(w),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Ee(E),order:1,parse:function(e){return i.push({footnote:e[2],identifier:e[1]}),{}},react:Ie},footnoteReference:{match:Ne(S),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Ne(T),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Ee(P),order:2,parse:function(e,n,r){return{content:Pe(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Ee(A),order:1,parse:function(e,t,n){return{content:Pe(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Se(D),order:2,parse:function(){return{}},react:Ie},image:{match:xe(be),order:2,parse:function(e){return{alt:e[1],target:Te(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ce(e.target)})}},link:{match:Ne(he),order:4,parse:function(e,t,n){return{content:Ae(t,e[1],n),target:Te(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Ne(L),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Ne(U),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Ne(_),order:1,parse:function(e){var t=e[1],n=e[1];return h.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=q.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,fe.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(b,"\n").match(de),i=!1;return{items:c.map((function(e,r){var a=me.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(me,""),s=r===c.length-1,u=-1!==l.indexOf("\n\n")||s&&i;i=u;var p,m=n.inline,d=n._list;n._list=!0,u?(n.inline=!1,p=l.replace(R,"\n\n")):(n.inline=!0,p=l.replace(R,""));var f=t(p,n);return n.inline=m,n._list=d,f})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Ee(N),order:4,parse:De,react:function(){return"\n"}},paragraph:{match:Ee(H),order:4,parse:Be,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Ne(X),order:1,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:Ie},refImage:{match:xe(G),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Ce(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:Ne(J),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(V,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Ce(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Ee(Z),order:2,parse:Oe,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:je(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:je(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Q.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Se(le),order:5,parse:function(e){return{content:e[0].replace(B,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:xe(ae),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:xe(oe),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:xe(ie),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ce),order:4,parse:Be,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(x.htmlBlock={match:Se(M),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],o=new RegExp("^"+r,"gm"),c=e[3].replace(o,""),i=function(e){return ye.some((function(t){return t.test(e)}))}(c)?Me:Pe,l=e[1].toLowerCase(),s=-1!==d.indexOf(l);return{attrs:a(e[2]),content:s?e[3]:i(t,c,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},x.htmlSelfClosing={match:Se($),order:2,parse:function(e){return{attrs:a(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var C=we(x),K=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],c=!1,i=0;i<n.length;i++){r.key=i;var l=t(n[i],r),s="string"==typeof l;s&&c?o[o.length-1]+=l:o.push(l),c=s}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(x)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return i.length&&Y.props.children.push(n("footer",{key:"footer"},i.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,K(C(e.footnote,{inline:!0})))})))),Y}function Le(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return o.a.cloneElement(_e(t,n),r)}var Re=function(e){var t=e.name,n=e.required,r=e.type,a=e.description;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(c.FieldInfo,{indicator:n?"required":void 0,label:t})),o.a.createElement("td",null,o.a.createElement(Le,null,a)),o.a.createElement("td",null,o.a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},qe=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,c=n.props,i=Object.keys(c).map((function(e){var t=c[e];return o.a.createElement(Re,Object(r.a)({key:t.name},t))}));return o.a.createElement("table",{"aria-label":"Props for "+a},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Type"))),o.a.createElement("tbody",null,i))}}}]);