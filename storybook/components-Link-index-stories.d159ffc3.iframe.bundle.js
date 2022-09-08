(self.webpackChunkwwnds=self.webpackChunkwwnds||[]).push([[140],{"./packages/react/src/components/Link/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},External:function(){return External},ThirdPartyRouter:function(){return ThirdPartyRouter},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var react_router_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/node_modules/react-router-dom/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Link/index.ts"),_utilities_link__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/utilities/link/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Link",component:___WEBPACK_IMPORTED_MODULE_3__.Link,argTypes:{external:{control:{type:"boolean"}}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Link,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={children:"Default link",href:"?path=/story/link--default",external:!1};var External=Template.bind({});External.args={children:"Norton Design System GitHub",href:"https://github.com/wwnorton/design-system",external:!0};var ThirdPartyRouter=function ThirdPartyRouter(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utilities_link__WEBPACK_IMPORTED_MODULE_4__.LinkContext.Provider,{value:react_router_dom__WEBPACK_IMPORTED_MODULE_6__.rU,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/",children:"Norton Design System"})})})};ThirdPartyRouter.displayName="ThirdPartyRouter",Default.parameters=Object.assign({storySource:{source:"(args) => <Link {...args} />"}},Default.parameters),External.parameters=Object.assign({storySource:{source:"(args) => <Link {...args} />"}},External.parameters),ThirdPartyRouter.parameters=Object.assign({storySource:{source:'(): JSX.Element => (\n\t<BrowserRouter>\n\t\t<LinkContext.Provider value={ReactLink}>\n\t\t\t<Link to="/">Norton Design System</Link>\n\t\t</LinkContext.Provider>\n\t</BrowserRouter>\n)'}},ThirdPartyRouter.parameters);var __namedExportsOrder=["Default","External","ThirdPartyRouter"]},"./packages/react/src/components/Link/Link.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{r:function(){return Link}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_utilities_link__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/utilities/link/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/components/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["external","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Link=react__WEBPACK_IMPORTED_MODULE_4__.forwardRef((function(props,ref){var LinkComponent=(0,_utilities_link__WEBPACK_IMPORTED_MODULE_5__.useLink)();if(LinkComponent)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LinkComponent,Object.assign({className:"nds-link",ref:ref},props));var _ref=props,external=_ref.external,children=_ref.children,linkProps=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a",Object.assign({className:"nds-link",rel:external?"noopener noreferrer":void 0,target:external?"_blank":void 0,ref:ref},linkProps,{children:[children,external&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{className:"nds-link__launch",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_6__.JO,{size:"1em",variant:"launch"})})]}))}));try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{external:{defaultValue:null,description:"Indicates that the link should open in a new window or tab.",name:"external",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"packages/react/src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Link/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Link:function(){return _Link__WEBPACK_IMPORTED_MODULE_0__.r}});var _Link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/components/Link/Link.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/components/Link/types.ts");__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"Listbox")&&__webpack_require__.d(__webpack_exports__,{Listbox:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.Listbox}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"Option")&&__webpack_require__.d(__webpack_exports__,{Option:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.Option}})},"./packages/react/src/components/Link/types.ts":function(){}}]);