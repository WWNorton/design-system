"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[934],{7091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var i=n(5773),s=n(808),o=(n(7378),n(5318)),r=n(2299),a=n(1010),l=["components"],p={title:"Spinner",description:"A spinner lets the user know that something is processing or progressing."},m=void 0,c={unversionedId:"components/spinner",id:"components/spinner",title:"Spinner",description:"A spinner lets the user know that something is processing or progressing.",source:"@site/docs/components/spinner.mdx",sourceDirName:"components",slug:"/components/spinner",permalink:"/design-system/docs/components/spinner",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/spinner.mdx",tags:[],version:"current",lastUpdatedBy:"erinoh",lastUpdatedAt:1640114877,formattedLastUpdatedAt:"12/21/2021",frontMatter:{title:"Spinner",description:"A spinner lets the user know that something is processing or progressing."},sidebar:"components",previous:{title:"Radio Group",permalink:"/design-system/docs/components/radio-group"},next:{title:"Switch",permalink:"/design-system/docs/components/switch"}},d=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"React API",id:"react-api",children:[{value:"Spinner",id:"spinner",children:[],level:3}],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A spinner lets the user know that something is processing or progressing.")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Progress circle")," - the circle spins to convey that something is processing and fills clockwise to convey progress toward completion."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Label")," - a description of what is processing or progressing.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a spinner when there will be a delay of more than 1 second in loading or completing an action."),(0,o.kt)("li",{parentName:"ul"},"A spinner can be used both when the amount of time is determined and when it is indeterminate."),(0,o.kt)("li",{parentName:"ul"},"If an application is loading, then the spinner will display and the user will be blocked from interacting with the application until it is loaded."),(0,o.kt)("li",{parentName:"ul"},"You can also use a progress bar.")),(0,o.kt)(r.CalloutSuccess,{title:"Do",mdxType:"CalloutSuccess"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do use only 1 spinner on the screen at a time."),(0,o.kt)("li",{parentName:"ul"},"For buttons with spinners, the button should always be disabled until the action completes and the spinner no longer displays on the button."))),(0,o.kt)(r.CalloutError,{title:"Don't",mdxType:"CalloutError"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don\u2019t use a spinner for an immediate process (less than 1 second); nothing should display in that situation."),(0,o.kt)("li",{parentName:"ul"},"Don\u2019t use a spinner if most of the application can load very quickly except for some text or data elements; use a skeleton instead."))),(0,o.kt)(r.Callout,{title:"Indeterminate vs. Determinate",border:"left",mdxType:"Callout"},(0,o.kt)("p",null,'The spinner is in "indeterminate" mode if it does not have a set value.\nThis conveys to users that something is processing without communicating how close it is to being complete.'),(0,o.kt)("div",{className:"callout__example"},(0,o.kt)(r.Spinner,{label:"Loading...",mdxType:"Spinner"})),(0,o.kt)("p",null,'When a spinner does have a set value, it is in "determinate" mode.\nThis gives the user an estimate of the percentage of time remaining until completion.'),(0,o.kt)("div",{className:"callout__example"},(0,o.kt)(r.Spinner,{label:"Downloading...",progress:.35,mdxType:"Spinner"}))),(0,o.kt)("h2",{id:"react-api"},"React API"),(0,o.kt)("p",null,"We expose one component for the spinner API, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Spinner"},"Spinner"),"."),(0,o.kt)(r.Callout,{title:"Related concepts",border:"left",mdxType:"Callout"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML element: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"},"<","progress",">")),(0,o.kt)("li",{parentName:"ul"},"DOM interface: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement"},"HTMLProgressElement")),(0,o.kt)("li",{parentName:"ul"},"ARIA role: ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#progressbar"},"progressbar")))),(0,o.kt)("h3",{id:"spinner"},"Spinner"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Spinner")," component extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.HTMLAttributes<HTMLDivElement>")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Spinner } from '@wwnds/react';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'/* set progress to a value between 0 and 1 to make determinate */\n<Spinner label="Loading..." progress={undefined} />\n')),(0,o.kt)(a._A,{from:r.Spinner,mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);