(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{133:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(3),r=t(0),c=t.n(r),l=function(e){return c.a.createElement("svg",Object(n.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),c.a.createElement("title",null,"W. W. Norton & Company"),c.a.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},144:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return _})),t.d(a,"c",(function(){return h}));var n=t(3),r=t(0),c=t.n(r),l=t(127),i=t.n(l),o=t(122),s=t(125),u=t(145),m=t.n(u),d=function(e){var a,t=e.title,n=e.media,r=e.children,l=e.icon,u=e.href,d=e.basePath,_=void 0===d?"/":d,h=e.slug,b=void 0===h?"":h,f=e.tag,v=void 0===f?"div":f,E=e.columns,g=void 0===E?3:E,p=e.linkArrow,k=void 0!==p&&p,N=c.a.useState(null),w=N[0],j=N[1],O=c.a.useState(null),S=O[0],C=O[1],x=Object(s.a)(u||b?_+b:null),y=c.a.useMemo((function(){return x?"a":"span"}),[x]);return c.a.createElement(v,{className:i()(m.a.feature,m.a["col-"+g],(a={},a[m.a["feature--linked"]]=Boolean(x),a)),onClick:function(e){if(x){var a=window.getSelection();w&&a&&a.toString()&&a.containsNode(w,!0)||S&&e.nativeEvent.composedPath().includes(S)||(window.location.href=x)}},ref:j},n,c.a.createElement("div",{className:m.a.feature__header},l&&c.a.createElement("span",{className:m.a.feature__icon},c.a.createElement(o.Icon,{variant:l,size:32})),c.a.createElement(y,{ref:C,href:x,className:m.a.feature__link},t,x&&k&&c.a.createElement(o.Icon,{variant:"arrow-right",className:m.a.feature__arrow}))),c.a.createElement("div",{className:m.a.feature__body},r))},_=function(e){var a=e.src,t=e.alt;return a?c.a.createElement("img",{className:m.a.feature__media,src:a,alt:t}):c.a.createElement("div",{className:m.a.feature__tk},c.a.createElement("abbr",{title:"Media to come"},"TK"))},h=function(e){var a=e.basePath,t=void 0===a?"/":a,r=e.columns,l=void 0===r?3:r,i=e.children;return c.a.createElement("ul",{className:m.a.features},c.a.Children.map(i,(function(e){if(c.a.isValidElement(e)){var a=e.props;return c.a.createElement(d,Object(n.a)({columns:l},a,{basePath:t,tag:"li"}))}return null})))}},145:function(e,a,t){e.exports={features:"features_m4Wt",feature__arrow:"feature__arrow_2nrB",feature:"feature_16H5","feature--linked":"feature--linked_3sev",feature__header:"feature__header_AVdU",feature__icon:"feature__icon_1EmG",feature__media:"feature__media_rtpg",feature__tk:"feature__tk_1C80",feature__link:"feature__link_2is4","col-2":"col-2_1CFk","col-3":"col-3_3gH7"}},147:function(e,a,t){"use strict";var n=t(3),r=t(0),c=t.n(r),l=t(124),i=t(122),o=t(125),s=t(126),u=t(24),m=t(127),d=t.n(m),_=t(132),h=function(e){var a=Object(r.useRef)(!1),n=Object(r.useRef)(null),l=Object(_.useHistory)(),i=Object(u.default)().siteConfig,o=(void 0===i?{}:i).baseUrl,s=function(){a.current||(Promise.all([fetch(o+"search-doc.json").then((function(e){return e.json()})),fetch(o+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(50),t.e(54)]).then(t.bind(null,277)),t.e(33).then(t.t.bind(null,276,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=o+t.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},m=Object(r.useCallback)((function(a){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:d()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:s,onMouseOver:s,onFocus:m,onBlur:m,ref:n}))},b=t(135),f=t(141),v=t(137),E=t(138),g=t(148),p=t(142),k=t(133),N=t(57),w=t.n(N),j="right";a.a=function(){var e,a,t=Object(u.default)().siteConfig.themeConfig,m=t.navbar,d=(m=void 0===m?{}:m).title,_=void 0===d?"":d,N=m.items,O=void 0===N?[]:N,S=m.hideOnScroll,C=void 0!==S&&S,x=t.colorMode,y=(x=void 0===x?{}:x).disableSwitch,z=void 0!==y&&y,M=Object(r.useState)(!1),B=M[0],T=M[1],D=Object(r.useState)(!1),I=D[0],L=D[1],P=Object(b.a)(),A=P.setLightTheme,V=P.setDarkTheme,H=Object(i.useColorScheme)(),W=H.isDark,F=H.setLight,G=H.setDark,R=Object(f.a)(C),J=R.navbarRef,K=R.isNavbarVisible,U=Object(g.a)(),X=U.logoLink,q=U.logoLinkProps;Object(v.a)(B);var Q=Object(r.useCallback)((function(){T(!0)}),[T]),Y=Object(r.useCallback)((function(){T(!1)}),[T]),Z=Object(r.useCallback)((function(e){e?G():F()}),[F,G]);Object(r.useLayoutEffect)((function(){W?V():A()}),[W,V,A]);var $=Object(E.a)();Object(r.useEffect)((function(){$===E.b.desktop&&T(!1)}),[$]);var ee=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:j)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:j)}))}}(O),ae=ee.leftItems,te=ee.rightItems;return c.a.createElement("nav",{ref:J,className:Object(l.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":B},e[w.a.navbarHideable]=C,e[w.a.navbarHidden]=!K,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=O&&0!==O.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Q,onKeyDown:Q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:X},q),c.a.createElement(k.a,{className:"navbar__logo"}),null!=_&&c.a.createElement("strong",{className:Object(l.a)("navbar__title",(a={},a[w.a.hideLogoText]=I,a))},_)),ae.map((function(e,a){return c.a.createElement(p.a,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},c.a.createElement(p.a,{href:Object(o.a)("sassdoc"),label:"Sassdoc"}),c.a.createElement(p.a,{href:Object(o.a)("storybook"),label:"Storybook"}),te.map((function(e,a){return c.a.createElement(p.a,Object(n.a)({},e,{key:a}))})),!z&&c.a.createElement(i.Switch,{className:w.a.displayOnlyInLargeViewport,label:"Dark mode",checked:W,onToggle:Z,tipped:!0},c.a.createElement(i.Icon,{icon:{d:W?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:W?void 0:"var(--nds-yellow-50)"})),c.a.createElement(h,{handleSearchBarToggle:L,isSearchBarExpanded:I}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:Y,to:X},q),c.a.createElement(k.a,{className:"navbar__logo"}),null!=_&&c.a.createElement("strong",{className:"navbar__title"},_)),!z&&B&&c.a.createElement(i.Switch,{label:"Dark mode toggle in sidebar",checked:W,onToggle:Z,tipped:!0})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},O.map((function(e,a){return c.a.createElement(p.a,Object(n.a)({mobile:!0},e,{onClick:Y,key:a}))})))))))}},244:function(e,a,t){e.exports={section:"section_X28C",hero:"hero_2NwL",hero__container:"hero__container_zwsb",hero__title:"hero__title_3mnO",hero__subtitle:"hero__subtitle_yBWN",hero__image:"hero__image_1_Tx"}},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(127),l=t.n(c),i=t(139),o=t(24),s=t(244),u=t.n(s),m=t(144),d=t(133);a.default=function(){var e=Object(o.default)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(i.a,{title:a.title,description:a.description},r.a.createElement("header",{className:u.a.hero},r.a.createElement("div",{className:u.a.hero__container},r.a.createElement("h1",{className:u.a.hero__title},"The"," ",a.title),r.a.createElement("p",{className:u.a.hero__subtitle},a.tagline),r.a.createElement("div",{className:u.a.hero__image},r.a.createElement(d.a,null)))),r.a.createElement("main",null,r.a.createElement("section",{className:l()("container",u.a.section)},r.a.createElement(m.c,{basePath:"/docs/"},r.a.createElement(m.a,{title:"Foundations",slug:"foundations",linkArrow:!0},"Guidelines for using visual elements and interaction patterns with the Norton Design System."),r.a.createElement(m.a,{title:"Components",slug:"components",linkArrow:!0},"The building blocks for composing applications and content with the Norton Design System."),r.a.createElement(m.a,{title:"Guides",slug:"guides",linkArrow:!0},"Tutorials and examples to help designers, developers, and editors learn how get the most out of the Norton Design System.")))))}}}]);