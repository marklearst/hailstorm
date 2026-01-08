import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as B}from"./compiler-runtime-DWiNezgD.js";import{r as O}from"./iframe-XRykOgCy.js";import{F as i}from"./form-field-4o_IvgO1.js";import"./preload-helper-PPVm8Dsz.js";import"./zoom-to-fit-icon-DOKZHS_Q.js";import"./class-names-C2kgz_Qa.js";import"./use-resolve-button-type-Bih9nJmV.js";import"./keyboard-e8CRX24o.js";import"./use-sync-refs-Bo2Xpa_i.js";import"./form-fields-B19Y_PBl.js";import"./index-hh3hN7OQ.js";import"./index-74y4g9Sn.js";import"./hidden-Cmaimn2X.js";import"./description-DTxrjahs.js";import"./label-DMne1_zU.js";import"./bugs-B59rR7-u.js";import"./focus-management-B5wdF1i0.js";import"./floating-CSJJAjNj.js";import"./floating-ui.react-dom-DsQUudfM.js";import"./use-text-value-D1fNxpdz.js";import"./portal-e4QpGYSP.js";import"./use-inert-others-CXVwNTP7.js";import"./open-closed-CRhmYJjH.js";import"./badge-CCyesFEs.js";import"./index-D5IHSo0t.js";import"./use-event-listener-Cgnb5sR3.js";import"./active-element-history-DQb1dsjx.js";import"./tag-C8SHyF_X.js";const de={title:"Input/Listbox",args:{label:"Label",description:"Description",placeholder:"Select...",width:288,disabled:!1},argTypes:{label:{control:"text"},description:{control:"text"},placeholder:{control:"text"},width:{control:{type:"range",min:200,max:360,step:16}},disabled:{control:"boolean"}}},w=[{id:1,name:"John Lennon",isDead:!0},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],_=l=>{const e=B.c(17),{label:s,description:o,placeholder:x}=l,[h,u]=O.useState(null);let f;e[0]!==s?(f=t.jsx(i.Label,{htmlFor:"value",children:s}),e[0]=s,e[1]=f):f=e[1];let n;e[2]!==o?(n=t.jsx(i.Description,{id:"value-description",children:o}),e[2]=o,e[3]=n):n=e[3];let m;e[4]!==f||e[5]!==n?(m=t.jsxs(i.LabelGroup,{children:[f,n]}),e[4]=f,e[5]=n,e[6]=m):m=e[6];const a=h?.name??null;let d;e[7]!==x||e[8]!==a?(d=t.jsx(i.Listbox.Button,{children:t.jsx(i.Listbox.Button.TextValue,{value:a,placeholder:x})}),e[7]=x,e[8]=a,e[9]=d):d=e[9];let r;e[10]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx(i.Listbox.Options,{children:w.map(W)}),e[10]=r):r=e[10];let c;e[11]!==h||e[12]!==d?(c=t.jsxs(i.Listbox,{value:h,onChange:u,children:[d,r]}),e[11]=h,e[12]=d,e[13]=c):c=e[13];let p;return e[14]!==m||e[15]!==c?(p=t.jsxs(i,{children:[m,c]}),e[14]=m,e[15]=c,e[16]=p):p=e[16],p},D=l=>{const e=B.c(20),{disabled:s,label:o,description:x,placeholder:h}=l,[u,f]=O.useState(null);let n;e[0]!==o?(n=t.jsx(i.Label,{htmlFor:"value",children:o}),e[0]=o,e[1]=n):n=e[1];let m;e[2]!==x?(m=t.jsx(i.Description,{id:"value-description",children:x}),e[2]=x,e[3]=m):m=e[3];let a;e[4]!==n||e[5]!==m?(a=t.jsxs(i.LabelGroup,{children:[n,m]}),e[4]=n,e[5]=m,e[6]=a):a=e[6];const d=u?.name??null;let r;e[7]!==h||e[8]!==d?(r=t.jsx(i.Listbox.Button.BadgeValue,{value:d,placeholder:h}),e[7]=h,e[8]=d,e[9]=r):r=e[9];let c;e[10]!==s||e[11]!==r?(c=t.jsx(i.Listbox.Button,{disabled:s,children:r}),e[10]=s,e[11]=r,e[12]=c):c=e[12];let p;e[13]===Symbol.for("react.memo_cache_sentinel")?(p=t.jsx(i.Listbox.Options,{children:w.map(k)}),e[13]=p):p=e[13];let b;e[14]!==u||e[15]!==c?(b=t.jsxs(i.Listbox,{value:u,onChange:f,children:[c,p]}),e[14]=u,e[15]=c,e[16]=b):b=e[16];let j;return e[17]!==a||e[18]!==b?(j=t.jsxs(i,{children:[a,b]}),e[17]=a,e[18]=b,e[19]=j):j=e[19],j},T=l=>{const e=B.c(20),{label:s,description:o,placeholder:x}=l;let h;e[0]===Symbol.for("react.memo_cache_sentinel")?(h=[],e[0]=h):h=e[0];const[u,f]=O.useState(h);let n;e[1]!==u?(n=u.map(H).join(", "),e[1]=u,e[2]=n):n=e[2];const m=n;let a;e[3]!==s?(a=t.jsx(i.Label,{htmlFor:"value",children:s}),e[3]=s,e[4]=a):a=e[4];let d;e[5]!==o?(d=t.jsx(i.Description,{id:"value-description",children:o}),e[5]=o,e[6]=d):d=e[6];let r;e[7]!==a||e[8]!==d?(r=t.jsxs(i.LabelGroup,{children:[a,d]}),e[7]=a,e[8]=d,e[9]=r):r=e[9];const c=m||null;let p;e[10]!==x||e[11]!==c?(p=t.jsx(i.Listbox.Button,{children:t.jsx(i.Listbox.Button.TextValue,{value:c,placeholder:x})}),e[10]=x,e[11]=c,e[12]=p):p=e[12];let b;e[13]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx(i.Listbox.Options,{children:w.map(F)}),e[13]=b):b=e[13];let j;e[14]!==u||e[15]!==p?(j=t.jsxs(i.Listbox,{value:u,onChange:f,multiple:!0,children:[p,b]}),e[14]=u,e[15]=p,e[16]=j):j=e[16];let L;return e[17]!==r||e[18]!==j?(L=t.jsxs(i,{children:[r,j]}),e[17]=r,e[18]=j,e[19]=L):L=e[19],L},v={render:({label:l,description:e,placeholder:s,width:o})=>t.jsx("div",{style:{width:o},children:t.jsx(_,{label:l,description:e,placeholder:s})})},g={render:({label:l,description:e,placeholder:s,width:o,disabled:x})=>t.jsx("div",{style:{width:o},children:t.jsx(D,{label:l,description:e,placeholder:s,disabled:x})})},y={render:({label:l,description:e,placeholder:s,width:o})=>t.jsx("div",{style:{width:o},children:t.jsx(D,{label:l,description:e,placeholder:s,disabled:!0})})},S={render:({label:l,description:e,placeholder:s,width:o})=>t.jsx("div",{style:{width:o},children:t.jsx(T,{label:l,description:e,placeholder:s})})};function W(l){return t.jsx(i.Listbox.Option,{value:l,disabled:l.isDead,children:t.jsx(i.Listbox.Option.TextOption,{children:l.name})},l.id)}function k(l){return t.jsx(i.Listbox.Option,{value:l,children:t.jsx(i.Listbox.Option.BadgeOption,{children:l.name})},l.id)}function H(l){return l.name}function F(l){return t.jsx(i.Listbox.Option,{value:l,disabled:l.isDead,children:t.jsx(i.Listbox.Option.TextOption,{children:l.name})},l.id)}v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    description,
    placeholder,
    width
  }) => <div style={{
    width
  }}>
      <ListboxTextWithHooks label={label} description={description} placeholder={placeholder} />
    </div>
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    description,
    placeholder,
    width,
    disabled
  }) => <div style={{
    width
  }}>
      <ListboxBadgeWithHooks label={label} description={description} placeholder={placeholder} disabled={disabled} />
    </div>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    description,
    placeholder,
    width
  }) => <div style={{
    width
  }}>
      <ListboxBadgeWithHooks label={label} description={description} placeholder={placeholder} disabled />
    </div>
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    description,
    placeholder,
    width
  }) => <div style={{
    width
  }}>
      <ListboxMultiWithHooks label={label} description={description} placeholder={placeholder} />
    </div>
}`,...S.parameters?.docs?.source}}};const ce=["Default","Badge","Disabled","Multiple"];export{g as Badge,v as Default,y as Disabled,S as Multiple,ce as __namedExportsOrder,de as default};
