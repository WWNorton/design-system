"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8311],{3949:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(5773),r=n(808),i=(n(7378),n(5318)),o=n(2299),l=n(1010),p=["components"],s={title:"Step Indicator",description:"A Step Indicator that lets the user know of their progress in a multiple-step process."},d=void 0,c={unversionedId:"components/step-indicator",id:"components/step-indicator",title:"Step Indicator",description:"A Step Indicator that lets the user know of their progress in a multiple-step process.",source:"@site/docs/components/step-indicator.mdx",sourceDirName:"components",slug:"/components/step-indicator",permalink:"/design-system/docs/components/step-indicator",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/step-indicator.mdx",tags:[],version:"current",lastUpdatedBy:"Juan",lastUpdatedAt:1649207604,formattedLastUpdatedAt:"4/6/2022",frontMatter:{title:"Step Indicator",description:"A Step Indicator that lets the user know of their progress in a multiple-step process."},sidebar:"components",previous:{title:"Tag",permalink:"/design-system/docs/components/tag"},next:{title:"Tooltip",permalink:"/design-system/docs/components/tooltip"}},m=[{value:"React API",id:"react-api",children:[{value:"StepIndicator",id:"stepindicator",children:[],level:3},{value:"Step",id:"step",children:[],level:3}],level:2},{value:"Styling API",id:"styling-api",children:[],level:2}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"react-api"},"React API"),(0,i.kt)("p",null,"We expose two components for the step indicator API, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/StepIndicator"},"StepIndicator and Step"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { StepIndicator, Step } from '@wwnds/react';\n")),(0,i.kt)(o.Callout,{title:"Related concepts",border:"left",mdxType:"Callout"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTML elements: ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"},"<","ol",">"),", ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"},"<","li",">")),(0,i.kt)("li",{parentName:"ul"},"ARIA property: ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#aria-current"},"aria-current")))),(0,i.kt)("h3",{id:"stepindicator"},"StepIndicator"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"StepIndicator")," component extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"React.HTMLAttributes<HTMLOListElement>")," interface and renders an ",(0,i.kt)("inlineCode",{parentName:"p"},"<ol>")," element. It is composed using multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Step")," components, which each render a ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," element."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"isConnected"),", a line will visually connect each step.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<StepIndicator isConnected>\n  <Step isCompleted>Order details</Step>\n  <Step isCurrent>Payment</Step>\n  <Step>Delivery</Step>\n</StepIndicator>\n")),(0,i.kt)(l._A,{from:o.StepIndicator,mdxType:"PropsTable"}),(0,i.kt)("h3",{id:"step"},"Step"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Step")," component extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"React.HTMLAttributes<HTMLLIElement>")," interface and renders an ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," element. It represents a single step."),(0,i.kt)(l._A,{from:o.Step,mdxType:"PropsTable"}),(0,i.kt)("h2",{id:"styling-api"},"Styling API"),(0,i.kt)("p",null,"The Step Indicator component exposes the following design tokens as CSS custom properties that allow for visual customization."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Token Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--nds-stepindicator-primary-color")),(0,i.kt)("td",{parentName:"tr",align:null},"The color for the currently active step marker halo and the background of completed steps"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.QC,{mdxType:"ColorChip"},"primary-color-50"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--nds-stepindicator-base-color")),(0,i.kt)("td",{parentName:"tr",align:null},"The background base color for incomplete step markers and connector line"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.QC,{mdxType:"ColorChip"},"base-color-90"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--nds-stepindicator-step-marker-size")),(0,i.kt)("td",{parentName:"tr",align:null},"The width and height of the (non-current) step markers circle"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.5rem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--nds-stepindicator-max-step-width")),(0,i.kt)("td",{parentName:"tr",align:null},"Max-width for the specific steps, can be useful when the number of steps is dynamic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null"))))))}k.isMDXComponent=!0}}]);