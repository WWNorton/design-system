(self.webpackChunkwwnds=self.webpackChunkwwnds||[]).push([[363],{"./packages/react/src/components/Switch/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Asynchronous:function(){return Asynchronous},CustomContent:function(){return CustomContent},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js");var react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),___WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/components/Switch/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/components/Icon/index.ts"),_Spinner__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/components/Spinner/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["checked","onClick"],_excluded2=["checked","onClick"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Switch",component:___WEBPACK_IMPORTED_MODULE_18__.r};var SwitchTemplate=function SwitchTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(___WEBPACK_IMPORTED_MODULE_18__.r,Object.assign({},args))};SwitchTemplate.displayName="SwitchTemplate";var Default=SwitchTemplate.bind({});Default.args={checked:void 0,label:"Default switch",description:"Toggle on or off",onToggle:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_17__.action)("onToggle"),displayDefault:!0};var CustomContent=function CustomContent(_ref){var checkedProp=_ref.checked,args=(_ref.onClick,_objectWithoutProperties(_ref,_excluded)),_React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_16__.useState(checkedProp),2),checked=_React$useState2[0],setChecked=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(___WEBPACK_IMPORTED_MODULE_18__.r,Object.assign({checked:checked,onClick:function onClick(){return setChecked(!checked)}},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_19__.JO,{variant:checked?"check":"close"})}))};CustomContent.displayName="CustomContent",CustomContent.args={label:"Switch with custom content",description:"Toggle on or off",onToggle:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_17__.action)("onToggle"),displayDefault:!0};var Asynchronous=function Asynchronous(_ref2){var checkedProp=_ref2.checked,args=(_ref2.onClick,_objectWithoutProperties(_ref2,_excluded2)),_React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_16__.useState(checkedProp),2),checked=_React$useState4[0],setChecked=_React$useState4[1],_React$useState6=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_16__.useState(!1),2),loading=_React$useState6[0],setLoading=_React$useState6[1],toggle=function toggle(){setChecked(!checked),setLoading(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(___WEBPACK_IMPORTED_MODULE_18__.r,Object.assign({checked:checked,onToggle:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_17__.action)("onToggle"),onClick:function delayedToggle(){loading||(setLoading(!0),window.setTimeout(toggle,1e3))},disabled:loading},args,{children:loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_20__.$,{size:"1.25em",label:"Thinking...",hideLabel:!0})}))};Asynchronous.displayName="Asynchronous",Asynchronous.args={label:"Asynchronous action",description:"Toggle something on and off with a delay"},Default.parameters=Object.assign({storySource:{source:"(args: SwitchProps) => <Switch {...args} />"}},Default.parameters),CustomContent.parameters=Object.assign({storySource:{source:"({ checked: checkedProp, onClick, ...args }: SwitchProps) => {\n\tconst [checked, setChecked] = React.useState(checkedProp);\n\n\treturn (\n\t\t<Switch\n\t\t\tchecked={checked}\n\t\t\tonClick={(): void => setChecked(!checked)}\n\t\t\t{...args}\n\t\t>\n\t\t\t<Icon variant={(checked) ? 'check' : 'close'} />\n\t\t</Switch>\n\t);\n}"}},CustomContent.parameters),Asynchronous.parameters=Object.assign({storySource:{source:'({ checked: checkedProp, onClick, ...args }: SwitchProps) => {\n\tconst [checked, setChecked] = React.useState(checkedProp);\n\tconst [loading, setLoading] = React.useState(false);\n\n\tconst toggle = (): void => {\n\t\tsetChecked(!checked);\n\t\tsetLoading(false);\n\t};\n\n\t// do something async\n\tconst delayedToggle = (): void => {\n\t\tif (!loading) {\n\t\t\tsetLoading(true);\n\t\t\twindow.setTimeout(toggle, 1000);\n\t\t}\n\t};\n\n\treturn (\n\t\t<Switch\n\t\t\tchecked={checked}\n\t\t\tonToggle={action(\'onToggle\')}\n\t\t\tonClick={delayedToggle}\n\t\t\tdisabled={loading}\n\t\t\t{...args}\n\t\t>\n\t\t\t{ loading && <Spinner size="1.25em" label="Thinking..." hideLabel /> }\n\t\t</Switch>\n\t);\n}'}},Asynchronous.parameters);var __namedExportsOrder=["Default","CustomContent","Asynchronous"];try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{label:{defaultValue:null,description:"The name of the Switch. Required.",name:"label",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Children are set inside the Switch control. Default is 'ON' when `checked`\nand `OFF` when unchecked. Disable default with `displayDefault={false}`.",name:"children",required:!1,type:{name:"ReactNode"}},tipped:{defaultValue:null,description:"Indicates that the label should be rendered as a tooltip.",name:"tipped",required:!1,type:{name:"boolean | undefined"}},checked:{defaultValue:null,description:'The switch\'s initial "on" state.',name:"checked",required:!1,type:{name:"boolean | undefined"}},onToggle:{defaultValue:null,description:"A function to call when the switch is toggled.",name:"onToggle",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},displayDefault:{defaultValue:null,description:'Indicates whether the default control text should be used when no children\nare provided. "ON" when `checked=true` and "OFF" when `checked=false`.',name:"displayDefault",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},tooltipProps:{defaultValue:null,description:"Tooltip props that should be included when the switch's label is rendered\nas a tooltip.",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipCoreProps> | undefined"}},description:{defaultValue:null,description:"An optional description. Use this in place of `placeholder` text or as\nhelp text for your field control.",name:"description",required:!1,type:{name:"ReactNode"}},labelClass:{defaultValue:null,description:"A className for the label element, which will be a `<label>` if `htmlFor`\nis included and a `<div>` otherwise.",name:"labelClass",required:!1,type:{name:"string | undefined"}},descriptionClass:{defaultValue:null,description:"A className for the description `<div>`.",name:"descriptionClass",required:!1,type:{name:"string | undefined"}},labelId:{defaultValue:null,description:"An id for the label element.",name:"labelId",required:!1,type:{name:"string | undefined"}},descriptionId:{defaultValue:null,description:"An id for the description `<div>`.",name:"descriptionId",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:'The button\'s color, restricted to [design system colors](https://wwnorton.github.io/design-system/docs/color),\nexcluding `disabled` (prefer the `disabled` prop). Note that an `undefined`\ncolor will result in the "primary" color being used.',name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"base"'},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'},{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'}]}},variant:{defaultValue:null,description:"Button variant conveys the button's level of visual emphasis.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"solid"'},{value:'"outline"'},{value:'"ghost"'}]}},icon:{defaultValue:null,description:"An icon to include in the button.",name:"icon",required:!1,type:{name:"IconVariant | SVGIcon | undefined"}},iconRight:{defaultValue:null,description:"Indicates whether the icon should be to the right of the text. By default,\nthe icon is to the left of the text.",name:"iconRight",required:!1,type:{name:"boolean | undefined"}},iconOnly:{defaultValue:null,description:"Indicates whether the button's contents should only be the icon. When\n`true`, the button's text is still required but will be used as the icon's\n`aria-label`. If no `icon` is specified, this prop has no effect.",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},buttonRef:{defaultValue:null,description:"A reference to the inner `<button>` element.",name:"buttonRef",required:!1,type:{name:"Ref<HTMLButtonElement> | undefined"}},iconClass:{defaultValue:null,description:"The className for the Button's icon, if one exists.",name:"iconClass",required:!1,type:{name:"string | undefined"}},textClass:{defaultValue:null,description:"The className for the Button's text, which will be placed in a `<span>`",name:"textClass",required:!1,type:{name:"string | undefined"}},active:{defaultValue:null,description:"Whether the button is currently depressed. Polyfill for :active on keydown.",name:"active",required:!1,type:{name:"boolean | undefined"}},activeClass:{defaultValue:null,description:"A class to convey :active.",name:"activeClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Switch/index.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"packages/react/src/components/Switch/index.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{CustomContent.displayName="CustomContent",CustomContent.__docgenInfo={description:"",displayName:"CustomContent",props:{label:{defaultValue:null,description:"The name of the Switch. Required.",name:"label",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Children are set inside the Switch control. Default is 'ON' when `checked`\nand `OFF` when unchecked. Disable default with `displayDefault={false}`.",name:"children",required:!1,type:{name:"ReactNode"}},tipped:{defaultValue:null,description:"Indicates that the label should be rendered as a tooltip.",name:"tipped",required:!1,type:{name:"boolean | undefined"}},checked:{defaultValue:null,description:'The switch\'s initial "on" state.',name:"checked",required:!1,type:{name:"boolean | undefined"}},onToggle:{defaultValue:null,description:"A function to call when the switch is toggled.",name:"onToggle",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},displayDefault:{defaultValue:null,description:'Indicates whether the default control text should be used when no children\nare provided. "ON" when `checked=true` and "OFF" when `checked=false`.',name:"displayDefault",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},tooltipProps:{defaultValue:null,description:"Tooltip props that should be included when the switch's label is rendered\nas a tooltip.",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipCoreProps> | undefined"}},description:{defaultValue:null,description:"An optional description. Use this in place of `placeholder` text or as\nhelp text for your field control.",name:"description",required:!1,type:{name:"ReactNode"}},labelClass:{defaultValue:null,description:"A className for the label element, which will be a `<label>` if `htmlFor`\nis included and a `<div>` otherwise.",name:"labelClass",required:!1,type:{name:"string | undefined"}},descriptionClass:{defaultValue:null,description:"A className for the description `<div>`.",name:"descriptionClass",required:!1,type:{name:"string | undefined"}},labelId:{defaultValue:null,description:"An id for the label element.",name:"labelId",required:!1,type:{name:"string | undefined"}},descriptionId:{defaultValue:null,description:"An id for the description `<div>`.",name:"descriptionId",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:'The button\'s color, restricted to [design system colors](https://wwnorton.github.io/design-system/docs/color),\nexcluding `disabled` (prefer the `disabled` prop). Note that an `undefined`\ncolor will result in the "primary" color being used.',name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"base"'},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'},{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'}]}},variant:{defaultValue:null,description:"Button variant conveys the button's level of visual emphasis.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"solid"'},{value:'"outline"'},{value:'"ghost"'}]}},icon:{defaultValue:null,description:"An icon to include in the button.",name:"icon",required:!1,type:{name:"IconVariant | SVGIcon | undefined"}},iconRight:{defaultValue:null,description:"Indicates whether the icon should be to the right of the text. By default,\nthe icon is to the left of the text.",name:"iconRight",required:!1,type:{name:"boolean | undefined"}},iconOnly:{defaultValue:null,description:"Indicates whether the button's contents should only be the icon. When\n`true`, the button's text is still required but will be used as the icon's\n`aria-label`. If no `icon` is specified, this prop has no effect.",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},buttonRef:{defaultValue:null,description:"A reference to the inner `<button>` element.",name:"buttonRef",required:!1,type:{name:"Ref<HTMLButtonElement> | undefined"}},iconClass:{defaultValue:null,description:"The className for the Button's icon, if one exists.",name:"iconClass",required:!1,type:{name:"string | undefined"}},textClass:{defaultValue:null,description:"The className for the Button's text, which will be placed in a `<span>`",name:"textClass",required:!1,type:{name:"string | undefined"}},active:{defaultValue:null,description:"Whether the button is currently depressed. Polyfill for :active on keydown.",name:"active",required:!1,type:{name:"boolean | undefined"}},activeClass:{defaultValue:null,description:"A class to convey :active.",name:"activeClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Switch/index.stories.tsx#CustomContent"]={docgenInfo:CustomContent.__docgenInfo,name:"CustomContent",path:"packages/react/src/components/Switch/index.stories.tsx#CustomContent"})}catch(__react_docgen_typescript_loader_error){}try{Asynchronous.displayName="Asynchronous",Asynchronous.__docgenInfo={description:"",displayName:"Asynchronous",props:{label:{defaultValue:null,description:"The name of the Switch. Required.",name:"label",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Children are set inside the Switch control. Default is 'ON' when `checked`\nand `OFF` when unchecked. Disable default with `displayDefault={false}`.",name:"children",required:!1,type:{name:"ReactNode"}},tipped:{defaultValue:null,description:"Indicates that the label should be rendered as a tooltip.",name:"tipped",required:!1,type:{name:"boolean | undefined"}},checked:{defaultValue:null,description:'The switch\'s initial "on" state.',name:"checked",required:!1,type:{name:"boolean | undefined"}},onToggle:{defaultValue:null,description:"A function to call when the switch is toggled.",name:"onToggle",required:!1,type:{name:"((checked: boolean) => void) | undefined"}},displayDefault:{defaultValue:null,description:'Indicates whether the default control text should be used when no children\nare provided. "ON" when `checked=true` and "OFF" when `checked=false`.',name:"displayDefault",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},tooltipProps:{defaultValue:null,description:"Tooltip props that should be included when the switch's label is rendered\nas a tooltip.",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipCoreProps> | undefined"}},description:{defaultValue:null,description:"An optional description. Use this in place of `placeholder` text or as\nhelp text for your field control.",name:"description",required:!1,type:{name:"ReactNode"}},labelClass:{defaultValue:null,description:"A className for the label element, which will be a `<label>` if `htmlFor`\nis included and a `<div>` otherwise.",name:"labelClass",required:!1,type:{name:"string | undefined"}},descriptionClass:{defaultValue:null,description:"A className for the description `<div>`.",name:"descriptionClass",required:!1,type:{name:"string | undefined"}},labelId:{defaultValue:null,description:"An id for the label element.",name:"labelId",required:!1,type:{name:"string | undefined"}},descriptionId:{defaultValue:null,description:"An id for the description `<div>`.",name:"descriptionId",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:'The button\'s color, restricted to [design system colors](https://wwnorton.github.io/design-system/docs/color),\nexcluding `disabled` (prefer the `disabled` prop). Note that an `undefined`\ncolor will result in the "primary" color being used.',name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"base"'},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'},{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'}]}},variant:{defaultValue:null,description:"Button variant conveys the button's level of visual emphasis.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"solid"'},{value:'"outline"'},{value:'"ghost"'}]}},icon:{defaultValue:null,description:"An icon to include in the button.",name:"icon",required:!1,type:{name:"IconVariant | SVGIcon | undefined"}},iconRight:{defaultValue:null,description:"Indicates whether the icon should be to the right of the text. By default,\nthe icon is to the left of the text.",name:"iconRight",required:!1,type:{name:"boolean | undefined"}},iconOnly:{defaultValue:null,description:"Indicates whether the button's contents should only be the icon. When\n`true`, the button's text is still required but will be used as the icon's\n`aria-label`. If no `icon` is specified, this prop has no effect.",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},buttonRef:{defaultValue:null,description:"A reference to the inner `<button>` element.",name:"buttonRef",required:!1,type:{name:"Ref<HTMLButtonElement> | undefined"}},iconClass:{defaultValue:null,description:"The className for the Button's icon, if one exists.",name:"iconClass",required:!1,type:{name:"string | undefined"}},textClass:{defaultValue:null,description:"The className for the Button's text, which will be placed in a `<span>`",name:"textClass",required:!1,type:{name:"string | undefined"}},active:{defaultValue:null,description:"Whether the button is currently depressed. Polyfill for :active on keydown.",name:"active",required:!1,type:{name:"boolean | undefined"}},activeClass:{defaultValue:null,description:"A class to convey :active.",name:"activeClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Switch/index.stories.tsx#Asynchronous"]={docgenInfo:Asynchronous.__docgenInfo,name:"Asynchronous",path:"packages/react/src/components/Switch/index.stories.tsx#Asynchronous"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Field/FieldAddon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{k:function(){return FieldAddon}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),FieldAddon=function FieldAddon(_ref){var children=_ref.children,_ref$baseName=_ref.baseName,baseName=void 0===_ref$baseName?"nds-field":_ref$baseName,_ref$className=_ref.className,className=void 0===_ref$className?baseName+"__addon":_ref$className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:className,children:children})};FieldAddon.displayName="FieldAddon";try{FieldAddon.displayName="FieldAddon",FieldAddon.__docgenInfo={description:"",displayName:"FieldAddon",props:{baseName:{defaultValue:{value:"nds-field"},description:"",name:"baseName",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Field/FieldAddon.tsx#FieldAddon"]={docgenInfo:FieldAddon.__docgenInfo,name:"FieldAddon",path:"packages/react/src/components/Field/FieldAddon.tsx#FieldAddon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Field/FieldFeedback.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:function(){return FieldFeedback}});__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),FieldFeedback=function FieldFeedback(_ref){var errors=_ref.errors,_ref$liveErrors=_ref.liveErrors,liveErrors=void 0===_ref$liveErrors||_ref$liveErrors,_ref$baseName=_ref.baseName,baseName=void 0===_ref$baseName?"nds-field":_ref$baseName,_ref$errorsClass=_ref.errorsClass,errorsClass=void 0===_ref$errorsClass?baseName+"__errors":_ref$errorsClass,errorsId=_ref.errorsId,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?baseName+"__feedback":_ref$className,id=_ref.id,Errors=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((function(){return errors&&errors.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{className:errorsClass,id:errorsId,"aria-label":"Errors","aria-live":liveErrors?"assertive":void 0,"aria-atomic":liveErrors?"true":void 0,children:errors.map((function(err){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:err},err)}))}):null}),[errors,errorsClass,errorsId,liveErrors]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{id:id,className:className,children:[Errors,children]})};FieldFeedback.displayName="FieldFeedback";try{FieldFeedback.displayName="FieldFeedback",FieldFeedback.__docgenInfo={description:"A container for field feedback. Use to display content based on field input.",displayName:"FieldFeedback",props:{liveErrors:{defaultValue:{value:"true"},description:"Indicates whether errors should be a live region. Default is `true`. Only\nset to `false` if you intend to communicate errors to screen reader users\nthrough some other mechanism.",name:"liveErrors",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:{value:"nds-field"},description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},errors:{defaultValue:null,description:"A list of error strings. If provided, this will be set as an unordered\nlist in the first child slot.",name:"errors",required:!1,type:{name:"string[] | undefined"}},errorsClass:{defaultValue:{value:"`${baseName}__errors`"},description:"A className for the error list.",name:"errorsClass",required:!1,type:{name:"string | undefined"}},errorsId:{defaultValue:null,description:"An id for the error list.",name:"errorsId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Field/FieldFeedback.tsx#FieldFeedback"]={docgenInfo:FieldFeedback.__docgenInfo,name:"FieldFeedback",path:"packages/react/src/components/Field/FieldFeedback.tsx#FieldFeedback"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Field/FieldInfo.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{y:function(){return FieldInfo}});__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),FieldInfo=function FieldInfo(_ref){var label=_ref.label,labelTag=_ref.labelTag,indicator=_ref.indicator,description=_ref.description,_ref$baseName=_ref.baseName,baseName=void 0===_ref$baseName?"nds-field":_ref$baseName,_ref$labelClass=_ref.labelClass,labelClass=void 0===_ref$labelClass?baseName+"__label":_ref$labelClass,_ref$indicatorClass=_ref.indicatorClass,indicatorClass=void 0===_ref$indicatorClass?baseName+"__indicator":_ref$indicatorClass,_ref$descriptionClass=_ref.descriptionClass,descriptionClass=void 0===_ref$descriptionClass?baseName+"__desc":_ref$descriptionClass,labelId=_ref.labelId,descriptionId=_ref.descriptionId,children=_ref.children,className=_ref.className,htmlFor=_ref.htmlFor,id=_ref.id,Indicator=react__WEBPACK_IMPORTED_MODULE_3__.useMemo((function(){return indicator?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:indicatorClass,children:["(",indicator,")"]})]}):null}),[indicator,indicatorClass]),Label=react__WEBPACK_IMPORTED_MODULE_3__.useMemo((function(){var labelProps={className:labelClass,htmlFor:htmlFor,id:labelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[label,Indicator]})},LabelTag=htmlFor?"label":labelTag||"div";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LabelTag,Object.assign({},labelProps))}),[label,labelClass,htmlFor,labelId,Indicator,labelTag]),Description=react__WEBPACK_IMPORTED_MODULE_3__.useMemo((function(){return"legend"===labelTag||description?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:descriptionClass,id:descriptionId,children:description}):null}),[labelTag,description,descriptionClass,descriptionId]);return"legend"===labelTag?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[Label,Description,children]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()(baseName+"__info",className),id:id,children:[Label,Description,children]})};FieldInfo.displayName="FieldInfo";try{FieldInfo.displayName="FieldInfo",FieldInfo.__docgenInfo={description:"Information about a related field. Will always contain a label for the field\nand can contain an optional description. Make sure to include a valid `htmlFor`\nprop when used with form controls such as an `<input>`.",displayName:"FieldInfo",props:{baseName:{defaultValue:{value:"nds-field"},description:"",name:"baseName",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"The name of the field. Required.",name:"label",required:!0,type:{name:"ReactNode"}},indicator:{defaultValue:null,description:'An additional label indicator, displayed as a parenthetical inside the\nlabel container. For instance, `indicator="required"` would result in\nlabel text content of `"{label} (required)"`.',name:"indicator",required:!1,type:{name:"string | null | undefined"}},indicatorClass:{defaultValue:{value:"`${baseName}__indicator`"},description:"A className for the indicator `<span>`.",name:"indicatorClass",required:!1,type:{name:"string | undefined"}},labelTag:{defaultValue:null,description:"The HTML element name for the label. If `htmlFor` is included, this will\nautomatically be `label`. If undefined, this will be `div`.",name:"labelTag",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"div"'},{value:'"label"'},{value:'"legend"'}]}},description:{defaultValue:null,description:"An optional description. Use this in place of `placeholder` text or as\nhelp text for your field control.",name:"description",required:!1,type:{name:"ReactNode"}},labelClass:{defaultValue:{value:"`${baseName}__label`"},description:"A className for the label element, which will be a `<label>` if `htmlFor`\nis included and a `<div>` otherwise.",name:"labelClass",required:!1,type:{name:"string | undefined"}},descriptionClass:{defaultValue:{value:"`${baseName}__desc`"},description:"A className for the description `<div>`.",name:"descriptionClass",required:!1,type:{name:"string | undefined"}},labelId:{defaultValue:null,description:"An id for the label element.",name:"labelId",required:!1,type:{name:"string | undefined"}},descriptionId:{defaultValue:null,description:"An id for the description `<div>`.",name:"descriptionId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Field/FieldInfo.tsx#FieldInfo"]={docgenInfo:FieldInfo.__docgenInfo,name:"FieldInfo",path:"packages/react/src/components/Field/FieldInfo.tsx#FieldInfo"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Field/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{FieldAddon:function(){return _FieldAddon__WEBPACK_IMPORTED_MODULE_0__.k},FieldFeedback:function(){return _FieldFeedback__WEBPACK_IMPORTED_MODULE_1__.S},FieldInfo:function(){return _FieldInfo__WEBPACK_IMPORTED_MODULE_2__.y}});var _FieldAddon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/components/Field/FieldAddon.tsx"),_FieldFeedback__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/components/Field/FieldFeedback.tsx"),_FieldInfo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/Field/FieldInfo.tsx"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Field/types.ts");__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_3__,"Icon")&&__webpack_require__.d(__webpack_exports__,{Icon:function(){return _types__WEBPACK_IMPORTED_MODULE_3__.Icon}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_3__,"Listbox")&&__webpack_require__.d(__webpack_exports__,{Listbox:function(){return _types__WEBPACK_IMPORTED_MODULE_3__.Listbox}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_3__,"Option")&&__webpack_require__.d(__webpack_exports__,{Option:function(){return _types__WEBPACK_IMPORTED_MODULE_3__.Option}})},"./packages/react/src/components/Field/types.ts":function(){}}]);