import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c}from"./compiler-runtime-BLcvFMuB.js";import{B as m}from"./button-CeF785Lf.js";import"./iframe-B1MrCL0G.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";import"./spinner-BbeMO_9P.js";const l=o=>{const e=c.c(2),{children:i}=o;let t;return e[0]!==i?(t=r.jsx("p",{className:"paragraph-200 text-neutral-800",children:i}),e[0]=i,e[1]=t):t=e[1],t};try{l.displayName="SectionDescription",l.__docgenInfo={description:"",displayName:"SectionDescription",props:{}}}catch{}const p=o=>{const e=c.c(2),{children:i}=o;let t;return e[0]!==i?(t=r.jsx("div",{className:"bg-neutral-0 relative rounded-sm border border-neutral-300 p-5",children:i}),e[0]=i,e[1]=t):t=e[1],t};try{p.displayName="SectionPanel",p.__docgenInfo={description:"",displayName:"SectionPanel",props:{}}}catch{}const d=o=>{const e=c.c(2),{children:i}=o;let t;return e[0]!==i?(t=r.jsx("h4",{className:"headline-500 text-neutral-900",children:i}),e[0]=i,e[1]=t):t=e[1],t};try{d.displayName="SectionTitle",d.__docgenInfo={description:"",displayName:"SectionTitle",props:{}}}catch{}const _=o=>{const e=c.c(2),{children:i}=o;let t;return e[0]!==i?(t=r.jsx("div",{className:"flex flex-col gap-2",children:i}),e[0]=i,e[1]=t):t=e[1],t};try{_.displayName="SectionTitleGroup",_.__docgenInfo={description:"",displayName:"SectionTitleGroup",props:{}}}catch{}const n=o=>{const e=c.c(2),{children:i}=o;let t;return e[0]!==i?(t=r.jsx("section",{className:"flex flex-col gap-2",children:i}),e[0]=i,e[1]=t):t=e[1],t};n.TitleGroup=_;n.Title=d;n.Description=l;n.Panel=p;try{n.displayName="Section",n.__docgenInfo={description:"",displayName:"Section",props:{}}}catch{}try{n.TitleGroup.displayName="Section.TitleGroup",n.TitleGroup.__docgenInfo={description:"",displayName:"Section.TitleGroup",props:{}}}catch{}try{n.Title.displayName="Section.Title",n.Title.__docgenInfo={description:"",displayName:"Section.Title",props:{}}}catch{}try{n.Description.displayName="Section.Description",n.Description.__docgenInfo={description:"",displayName:"Section.Description",props:{}}}catch{}try{n.Panel.displayName="Section.Panel",n.Panel.__docgenInfo={description:"",displayName:"Section.Panel",props:{}}}catch{}const g={title:"Section",component:n,args:{title:"Section Title",description:"Description",panelText:"Place panel content here",actionLabel:"Button"},argTypes:{title:{control:"text"},description:{control:"text"},panelText:{control:"text"},actionLabel:{control:"text"}}},s={render:({title:o,description:e,panelText:i})=>r.jsxs(n,{children:[r.jsxs(n.TitleGroup,{children:[r.jsx(n.Title,{children:o}),r.jsx(n.Description,{children:e})]}),r.jsx(n.Panel,{children:i})]})},a={render:({title:o,description:e,panelText:i,actionLabel:t})=>r.jsxs(n,{children:[r.jsxs(n.TitleGroup,{children:[r.jsx(n.Title,{children:o}),r.jsxs("div",{className:"mb-4 flex w-full justify-between gap-4",children:[r.jsx(n.Description,{children:e}),r.jsx(m,{variant:"primary",onClick:()=>alert("clicked"),children:t})]})]}),r.jsx(n.Panel,{children:i})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    title,
    description,
    panelText
  }) => <Section>
      <Section.TitleGroup>
        <Section.Title>{title}</Section.Title>
        <Section.Description>{description}</Section.Description>
      </Section.TitleGroup>
      <Section.Panel>{panelText}</Section.Panel>
    </Section>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    title,
    description,
    panelText,
    actionLabel
  }) => <Section>
      <Section.TitleGroup>
        <Section.Title>{title}</Section.Title>
        <div className='mb-4 flex w-full justify-between gap-4'>
          <Section.Description>{description}</Section.Description>
          <Button variant='primary' onClick={() => alert('clicked')}>
            {actionLabel}
          </Button>
        </div>
      </Section.TitleGroup>
      <Section.Panel>{panelText}</Section.Panel>
    </Section>
}`,...a.parameters?.docs?.source}}};const N=["Default","SectionWithAction"];export{s as Default,a as SectionWithAction,N as __namedExportsOrder,g as default};
