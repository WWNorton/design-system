import{a as I,F as W,j as a}from"./index-a1e85e29.js";import{R as L}from"./index-0cbcd92a.js";import{T as t}from"./Tag-d9ffcfa9.js";import{I as P}from"./Icon-04f449eb.js";import{L as j}from"./Link-a9242a41.js";import"./_commonjsHelpers-de833af9.js";import"./BaseButton-a4b1d3e6.js";import"./hook-0eff1646.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";const N={title:"Tag",component:t},n=i=>a(t,{...i}),s=n.bind({});s.args={children:"Tag label",color:void 0};const r=n.bind({});r.args={color:"green",children:I(W,{children:[a(P,{variant:"download"}),"With Icon"]})};const e=n.bind({});e.args={children:a(j,{href:"https://github.com/wwnorton/design-system",external:!0,children:"Norton Design System GitHub"})};const o=i=>{const[S,x]=L.useState(!1);return S?a("span",{...i}):a(t,{...i,dismissible:!0,onDismiss:()=>x(!0),children:"Dismissible"})};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"(args: TagProps) => <Tag {...args} />",...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,g,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"(args: TagProps) => <Tag {...args} />",...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,T,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"(args: TagProps) => <Tag {...args} />",...(h=(T=e.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var f,b,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(args: TagProps) => {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed) return <span {...args} />;
  return <Tag {...args} dismissible onDismiss={() => setDismissed(true)}>
            Dismissible
        </Tag>;
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const O=["Default","WithIcon","WithLink","Dismissible"];export{s as Default,o as Dismissible,r as WithIcon,e as WithLink,O as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories-778ddfde.js.map
