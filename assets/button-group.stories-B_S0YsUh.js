import{j as u}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./compiler-runtime-DWiNezgD.js";import{c as b}from"./class-names-C2kgz_Qa.js";import"./iframe-XRykOgCy.js";import"./preload-helper-PPVm8Dsz.js";const m=r=>{const t=d.c(12);let e,n,a,l;t[0]!==r?({children:e,type:l,isActive:n,...a}=r,t[0]=r,t[1]=e,t[2]=n,t[3]=a,t[4]=l):(e=t[1],n=t[2],a=t[3],l=t[4]);const c=n&&"bg-primary-50 text-primary-500 hover:bg-primary-50 hover:text-primary-500 active:bg-primary-50 disabled:bg-neutral-100 disabled:text-neutral-500";let i;t[5]!==c?(i=b("bg-neutral-0 focus:outline-primary-200 disabled:bg-neutral-0 relative -ml-px inline-flex px-4 py-2 font-medium text-neutral-700 ring-1 ring-neutral-400 ring-inset hover:bg-neutral-100 hover:text-neutral-800 focus:z-10 focus:outline-2 focus:outline-offset-0 focus:outline-solid active:bg-neutral-200 disabled:text-neutral-500",c),t[5]=c,t[6]=i):i=t[6];let s;return t[7]!==e||t[8]!==a||t[9]!==i||t[10]!==l?(s=u.jsx("button",{"data-slot":"group-button",type:l,className:i,...a,children:e}),t[7]=e,t[8]=a,t[9]=i,t[10]=l,t[11]=s):s=t[11],s},o=r=>{const t=d.c(2),{children:e}=r;let n;return t[0]!==e?(n=u.jsx("div",{className:"isolate inline-flex [&>[data-slot=group-button]:first-of-type]:ml-0 [&>[data-slot=group-button]:first-of-type]:rounded-l [&>[data-slot=group-button]:last-of-type]:rounded-r",children:e}),t[0]=e,t[1]=n):n=t[1],n};o.Button=m;try{o.displayName="ButtonGroup",o.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}}}catch{}try{o.Button.displayName="ButtonGroup.Button",o.Button.__docgenInfo={description:"",displayName:"ButtonGroup.Button",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const g={title:"ButtonGroup",component:o,args:{normalLabel:"Normal",disabledLabel:"Disabled",activeLabel:"Active",activeDisabledLabel:"Active & Disabled",extraLabel:"Button 1"},argTypes:{normalLabel:{control:"text"},disabledLabel:{control:"text"},activeLabel:{control:"text"},activeDisabledLabel:{control:"text"},extraLabel:{control:"text"}},parameters:{options:{showPanel:!1}}},p={render:({normalLabel:r,disabledLabel:t,activeLabel:e,activeDisabledLabel:n,extraLabel:a})=>u.jsxs(o,{children:[u.jsx(o.Button,{type:"button",children:r}),u.jsx(o.Button,{type:"button",disabled:!0,children:t}),u.jsx(o.Button,{type:"button",isActive:!0,children:e}),u.jsx(o.Button,{type:"button",isActive:!0,disabled:!0,children:n}),u.jsx(o.Button,{type:"button",children:a})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    normalLabel,
    disabledLabel,
    activeLabel,
    activeDisabledLabel,
    extraLabel
  }) => <ButtonGroup>
      <ButtonGroup.Button type='button'>{normalLabel}</ButtonGroup.Button>
      <ButtonGroup.Button type='button' disabled>
        {disabledLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button' isActive>
        {activeLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button' isActive disabled>
        {activeDisabledLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button'>{extraLabel}</ButtonGroup.Button>
    </ButtonGroup>
}`,...p.parameters?.docs?.source}}};const L=["Default"];export{p as Default,L as __namedExportsOrder,g as default};
