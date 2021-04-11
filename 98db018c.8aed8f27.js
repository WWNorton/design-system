(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(5),a=n(1),o=(n(0),n(155)),i=n(27),c=n(158),l={title:"Spinner",description:"A spinner lets the user know that something is processing or progressing."},s={unversionedId:"components/spinner",id:"components/spinner",isDocsHomePage:!1,title:"Spinner",description:"A spinner lets the user know that something is processing or progressing.",source:"@site/docs/components/spinner.mdx",slug:"/components/spinner",permalink:"/design-system/docs/components/spinner",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/spinner.mdx",version:"current",lastUpdatedBy:"apatil",lastUpdatedAt:1618106805,sidebar:"components",previous:{title:"Radio Group",permalink:"/design-system/docs/components/radio-group"},next:{title:"Switch",permalink:"/design-system/docs/components/switch"}},u=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"React API",id:"react-api",children:[{value:"Spinner",id:"spinner",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A spinner lets the user know that something is processing or progressing.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Progress circle")," - the circle spins to convey that something is processing and fills clockwise to convey progress toward completion."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Label")," - a description of what is processing or progressing.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Spinners should appear on the screen when there is a processing delay of between 1-5 seconds."),Object(o.b)(i.CalloutSuccess,{title:"Do",mdxType:"CalloutSuccess"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Do use a spinner to communicate to the user that the screen is still loading but will be complete in a short time (5 seconds or less)."),Object(o.b)("li",{parentName:"ul"},"Do use only 1 spinner on the screen at a time."),Object(o.b)("li",{parentName:"ul"},"If an application is loading, then the spinner will display and the user will be blocked from interacting with the application until it is loaded."),Object(o.b)("li",{parentName:"ul"},"For buttons with spinners, the button should always be disabled until the action completes and the spinner no longer displays on the button."))),Object(o.b)(i.CalloutError,{title:"Don't",mdxType:"CalloutError"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Don\u2019t use a spinner for an immediate process (less than 1 second); nothing should display in that situation."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t use a spinner if most of the application can load very quickly except for some text or data elements; use skeleton text loading indicator."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t use a spinner for a long process. If a process is expected to take more than 5 seconds to complete use a progress bar loading indicator."))),Object(o.b)(i.Callout,{title:"Indeterminate vs. Determinate",mdxType:"Callout"},Object(o.b)("p",null,'The spinner is said to be in "indeterminate" mode if it does not have a set value.\nThis conveys to users that something is processing without conveying how close to being done it is.'),Object(o.b)("div",{className:"callout__example"},Object(o.b)(i.Spinner,{label:"Loading...",mdxType:"Spinner"})),Object(o.b)("p",null,'When a spinner does have a set value, it is said to be in "determinate" mode.\nThis gives the user a better sense of how close it is to beng complete.'),Object(o.b)("div",{className:"callout__example"},Object(o.b)(i.Spinner,{label:"Downloading...",progress:.35,mdxType:"Spinner"}))),Object(o.b)("h2",{id:"react-api"},"React API"),Object(o.b)("p",null,"We expose one component for the spinner API, the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Spinner"},"Spinner"),"."),Object(o.b)(i.Callout,{title:"Related concepts",mdxType:"Callout"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"HTML element: ",Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"},"<","progress",">")),Object(o.b)("li",{parentName:"ul"},"DOM interface: ",Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement"},"HTMLProgressElement")),Object(o.b)("li",{parentName:"ul"},"ARIA role: ",Object(o.b)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#progressbar"},"progressbar")))),Object(o.b)("h3",{id:"spinner"},"Spinner"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Spinner")," component extends the ",Object(o.b)("inlineCode",{parentName:"p"},"React.HTMLAttributes<HTMLDivElement>")," interface."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Spinner } from '@wwnds/react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'/* set progress to a value between 0 and 1 to make determinate */\n<Spinner label="Loading..." progress={undefined} />\n')),Object(o.b)(c.a,{from:i.Spinner,mdxType:"PropsTable"}))}d.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},157:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return He}));var r=n(5),a=n(0),o=n.n(a),i=n(27),c=n(157),l=n.n(c),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},m=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,g=/mailto:/i,b=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,v=/^ {2,}\n/,k=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,O=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,j=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,w=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,x=/^(?:\n *)*\n/,S=/\r\n?/g,T=/^\[\^([^\]]+)](:.*)\n/,E=/^\[\^([^\]]+)]/,N=/\f/g,C=/^\s*?\[(x|\s)\]/,P=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,D=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,I=/&([a-z]+);/g,L=/^<!--.*?-->/,$=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,_=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,M=/^\{.*\}$/,U=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,z=/^<([^ >]+@[^ >]+)>/,R=/^<([^ >]+:\/[^ >]+)>/,B=/ *\n+$/,H=/(?:^|\n)( *)$/,q=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,W=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,Z=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,X=/^\[([^\]]*)\] ?\[([^\]]*)\]/,J=/(\[|\])/g,V=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,K=/\t/g,Q=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,re=/^ *-+: *$/,ae=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ie=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,pe=/\\([^0-9A-Z\s])/gi,de=/^( *)((?:[*+-]|\d+\.)) +/,me=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,fe=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,ge=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,be=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=[h,j,O,P,A,D,L,_,me,fe,F,W];function ye(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return re.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function ke(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(ee,"")),o[o.length-1].push(e))})),o}function Oe(e,t,n){n.inline=!0;var r=ke(e[1],t,n),a=function(e){return e.replace(Y,"").split("|").map(ve)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ke(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function je(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function we(e){function t(r,a){for(var o=[],i="";r;)for(var c=0;c<n.length;){var l=n[c],s=e[l],u=s.match(r,a,i);if(u){var p=u[0];r=r.substring(p.length);var d=s.parse(u,t,a);null==d.type&&(d.type=l),o.push(d),i=p;break}c++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(S,"\n").replace(N,"").replace(K,"    ")}(e),n)}}function xe(e){return function(t,n){return n.inline?e.exec(t):null}}function Se(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Te(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ee(e){return function(t){return e.exec(t)}}function Ne(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Ce(e){return e.replace(pe,"$1")}function Pe(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ae(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function De(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Ie(e,t,n){return{content:Pe(t,e[1],n)}}function Le(){return{}}function $e(){return null}function _e(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Me(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Ue(e,t){var n=Me(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:Me(t,e+".component",e):e}function ze(e,t){function n(e,n){for(var r=Me(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),c=2;c<a;c++)o[c-2]=arguments[c];return i.apply(void 0,[Ue(e,t.overrides),s({},n,r,{className:_e(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===V.test(e));var a=K(N(r?e:e.replace(se,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function a(e){var t=e.match(f);return t?t.reduce((function(e,t,n){var a=t.indexOf("=");if(-1!==a){var i=function(e){return-1!==e.indexOf("-")&&null===e.match($)&&(e=e.replace(q,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),c=l()(t.slice(a+1).trim()),s=p[i]||i,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ne(t):(t.match(M)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,c);(D.test(u)||_.test(u))&&(e[s]=o.a.cloneElement(r(u.trim()),{key:n}))}else"style"!==t&&(e[p[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ye,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},d,t.namedCodesToUnicode):d;var i=t.createElement||o.a.createElement;var c=[],u={},S={blockQuote:{match:Te(h),order:2,parse:function(e,t,n){return{content:t(e[0].replace(y,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Ee(v),order:2,parse:Le,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Te(k),order:2,parse:Le,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Te(j),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Te(O),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Se(w),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Te(T),order:1,parse:function(e){return c.push({footnote:e[2],identifier:e[1]}),{}},react:$e},footnoteReference:{match:xe(E),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Ne(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:xe(C),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Te(P),order:2,parse:function(e,n,r){return{content:Pe(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Te(A),order:1,parse:function(e,t,n){return{content:Pe(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Ee(L),order:2,parse:function(){return{}},react:$e},image:{match:Se(be),order:2,parse:function(e){return{alt:e[1],target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ne(e.target)})}},link:{match:xe(ge),order:4,parse:function(e,t,n){return{content:Ae(t,e[1],n),target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Ne(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:xe(R),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:xe(U),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:xe(z),order:1,parse:function(e){var t=e[1],n=e[1];return g.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=H.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,fe.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(b,"\n").match(me),c=!1;return{items:i.map((function(e,r){var a=de.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(de,""),s=r===i.length-1,u=-1!==l.indexOf("\n\n")||s&&c;c=u;var p,d=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,p=l.replace(B,"\n\n")):(n.inline=!0,p=l.replace(B,""));var f=t(p,n);return n.inline=d,n._list=m,f})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Te(x),order:4,parse:Le,react:function(){return"\n"}},paragraph:{match:Te(W),order:4,parse:Ie,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:xe(Z),order:1,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:$e},refImage:{match:Se(G),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Ne(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:xe(X),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(J,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Ne(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Te(F),order:2,parse:Oe,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:je(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:je(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Q.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Ee(le),order:5,parse:function(e){return{content:e[0].replace(I,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Se(ae),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:Se(oe),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:Se(ce),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Se(ie),order:4,parse:Ie,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(S.htmlBlock={match:Ee(D),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],o=new RegExp("^"+r,"gm"),i=e[3].replace(o,""),c=function(e){return he.some((function(t){return t.test(e)}))}(i)?De:Pe,l=e[1].toLowerCase(),s=-1!==m.indexOf(l);return{attrs:a(e[2]),content:s?e[3]:c(t,i,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},S.htmlSelfClosing={match:Ee(_),order:2,parse:function(e){return{attrs:a(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var N=we(S),K=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],i=!1,c=0;c<n.length;c++){r.key=c;var l=t(n[c],r),s="string"==typeof l;s&&i?o[o.length-1]+=l:o.push(l),i=s}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(S)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return c.length&&Y.props.children.push(n("footer",{key:"footer"},c.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,K(N(e.footnote,{inline:!0})))})))),Y}function Re(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return o.a.cloneElement(ze(t,n),r)}var Be=function(e){var t=e.name,n=e.required,r=e.type,a=e.description;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),o.a.createElement("td",null,o.a.createElement(Re,null,a)),o.a.createElement("td",null,o.a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},He=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,i=n.props,c=Object.keys(i).map((function(e){var t=i[e];return o.a.createElement(Be,Object(r.a)({key:t.name},t))}));return o.a.createElement("table",{"aria-label":"Props for "+a},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Type"))),o.a.createElement("tbody",null,c))}}}]);