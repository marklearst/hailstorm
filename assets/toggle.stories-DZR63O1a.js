import{j as c}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./compiler-runtime-DWiNezgD.js";import{r as u}from"./iframe-XRykOgCy.js";import{T as d}from"./toggle-CiARfDlV.js";import"./preload-helper-PPVm8Dsz.js";import"./keyboard-e8CRX24o.js";import"./use-sync-refs-Bo2Xpa_i.js";import"./description-DTxrjahs.js";import"./form-fields-B19Y_PBl.js";import"./index-hh3hN7OQ.js";import"./index-74y4g9Sn.js";import"./hidden-Cmaimn2X.js";import"./label-DMne1_zU.js";import"./use-resolve-button-type-Bih9nJmV.js";import"./bugs-B59rR7-u.js";import"./class-names-C2kgz_Qa.js";const q={title:"Toggle",component:d},f=r=>{const e=g.c(6),[i,n]=u.useState(r);let o,s;e[0]!==r?(o=()=>{n(r)},s=[r],e[0]=r,e[1]=o,e[2]=s):(o=e[1],s=e[2]),u.useEffect(o,s);let t;e[3]===Symbol.for("react.memo_cache_sentinel")?(t=()=>n(x),e[3]=t):t=e[3];const l=t;let a;return e[4]!==i?(a={isChecked:i,handleOnChange:l},e[4]=i,e[5]=a):a=e[5],a},h=r=>{const e=g.c(7),{checked:i,disabled:n}=r,{isChecked:o,handleOnChange:s}=f(i);let t;e[0]!==n||e[1]!==s||e[2]!==o?(t=c.jsx(d.Switch,{checked:o,disabled:n,onChange:s,ariaLabel:"Enable notifications"}),e[0]=n,e[1]=s,e[2]=o,e[3]=t):t=e[3];let l;e[4]===Symbol.for("react.memo_cache_sentinel")?(l=c.jsx(d.Label,{children:"notifications"}),e[4]=l):l=e[4];let a;return e[5]!==t?(a=c.jsxs(d,{children:[t,l]}),e[5]=t,e[6]=a):a=e[6],a},b=r=>{const e=g.c(4),{checked:i,disabled:n}=r,{isChecked:o,handleOnChange:s}=f(i);let t;return e[0]!==n||e[1]!==s||e[2]!==o?(t=c.jsx(d.Switch,{checked:o,disabled:n,onChange:s,ariaLabel:"Enable notifications"}),e[0]=n,e[1]=s,e[2]=o,e[3]=t):t=e[3],t},m={render:r=>c.jsx(h,{...r}),args:{checked:!1,disabled:!1}},p={render:r=>c.jsx(b,{...r}),args:{...m.args}};function x(r){return!r}m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ToggleWithLabelStory {...args} />;
  },
  args: {
    checked: false,
    disabled: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ToggleWithoutLabelStory {...args} />;
  },
  args: {
    ...Default.args
  }
}`,...p.parameters?.docs?.source}}};const v=["Default","WithoutLabel"];export{m as Default,p as WithoutLabel,v as __namedExportsOrder,q as default};
