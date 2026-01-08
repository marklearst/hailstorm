import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as h}from"./index-DRjF_FHU.js";import{F as t}from"./form-field-gnY0BOep.js";import"./zoom-to-fit-icon-BI_77R5n.js";import"./class-names-AhVFtEzo.js";import"./use-resolve-button-type-anS-OQ-j.js";import"./keyboard-BXsyG9-6.js";import"./use-sync-refs-4PSbzubZ.js";import"./form-fields-D-6FHdIf.js";import"./index-C-39nNrC.js";import"./hidden-BTT1K2UY.js";import"./description-ZkavqmAj.js";import"./label-mZgg-6rf.js";import"./bugs-DpEN4NTH.js";import"./focus-management-CtIqEZ7d.js";import"./use-text-value-B9Q3k_m4.js";import"./portal-Cg6DHy_v.js";import"./use-server-handoff-complete-D6bOsrEP.js";import"./floating-B5xy_Q8r.js";import"./use-inert-others-IK0ZZMzA.js";import"./open-closed-yLnem6BE.js";import"./badge-q6TOOQMc.js";import"./index-BpXVfcXZ.js";import"./use-event-listener-BepRZUYA.js";import"./active-element-history-BK4c3ksb.js";import"./tag-DAnrMyC-.js";const ie={title:"Input/Listbox",args:{label:"Label",description:"Description",placeholder:"Select...",width:288,disabled:!1},argTypes:{label:{control:"text"},description:{control:"text"},placeholder:{control:"text"},width:{control:{type:"range",min:200,max:360,step:16}},disabled:{control:"boolean"}}},m=[{id:1,name:"John Lennon",isDead:!0},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],W=({label:o,description:s,placeholder:r})=>{const[i,n]=h.useState(null);return e.jsxs(t,{children:[e.jsxs(t.LabelGroup,{children:[e.jsx(t.Label,{htmlFor:"value",children:o}),e.jsx(t.Description,{id:"value-description",children:s})]}),e.jsxs(t.Listbox,{value:i,onChange:n,children:[e.jsx(t.Listbox.Button,{children:e.jsx(t.Listbox.Button.TextValue,{value:(i==null?void 0:i.name)??null,placeholder:r})}),e.jsx(t.Listbox.Options,{children:m.map(d=>e.jsx(t.Listbox.Option,{value:d,disabled:d.isDead,children:e.jsx(t.Listbox.Option.TextOption,{children:d.name})},d.id))})]})]})},T=({disabled:o,label:s,description:r,placeholder:i})=>{const[n,d]=h.useState(null);return e.jsxs(t,{children:[e.jsxs(t.LabelGroup,{children:[e.jsx(t.Label,{htmlFor:"value",children:s}),e.jsx(t.Description,{id:"value-description",children:r})]}),e.jsxs(t.Listbox,{value:n,onChange:d,children:[e.jsx(t.Listbox.Button,{disabled:o,children:e.jsx(t.Listbox.Button.BadgeValue,{value:(n==null?void 0:n.name)??null,placeholder:i})}),e.jsx(t.Listbox.Options,{children:m.map(l=>e.jsx(t.Listbox.Option,{value:l,children:e.jsx(t.Listbox.Option.BadgeOption,{children:l.name})},l.id))})]})]})},f=({label:o,description:s,placeholder:r})=>{const[i,n]=h.useState([]),d=i.map(l=>l.name).join(", ");return e.jsxs(t,{children:[e.jsxs(t.LabelGroup,{children:[e.jsx(t.Label,{htmlFor:"value",children:o}),e.jsx(t.Description,{id:"value-description",children:s})]}),e.jsxs(t.Listbox,{value:i,onChange:n,multiple:!0,children:[e.jsx(t.Listbox.Button,{children:e.jsx(t.Listbox.Button.TextValue,{value:d||null,placeholder:r})}),e.jsx(t.Listbox.Options,{children:m.map(l=>e.jsx(t.Listbox.Option,{value:l,disabled:l.isDead,children:e.jsx(t.Listbox.Option.TextOption,{children:l.name})},l.id))})]})]})},a={render:({label:o,description:s,placeholder:r,width:i})=>e.jsx("div",{style:{width:i},children:e.jsx(W,{label:o,description:s,placeholder:r})})},c={render:({label:o,description:s,placeholder:r,width:i,disabled:n})=>e.jsx("div",{style:{width:i},children:e.jsx(T,{label:o,description:s,placeholder:r,disabled:n})})},p={render:({label:o,description:s,placeholder:r,width:i})=>e.jsx("div",{style:{width:i},children:e.jsx(T,{label:o,description:s,placeholder:r,disabled:!0})})},x={render:({label:o,description:s,placeholder:r,width:i})=>e.jsx("div",{style:{width:i},children:e.jsx(f,{label:o,description:s,placeholder:r})})};var u,b,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var L,v,g;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(g=(v=c.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var B,O,w;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var y,D,S;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(D=x.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const oe=["Default","Badge","Disabled","Multiple"];export{c as Badge,a as Default,p as Disabled,x as Multiple,oe as __namedExportsOrder,ie as default};
