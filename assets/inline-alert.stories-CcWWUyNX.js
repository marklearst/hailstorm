import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./compiler-runtime-BLcvFMuB.js";import{c as w}from"./class-names-C2kgz_Qa.js";import{c as S,d as _,e as A,f as b}from"./zoom-to-fit-icon-DHGgW-0X.js";import{g as T}from"./storybook-utils-C5xEhci0.js";import"./iframe-B1MrCL0G.js";import"./preload-helper-PPVm8Dsz.js";const V={info:"text-primary-600",danger:"text-danger-500",success:"text-success-500",warning:"text-warning-600"},E={info:"fill-primary-400",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},q={info:b,success:A,warning:_,danger:S},g=m=>{const e=j.c(19),{title:t,className:x,children:d,intent:h}=m,v=h===void 0?"info":h,I=q[v],y=V[v],N=E[v];let s;e[0]!==x?(s=w("flex w-full text-sm",x),e[0]=x,e[1]=s):s=e[1];let r;e[2]!==I||e[3]!==N?(r=n.jsx("div",{className:"mr-4 w-4 grow-0 pt-0.5",children:n.jsx(I,{className:N})}),e[2]=I,e[3]=N,e[4]=r):r=e[4];let a;e[5]!==y?(a=w("font-medium",y),e[5]=y,e[6]=a):a=e[6];let i;e[7]!==a||e[8]!==t?(i=n.jsx("h1",{className:a,children:t}),e[7]=a,e[8]=t,e[9]=i):i=e[9];let l;e[10]!==d?(l=d?n.jsx("div",{className:"mt-2",children:d}):null,e[10]=d,e[11]=l):l=e[11];let c;e[12]!==i||e[13]!==l?(c=n.jsxs("div",{className:"w-full",children:[i,l]}),e[12]=i,e[13]=l,e[14]=c):c=e[14];let p;return e[15]!==s||e[16]!==r||e[17]!==c?(p=n.jsxs("div",{className:s,children:[r,c]}),e[15]=s,e[16]=r,e[17]=c,e[18]=p):p=e[18],p};try{g.displayName="InlineAlert",g.__docgenInfo={description:"",displayName:"InlineAlert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},intent:{defaultValue:{value:"info"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'}]}}}}}catch{}const C=["info","success","warning","danger"],z={component:g,title:"Inline Alert",parameters:T("Inline alert text to inform user about contextual things"),args:{title:"Alert title",children:"Alert text"}},u={},o={argTypes:{intent:{table:{disable:!0}}},render:({children:m,...e})=>n.jsx("div",{className:"flex flex-col gap-4",children:C.map(t=>n.jsx(g,{...e,intent:t,children:m},t))})},f={...o,args:{children:void 0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes: {
    intent: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    children,
    ...args
  }) => <div className='flex flex-col gap-4'>
      {intents.map(intent => <InlineAlert key={intent} {...args} intent={intent}>
          {children}
        </InlineAlert>)}
    </div>
}`,...o.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Intents,
  args: {
    children: undefined
  }
}`,...f.parameters?.docs?.source}}};const F=["Basic","Intents","OnlyTitles"];export{u as Basic,o as Intents,f as OnlyTitles,F as __namedExportsOrder,z as default};
