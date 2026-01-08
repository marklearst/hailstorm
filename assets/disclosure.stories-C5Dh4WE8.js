import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./compiler-runtime-DWiNezgD.js";import{l as D}from"./zoom-to-fit-icon-DOKZHS_Q.js";import{c as f}from"./class-names-C2kgz_Qa.js";import{X as x,x as h,L as j}from"./disclosure-CLAXn9wD.js";import"./iframe-XRykOgCy.js";import"./preload-helper-PPVm8Dsz.js";import"./use-resolve-button-type-Bih9nJmV.js";import"./keyboard-e8CRX24o.js";import"./use-sync-refs-Bo2Xpa_i.js";import"./open-closed-CRhmYJjH.js";import"./close-provider-N7y7Qs9v.js";import"./bugs-B59rR7-u.js";const P=r=>{const e=d.c(6);let t,l;e[0]!==r?({children:t,...l}=r,e[0]=r,e[1]=t,e[2]=l):(t=e[1],l=e[2]);let o;return e[3]!==t||e[4]!==l?(o=s.jsx(j,{...l,children:t}),e[3]=t,e[4]=l,e[5]=o):o=e[5],o},b=r=>{const e=d.c(8);let t,l;e[0]!==r?({children:t,...l}=r,e[0]=r,e[1]=t,e[2]=l):(t=e[1],l=e[2]);let o;e[3]!==t?(o=p=>{const{open:m}=p;return s.jsxs(s.Fragment,{children:[s.jsx("span",{children:t}),s.jsx(D,{className:f("h-3 w-3",m&&"rotate-180 transform")})]})},e[3]=t,e[4]=o):o=e[4];let a;return e[5]!==l||e[6]!==o?(a=s.jsx(h,{className:"headline-300 focus:outline-primary-200 flex w-full items-center justify-between border-t border-b border-t-transparent border-b-neutral-300 bg-neutral-50 py-3 pr-5 pl-3 text-left text-neutral-900 focus:outline-2 focus:outline-offset-0 focus:outline-solid",...l,children:o}),e[5]=l,e[6]=o,e[7]=a):a=e[7],a},n=r=>{const e=d.c(3),{children:t,defaultOpen:l}=r,o=l===void 0?!1:l;let a;return e[0]!==t||e[1]!==o?(a=s.jsx(x,{defaultOpen:o,children:t}),e[0]=t,e[1]=o,e[2]=a):a=e[2],a};n.Button=b;n.Panel=P;try{n.displayName="Disclosure",n.__docgenInfo={description:"",displayName:"Disclosure",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}try{n.Button.displayName="Disclosure.Button",n.Button.__docgenInfo={description:"",displayName:"Disclosure.Button",props:{}}}catch{}try{n.Panel.displayName="Disclosure.Panel",n.Panel.__docgenInfo={description:"",displayName:"Disclosure.Panel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: PanelRenderPropArg) => string)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"",name:"transition",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Disclosure",component:n,args:{buttonLabel:"Disclosure Button",panelContent:"Disclosure Content"},argTypes:{buttonLabel:{control:"text"},panelContent:{control:"text"}},parameters:{options:{showPanel:!1}}},i={render:({buttonLabel:r,panelContent:e})=>s.jsx("div",{className:"w-96",children:s.jsxs(n,{children:[s.jsx(n.Button,{children:r}),s.jsx(n.Panel,{children:e})]})})},c={render:({buttonLabel:r,panelContent:e})=>s.jsxs("div",{className:"w-96",children:[s.jsxs(n,{children:[s.jsx(n.Button,{children:r}),s.jsx(n.Panel,{children:e})]}),s.jsxs(n,{children:[s.jsx(n.Button,{children:r}),s.jsx(n.Panel,{children:e})]}),s.jsxs(n,{children:[s.jsx(n.Button,{children:r}),s.jsx(n.Panel,{children:e})]})]})},u={render:({buttonLabel:r,panelContent:e})=>s.jsxs("div",{className:"w-96",children:[s.jsxs(n,{children:[s.jsx(n.Button,{children:r}),s.jsx(n.Panel,{children:e})]}),s.jsxs(n,{defaultOpen:!0,children:[s.jsx(n.Button,{children:r}),s.jsx(n.Panel,{children:e})]}),s.jsxs(n,{children:[s.jsx(n.Button,{children:r}),s.jsx(n.Panel,{children:e})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    buttonLabel,
    panelContent
  }) => <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    buttonLabel,
    panelContent
  }) => <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ({
    buttonLabel,
    panelContent
  }) => <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure defaultOpen>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
}`,...u.parameters?.docs?.source}}};const E=["Default","Stacked","DefaultOpen"];export{i as Default,u as DefaultOpen,c as Stacked,E as __namedExportsOrder,I as default};
