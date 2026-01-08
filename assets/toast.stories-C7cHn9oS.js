import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as I}from"./compiler-runtime-DWiNezgD.js";import{c as _,d as V,e as k,f as q,j as E}from"./zoom-to-fit-icon-DOKZHS_Q.js";import{c as S}from"./class-names-C2kgz_Qa.js";import"./iframe-XRykOgCy.js";import"./preload-helper-PPVm8Dsz.js";const W={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},D={info:q,success:k,warning:V,danger:_},R={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},Y={info:"hover:bg-primary-200 active:bg-primary-300 fill-primary-500",danger:"hover:bg-danger-100 active:bg-danger-200 fill-danger-500",success:"hover:bg-success-200 active:bg-success-300 fill-success-500",warning:"hover:bg-warning-100 active:bg-warning-200 fill-warning-500"},n=r=>{const e=I.c(24),{title:T,intent:t,children:u,onClose:h,isClosable:N}=r,m=N===void 0?!0:N,w=D[t],y=m&&"pr-14",j=W[t];let a;e[0]!==y||e[1]!==j?(a=S("relative flex flex-row gap-4 rounded-lg border px-4 py-3 pt-4.5 text-neutral-800",y,j),e[0]=y,e[1]=j,e[2]=a):a=e[2];const C=R[t];let o;e[3]!==C?(o=S(C,"h-3 w-3"),e[3]=C,e[4]=o):o=e[4];let i;e[5]!==w||e[6]!==o?(i=s.jsx("div",{className:"pt-0.5",children:s.jsx(w,{className:o})}),e[5]=w,e[6]=o,e[7]=i):i=e[7];let c;e[8]!==t||e[9]!==m||e[10]!==h?(c=m?s.jsx("div",{className:"absolute top-0 right-0 pt-2 pr-4 sm:block",children:s.jsx("button",{type:"button",className:S("rounded-sm p-1",Y[t]),onClick:h,children:s.jsx(E,{name:"cross","aria-label":"close",className:"h-3 w-3"})})}):null,e[8]=t,e[9]=m,e[10]=h,e[11]=c):c=e[11];let l;e[12]!==T?(l=s.jsx("div",{className:"text-sm font-medium",children:T}),e[12]=T,e[13]=l):l=e[13];let d;e[14]!==u?(d=u?s.jsx("div",{className:"w-full pt-1 text-sm text-neutral-800",children:u}):null,e[14]=u,e[15]=d):d=e[15];let g;e[16]!==d||e[17]!==l?(g=s.jsxs("div",{children:[l,d]}),e[16]=d,e[17]=l,e[18]=g):g=e[18];let p;return e[19]!==g||e[20]!==a||e[21]!==i||e[22]!==c?(p=s.jsxs("div",{role:"alert",className:a,children:[i,c,g]}),e[19]=g,e[20]=a,e[21]=i,e[22]=c,e[23]=p):p=e[23],p};try{n.displayName="Toast",n.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'}]}},isClosable:{defaultValue:{value:"true"},description:"",name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const G={title:"Toast",component:n,args:{title:"Title",isClosable:!0}},f={render:r=>s.jsx(n,{...r,children:"Toast content"}),args:{intent:"info",onClose:()=>alert("You clicked me!")}},x={render:r=>s.jsx(n,{...r,children:"Toast content"}),args:{intent:"warning"}},b={render:r=>s.jsx(n,{...r,children:"Toast content"}),args:{intent:"success"}},v={render:r=>s.jsx(n,{...r,children:"Toast content"}),args:{intent:"danger"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'info',
    onClose: () => alert('You clicked me!')
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'warning'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'success'
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: 'danger'
  }
}`,...v.parameters?.docs?.source}}};const H=["Info","Warning","Success","Danger"];export{v as Danger,f as Info,b as Success,x as Warning,H as __namedExportsOrder,G as default};
