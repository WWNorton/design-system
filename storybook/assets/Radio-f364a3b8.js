import{j as n}from"./index-a1e85e29.js";import{R as i}from"./index-0cbcd92a.js";import{C as r,a as s}from"./ChoiceField-8cd78b39.js";const a=i.forwardRef((e,l)=>n(r,{type:"radio",ref:l,...e})),t=e=>n(s,{multiple:!1,...e});try{a.displayName="Radio",a.__docgenInfo={description:"A single radio button. Don't use this by itself.",displayName:"Radio",props:{baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string"}},inputClass:{defaultValue:null,description:"The className for the Checkbox's `<input>` element.",name:"inputClass",required:!1,type:{name:"string"}},requiredIndicator:{defaultValue:null,description:'Indicates that the indicator should be "required" when `required=true`.',name:"requiredIndicator",required:!1,type:{name:"boolean"}},optionalIndicator:{defaultValue:null,description:'Indicates that the indicator should be "optional" when `required=false`.',name:"optionalIndicator",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"An optional description. Use this in place of `placeholder` text or as\nhelp text for your field control.",name:"description",required:!1,type:{name:"ReactNode"}},labelClass:{defaultValue:null,description:"A className for the label element, which will be a `<label>` if `htmlFor`\nis included and a `<div>` otherwise.",name:"labelClass",required:!1,type:{name:"string"}},descriptionClass:{defaultValue:null,description:"A className for the description `<div>`.",name:"descriptionClass",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"An id for the label element.",name:"labelId",required:!1,type:{name:"string"}},descriptionId:{defaultValue:null,description:"An id for the description `<div>`.",name:"descriptionId",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:`A list of error strings. If provided, this will be set as an unordered
list in the first child slot.`,name:"errors",required:!1,type:{name:"string[]"}},errorsClass:{defaultValue:null,description:"A className for the error list.",name:"errorsClass",required:!1,type:{name:"string"}},errorsId:{defaultValue:null,description:"An id for the error list.",name:"errorsId",required:!1,type:{name:"string"}},validators:{defaultValue:null,description:`A list of validators. A validator contains a function that tests the value
for validity and a corresponding message that conveys why the test failed.`,name:"validators",required:!1,type:{name:"ValidatorEntry[]"}},validateOnDOMChange:{defaultValue:null,description:"Indicates that validation should occur when the DOM's `change` event is\ntriggered. Note that this event is different from React's `onChange`\ncallback, which triggers on the DOM's `input` event.\n\nReference:\n- [MDN - `change event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)",name:"validateOnDOMChange",required:!1,type:{name:"boolean"}},validateOnChange:{defaultValue:null,description:"Indicates that validation should occur when `onChange` is triggered. Alias\nof `validateOnInput`.",name:"validateOnChange",required:!1,type:{name:"boolean"}},maxLengthRestrictsInput:{defaultValue:null,description:"Indicates that a `maxLength` value should prevent input beyond the `maxLength`.",name:"maxLengthRestrictsInput",required:!1,type:{name:"boolean"}},onDOMChange:{defaultValue:null,description:"A callback that will be triggered any time the DOM's `change` event is\ntriggered. Note that this event is different from React's `onChange`\nevent, which triggers on the DOM's `input` event.\n\nReference:\n- [MDN - `change event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)\n- [MDN - `input event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)",name:"onDOMChange",required:!1,type:{name:"((e: Event) => void)"}},onValidate:{defaultValue:null,description:"A callback that will be triggered any time the input is validated. See\nrelated `validators`, `validateOnChange`, and `validateOnChange`.",name:"onValidate",required:!1,type:{name:"((errors: string[]) => void)"}},indeterminate:{defaultValue:null,description:'Mark the checkbox as indeterminate. Has no effect when `type="radio"`.\n\nReference:\n- [DOM - `indeterminate`](https://html.spec.whatwg.org/multipage/input.html#dom-input-indeterminate)\n- [MDN - `indeterminate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)',name:"indeterminate",required:!1,type:{name:"boolean"}},thumbnail:{defaultValue:null,description:"The thumbnail element.",name:"thumbnail",required:!1,type:{name:"ReactNode"}},controlClass:{defaultValue:null,description:"The className for the control that sighted users will see.",name:"controlClass",required:!1,type:{name:"string"}},thumbnailClass:{defaultValue:null,description:"The className for the Checkbox's thumbnail element.",name:"thumbnailClass",required:!1,type:{name:"string"}},checkedClass:{defaultValue:null,description:`A className that will be applied to the root of the component when it is
checked.`,name:"checkedClass",required:!1,type:{name:"string"}}}}}catch{}try{t.displayName="RadioGroup",t.__docgenInfo={description:"A group of radio buttons.",displayName:"RadioGroup",props:{label:{defaultValue:null,description:`Text that conveys how the choices are related and prompts the user to choose
one or more choice.`,name:"label",required:!0,type:{name:"ReactNode"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name that will be assigned to all child `<input>` elements.",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Indicates whether a selection must be made or not.",name:"required",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Indicates that the indicator should be "required" when `required=true`.',name:"requiredIndicator",required:!1,type:{name:"boolean"}},optionalIndicator:{defaultValue:null,description:'Indicates that the indicator should be "optional" when `required=false`.',name:"optionalIndicator",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"An optional description. Use this in place of `placeholder` text or as\nhelp text for your field control.",name:"description",required:!1,type:{name:"ReactNode"}},labelClass:{defaultValue:null,description:"A className for the label element, which will be a `<label>` if `htmlFor`\nis included and a `<div>` otherwise.",name:"labelClass",required:!1,type:{name:"string"}},descriptionClass:{defaultValue:null,description:"A className for the description `<div>`.",name:"descriptionClass",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"An id for the label element.",name:"labelId",required:!1,type:{name:"string"}},descriptionId:{defaultValue:null,description:"An id for the description `<div>`.",name:"descriptionId",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:`A list of error strings. If provided, this will be set as an unordered
list in the first child slot.`,name:"errors",required:!1,type:{name:"string[]"}},errorsClass:{defaultValue:null,description:"A className for the error list.",name:"errorsClass",required:!1,type:{name:"string"}},errorsId:{defaultValue:null,description:"An id for the error list.",name:"errorsId",required:!1,type:{name:"string"}},fieldName:{defaultValue:null,description:"The name that will be assigned to the parent `<fieldset>`.",name:"fieldName",required:!1,type:{name:"string"}},choiceClass:{defaultValue:null,description:"The class name that will be used on all Choice elements.",name:"choiceClass",required:!1,type:{name:"string"}}}}}catch{}export{a as R,t as a};
//# sourceMappingURL=Radio-f364a3b8.js.map
