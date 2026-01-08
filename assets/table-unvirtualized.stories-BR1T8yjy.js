import{j as l}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./compiler-runtime-DWiNezgD.js";import{r as z}from"./iframe-XRykOgCy.js";import{T as r}from"./table-unvirtualized-rRDBOG1C.js";import{B as j}from"./button-Lid16SVD.js";import"./preload-helper-PPVm8Dsz.js";import"./class-names-C2kgz_Qa.js";import"./spinner-CsgP5ITs.js";function U(a=20){const e=[];for(let n=0;n<a;n++){const m={id:n.toString(),name:`${n.toString()} name`,description:`${n.toString()} description`,price:n};e.push(m)}return e}const C=a=>{const e=f.c(19),{rowCount:n,headerName:m,headerDescription:o,headerPrice:s}=a;let d;e[0]!==n?(d=U(n),e[0]=n,e[1]=d):d=e[1];const i=d;let t;e[2]!==m?(t=l.jsx(r.Header.Cell,{className:"w-40",children:m}),e[2]=m,e[3]=t):t=e[3];let c;e[4]!==o?(c=l.jsx(r.Header.Cell,{children:o}),e[4]=o,e[5]=c):c=e[5];let u;e[6]!==s?(u=l.jsx(r.Header.Cell,{align:"right",children:s}),e[6]=s,e[7]=u):u=e[7];let p;e[8]!==t||e[9]!==c||e[10]!==u?(p=l.jsx(r.Header,{children:l.jsxs(r.Header.Row,{children:[t,c,u]})}),e[8]=t,e[9]=c,e[10]=u,e[11]=p):p=e[11];let h;e[12]!==i?(h=i.map(H),e[12]=i,e[13]=h):h=e[13];let b;e[14]!==h?(b=l.jsx(r.Body,{children:h}),e[14]=h,e[15]=b):b=e[15];let x;return e[16]!==p||e[17]!==b?(x=l.jsxs(r,{children:[p,b]}),e[16]=p,e[17]=b,e[18]=x):x=e[18],x},$={title:"Table / Unvirtualized",component:C,args:{rowCount:20,headerName:"Name",headerDescription:"Description",headerPrice:"Price"},argTypes:{rowCount:{control:{type:"number",min:0,max:100,step:1}},headerName:{control:"text"},headerDescription:{control:"text"},headerPrice:{control:"text"}}},y={render:a=>l.jsx(C,{...a})},T=()=>{const a=f.c(2);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsx(r.Header,{children:l.jsxs(r.Header.Row,{children:[l.jsx(r.Header.Cell,{className:"w-40",children:"Name"}),l.jsx(r.Header.Cell,{children:"Description"}),l.jsx(r.Header.Cell,{align:"right",children:"Price"})]})}),a[0]=e):e=a[0];let n;return a[1]===Symbol.for("react.memo_cache_sentinel")?(n=l.jsxs(r,{children:[e,l.jsx(r.Body,{children:l.jsx(r.Body.EmptyPlaceholder,{title:"Empty table",description:"You have not added any items yet.",colSpan:3,children:l.jsx(j,{variant:"secondary",onClick:g,children:"Add New Item"})})})]}),a[1]=n):n=a[1],n},v=()=>{const a=f.c(8);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],a[0]=e):e=a[0];const[n,m]=z.useState(e);let o,s;a[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{const c=setTimeout(()=>{m(U())},4e3);return()=>{clearTimeout(c)}},s=[],a[1]=o,a[2]=s):(o=a[1],s=a[2]),z.useEffect(o,s);let d;a[3]===Symbol.for("react.memo_cache_sentinel")?(d=l.jsx(r.Header,{children:l.jsxs(r.Header.Row,{children:[l.jsx(r.Header.Cell,{className:"w-40",children:"Name"}),l.jsx(r.Header.Cell,{children:"Description"}),l.jsx(r.Header.Cell,{align:"right",children:"Price"})]})}),a[3]=d):d=a[3];let i;a[4]!==n?(i=n.length?n.map(B):l.jsx(r.Body.LoadingIndicator,{colSpan:3}),a[4]=n,a[5]=i):i=a[5];let t;return a[6]!==i?(t=l.jsxs(r,{children:[d,l.jsx(r.Body,{children:i})]}),a[6]=i,a[7]=t):t=a[7],t};function H(a){return l.jsxs(r.Body.Row,{children:[l.jsx(r.Body.Cell,{children:a.name}),l.jsx(r.Body.Cell,{children:a.description}),l.jsx(r.Body.Cell,{align:"right",children:l.jsxs("span",{className:"font-mono whitespace-nowrap",children:["$ ",a.price.toFixed(2)]})})]},a.id)}function g(){return alert("clicked")}function B(a){return l.jsxs(r.Body.Row,{children:[l.jsx(r.Body.Cell,{children:a.name}),l.jsx(r.Body.Cell,{children:a.description}),l.jsx(r.Body.Cell,{align:"right",children:l.jsxs("span",{className:"font-mono whitespace-nowrap",children:["$ ",a.price.toFixed(2)]})})]},a.name)}y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultStory {...args} />
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <TableUnvirtualized>
      <TableUnvirtualized.Header>
        <TableUnvirtualized.Header.Row>
          <TableUnvirtualized.Header.Cell className='w-40'>
            Name
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell>
            Description
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell align='right'>
            Price
          </TableUnvirtualized.Header.Cell>
        </TableUnvirtualized.Header.Row>
      </TableUnvirtualized.Header>

      <TableUnvirtualized.Body>
        <TableUnvirtualized.Body.EmptyPlaceholder title='Empty table' description='You have not added any items yet.' colSpan={3}>
          <Button variant='secondary' onClick={() => alert('clicked')}>
            Add New Item
          </Button>
        </TableUnvirtualized.Body.EmptyPlaceholder>
      </TableUnvirtualized.Body>
    </TableUnvirtualized>;
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [data, setData] = useState<ExampleData[]>([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(createExampleData());
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <TableUnvirtualized>
      <TableUnvirtualized.Header>
        <TableUnvirtualized.Header.Row>
          <TableUnvirtualized.Header.Cell className='w-40'>
            Name
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell>
            Description
          </TableUnvirtualized.Header.Cell>

          <TableUnvirtualized.Header.Cell align='right'>
            Price
          </TableUnvirtualized.Header.Cell>
        </TableUnvirtualized.Header.Row>
      </TableUnvirtualized.Header>

      <TableUnvirtualized.Body>
        {data.length ? data.map(row => <TableUnvirtualized.Body.Row key={row.name}>
              <TableUnvirtualized.Body.Cell>
                {row.name}
              </TableUnvirtualized.Body.Cell>
              <TableUnvirtualized.Body.Cell>
                {row.description}
              </TableUnvirtualized.Body.Cell>
              <TableUnvirtualized.Body.Cell align='right'>
                <span className='font-mono whitespace-nowrap'>
                  $ {row.price.toFixed(2)}
                </span>
              </TableUnvirtualized.Body.Cell>
            </TableUnvirtualized.Body.Row>) : <TableUnvirtualized.Body.LoadingIndicator colSpan={3} />}
      </TableUnvirtualized.Body>
    </TableUnvirtualized>;
}`,...v.parameters?.docs?.source}}};const k=["Default","EmptyTable","LoadingTable"];export{y as Default,T as EmptyTable,v as LoadingTable,k as __namedExportsOrder,$ as default};
