(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(164),c=t.n(l),i=t(37),s=t(16);a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),o=Object(i.useHistory)(),m=Object(s.default)().siteConfig,u=(void 0===m?{}:m).baseUrl,d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(55),t.e(58)]).then(t.bind(null,180)),t.e(38).then(t.t.bind(null,179,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=u+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(n.useCallback)((function(a){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:b,onBlur:b,ref:l}))}},173:function(e,a,t){"use strict";var n=t(157),r=t(0),l=t.n(r),c=t(159),i=t(26),s=t(36),o=t(16),m=t(165),u=t(166),d=t(174),b=t(169),h=t(170),v=t(171),f=t(181),g=t(82),E=t.n(g),p="right";a.a=function(){var e,a=Object(o.default)().siteConfig.themeConfig,t=a.navbar,g=((t=void 0===t?{}:t).title,t.items),_=void 0===g?[]:g,k=t.hideOnScroll,N=void 0!==k&&k,j=a.colorMode,O=(j=void 0===j?{}:j).disableSwitch,w=void 0!==O&&O,S=Object(r.useState)(!1),C=S[0],y=S[1],x=Object(r.useState)(!1),I=x[0],T=x[1],M=Object(u.a)(),z=M.setLightTheme,B=M.setDarkTheme,L=Object(i.useTheme)(),D=L.colorScheme,V=L.setColorScheme,H="dark"===D,P=Object(d.a)(N),R=P.navbarRef,J=P.isNavbarVisible;Object(b.a)(C);var U=Object(r.useCallback)((function(){y(!0)}),[y]),A=Object(r.useCallback)((function(){y(!1)}),[y]),F=function(e){V(e?"dark":"light")};Object(r.useLayoutEffect)((function(){H?B():z()}),[H,B,z]);var K=Object(h.a)();Object(r.useEffect)((function(){K===h.b.desktop&&y(!1)}),[K]);var W=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:p)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:p)}))}}(_),q=W.leftItems,G=W.rightItems;return l.a.createElement("nav",{ref:R,className:Object(c.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":C},e[E.a.navbarHideable]=N,e[E.a.navbarHidden]=!J,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=_&&0!==_.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(v.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),q.map((function(e,a){return l.a.createElement(f.a,Object(n.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},l.a.createElement(f.a,{href:Object(s.a)("sassdoc"),label:"Sassdoc"}),l.a.createElement(f.a,{href:Object(s.a)("storybook"),label:"Storybook"}),G.map((function(e,a){return l.a.createElement(f.a,Object(n.a)({},e,{key:a}))})),!w&&l.a.createElement(i.Switch,{className:E.a.displayOnlyInLargeViewport,label:"Dark mode",checked:H,onToggle:F,tipped:!0},l.a.createElement(i.Icon,{icon:{d:H?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:H?void 0:"var(--nds-yellow-50)"})),l.a.createElement(m.a,{handleSearchBarToggle:T,isSearchBarExpanded:I}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(v.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:A}),!w&&C&&l.a.createElement(i.Switch,{label:"Dark mode toggle in sidebar",checked:H,onToggle:F,tipped:!0})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},_.map((function(e,a){return l.a.createElement(f.a,Object(n.a)({mobile:!0},e,{onClick:A,key:a}))})))))))}},175:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),l=t(159),c=t(35),i=t(83),s=t.n(i);function o(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(172),c=t(35),i=t(175),s=t(163);a.default=function(e){var a=e.tags,t=e.sidebar,n={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));var o=Object.entries(n).sort((function(e,a){var t=e[0],n=a[0];return t===n?0:t>n?1:-1})).map((function(e){var t=e[0],n=e[1];return r.a.createElement("div",{key:t},r.a.createElement("h3",null,t),n.map((function(e){return r.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(i.a,{sidebar:t})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(s.a,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),r.a.createElement("div",{className:"margin-vert--lg"},o)))))}}}]);