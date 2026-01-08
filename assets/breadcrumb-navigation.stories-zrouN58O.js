import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as v}from"./compiler-runtime-BLcvFMuB.js";import{c as f}from"./class-names-C2kgz_Qa.js";import{S as N}from"./slot-Bk5Rt5qq.js";import{aD as g}from"./zoom-to-fit-icon-DHGgW-0X.js";import"./iframe-B1MrCL0G.js";import"./preload-helper-PPVm8Dsz.js";const u=r=>{const e=v.c(11);let o,i,n;e[0]!==r?({isActive:i,asChild:o,...n}=r,e[0]=r,e[1]=o,e[2]=i,e[3]=n):(o=e[1],i=e[2],n=e[3]);const l=o?N:"a",d=!i&&"cursor-pointer underline-offset-2 hover:underline",p=i&&"text-black";let s;e[4]!==d||e[5]!==p?(s=f("headline-500 text-neutral-800",d,p),e[4]=d,e[5]=p,e[6]=s):s=e[6];let c;return e[7]!==l||e[8]!==n||e[9]!==s?(c=a.jsx(l,{className:s,...n}),e[7]=l,e[8]=n,e[9]=s,e[10]=c):c=e[10],c};try{u.displayName="BreadcrumbNavigationItem",u.__docgenInfo={description:"",displayName:"BreadcrumbNavigationItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const h=()=>{const r=v.c(1);let e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=a.jsx(g,{className:"h-3 w-3 text-neutral-800"}),r[0]=e):e=r[0],e},t=r=>{const e=v.c(2),{children:o}=r;let i;return e[0]!==o?(i=a.jsx("nav",{className:"flex flex-row items-center gap-1",children:o}),e[0]=o,e[1]=i):i=e[1],i};t.Item=u;t.Arrow=h;try{t.displayName="BreadcrumbNavigation",t.__docgenInfo={description:"",displayName:"BreadcrumbNavigation",props:{}}}catch{}const A={title:"Breadcrumb Navigation",component:t,args:{}},m={render:()=>a.jsx("div",{className:"p-4",children:a.jsxs(t,{children:[a.jsx(t.Item,{href:"/",children:"Home"}),a.jsx(t.Arrow,{}),a.jsx(t.Item,{href:"/",children:"Library"}),a.jsx(t.Arrow,{}),a.jsx(t.Item,{asChild:!0,isActive:!0,children:a.jsx("a",{href:"/",children:"Book"})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className='p-4'>
      <BreadcrumbNavigation>
        <BreadcrumbNavigation.Item href='/'>Home</BreadcrumbNavigation.Item>

        <BreadcrumbNavigation.Arrow />

        <BreadcrumbNavigation.Item href='/'>Library</BreadcrumbNavigation.Item>

        <BreadcrumbNavigation.Arrow />

        <BreadcrumbNavigation.Item asChild isActive>
          <a href='/'>Book</a>
        </BreadcrumbNavigation.Item>
      </BreadcrumbNavigation>
    </div>
}`,...m.parameters?.docs?.source}}};const w=["Base"];export{m as Base,w as __namedExportsOrder,A as default};
