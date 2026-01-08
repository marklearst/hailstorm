import{j as s}from"./jsx-runtime-u17CrQMm.js";import{A as a}from"./alert-BmSI3RhY.js";import{g as l,h as o}from"./storybook-utils-C5xEhci0.js";import"./compiler-runtime-BLcvFMuB.js";import"./iframe-B1MrCL0G.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";import"./zoom-to-fit-icon-DHGgW-0X.js";const d=["info","success","warning","danger"],A={title:"Alert",component:a,parameters:{layout:"fullscreen",...l("Wide and big alert bar to inform user about important things")},args:{title:"Alert Title",children:"Alert content",intent:"info"}},r={},e={argTypes:{intent:o},render:({children:i,...c})=>s.jsx("div",{className:"flex flex-col gap-4",children:d.map(t=>s.jsx(a,{...c,intent:t,children:i},t))})},n={...e,args:{children:void 0},argTypes:{...e.argTypes,children:o}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  argTypes: {
    intent: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className='flex flex-col gap-4'>
      {intents.map(intent => <Alert key={intent} {...args} intent={intent}>
          {children}
        </Alert>)}
    </div>
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Intents,
  args: {
    children: undefined
  },
  argTypes: {
    ...Intents.argTypes,
    children: hiddenArgControl
  }
}`,...n.parameters?.docs?.source}}};const T=["Basic","Intents","OnlyTitles"];export{r as Basic,e as Intents,n as OnlyTitles,T as __namedExportsOrder,A as default};
