import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as D}from"./compiler-runtime-BLcvFMuB.js";import{r as H}from"./iframe-B1MrCL0G.js";import{F as o}from"./form-field-CrkY1ccE.js";import{g as R}from"./zoom-to-fit-icon-DHGgW-0X.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";import"./use-resolve-button-type-BLSzryf6.js";import"./keyboard-Bq9WUD44.js";import"./use-sync-refs-BLyEwgBe.js";import"./form-fields-CmSOWfB4.js";import"./index-BxOsspT5.js";import"./index-Cuw-oBtx.js";import"./hidden-CFwRvjYG.js";import"./description-8CcAxyhx.js";import"./label-CABkoH4b.js";import"./bugs-WVkwHmE-.js";import"./focus-management-DnrBnQnZ.js";import"./floating-CLCxjxpZ.js";import"./floating-ui.react-dom-DvM99rDh.js";import"./use-text-value-B1wJY8WI.js";import"./portal-VJJ9eBMU.js";import"./use-inert-others-C0EAsWax.js";import"./open-closed-D2XKhh6-.js";import"./badge-BpOk95Sf.js";import"./index-uwaZig9Y.js";import"./use-event-listener-B3NJl8pS.js";import"./active-element-history-tTpxgl9p.js";import"./tag-CCGrKyNz.js";const de={title:"Input/TextInput",component:o.TextInput,args:{error:!1,disabled:!1,hasLeftIcon:!1,readOnly:!1,value:"",optional:!1},argTypes:{error:{control:"boolean"},disabled:{control:"boolean"},hasLeftIcon:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},optional:{control:"boolean"}}},l=I=>{const e=D.c(18),{error:L,disabled:N,hasLeftIcon:O,readOnly:S,value:T,optional:j}=I,t=L===void 0?!1:L,b=N===void 0?!1:N,W=O===void 0?!1:O,g=S===void 0?!1:S,[y,E]=H.useState(T);let s;e[0]!==j?(s=r.jsx(o.Label,{htmlFor:"value",optional:j,children:"Label"}),e[0]=j,e[1]=s):s=e[1];let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=r.jsx(o.Description,{id:"value-description",children:"Description"}),e[2]=c):c=e[2];let a;e[3]!==s?(a=r.jsxs(o.LabelGroup,{children:[s,c]}),e[3]=s,e[4]=a):a=e[4];let d;e[5]===Symbol.for("react.memo_cache_sentinel")?(d=k=>E(k.target.value),e[5]=d):d=e[5];const w=W?R:void 0;let n;e[6]!==b||e[7]!==t||e[8]!==y||e[9]!==g||e[10]!==w?(n=r.jsx(o.TextInput,{id:"value",value:y,onChange:d,ariaDescribedBy:"value-description",error:t,disabled:b,LeftIcon:w,readOnly:g}),e[6]=b,e[7]=t,e[8]=y,e[9]=g,e[10]=w,e[11]=n):n=e[11];let i;e[12]!==t?(i=t?r.jsx(o.ErrorMessage,{children:"Error message."}):null,e[12]=t,e[13]=i):i=e[13];let p;return e[14]!==n||e[15]!==i||e[16]!==a?(p=r.jsxs(o,{children:[a,n,i]}),e[14]=n,e[15]=i,e[16]=a,e[17]=p):p=e[17],p},m={render:I=>r.jsx("div",{className:"w-72",children:r.jsx(l,{...I})})},u={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(l,{error:!0})})},x={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(l,{hasLeftIcon:!0})})},f={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(l,{readOnly:!0,value:"Readonly text"})})},v={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(l,{disabled:!0})})},h={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(l,{optional:!0})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className='w-72'>
      <TextInputWithHooks {...args} />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-72'>
      <TextInputWithHooks error />
    </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-72'>
      <TextInputWithHooks hasLeftIcon />
    </div>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-72'>
      <TextInputWithHooks readOnly value='Readonly text' />
    </div>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-72'>
      <TextInputWithHooks disabled />
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-72'>
      <TextInputWithHooks optional />
    </div>
}`,...h.parameters?.docs?.source}}};const pe=["Default","WithError","WithLeftIcon","ReadOnly","Disabled","Optional"];export{m as Default,v as Disabled,h as Optional,f as ReadOnly,u as WithError,x as WithLeftIcon,pe as __namedExportsOrder,de as default};
