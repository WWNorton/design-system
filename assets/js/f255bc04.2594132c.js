"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1199],{2185:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var s=r(5773),a=r(808),n=(r(7378),r(5318)),o=r(3157),i=r(7256),l=["components"],p={title:"Progress Bar",description:"A progress bar lets the user know that something is processing or progressing."},m=void 0,d={unversionedId:"components/progress-bar",id:"components/progress-bar",title:"Progress Bar",description:"A progress bar lets the user know that something is processing or progressing.",source:"@site/docs/components/progress-bar.mdx",sourceDirName:"components",slug:"/components/progress-bar",permalink:"/design-system/docs/components/progress-bar",draft:!1,editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/progress-bar.mdx",tags:[],version:"current",frontMatter:{title:"Progress Bar",description:"A progress bar lets the user know that something is processing or progressing."},sidebar:"components",previous:{title:"Popover",permalink:"/design-system/docs/components/popover"},next:{title:"Radio Group",permalink:"/design-system/docs/components/radio-group"}},g={},c=[{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Indeterminate vs. Determinate",id:"indeterminate-vs-determinate",level:3},{value:"React API",id:"react-api",level:2},{value:"ProgressBar",id:"progressbar",level:3}],u={toc:c},h="wrapper";function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,n.kt)(h,(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A progress bar lets the user know that something is processing or progressing.")),(0,n.kt)("h2",{id:"anatomy"},"Anatomy"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Track")," - a fixed width track for the progress indicator to travel along."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Progress indicator")," - an animated bar that conveys processing or progress toward completion."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Label")," - a description of what is progressing.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use a progress bar when there will be a delay of more than 1 second in loading or completing an action."),(0,n.kt)("li",{parentName:"ul"},"A progress bar can be used both when the amount of time is determined and when it is indeterminate."),(0,n.kt)("li",{parentName:"ul"},"If an application is loading, then the progress bar will display and the user will be blocked from interacting with the application until it is loaded."),(0,n.kt)("li",{parentName:"ul"},"You can also use a spinner.")),(0,n.kt)("admonition",{title:"Do",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Do use only 1 progress bar on the screen at a time."),(0,n.kt)("li",{parentName:"ul"},"Do start the progressive animation slower and allow it to move faster as it approaches the end. It is always a better user experience to exceed customer expectations."))),(0,n.kt)("admonition",{title:"Don't",type:"danger"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Don't use a progress bar for an immediate process (less than 1 second). Nothing should display in that situation."),(0,n.kt)("li",{parentName:"ul"},"Don't use a progress bar if most of the application can load very quickly except for some text or data elements. Use a skeleton instead."),(0,n.kt)("li",{parentName:"ul"},"Don't use a progress bar inside of a button. Use a spinner or loading state instead."))),(0,n.kt)("h3",{id:"indeterminate-vs-determinate"},"Indeterminate vs. Determinate"),(0,n.kt)("p",null,'The progress bar is in "indeterminate" mode if it does not have a set value.\nThis conveys to users that something is processing without communicating how close it is to being complete.'),(0,n.kt)("div",{className:"nds-example"},(0,n.kt)(o.ProgressBar,{label:"Loading...",mdxType:"ProgressBar"})),(0,n.kt)("p",null,'When a progress bar does have a set value, it is in "determinate" mode.\nThis gives the user an estimate of the percentage of time remaining until completion.'),(0,n.kt)("div",{className:"nds-example"},(0,n.kt)(o.ProgressBar,{label:"Downloading...",progress:.35,mdxType:"ProgressBar"})),(0,n.kt)("h2",{id:"react-api"},"React API"),(0,n.kt)("p",null,"We expose one component for the progress bar API, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/ProgressBar"},"ProgressBar"),"."),(0,n.kt)("admonition",{title:"Related concepts",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"HTML element: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"},"<","progress",">")),(0,n.kt)("li",{parentName:"ul"},"DOM interface: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement"},"HTMLProgressElement")),(0,n.kt)("li",{parentName:"ul"},"ARIA role: ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#progressbar"},"progressbar")))),(0,n.kt)("h3",{id:"progressbar"},"ProgressBar"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ProgressBar")," component extends the ",(0,n.kt)("inlineCode",{parentName:"p"},"React.ComponentPropsWithoutRef<'div'>")," interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { ProgressBar } from '@wwnds/react';\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'/* set progress to a value between 0 and 1 to make determinate */\n<ProgressBar label="Loading..." progress={undefined} />\n')),(0,n.kt)(i._A,{from:o.ProgressBar,mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);