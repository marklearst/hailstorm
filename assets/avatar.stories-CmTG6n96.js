import{j as s}from"./jsx-runtime-u17CrQMm.js";import{A as t}from"./avatar-Bj1bI0TO.js";import{h as c,g as i}from"./storybook-utils-C5xEhci0.js";import"./compiler-runtime-DWiNezgD.js";import"./iframe-XRykOgCy.js";import"./preload-helper-PPVm8Dsz.js";const e=["primary","success","neutral","warning","danger"],x={title:"Avatar",component:t,parameters:i("Circular user icon. It displays first 2 characters from the passed children text "),args:{children:"Name Lastname",color:e[0]},argTypes:{color:{options:e},onClick:c}},r={},o={argTypes:{color:c},render:({children:n,...l})=>s.jsx("div",{className:"flex flex-col gap-4",children:e.map(a=>s.jsx(t,{...l,color:a,children:n},a))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes: {
    color: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className='flex flex-col gap-4'>
      {colors.map(color => <Avatar key={color} {...args} color={color}>
          {children}
        </Avatar>)}
    </div>
}`,...o.parameters?.docs?.source}}};const h=["Default","Colors"];export{o as Colors,r as Default,h as __namedExportsOrder,x as default};
