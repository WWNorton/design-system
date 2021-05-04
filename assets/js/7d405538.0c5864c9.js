(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(158),o=n(1),i=(n(0),n(160)),l=n(26),r=n(163),c={title:"Link",description:"A link allows the user to navigate to another place."},s={unversionedId:"components/link",id:"components/link",isDocsHomePage:!1,title:"Link",description:"A link allows the user to navigate to another place.",source:"@site/docs/components/link.mdx",slug:"/components/link",permalink:"/design-system/docs/components/link",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/link.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1619585225,formattedLastUpdatedAt:"4/28/2021",sidebar:"components",previous:{title:"Dropdown",permalink:"/design-system/docs/components/dropdown"},next:{title:"Modal",permalink:"/design-system/docs/components/modal"}},b=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"React API",id:"react-api",children:[{value:"Link",id:"link",children:[]}]}],p={toc:b};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A link allows the user to navigate to another place.")),Object(i.b)("h2",{id:"anatomy"},"Anatomy"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Text")," - link text should succinctly describe its destination.")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A link navigates the user to another place on the same page or to a different page."),Object(i.b)("li",{parentName:"ul"},"A link helps define the structure, architecture and hierarchy of the site."),Object(i.b)("li",{parentName:"ul"},"A link allows the user to return to the previous location by pressing the browser's back button."),Object(i.b)("li",{parentName:"ul"},"Activating the link changes the URL."),Object(i.b)("li",{parentName:"ul"},"A link's ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href"},"href")," value must be a valid URL or URL fragment."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("kbd",null,"Enter")," (keydown) activates the link. Links always move focus when activated.")),Object(i.b)(l.CalloutSuccess,{title:"Dos",mdxType:"CalloutSuccess"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do use a link when\u2026",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'It would be useful to "Copy", "Open in a new tab", or "Bookmark" the destination URL.'),Object(i.b)("li",{parentName:"ul"},"The text content is embedded in a sentence, and does not need margins or padding."),Object(i.b)("li",{parentName:"ul"},"The text content conveys location, not an action (for example: a link that references a resource)."),Object(i.b)("li",{parentName:"ul"},"You want to record the navigation in the user's browser history."))),Object(i.b)("li",{parentName:"ul"},"Do style links so that they are visually different from plain text, and indicate that they can be clicked."))),Object(i.b)(l.CalloutError,{title:"Don'ts",mdxType:"CalloutError"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Don\'t create links that look like buttons. If dictation software users say "show buttons", the actions will not be listed. Keyboard users may try to press Space to activate, which will do nothing.'),Object(i.b)("li",{parentName:"ul"},"Don\u2019t use an ambiguous label like \u201cclick here\u201d. The link\u2019s text content should clearly describe its destination or purpose."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t include the full stop if a link is at the end of a sentence or paragraph."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t use Javascript to simulate links. Use a valid href instead."))),Object(i.b)(l.Callout,{title:"Consider using buttons if...",mdxType:"Callout"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The component is styled like a button. (See ",Object(i.b)("em",{parentName:"li"},"Don't create links that look like buttons"),", above)."),Object(i.b)("li",{parentName:"ul"},"The label communicates an action that the user can take."),Object(i.b)("li",{parentName:"ul"},"If the action taken will change or manipulate data on the page."))),Object(i.b)("h2",{id:"react-api"},"React API"),Object(i.b)("p",null,"We expose one component for the link API, the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Link"},"Link"),"."),Object(i.b)("h3",{id:"link"},"Link"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<Link>")," component extends the ",Object(i.b)("inlineCode",{parentName:"p"},"React.AnchorHTMLAttributes<HTMLAnchorElement>")," interface."),Object(i.b)("p",null,"If defined, our ",Object(i.b)("inlineCode",{parentName:"p"},"<Link>")," will use the link component provided by the nearest ",Object(i.b)("a",{parentName:"p",href:"react-providers#app-provider"},"AppProvider")," context.\nThis allows you to use our ",Object(i.b)("inlineCode",{parentName:"p"},"Link")," wrapper for your application's router link component, such as ",Object(i.b)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Link"},"the React Router ",Object(i.b)("inlineCode",{parentName:"a"},"<Link>")),"."),Object(i.b)("p",null,"If the nearest link component context is undefined, the rendered link will be a normal anchor element with the added ",Object(i.b)("inlineCode",{parentName:"p"},"external")," prop that can be used to make the link open in an external window/tab."),Object(i.b)("h3",{id:""}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Link } from '@wwnds/react';\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<AppProvider linkComponent={null}>\n    <Link external={true} href="https://github.com/wwnorton/design-system">\n        Norton Design System\n    </Link>\n</AppProvider>\n')),Object(i.b)(r.f,{from:l.Link,mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);