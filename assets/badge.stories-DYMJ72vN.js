import{j as e}from"./jsx-runtime-u17CrQMm.js";import{h as o}from"./storybook-utils-C5xEhci0.js";import{B as d}from"./badge-CCyesFEs.js";import"./compiler-runtime-DWiNezgD.js";import"./iframe-XRykOgCy.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";const l=["primary","violet","green","neutral","yellow","teal","orange","pink","red","purple"],c=["default","rounded"],f={title:"Badge",component:d,args:{children:"Badge Label"},argTypes:{onClick:o}},a={},s={args:{onClick:void 0},argTypes:{type:o,shape:o},render:({children:t,...i})=>e.jsx("div",{className:"container grid grid-cols-2 gap-4",children:c.map(r=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx("header",{children:r}),l.map(p=>e.jsx(d,{...i,shape:r,type:p,children:t},r+p))]},r))})},n={render:({children:t})=>e.jsx(d,{className:"text-neutral-0 bg-neutral-600",children:t})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: undefined
  },
  argTypes: {
    type: hiddenArgControl,
    shape: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className='container grid grid-cols-2 gap-4'>
      {shapes.map(shape => <div key={shape} className='grid gap-4'>
          <header>{shape}</header>
          {types.map(type =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      <Badge key={shape! + type} {...args} shape={shape} type={type}>
              {children}
            </Badge>)}
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: ({
    children
  }) => <Badge className='text-neutral-0 bg-neutral-600'>{children}</Badge>
}`,...n.parameters?.docs?.source}}};const v=["Default","TypesAndShapes","CustomClassName"];export{n as CustomClassName,a as Default,s as TypesAndShapes,v as __namedExportsOrder,f as default};
