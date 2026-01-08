import{j as n}from"./jsx-runtime-u17CrQMm.js";import{g as Ve}from"./storybook-utils-C5xEhci0.js";import{c as O}from"./compiler-runtime-BLcvFMuB.js";import{c as de}from"./class-names-C2kgz_Qa.js";import{r as p,R as L}from"./iframe-B1MrCL0G.js";import{$ as ue,a as qe,w as Le,e as $e}from"./use-resolve-button-type-BLSzryf6.js";import{Y as M,A as ce,y as W,n as Q,a as k,u as D,d as Ae,V as pe,K as U,s as Y}from"./use-sync-refs-BLyEwgBe.js";import{e as Ee,o as v,n as G}from"./keyboard-Bq9WUD44.js";import{f as we}from"./use-is-mounted-BR572CQL.js";import{f as be,s as Se}from"./hidden-CFwRvjYG.js";import{A as X,v as q,T as j,G as R}from"./focus-management-DnrBnQnZ.js";import"./preload-helper-PPVm8Dsz.js";function Fe({onFocus:a}){let[e,r]=p.useState(!0),l=we();return e?L.createElement(be,{as:"button",type:"button",features:Se.Focusable,onFocus:s=>{s.preventDefault();let i,o=50;function c(){if(o--<=0){i&&cancelAnimationFrame(i);return}if(a()){if(cancelAnimationFrame(i),!l.current)return;r(!1);return}i=requestAnimationFrame(c)}i=requestAnimationFrame(c)}}):null}const me=p.createContext(null);function Re(){return{groups:new Map,get(a,e){var r;let l=this.groups.get(a);l||(l=new Map,this.groups.set(a,l));let s=(r=l.get(e))!=null?r:0;l.set(e,s+1);let i=Array.from(l.keys()).indexOf(e);function o(){let c=l.get(e);c>1?l.set(e,c-1):l.delete(e)}return[i,o]}}}function De({children:a}){let e=p.useRef(Re());return p.createElement(me.Provider,{value:e},a)}function fe(a){let e=p.useContext(me);if(!e)throw new Error("You must wrap your component in a <StableCollection>");let r=p.useId(),[l,s]=e.current.get(a,r);return p.useEffect(()=>s,[]),l}var Oe=(a=>(a[a.Forwards=0]="Forwards",a[a.Backwards=1]="Backwards",a))(Oe||{}),Me=(a=>(a[a.Less=-1]="Less",a[a.Equal=0]="Equal",a[a.Greater=1]="Greater",a))(Me||{}),We=(a=>(a[a.SetSelectedIndex=0]="SetSelectedIndex",a[a.RegisterTab=1]="RegisterTab",a[a.UnregisterTab=2]="UnregisterTab",a[a.RegisterPanel=3]="RegisterPanel",a[a.UnregisterPanel=4]="UnregisterPanel",a))(We||{});let Ue={0(a,e){var r;let l=R(a.tabs,u=>u.current),s=R(a.panels,u=>u.current),i=l.filter(u=>{var T;return!((T=u.current)!=null&&T.hasAttribute("disabled"))}),o={...a,tabs:l,panels:s};if(e.index<0||e.index>l.length-1){let u=D(Math.sign(e.index-a.selectedIndex),{[-1]:()=>1,0:()=>D(Math.sign(e.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(i.length===0)return o;let T=D(u,{0:()=>l.indexOf(i[0]),1:()=>l.indexOf(i[i.length-1])});return{...o,selectedIndex:T===-1?a.selectedIndex:T}}let c=l.slice(0,e.index),m=[...l.slice(e.index),...c].find(u=>i.includes(u));if(!m)return o;let d=(r=l.indexOf(m))!=null?r:a.selectedIndex;return d===-1&&(d=a.selectedIndex),{...o,selectedIndex:d}},1(a,e){if(a.tabs.includes(e.tab))return a;let r=a.tabs[a.selectedIndex],l=R([...a.tabs,e.tab],i=>i.current),s=a.selectedIndex;return a.info.current.isControlled||(s=l.indexOf(r),s===-1&&(s=a.selectedIndex)),{...a,tabs:l,selectedIndex:s}},2(a,e){return{...a,tabs:a.tabs.filter(r=>r!==e.tab)}},3(a,e){return a.panels.includes(e.panel)?a:{...a,panels:R([...a.panels,e.panel],r=>r.current)}},4(a,e){return{...a,panels:a.panels.filter(r=>r!==e.panel)}}},le=p.createContext(null);le.displayName="TabsDataContext";function $(a){let e=p.useContext(le);if(e===null){let r=new Error(`<${a} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}return e}let se=p.createContext(null);se.displayName="TabsActionsContext";function ie(a){let e=p.useContext(se);if(e===null){let r=new Error(`<${a} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ie),r}return e}function Ge(a,e){return D(e.type,Ue,a,e)}let Ye="div";function Xe(a,e){let{defaultIndex:r=0,vertical:l=!1,manual:s=!1,onChange:i,selectedIndex:o=null,...c}=a;const m=l?"vertical":"horizontal",d=s?"manual":"auto";let u=o!==null,T=Y({isControlled:u}),g=W(e),[f,h]=p.useReducer(Ge,{info:T,selectedIndex:o??r,tabs:[],panels:[]}),A=G({selectedIndex:f.selectedIndex}),E=Y(i||(()=>{})),_=Y(f.tabs),y=p.useMemo(()=>({orientation:m,activation:d,...f}),[m,d,f]),w=k(x=>(h({type:1,tab:x}),()=>h({type:2,tab:x}))),S=k(x=>(h({type:3,panel:x}),()=>h({type:4,panel:x}))),P=k(x=>{N.current!==x&&E.current(x),u||h({type:0,index:x})}),N=Y(u?a.selectedIndex:f.selectedIndex),I=p.useMemo(()=>({registerTab:w,registerPanel:S,change:P}),[]);Q(()=>{h({type:0,index:o??r})},[o]),Q(()=>{if(N.current===void 0||f.tabs.length<=0)return;let x=R(f.tabs,B=>B.current);x.some((B,V)=>f.tabs[V]!==B)&&P(x.indexOf(f.tabs[N.current]))});let Z={ref:g},F=U();return L.createElement(De,null,L.createElement(se.Provider,{value:I},L.createElement(le.Provider,{value:y},y.tabs.length<=0&&L.createElement(Fe,{onFocus:()=>{var x,B;for(let V of _.current)if(((x=V.current)==null?void 0:x.tabIndex)===0)return(B=V.current)==null||B.focus(),!0;return!1}}),F({ourProps:Z,theirProps:c,slot:A,defaultTag:Ye,name:"Tabs"}))))}let He="div";function ze(a,e){let{orientation:r,selectedIndex:l}=$("Tab.List"),s=W(e),i=G({selectedIndex:l}),o=a,c={ref:s,role:"tablist","aria-orientation":r};return U()({ourProps:c,theirProps:o,slot:i,defaultTag:He,name:"Tabs.List"})}let Ke="button";function Je(a,e){var r,l;let s=p.useId(),{id:i=`headlessui-tabs-tab-${s}`,disabled:o=!1,autoFocus:c=!1,...m}=a,{orientation:d,activation:u,selectedIndex:T,tabs:g,panels:f}=$("Tab"),h=ie("Tab"),A=$("Tab"),[E,_]=p.useState(null),y=p.useRef(null),w=W(y,e,_);Q(()=>h.registerTab(y),[h,y]);let S=fe("tabs"),P=g.indexOf(y);P===-1&&(P=S);let N=P===T,I=k(b=>{let C=b();if(C===X.Success&&u==="auto"){let ee=Ee(y.current),oe=A.tabs.findIndex(ke=>ke.current===ee);oe!==-1&&h.change(oe)}return C}),Z=k(b=>{let C=g.map(ee=>ee.current).filter(Boolean);if(b.key===v.Space||b.key===v.Enter){b.preventDefault(),b.stopPropagation(),h.change(P);return}switch(b.key){case v.Home:case v.PageUp:return b.preventDefault(),b.stopPropagation(),I(()=>q(C,j.First));case v.End:case v.PageDown:return b.preventDefault(),b.stopPropagation(),I(()=>q(C,j.Last))}if(I(()=>D(d,{vertical(){return b.key===v.ArrowUp?q(C,j.Previous|j.WrapAround):b.key===v.ArrowDown?q(C,j.Next|j.WrapAround):X.Error},horizontal(){return b.key===v.ArrowLeft?q(C,j.Previous|j.WrapAround):b.key===v.ArrowRight?q(C,j.Next|j.WrapAround):X.Error}}))===X.Success)return b.preventDefault()}),F=p.useRef(!1),x=k(()=>{var b;F.current||(F.current=!0,(b=y.current)==null||b.focus({preventScroll:!0}),h.change(P),Ae(()=>{F.current=!1}))}),B=k(b=>{b.preventDefault()}),{isFocusVisible:V,focusProps:Ne}=ue({autoFocus:c}),{isHovered:ve,hoverProps:je}=qe({isDisabled:o}),{pressed:Ce,pressProps:_e}=Le({disabled:o}),Be=G({selected:N,hover:ve,active:Ce,focus:V,autofocus:c,disabled:o}),Ie=pe({ref:w,onKeyDown:Z,onMouseDown:B,onClick:x,id:i,role:"tab",type:$e(a,E),"aria-controls":(l=(r=f[P])==null?void 0:r.current)==null?void 0:l.id,"aria-selected":N,tabIndex:N?0:-1,disabled:o||void 0,autoFocus:c},Ne,je,_e);return U()({ourProps:Ie,theirProps:m,slot:Be,defaultTag:Ke,name:"Tabs.Tab"})}let Qe="div";function Ze(a,e){let{selectedIndex:r}=$("Tab.Panels"),l=W(e),s=G({selectedIndex:r}),i=a,o={ref:l};return U()({ourProps:o,theirProps:i,slot:s,defaultTag:Qe,name:"Tabs.Panels"})}let ea="div",aa=ce.RenderStrategy|ce.Static;function na(a,e){var r,l,s,i;let o=p.useId(),{id:c=`headlessui-tabs-panel-${o}`,tabIndex:m=0,...d}=a,{selectedIndex:u,tabs:T,panels:g}=$("Tab.Panel"),f=ie("Tab.Panel"),h=p.useRef(null),A=W(h,e);Q(()=>f.registerPanel(h),[f,h]);let E=fe("panels"),_=g.indexOf(h);_===-1&&(_=E);let y=_===u,{isFocusVisible:w,focusProps:S}=ue(),P=G({selected:y,focus:w}),N=pe({ref:A,id:c,role:"tabpanel","aria-labelledby":(l=(r=T[_])==null?void 0:r.current)==null?void 0:l.id,tabIndex:y?m:-1},S),I=U();return!y&&((s=d.unmount)==null||s)&&!((i=d.static)!=null&&i)?L.createElement(be,{"aria-hidden":"true",...N}):I({ourProps:N,theirProps:d,slot:P,defaultTag:ea,features:aa,visible:y,name:"Tabs.Panel"})}let ta=M(Je),Te=M(Xe),he=M(ze),xe=M(Ze),ye=M(na),ra=Object.assign(ta,{Group:Te,List:he,Panels:xe,Panel:ye});const ge=p.createContext({type:"primary"});function Pe(){const a=p.useContext(ge);if(!a)throw new Error("Tab compound components cannot be rendered outside the Tab component");return a}const la={primary:"relative whitespace-nowrap focus:ring-2 ring:primary-200 hover:ui-not-selected:text-neutral-800 ui-not-selected:after:hidden ui-selected:after:absolute ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:-bottom-2 ui-selected:after:block ui-selected:after:h-0.5 ui-selected:after:bg-primary-500 ui-selected:disabled:after:bg-primary-500 disabled:text-neutral-500",secondary:"px-4 py-2 ui-not-selected:bg-transparent hover:ui-not-selected:text-neutral-800 focus:ring-2 ring:primary-200 hover:ui-not-selected:bg-neutral-100 ui-selected:text-primary-500 ui-selected:bg-primary-100 disabled:text-neutral-500"},ae=a=>{const e=O.c(17);let r,l,s;e[0]!==a?({children:r,hasIndicator:s,...l}=a,e[0]=a,e[1]=r,e[2]=l,e[3]=s):(r=e[1],l=e[2],s=e[3]);const i=s===void 0?!1:s,{type:o}=Pe(),c=l,m=la[o];let d;e[4]!==m?(d=de("ui-selected:text-primary-500 ui-not-selected:text-neutral-700 rounded-sm text-xs font-medium outline-hidden",m),e[4]=m,e[5]=d):d=e[5];let u;e[6]!==i?(u=i&&n.jsx("div",{className:"bg-danger-500 h-2 w-2 rounded-full"}),e[6]=i,e[7]=u):u=e[7];let T;e[8]!==r||e[9]!==u?(T=n.jsxs("div",{className:"flex items-center gap-2",children:[r,u]}),e[8]=r,e[9]=u,e[10]=T):T=e[10];let g;e[11]!==d||e[12]!==T?(g=n.jsx("div",{className:d,children:T}),e[11]=d,e[12]=T,e[13]=g):g=e[13];let f;return e[14]!==c||e[15]!==g?(f=n.jsx(ra,{...c,className:"focus-visible:outline-hidden",children:g}),e[14]=c,e[15]=g,e[16]=f):f=e[16],f};try{ae.displayName="TabButton",ae.__docgenInfo={description:"",displayName:"TabButton",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},hasIndicator:{defaultValue:{value:"false"},description:"",name:"hasIndicator",required:!1,type:{name:"boolean"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const sa={primary:"gap-5 pb-2",secondary:"gap-2"},ne=a=>{const e=O.c(5),{children:r}=a,{type:l}=Pe(),s=sa[l];let i;e[0]!==s?(i=de("flex",s),e[0]=s,e[1]=i):i=e[1];let o;return e[2]!==r||e[3]!==i?(o=n.jsx(he,{className:i,children:r}),e[2]=r,e[3]=i,e[4]=o):o=e[4],o};try{ne.displayName="TabList",ne.__docgenInfo={description:"",displayName:"TabList",props:{}}}catch{}const te=a=>{const e=O.c(6);let r,l;e[0]!==a?({children:r,...l}=a,e[0]=a,e[1]=r,e[2]=l):(r=e[1],l=e[2]);let s;return e[3]!==r||e[4]!==l?(s=n.jsx(ye,{...l,children:r}),e[3]=r,e[4]=l,e[5]=s):s=e[5],s};try{te.displayName="TabPanel",te.__docgenInfo={description:"",displayName:"TabPanel",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: PanelRenderPropArg) => string)"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}}}}}catch{}const re=a=>{const e=O.c(3),{children:r,className:l}=a;let s;return e[0]!==r||e[1]!==l?(s=n.jsx(xe,{className:l,children:r}),e[0]=r,e[1]=l,e[2]=s):s=e[2],s};try{re.displayName="TabPanels",re.__docgenInfo={description:"",displayName:"TabPanels",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const t=a=>{const e=O.c(12);let r,l,s;e[0]!==a?({type:s,children:r,...l}=a,e[0]=a,e[1]=r,e[2]=l,e[3]=s):(r=e[1],l=e[2],s=e[3]);const i=s===void 0?"primary":s;let o;e[4]!==i?(o={type:i},e[4]=i,e[5]=o):o=e[5];const c=o;let m;e[6]!==r||e[7]!==l?(m=n.jsx(Te,{...l,children:r}),e[6]=r,e[7]=l,e[8]=m):m=e[8];let d;return e[9]!==m||e[10]!==c?(d=n.jsx(ge.Provider,{value:c,children:m}),e[9]=m,e[10]=c,e[11]=d):d=e[11],d};t.List=ne;t.Button=ae;t.Panels=re;t.Panel=te;try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},defaultIndex:{defaultValue:null,description:"",name:"defaultIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},manual:{defaultValue:null,description:"",name:"manual",required:!1,type:{name:"boolean"}}}}}catch{}try{t.List.displayName="Tab.List",t.List.__docgenInfo={description:"",displayName:"Tab.List",props:{}}}catch{}try{t.Button.displayName="Tab.Button",t.Button.__docgenInfo={description:"",displayName:"Tab.Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},hasIndicator:{defaultValue:{value:"false"},description:"",name:"hasIndicator",required:!1,type:{name:"boolean"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{t.Panels.displayName="Tab.Panels",t.Panels.__docgenInfo={description:"",displayName:"Tab.Panels",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{t.Panel.displayName="Tab.Panel",t.Panel.__docgenInfo={description:"",displayName:"Tab.Panel",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: PanelRenderPropArg) => string)"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}}}}}catch{}const ya={title:"Tab",component:t,parameters:{...Ve("Tab component. For a detailed explanation on props, please visit the Headless UI [tab-group documentation](https://headlessui.com/react-vite/tabs#tab-group)"),docs:{source:{type:"auto"}}}},H={render:a=>n.jsxs(t,{...a,children:[n.jsxs(t.List,{children:[n.jsx(t.Button,{onClick:()=>null,children:"Tab 1"}),n.jsx(t.Button,{onClick:()=>null,children:"Tab 2"}),n.jsx(t.Button,{onClick:()=>null,children:"Tab 3"})]}),n.jsxs(t.Panels,{children:[n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Content 1"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Content 2"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Content 3"})})]})]}),args:{type:"primary"}},z={render:a=>n.jsxs(t,{...a,children:[n.jsxs(t.List,{children:[n.jsx(t.Button,{onClick:()=>null,children:"Tab 1"}),n.jsx(t.Button,{onClick:()=>null,children:"Tab 2"}),n.jsx(t.Button,{onClick:()=>null,children:"Tab 3"})]}),n.jsxs(t.Panels,{children:[n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Content 1"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Content 2"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Content 3"})})]})]}),args:{type:"secondary"}},K={render:a=>n.jsxs(t,{...a,children:[n.jsxs(t.List,{children:[n.jsx(t.Button,{onClick:()=>null,children:"Tab 1"}),n.jsx(t.Button,{onClick:()=>null,children:"Tab 2"}),n.jsx(t.Button,{onClick:()=>null,children:"Tab 3"})]}),n.jsxs(t.Panels,{children:[n.jsx(t.Panel,{children:n.jsx("div",{className:"pt-2",children:n.jsxs(t,{type:"primary",children:[n.jsxs(t.List,{children:[n.jsx(t.Button,{onClick:()=>null,children:"Nested Tab 1"}),n.jsx(t.Button,{onClick:()=>null,children:"Nested Tab 2"})]}),n.jsxs(t.Panels,{children:[n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content 1"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content 2"})})]})]})})}),n.jsx(t.Panel,{children:n.jsx("div",{className:"pt-2",children:n.jsxs(t,{type:"primary",children:[n.jsxs(t.List,{children:[n.jsx(t.Button,{onClick:()=>null,children:"Nested Tab A"}),n.jsx(t.Button,{onClick:()=>null,children:"Nested Tab B"})]}),n.jsxs(t.Panels,{children:[n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content A"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content B"})})]})]})})}),n.jsx(t.Panel,{children:n.jsx("div",{className:"pt-2",children:n.jsxs(t,{type:"primary",children:[n.jsxs(t.List,{children:[n.jsx(t.Button,{onClick:()=>null,children:"Nested Tab X"}),n.jsx(t.Button,{onClick:()=>null,children:"Nested Tab Y"})]}),n.jsxs(t.Panels,{children:[n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content X"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content Y"})})]})]})})})]})]}),args:{type:"primary",vertical:!1,manual:!1,defaultIndex:0},argTypes:{className:{control:{type:"text"}}}},J={render:a=>n.jsxs(t,{...a,children:[n.jsxs(t.List,{children:[n.jsx(t.Button,{onClick:()=>null,children:"All"}),n.jsx(t.Button,{onClick:()=>null,hasIndicator:!0,children:"With Indicator"}),n.jsx(t.Button,{onClick:()=>null,children:"Tab 3"})]}),n.jsxs(t.Panels,{children:[n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"All content"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Decision needed content"})}),n.jsx(t.Panel,{children:n.jsx("p",{className:"paragraph-200 pt-2",children:"Content 3"})})]})]}),args:{type:"primary"}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 1</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 2</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 3</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>,
  args: {
    type: 'primary' as TabType
  }
}`,...H.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 1</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 2</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 3</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>,
  args: {
    type: 'secondary' as TabType
  }
}`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <div className='pt-2'>
            <Tab type='primary'>
              <Tab.List>
                <Tab.Button onClick={() => null}>Nested Tab 1</Tab.Button>
                <Tab.Button onClick={() => null}>Nested Tab 2</Tab.Button>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content 1</p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content 2</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className='pt-2'>
            <Tab type='primary'>
              <Tab.List>
                <Tab.Button onClick={() => null}>Nested Tab A</Tab.Button>
                <Tab.Button onClick={() => null}>Nested Tab B</Tab.Button>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content A</p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content B</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className='pt-2'>
            <Tab type='primary'>
              <Tab.List>
                <Tab.Button onClick={() => null}>Nested Tab X</Tab.Button>
                <Tab.Button onClick={() => null}>Nested Tab Y</Tab.Button>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content X</p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='paragraph-200 pt-2'>Nested Content Y</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>,
  args: {
    type: 'primary',
    vertical: false,
    manual: false,
    defaultIndex: 0
  },
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>All</Tab.Button>
        <Tab.Button onClick={() => null} hasIndicator>
          With Indicator
        </Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <p className='paragraph-200 pt-2'>All content</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Decision needed content</p>
        </Tab.Panel>

        <Tab.Panel>
          <p className='paragraph-200 pt-2'>Content 3</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab>,
  args: {
    type: 'primary' as TabType
  }
}`,...J.parameters?.docs?.source}}};const ga=["Primary","Secondary","NestedTabs","WithIndicator"];export{K as NestedTabs,H as Primary,z as Secondary,J as WithIndicator,ga as __namedExportsOrder,ya as default};
