(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t(139),i=t(153),s=t(126);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))},m=t(143);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,s=Object(l.default)().siteConfig.title,u=a.blogDescription,d=a.blogTitle,b="/"===a.permalink?s:d;return r.a.createElement(c.a,{title:b,description:u,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return r.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},133:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(3),r=t(0),l=t.n(r),c=function(e){return l.a.createElement("svg",Object(n.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),l.a.createElement("title",null,"W. W. Norton & Company"),l.a.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},143:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),l=t(124),c=t(126),i=t(58),s=t.n(i);function o(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},147:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r),c=t(124),i=t(122),s=t(125),o=t(126),m=t(24),u=t(127),d=t.n(u),b=t(132),v=function(e){var a=Object(r.useRef)(!1),n=Object(r.useRef)(null),c=Object(b.useHistory)(),i=Object(m.default)().siteConfig,s=(void 0===i?{}:i).baseUrl,o=function(){a.current||(Promise.all([fetch(s+"search-doc.json").then((function(e){return e.json()})),fetch(s+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(50),t.e(54)]).then(t.bind(null,277)),t.e(33).then(t.t.bind(null,276,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=s+t.url;document.createElement("a").href=n,c.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},u=Object(r.useCallback)((function(a){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return l.a.createElement("div",{className:"navbar__search",key:"search-box"},l.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:d()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:o,onMouseOver:o,onFocus:u,onBlur:u,ref:n}))},h=t(135),g=t(141),E=t(137),p=t(138),f=t(148),_=t(142),N=t(133),k=t(57),j=t.n(k),O="right";a.a=function(){var e,a,t=Object(m.default)().siteConfig.themeConfig,u=t.navbar,d=(u=void 0===u?{}:u).title,b=void 0===d?"":d,k=u.items,w=void 0===k?[]:k,y=u.hideOnScroll,C=void 0!==y&&y,S=t.colorMode,x=(S=void 0===S?{}:S).disableSwitch,M=void 0!==x&&x,I=Object(r.useState)(!1),L=I[0],T=I[1],z=Object(r.useState)(!1),B=z[0],D=z[1],P=Object(h.a)(),R=P.setLightTheme,A=P.setDarkTheme,F=Object(i.useColorScheme)(),J=F.isDark,V=F.setLight,H=F.setDark,U=Object(g.a)(C),W=U.navbarRef,K=U.isNavbarVisible,q=Object(f.a)(),G=q.logoLink,Q=q.logoLinkProps;Object(E.a)(L);var X=Object(r.useCallback)((function(){T(!0)}),[T]),Y=Object(r.useCallback)((function(){T(!1)}),[T]),Z=Object(r.useCallback)((function(e){e?H():V()}),[V,H]);Object(r.useLayoutEffect)((function(){J?A():R()}),[J,A,R]);var $=Object(p.a)();Object(r.useEffect)((function(){$===p.b.desktop&&T(!1)}),[$]);var ee=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:O)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:O)}))}}(w),ae=ee.leftItems,te=ee.rightItems;return l.a.createElement("nav",{ref:W,className:Object(c.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":L},e[j.a.navbarHideable]=C,e[j.a.navbarHidden]=!K,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=w&&0!==w.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:X,onKeyDown:X},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:G},Q),l.a.createElement(N.a,{className:"navbar__logo"}),null!=b&&l.a.createElement("strong",{className:Object(c.a)("navbar__title",(a={},a[j.a.hideLogoText]=B,a))},b)),ae.map((function(e,a){return l.a.createElement(_.a,Object(n.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},l.a.createElement(_.a,{href:Object(s.a)("sassdoc"),label:"Sassdoc"}),l.a.createElement(_.a,{href:Object(s.a)("storybook"),label:"Storybook"}),te.map((function(e,a){return l.a.createElement(_.a,Object(n.a)({},e,{key:a}))})),!M&&l.a.createElement(i.Switch,{className:j.a.displayOnlyInLargeViewport,label:"Dark mode",checked:J,onToggle:Z,tipped:!0},l.a.createElement(i.Icon,{icon:{d:J?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:J?void 0:"var(--nds-yellow-50)"})),l.a.createElement(v,{handleSearchBarToggle:D,isSearchBarExpanded:B}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(o.a,Object(n.a)({className:"navbar__brand",onClick:Y,to:G},Q),l.a.createElement(N.a,{className:"navbar__logo"}),null!=b&&l.a.createElement("strong",{className:"navbar__title"},b)),!M&&L&&l.a.createElement(i.Switch,{label:"Dark mode toggle in sidebar",checked:J,onToggle:Z,tipped:!0})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},w.map((function(e,a){return l.a.createElement(_.a,Object(n.a)({mobile:!0},e,{onClick:Y,key:a}))})))))))}},153:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(124),c=t(123),i=t(26),s=t(126),o=t(161),m=t(125),u=t(59),d=t.n(u),b=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,v,h=e.children,g=e.frontMatter,E=e.metadata,p=e.truncated,f=e.isBlogPostPage,_=void 0!==f&&f,N=E.date,k=E.permalink,j=E.tags,O=E.readingTime,w=g.author,y=g.title,C=g.image,S=g.keywords,x=g.author_url||g.authorURL,M=g.author_title||g.authorTitle,I=g.author_image_url||g.authorImageURL,L=Object(m.a)(C,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,S&&S.length&&r.a.createElement("meta",{name:"keywords",content:S.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:L}),C&&r.a.createElement("meta",{property:"twitter:image",content:L}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y})),r.a.createElement("article",{className:_?void 0:"margin-bottom--xl"},(a=_?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],u=b[parseInt(t[1],10)-1],v=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},_?y:r.a.createElement(s.a,{to:k},y)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:d.a.blogPostDate},u," ",v,", ",n," ",O&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(O)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},I&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:x,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:I,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:x,target:"_blank",rel:"noreferrer noopener"},w)),r.a.createElement("small",{className:"avatar__subtitle"},M)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},h)),(j.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},j.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),j.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:E.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More"))))))}},160:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(122),c=Object.assign({React:r.a},l,r.a);a.a=c}}]);