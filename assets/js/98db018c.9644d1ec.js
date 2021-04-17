(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var s=n(157),o=n(1),i=(n(0),n(160)),a=n(26),r=n(162),l={title:"Spinner",description:"A spinner lets the user know that something is processing or progressing."},p={unversionedId:"components/spinner",id:"components/spinner",isDocsHomePage:!1,title:"Spinner",description:"A spinner lets the user know that something is processing or progressing.",source:"@site/docs/components/spinner.mdx",slug:"/components/spinner",permalink:"/design-system/docs/components/spinner",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/spinner.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618686110,formattedLastUpdatedAt:"4/17/2021",sidebar:"components",previous:{title:"Radio Group",permalink:"/design-system/docs/components/radio-group"},next:{title:"Switch",permalink:"/design-system/docs/components/switch"}},c=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"React API",id:"react-api",children:[{value:"Spinner",id:"spinner",children:[]}]}],b={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A spinner lets the user know that something is processing or progressing.")),Object(i.b)("h2",{id:"anatomy"},"Anatomy"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Progress circle")," - the circle spins to convey that something is processing and fills clockwise to convey progress toward completion."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Label")," - a description of what is processing or progressing.")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Spinners should appear on the screen when there is a processing delay of between 1-5 seconds."),Object(i.b)(a.CalloutSuccess,{title:"Do",mdxType:"CalloutSuccess"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do use a spinner to communicate to the user that the screen is still loading but will be complete in a short time (5 seconds or less)."),Object(i.b)("li",{parentName:"ul"},"Do use only 1 spinner on the screen at a time."),Object(i.b)("li",{parentName:"ul"},"If an application is loading, then the spinner will display and the user will be blocked from interacting with the application until it is loaded."),Object(i.b)("li",{parentName:"ul"},"For buttons with spinners, the button should always be disabled until the action completes and the spinner no longer displays on the button."))),Object(i.b)(a.CalloutError,{title:"Don't",mdxType:"CalloutError"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don\u2019t use a spinner for an immediate process (less than 1 second); nothing should display in that situation."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t use a spinner if most of the application can load very quickly except for some text or data elements; use skeleton text loading indicator."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t use a spinner for a long process. If a process is expected to take more than 5 seconds to complete use a progress bar loading indicator."))),Object(i.b)(a.Callout,{title:"Indeterminate vs. Determinate",mdxType:"Callout"},Object(i.b)("p",null,'The spinner is said to be in "indeterminate" mode if it does not have a set value.\nThis conveys to users that something is processing without conveying how close to being done it is.'),Object(i.b)("div",{className:"callout__example"},Object(i.b)(a.Spinner,{label:"Loading...",mdxType:"Spinner"})),Object(i.b)("p",null,'When a spinner does have a set value, it is said to be in "determinate" mode.\nThis gives the user a better sense of how close it is to beng complete.'),Object(i.b)("div",{className:"callout__example"},Object(i.b)(a.Spinner,{label:"Downloading...",progress:.35,mdxType:"Spinner"}))),Object(i.b)("h2",{id:"react-api"},"React API"),Object(i.b)("p",null,"We expose one component for the spinner API, the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Spinner"},"Spinner"),"."),Object(i.b)(a.Callout,{title:"Related concepts",mdxType:"Callout"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTML element: ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"},"<","progress",">")),Object(i.b)("li",{parentName:"ul"},"DOM interface: ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement"},"HTMLProgressElement")),Object(i.b)("li",{parentName:"ul"},"ARIA role: ",Object(i.b)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#progressbar"},"progressbar")))),Object(i.b)("h3",{id:"spinner"},"Spinner"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Spinner")," component extends the ",Object(i.b)("inlineCode",{parentName:"p"},"React.HTMLAttributes<HTMLDivElement>")," interface."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Spinner } from '@wwnds/react';\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'/* set progress to a value between 0 and 1 to make determinate */\n<Spinner label="Loading..." progress={undefined} />\n')),Object(i.b)(r.f,{from:a.Spinner,mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);