(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{176:function(e,a,t){"use strict";var n=t(2),r=t(0),c=t.n(r),l=t(101),o=t(102),i=t(105),s=t(104),m=t(100),b=t(106),d=t.n(b),u=t(116),h=function(e){var a=Object(r.useRef)(!1),n=Object(r.useRef)(null),l=Object(u.useHistory)(),o=Object(m.a)().siteConfig,i=(void 0===o?{}:o).baseUrl,s=function(){a.current||(Promise.all([fetch(i+"search-doc.json").then((function(e){return e.json()})),fetch(i+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(39),t.e(43)]).then(t.bind(null,237)),t.e(26).then(t.t.bind(null,236,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=i+t.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(r.useCallback)((function(a){n.current.contains(a.target)||n.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:d()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:d()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:s,onMouseOver:s,onFocus:b,onBlur:b,ref:n}))},v=t(115),f=t(177),g=t(128),E=t(129),p=t(130),_=t(175),k=function(e){return c.a.createElement("svg",Object(n.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),c.a.createElement("title",null,"W. W. Norton & Company"),c.a.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))},j=t(51),O=t.n(j);a.a=function(){var e,a,t=Object(m.a)().siteConfig.themeConfig,b=t.navbar,d=(b=void 0===b?{}:b).title,u=void 0===d?"":d,j=b.items,w=void 0===j?[]:j,N=b.hideOnScroll,S=void 0!==N&&N,x=t.colorMode,C=(x=void 0===x?{}:x).disableSwitch,y=void 0!==C&&C,z=Object(r.useState)(!1),M=z[0],B=z[1],I=Object(r.useState)(!1),D=I[0],L=I[1],T=Object(v.a)(),P=T.setLightTheme,V=T.setDarkTheme,H=Object(o.useColorScheme)(),R=H.isDark,W=H.setLight,F=H.setDark,A=Object(f.a)(S),J=A.navbarRef,K=A.isNavbarVisible,U=Object(p.a)(),q=U.logoLink,G=U.logoLinkProps;Object(g.a)(M);var Q=Object(r.useCallback)((function(){B(!0)}),[B]),X=Object(r.useCallback)((function(){B(!1)}),[B]),Y=Object(r.useCallback)((function(e){e?F():W()}),[W,F]);Object(r.useEffect)((function(){R?V():P()}),[R,V,P]);var Z=Object(E.a)();Object(r.useEffect)((function(){Z===E.b.desktop&&B(!1)}),[Z]);var $=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(w),ee=$.leftItems,ae=$.rightItems;return c.a.createElement("nav",{ref:J,className:Object(l.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":M},e[O.a.navbarHideable]=S,e[O.a.navbarHidden]=!K,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=w&&0!==w.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Q,onKeyDown:Q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:q},G),c.a.createElement(k,{className:"navbar__logo"}),null!=u&&c.a.createElement("strong",{className:Object(l.a)("navbar__title",(a={},a[O.a.hideLogoText]=D,a))},u)),ee.map((function(e,a){return c.a.createElement(_.a,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},c.a.createElement(_.a,{href:Object(i.a)("sassdoc"),label:"Sassdoc"}),c.a.createElement(_.a,{href:Object(i.a)("storybook"),label:"Storybook"}),ae.map((function(e,a){return c.a.createElement(_.a,Object(n.a)({},e,{key:a}))})),!y&&c.a.createElement(o.Switch,{className:O.a.displayOnlyInLargeViewport,label:"Dark mode toggle",checked:R,onToggle:Y,tipped:!0},c.a.createElement(o.Icon,{icon:{d:R?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:R?void 0:"var(--nds-yellow-50)"})),c.a.createElement(h,{handleSearchBarToggle:L,isSearchBarExpanded:D}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:X,to:q},G),c.a.createElement(k,{className:"navbar__logo"}),null!=u&&c.a.createElement("strong",{className:"navbar__title"},u)),!y&&M&&c.a.createElement(o.Switch,{label:"Dark mode toggle in sidebar",checked:R,onToggle:Y,tipped:!0})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},w.map((function(e,a){return c.a.createElement(_.a,Object(n.a)({mobile:!0},e,{onClick:X,key:a}))})))))))}},190:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(131);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);