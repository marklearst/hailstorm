import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./compiler-runtime-DWiNezgD.js";import{r as f}from"./iframe-XRykOgCy.js";import{F as x}from"./featured-tag-UPlEnFT0.js";import{P as j}from"./panel-C8TGH8pk.js";import{F as a}from"./form-field-4o_IvgO1.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";import"./zoom-to-fit-icon-DOKZHS_Q.js";import"./use-resolve-button-type-Bih9nJmV.js";import"./keyboard-e8CRX24o.js";import"./use-sync-refs-Bo2Xpa_i.js";import"./form-fields-B19Y_PBl.js";import"./index-hh3hN7OQ.js";import"./index-74y4g9Sn.js";import"./hidden-Cmaimn2X.js";import"./description-DTxrjahs.js";import"./label-DMne1_zU.js";import"./bugs-B59rR7-u.js";import"./focus-management-B5wdF1i0.js";import"./floating-CSJJAjNj.js";import"./floating-ui.react-dom-DsQUudfM.js";import"./use-text-value-D1fNxpdz.js";import"./portal-e4QpGYSP.js";import"./use-inert-others-CXVwNTP7.js";import"./open-closed-CRhmYJjH.js";import"./badge-CCyesFEs.js";import"./index-D5IHSo0t.js";import"./use-event-listener-Cgnb5sR3.js";import"./active-element-history-DQb1dsjx.js";import"./tag-C8SHyF_X.js";const X={title:"Input/FeaturedTag",component:x,args:{tagLabel:"Recommended!",panelText:"This example uses a Panel component"},argTypes:{tagLabel:{control:"text"},panelText:{control:"text"}}},v=r=>{const e=h.c(8),{tagLabel:c}=r,[d,u]=f.useState("value_1");let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=g=>{u(g)},e[0]=i):i=e[0];let o;e[1]!==c?(o=t.jsxs(a.RadioBox.Option,{value:"option_1",children:["Option 1",t.jsx(x,{children:c})]}),e[1]=c,e[2]=o):o=e[2];let n,s;e[3]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(a.RadioBox.Option,{value:"option_2",children:"Option 2"}),s=t.jsx(a.RadioBox.Option,{value:"option_3",children:"Option 3"}),e[3]=n,e[4]=s):(n=e[3],s=e[4]);let m;return e[5]!==o||e[6]!==d?(m=t.jsx("div",{className:"w-96",children:t.jsx(a,{children:t.jsxs(a.RadioBox,{value:d,onChange:i,id:"value",children:[o,n,s]})})}),e[5]=o,e[6]=d,e[7]=m):m=e[7],m},l={render:({tagLabel:r})=>t.jsx(v,{tagLabel:r})},p={render:({tagLabel:r,panelText:e})=>t.jsx("div",{className:"w-96",children:t.jsxs(j,{className:"relative",children:[t.jsx("p",{children:e}),t.jsx(x,{children:r})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    tagLabel
  }) => <RadioBoxWithRecommendationTag tagLabel={tagLabel} />
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    tagLabel,
    panelText
  }) => <div className='w-96'>
      <Panel className='relative'>
        <p>{panelText}</p>
        <FeaturedTag>{tagLabel}</FeaturedTag>
      </Panel>
    </div>
}`,...p.parameters?.docs?.source}}};const Y=["Default","PanelExample"];export{l as Default,p as PanelExample,Y as __namedExportsOrder,X as default};
