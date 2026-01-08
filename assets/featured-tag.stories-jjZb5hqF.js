import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./compiler-runtime-BLcvFMuB.js";import{r as f}from"./iframe-B1MrCL0G.js";import{F as x}from"./featured-tag-BvRhy74-.js";import{P as j}from"./panel-CoxkJZ31.js";import{F as a}from"./form-field-CrkY1ccE.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";import"./zoom-to-fit-icon-DHGgW-0X.js";import"./use-resolve-button-type-BLSzryf6.js";import"./keyboard-Bq9WUD44.js";import"./use-sync-refs-BLyEwgBe.js";import"./form-fields-CmSOWfB4.js";import"./index-BxOsspT5.js";import"./index-Cuw-oBtx.js";import"./hidden-CFwRvjYG.js";import"./description-8CcAxyhx.js";import"./label-CABkoH4b.js";import"./bugs-WVkwHmE-.js";import"./focus-management-DnrBnQnZ.js";import"./floating-CLCxjxpZ.js";import"./floating-ui.react-dom-DvM99rDh.js";import"./use-text-value-B1wJY8WI.js";import"./portal-VJJ9eBMU.js";import"./use-inert-others-C0EAsWax.js";import"./open-closed-D2XKhh6-.js";import"./badge-BpOk95Sf.js";import"./index-uwaZig9Y.js";import"./use-event-listener-B3NJl8pS.js";import"./active-element-history-tTpxgl9p.js";import"./tag-CCGrKyNz.js";const X={title:"Input/FeaturedTag",component:x,args:{tagLabel:"Recommended!",panelText:"This example uses a Panel component"},argTypes:{tagLabel:{control:"text"},panelText:{control:"text"}}},v=r=>{const e=h.c(8),{tagLabel:c}=r,[d,u]=f.useState("value_1");let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=g=>{u(g)},e[0]=i):i=e[0];let o;e[1]!==c?(o=t.jsxs(a.RadioBox.Option,{value:"option_1",children:["Option 1",t.jsx(x,{children:c})]}),e[1]=c,e[2]=o):o=e[2];let n,s;e[3]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(a.RadioBox.Option,{value:"option_2",children:"Option 2"}),s=t.jsx(a.RadioBox.Option,{value:"option_3",children:"Option 3"}),e[3]=n,e[4]=s):(n=e[3],s=e[4]);let m;return e[5]!==o||e[6]!==d?(m=t.jsx("div",{className:"w-96",children:t.jsx(a,{children:t.jsxs(a.RadioBox,{value:d,onChange:i,id:"value",children:[o,n,s]})})}),e[5]=o,e[6]=d,e[7]=m):m=e[7],m},l={render:({tagLabel:r})=>t.jsx(v,{tagLabel:r})},p={render:({tagLabel:r,panelText:e})=>t.jsx("div",{className:"w-96",children:t.jsxs(j,{className:"relative",children:[t.jsx("p",{children:e}),t.jsx(x,{children:r})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
