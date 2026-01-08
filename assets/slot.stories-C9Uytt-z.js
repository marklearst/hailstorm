import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as o}from"./slot-C77zTAPi.js";import"./iframe-XRykOgCy.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";const i={title:"Slot",component:o,args:{label:"Slotted link",href:"/",className:"text-primary-500 underline"},argTypes:{label:{control:"text"},href:{control:"text"},className:{control:"text"}}},e={render:({label:s,href:a,className:n})=>r.jsx(o,{className:n,children:r.jsx("a",{href:a,children:s})})},t={render:()=>r.jsx(o,{className:"rounded-sm bg-neutral-100 px-2 py-1",style:{fontWeight:600},children:r.jsx("button",{type:"button",children:"Slotted button"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    href,
    className
  }) => <Slot className={className}>
      <a href={href}>{label}</a>
    </Slot>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Slot className='rounded-sm bg-neutral-100 px-2 py-1' style={{
    fontWeight: 600
  }}>
      <button type='button'>Slotted button</button>
    </Slot>
}`,...t.parameters?.docs?.source}}};const u=["Default","WithStyles"];export{e as Default,t as WithStyles,u as __namedExportsOrder,i as default};
