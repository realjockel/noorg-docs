"use strict";(self.webpackChunknoorg_docs=self.webpackChunknoorg_docs||[]).push([[43],{6055:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"usage/skip-observers","title":"Skip Observers","description":"The skip_observers frontmatter field allows you to control which observers process your notes on a per-file basis.","source":"@site/docs/usage/skip-observers.md","sourceDirName":"usage","slug":"/usage/skip-observers","permalink":"/docs/usage/skip-observers","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/skip-observers.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Noorg Watcher","permalink":"/docs/usage/noorg-watcher"},"next":{"title":"Create a Note","permalink":"/docs/usage/create-a-note"}}');var t=r(4848),n=r(8453);const i={sidebar_position:2},a="Skip Observers",l={},c=[{value:"Usage",id:"usage",level:2},{value:"Skip All Observers",id:"skip-all-observers",level:2},{value:"Skip Script Observers",id:"skip-script-observers",level:2},{value:"Skip Rust Observers",id:"skip-rust-observers",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"skip-observers",children:"Skip Observers"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"skip_observers"})," frontmatter field allows you to control which observers process your notes on a per-file basis."]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["Add ",(0,t.jsx)(s.code,{children:"skip_observers"})," to your note's frontmatter:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"---\nskip_observers: 'toc' , 'similar-notes'\n---\n"})}),"\n",(0,t.jsx)(s.h2,{id:"skip-all-observers",children:"Skip All Observers"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"skip_observers"})," field also accepts the value ",(0,t.jsx)(s.code,{children:"all"})," to skip all observers:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"skip_observers: 'all'\n"})}),"\n",(0,t.jsx)(s.h2,{id:"skip-script-observers",children:"Skip Script Observers"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"--- \n# Skip my_observer.lua and stats.py\nskip_observers: 'my_observer, stats'\n--- \n"})}),"\n",(0,t.jsx)(s.h2,{id:"skip-rust-observers",children:"Skip Rust Observers"}),"\n",(0,t.jsx)(s.p,{children:"It is also possible to disable rust observers in the setting pane of the system tray application."})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>a});var o=r(6540);const t={},n=o.createContext(t);function i(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);