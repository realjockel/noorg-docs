"use strict";(self.webpackChunknoorg_docs=self.webpackChunknoorg_docs||[]).push([[844],{8767:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"usage/noorg-watcher","title":"Noorg Watcher","description":"Noorg Watcher","source":"@site/docs/usage/noorg-watcher.md","sourceDirName":"usage","slug":"/usage/noorg-watcher","permalink":"/docs/usage/noorg-watcher","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Usage","permalink":"/docs/category/usage"},"next":{"title":"Skip Observers","permalink":"/docs/usage/skip-observers"}}');var t=r(4848),o=r(8453);const i={sidebar_position:1},c="Noorg Watcher",a={},l=[{value:"How It Works",id:"how-it-works",level:2},{value:"Starting the Watcher",id:"starting-the-watcher",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"noorg-watcher",children:"Noorg Watcher"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Noorg Watcher",src:r(8185).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.p,{children:"The Noorg Watcher is a core component that continuously monitors your notes directory for changes. It automatically processes modified notes through configured observers without requiring manual intervention."}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Directory Monitoring"}),": The watcher continuously observes your configured notes directory for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"File modifications"}),"\n",(0,t.jsx)(n.li,{children:"New file creation"}),"\n",(0,t.jsx)(n.li,{children:"Changes to existing files"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Smart Change Detection"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Uses file hashing to detect actual content changes"}),"\n",(0,t.jsx)(n.li,{children:"Prevents unnecessary processing of unchanged files"}),"\n",(0,t.jsx)(n.li,{children:"Implements debouncing to avoid multiple processing of rapid changes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"starting-the-watcher",children:"Starting the Watcher"}),"\n",(0,t.jsx)(n.p,{children:"You can start the watcher in two ways:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Via System Tray"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Click the Noorg icon in your system tray"}),"\n",(0,t.jsx)(n.li,{children:'Toggle "Watch Notes" to start/stop watching'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Via CLI"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"noorg note_cli watch\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8185:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/noorg-watcher-e56bdabff51900d1f7983b7daf382961.gif"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(6540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);