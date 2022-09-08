"use strict";(self.webpackChunkwwnds=self.webpackChunkwwnds||[]).push([[475],{"./packages/react/src/components/Icon/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllIcons:function(){return AllIcons},Default:function(){return Default},WithARIALabel:function(){return WithARIALabel},WithContent:function(){return WithContent},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Icon",component:___WEBPACK_IMPORTED_MODULE_5__.JO,argTypes:{size:{control:{type:"range",min:24,max:512,step:4}},color:{control:{type:"color",presetColors:[{color:"var(--nds-blue-60)",title:"blue-60"},{color:"var(--nds-cyan-60)",title:"cyan-60"},{color:"var(--nds-gray-60)",title:"gray-60"},{color:"var(--nds-green-60)",title:"green-60"},{color:"var(--nds-navy-60)",title:"navy-60"},{color:"var(--nds-purple-60)",title:"purple-60"},{color:"var(--nds-red-60)",title:"red-60"},{color:"var(--nds-teal-60)",title:"teal-60"},{color:"var(--nds-yellow-60)",title:"yellow-60"}]}}}};var IconTemplate=function IconTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.JO,Object.assign({},args))};IconTemplate.displayName="IconTemplate";var Default=IconTemplate.bind({});Default.args={variant:"caret-right"};var WithARIALabel=IconTemplate.bind({});WithARIALabel.args={variant:"caret-right","aria-label":"Right-pointing caret"};var WithContent=IconTemplate.bind({});WithContent.args={variant:"info",children:'When an icon has content, that content is used to label the icon via a tooltip. Think of this as the "alt text" for the icon.'};var AllIcons=function AllIcons(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"icon-list",children:Object.keys(___WEBPACK_IMPORTED_MODULE_5__.fU).map((function(key){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.JO,Object.assign({variant:___WEBPACK_IMPORTED_MODULE_5__.fU[key],tooltipProps:{hideDelay:0}},args,{children:key}),___WEBPACK_IMPORTED_MODULE_5__.fU[key])}))})};AllIcons.displayName="AllIcons",AllIcons.args={size:48,color:"currentColor"},Default.parameters=Object.assign({storySource:{source:"(args: IconProps) => <Icon {...args} />"}},Default.parameters),WithARIALabel.parameters=Object.assign({storySource:{source:"(args: IconProps) => <Icon {...args} />"}},WithARIALabel.parameters),WithContent.parameters=Object.assign({storySource:{source:"(args: IconProps) => <Icon {...args} />"}},WithContent.parameters),AllIcons.parameters=Object.assign({storySource:{source:'(args: IconProps) => (\n\t<div className="icon-list">\n\t\t{\n\t\t\tObject.keys(IconOptions).map((key) => (\n\t\t\t\t<Icon\n\t\t\t\t\tkey={IconOptions[key]}\n\t\t\t\t\tvariant={IconOptions[key]}\n\t\t\t\t\ttooltipProps={{ hideDelay: 0 }}\n\t\t\t\t\t{...args}\n\t\t\t\t>\n\t\t\t\t\t{ key }\n\t\t\t\t</Icon>\n\t\t\t))\n\t\t}\n\t</div>\n)'}},AllIcons.parameters);var __namedExportsOrder=["Default","WithARIALabel","WithContent","AllIcons"];try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{baseName:{defaultValue:null,description:"The base class name according to BEM conventions",name:"baseName",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"The specific icon that you'd like to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"menu"'},{value:'"list"'},{value:'"search"'},{value:'"warning"'},{value:'"account"'},{value:'"arrow-up"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"calendar"'},{value:'"cancel"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-right"'},{value:'"caret-left"'},{value:'"check"'},{value:'"check-circle"'},{value:'"chevron-up"'},{value:'"chevron-right"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"close"'},{value:'"delete"'},{value:'"download"'},{value:'"edit"'},{value:'"exclamation"'},{value:'"heart"'},{value:'"heart-outline"'},{value:'"flag"'},{value:'"info"'},{value:'"launch"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"print"'},{value:'"save"'},{value:'"settings"'},{value:'"star"'},{value:'"star-outline"'},{value:'"subdirectory-left"'},{value:'"subdirectory-right"'}]}},icon:{defaultValue:null,description:"A custom icon. Must contain the SVG path's `d` attribute at a minimum.",name:"icon",required:!1,type:{name:"SVGIcon | undefined"}},color:{defaultValue:null,description:"The icon's color. Default is `currentColor`.",name:"color",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"The width and height of the icon. Default is `1.25em`.",name:"size",required:!1,type:{name:"string | number | undefined"}},warnOnClick:{defaultValue:null,description:"Indicates whether a console warning should be emitted when an `onClick`\ncallback is specified. Set to `true` by default to discourage actionable\nicons, which will be inaccessible to many users.",name:"warnOnClick",required:!1,type:{name:"boolean | undefined"}},tooltipProps:{defaultValue:null,description:"Tooltip props that should be included when the icon's children are\nrendered as a tooltip.",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipCoreProps> | undefined"}},source:{defaultValue:null,description:"A URL or reference to the source of this SVG.",name:"source",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"packages/react/src/components/Icon/index.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{WithARIALabel.displayName="WithARIALabel",WithARIALabel.__docgenInfo={description:"",displayName:"WithARIALabel",props:{baseName:{defaultValue:null,description:"The base class name according to BEM conventions",name:"baseName",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"The specific icon that you'd like to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"menu"'},{value:'"list"'},{value:'"search"'},{value:'"warning"'},{value:'"account"'},{value:'"arrow-up"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"calendar"'},{value:'"cancel"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-right"'},{value:'"caret-left"'},{value:'"check"'},{value:'"check-circle"'},{value:'"chevron-up"'},{value:'"chevron-right"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"close"'},{value:'"delete"'},{value:'"download"'},{value:'"edit"'},{value:'"exclamation"'},{value:'"heart"'},{value:'"heart-outline"'},{value:'"flag"'},{value:'"info"'},{value:'"launch"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"print"'},{value:'"save"'},{value:'"settings"'},{value:'"star"'},{value:'"star-outline"'},{value:'"subdirectory-left"'},{value:'"subdirectory-right"'}]}},icon:{defaultValue:null,description:"A custom icon. Must contain the SVG path's `d` attribute at a minimum.",name:"icon",required:!1,type:{name:"SVGIcon | undefined"}},color:{defaultValue:null,description:"The icon's color. Default is `currentColor`.",name:"color",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"The width and height of the icon. Default is `1.25em`.",name:"size",required:!1,type:{name:"string | number | undefined"}},warnOnClick:{defaultValue:null,description:"Indicates whether a console warning should be emitted when an `onClick`\ncallback is specified. Set to `true` by default to discourage actionable\nicons, which will be inaccessible to many users.",name:"warnOnClick",required:!1,type:{name:"boolean | undefined"}},tooltipProps:{defaultValue:null,description:"Tooltip props that should be included when the icon's children are\nrendered as a tooltip.",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipCoreProps> | undefined"}},source:{defaultValue:null,description:"A URL or reference to the source of this SVG.",name:"source",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.stories.tsx#WithARIALabel"]={docgenInfo:WithARIALabel.__docgenInfo,name:"WithARIALabel",path:"packages/react/src/components/Icon/index.stories.tsx#WithARIALabel"})}catch(__react_docgen_typescript_loader_error){}try{WithContent.displayName="WithContent",WithContent.__docgenInfo={description:"",displayName:"WithContent",props:{baseName:{defaultValue:null,description:"The base class name according to BEM conventions",name:"baseName",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"The specific icon that you'd like to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"menu"'},{value:'"list"'},{value:'"search"'},{value:'"warning"'},{value:'"account"'},{value:'"arrow-up"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"calendar"'},{value:'"cancel"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-right"'},{value:'"caret-left"'},{value:'"check"'},{value:'"check-circle"'},{value:'"chevron-up"'},{value:'"chevron-right"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"close"'},{value:'"delete"'},{value:'"download"'},{value:'"edit"'},{value:'"exclamation"'},{value:'"heart"'},{value:'"heart-outline"'},{value:'"flag"'},{value:'"info"'},{value:'"launch"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"print"'},{value:'"save"'},{value:'"settings"'},{value:'"star"'},{value:'"star-outline"'},{value:'"subdirectory-left"'},{value:'"subdirectory-right"'}]}},icon:{defaultValue:null,description:"A custom icon. Must contain the SVG path's `d` attribute at a minimum.",name:"icon",required:!1,type:{name:"SVGIcon | undefined"}},color:{defaultValue:null,description:"The icon's color. Default is `currentColor`.",name:"color",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"The width and height of the icon. Default is `1.25em`.",name:"size",required:!1,type:{name:"string | number | undefined"}},warnOnClick:{defaultValue:null,description:"Indicates whether a console warning should be emitted when an `onClick`\ncallback is specified. Set to `true` by default to discourage actionable\nicons, which will be inaccessible to many users.",name:"warnOnClick",required:!1,type:{name:"boolean | undefined"}},tooltipProps:{defaultValue:null,description:"Tooltip props that should be included when the icon's children are\nrendered as a tooltip.",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipCoreProps> | undefined"}},source:{defaultValue:null,description:"A URL or reference to the source of this SVG.",name:"source",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.stories.tsx#WithContent"]={docgenInfo:WithContent.__docgenInfo,name:"WithContent",path:"packages/react/src/components/Icon/index.stories.tsx#WithContent"})}catch(__react_docgen_typescript_loader_error){}try{AllIcons.displayName="AllIcons",AllIcons.__docgenInfo={description:"",displayName:"AllIcons",props:{baseName:{defaultValue:null,description:"The base class name according to BEM conventions",name:"baseName",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"The specific icon that you'd like to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"menu"'},{value:'"list"'},{value:'"search"'},{value:'"warning"'},{value:'"account"'},{value:'"arrow-up"'},{value:'"arrow-right"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"calendar"'},{value:'"cancel"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-right"'},{value:'"caret-left"'},{value:'"check"'},{value:'"check-circle"'},{value:'"chevron-up"'},{value:'"chevron-right"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"close"'},{value:'"delete"'},{value:'"download"'},{value:'"edit"'},{value:'"exclamation"'},{value:'"heart"'},{value:'"heart-outline"'},{value:'"flag"'},{value:'"info"'},{value:'"launch"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"print"'},{value:'"save"'},{value:'"settings"'},{value:'"star"'},{value:'"star-outline"'},{value:'"subdirectory-left"'},{value:'"subdirectory-right"'}]}},icon:{defaultValue:null,description:"A custom icon. Must contain the SVG path's `d` attribute at a minimum.",name:"icon",required:!1,type:{name:"SVGIcon | undefined"}},color:{defaultValue:null,description:"The icon's color. Default is `currentColor`.",name:"color",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"The width and height of the icon. Default is `1.25em`.",name:"size",required:!1,type:{name:"string | number | undefined"}},warnOnClick:{defaultValue:null,description:"Indicates whether a console warning should be emitted when an `onClick`\ncallback is specified. Set to `true` by default to discourage actionable\nicons, which will be inaccessible to many users.",name:"warnOnClick",required:!1,type:{name:"boolean | undefined"}},tooltipProps:{defaultValue:null,description:"Tooltip props that should be included when the icon's children are\nrendered as a tooltip.",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipCoreProps> | undefined"}},source:{defaultValue:null,description:"A URL or reference to the source of this SVG.",name:"source",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.stories.tsx#AllIcons"]={docgenInfo:AllIcons.__docgenInfo,name:"AllIcons",path:"packages/react/src/components/Icon/index.stories.tsx#AllIcons"})}catch(__react_docgen_typescript_loader_error){}}}]);