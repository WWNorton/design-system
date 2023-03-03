"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6706],{5546:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=o(5773),i=o(808),n=(o(7378),o(5318)),r=o(3157),l=o(7256),s=["components"],u={title:"Radio Group",description:"A radio group allows the user to select one option from a set of related options."},d=void 0,p={unversionedId:"components/radio-group",id:"components/radio-group",title:"Radio Group",description:"A radio group allows the user to select one option from a set of related options.",source:"@site/docs/components/radio-group.mdx",sourceDirName:"components",slug:"/components/radio-group",permalink:"/design-system/docs/components/radio-group",draft:!1,editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/radio-group.mdx",tags:[],version:"current",frontMatter:{title:"Radio Group",description:"A radio group allows the user to select one option from a set of related options."},sidebar:"components",previous:{title:"Progress Bar",permalink:"/design-system/docs/components/progress-bar"},next:{title:"Spinner",permalink:"/design-system/docs/components/spinner"}},c={},m=[{value:"Anatomy",id:"anatomy",level:2},{value:"Radio Group",id:"radio-group",level:3},{value:"Radio Button",id:"radio-button",level:3},{value:"Usage",id:"usage",level:2},{value:"React API",id:"react-api",level:2},{value:"RadioGroup",id:"radiogroup",level:3},{value:"Radio",id:"radio",level:3}],h={toc:m},k="wrapper";function b(e){var t=e.components,o=(0,i.Z)(e,s);return(0,n.kt)(k,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A radio group allows the user to select one option from a set of related options.")),(0,n.kt)("h2",{id:"anatomy"},"Anatomy"),(0,n.kt)("p",null,"The anatomy for both a group of related radio buttons and a single radio button are outlined here."),(0,n.kt)("h3",{id:"radio-group"},"Radio Group"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Label")," - text that conveys how the radio buttons are related and prompts the user to select a single radio button."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Current selection"),": a selected radio button indicates that it will be the option that is submitted."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Choices")," - the available radio buttons. Clicking or arrowing to an unselected radio button will deselect the currently selected radio button.")),(0,n.kt)("h3",{id:"radio-button"},"Radio Button"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Control")," - the input control that conveys the current state of the radio button to the user."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Label")," - a short name that lets the user know what the radio button is selecting. Clicking the label should select the radio button."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Description")," (",(0,n.kt)("em",{parentName:"li"},"optional"),") - additional text that can be used to add clarity or context to the radio button label. Clicking the description should do nothing.")),(0,n.kt)("admonition",{title:"Single Radio Button Usage",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Radio buttons must always be part of a radio group.\nUsing a single radio button by itself would allow the user to check the option but not uncheck it.\nIf that is desired, use a ",(0,n.kt)("a",{parentName:"p",href:"checkbox"},"checkbox")," instead to ensure that the user can uncheck it.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use radio buttons to allow a user to select exactly one item from a set of options, and display all available options."),(0,n.kt)("li",{parentName:"ul"},"Radio buttons should have between 2-5 options.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you have more than 5 options, use a ",(0,n.kt)("a",{parentName:"li",href:"dropdown"},"dropdown")," or combo box."))),(0,n.kt)("li",{parentName:"ul"},"The options in a group of radio buttons must be mutually exclusive. The user can only select 1 Radio."),(0,n.kt)("li",{parentName:"ul"},"Only use radio buttons when the field is required. If all radio buttons are in an unselected state on load, a user must select one of the radio buttons before proceeding."),(0,n.kt)("li",{parentName:"ul"},"Arrow keys move focus within the group, uncheck the previously focused button, and check the newly focused button."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("kbd",null,"Space")," selects the focused radio button if it is not already selected.")),(0,n.kt)("admonition",{title:"Do",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Do allow users to select a Radio by clicking the radio button or its text label."),(0,n.kt)("li",{parentName:"ul"},"Do position the radio button to the left of its label."),(0,n.kt)("li",{parentName:"ul"},"Do display options in a vertical layout, by default, for easier scanning."),(0,n.kt)("li",{parentName:"ul"},"Consider the most logical order to display options, such as alphabetical, chronological or by popularity."))),(0,n.kt)("admonition",{title:"Don't",type:"danger"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Don\u2019t use radio buttons if a user could select multiple options. Use ",(0,n.kt)("a",{parentName:"li",href:"checkbox"},"checkboxes")," instead."),(0,n.kt)("li",{parentName:"ul"},"Don't use radio buttons if a user could select NO Radio. Use ",(0,n.kt)("a",{parentName:"li",href:"checkbox"},"checkboxes")," instead."),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t use radio buttons if an action will take immediate effect when the user selects or deselects it.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use a ",(0,n.kt)("a",{parentName:"li",href:"switch"},"switch")," if there are two opposite options (example: YES/NO, ON/OFF)."),(0,n.kt)("li",{parentName:"ul"},"Otherwise, use a group of regular ",(0,n.kt)("a",{parentName:"li",href:"button"},"buttons"),"."))))),(0,n.kt)("h2",{id:"react-api"},"React API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { Radio, RadioGroup } from '@wwnds/react';\n")),(0,n.kt)("h3",{id:"radiogroup"},"RadioGroup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RadioGroup label="Select your favorite fruit." name="fruit">\n    <Radio thumbnail="\ud83c\udf4e" description="A classic choice">Apple</Radio>\n    <Radio thumbnail="\ud83c\udf4c" description="A taste of the tropics">Banana</Radio>\n    <Radio thumbnail="\ud83e\udd5d" description="A bit more exotic">Kiwi</Radio>\n    <Radio thumbnail="\ud83c\udf4a" description="Tangy and juicy">Orange</Radio>\n</RadioGroup>\n')),(0,n.kt)(l._A,{from:r.RadioGroup,mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"radio"},"Radio"),(0,n.kt)("p",null,"Note: there is no scenario where you would use a single ",(0,n.kt)("inlineCode",{parentName:"p"},"Radio")," alone."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Radio>Apple</Radio>\n")),(0,n.kt)(l._A,{from:r.Radio,mdxType:"PropsTable"}))}b.isMDXComponent=!0}}]);