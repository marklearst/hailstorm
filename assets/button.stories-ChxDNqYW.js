import{j as c}from"./jsx-runtime-u17CrQMm.js";import{B as d}from"./button-CeF785Lf.js";import{S as l,a as u,b as I}from"./zoom-to-fit-icon-DHGgW-0X.js";import{h as p}from"./storybook-utils-C5xEhci0.js";import"./compiler-runtime-BLcvFMuB.js";import"./iframe-B1MrCL0G.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";import"./spinner-BbeMO_9P.js";const h=["primary","secondary","minimal","danger","danger-secondary"],s={undefined:void 0,ChatIcon:I,DiagramTreeIcon:u,LockIcon:l},i={description:"Icon component",options:Object.keys(s),mapping:s},C={title:"Button",component:d,args:{children:"Badge Label",LeftIcon:void 0,RightIcon:void 0,loading:!1},argTypes:{onClick:p,LeftIcon:i,RightIcon:i}},r={},e={args:{LeftIcon:s.ChatIcon,RightIcon:s.LockIcon}},o={args:{loading:!0}},a={args:{disabled:!0}},n={argTypes:{type:p},render:({children:m,...g})=>c.jsx("div",{className:"flex flex-col gap-4",children:h.map(t=>c.jsx(d,{...g,type:"button",variant:t,children:m},t))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    LeftIcon: icons.ChatIcon,
    RightIcon: icons.LockIcon
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  argTypes: {
    type: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className='flex flex-col gap-4'>
      {variants.map(variant => <Button key={variant} {...args} type='button' variant={variant}>
          {children}
        </Button>)}
    </div>
}`,...n.parameters?.docs?.source}}};const T=["Base","WithIcons","Loading","Disabled","Types"];export{r as Base,a as Disabled,o as Loading,n as Types,e as WithIcons,T as __namedExportsOrder,C as default};
