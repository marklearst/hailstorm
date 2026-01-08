import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-KC-hvTLH.js";import{M as o}from"./blocks-DQs4tFdk.js";import"./iframe-XRykOgCy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hh3hN7OQ.js";import"./index-74y4g9Sn.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Home"}),`
`,e.jsx(n.h1,{id:"hailstorm",children:"Hailstorm"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`Hailstorm is the Abusix design system: React 19 components, design tokens, and
Storybook documentation that keep UI consistent, accessible, and fast to ship.
The system emphasizes predictable APIs, token-driven styling, and WCAG-aligned
patterns. Maintained by Mark Learst.`}),`
`,e.jsx(n.h2,{id:"what-this-system-optimizes-for",children:"What this system optimizes for"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reusable components with stable, typed props."}),`
`,e.jsx(n.li,{children:"Token-first styling (semantic color, spacing, typography)."}),`
`,e.jsx(n.li,{children:"Figma Variables-to-production alignment with a clear token pipeline."}),`
`,e.jsx(n.li,{children:"Accessibility-first UI patterns (WCAG 2.2 AA, keyboard, ARIA, focus states)."}),`
`,e.jsx(n.li,{children:"Documentation that scales with product velocity (Storybook + MDX)."}),`
`,e.jsx(n.li,{children:"Reliable QA with unit tests, a11y checks, and Storybook examples."}),`
`]}),`
`,e.jsx(n.h2,{id:"modernization-focus",children:"Modernization focus"}),`
`,e.jsx(n.p,{children:`This release brings the legacy system forward with a full stack refresh:
React 19, Tailwind v4 tokens, Storybook 10, and Vitest-based testing. The goal
is to keep component APIs stable while upgrading the delivery pipeline, token
strategy, and accessibility defaults (WCAG 2.2 AA aligned). The modernization
also strengthens governance: clearer API contracts, predictable releases, and
component-level coverage across the public surface.`}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"React 19 + TypeScript"}),`
`,e.jsxs(n.li,{children:["Tailwind CSS v4 tokens in ",e.jsx(n.code,{children:"src/styles/index.css"})]}),`
`,e.jsx(n.li,{children:"Headless UI for accessible primitives"}),`
`,e.jsx(n.li,{children:"Storybook 10 + MDX for docs and component demos"}),`
`,e.jsx(n.li,{children:"Vitest + Testing Library + Playwright browser mode for component tests"}),`
`,e.jsx(n.li,{children:"Rollup library builds with Vite for local dev"}),`
`]}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm install
pnpm storybook
`})}),`
`,e.jsx(n.h2,{id:"development",children:"Development"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm test
pnpm lint
pnpm run build
`})}),`
`,e.jsx(n.h2,{id:"docs",children:"Docs"}),`
`,e.jsxs(n.p,{children:["Core documentation and examples live in Storybook. Look under ",e.jsx(n.code,{children:"Assets/Icons"}),`
for the icons gallery and `,e.jsx(n.code,{children:"Foundations"})," for global styles and tokens."]})]})}function m(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
