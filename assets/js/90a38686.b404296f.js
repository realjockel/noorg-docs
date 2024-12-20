"use strict";(self.webpackChunknoorg_docs=self.webpackChunknoorg_docs||[]).push([[4916],{7355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"usage/create-a-note","title":"Create a Note","description":"There are multiple ways to create notes in Noorg. Choose the method that best fits your workflow.","source":"@site/docs/usage/create-a-note.md","sourceDirName":"usage","slug":"/usage/create-a-note","permalink":"/docs/usage/create-a-note","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Skip Observers","permalink":"/docs/usage/skip-observers"},"next":{"title":"Observer Pattern in Noorg","permalink":"/docs/usage/observer-intro"}}');var i=n(4848),o=n(8453);const s={sidebar_position:3},a="Create a Note",d={},l=[{value:"System Tray Application",id:"system-tray-application",level:2},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Command Options",id:"command-options",level:3},{value:"Frontmatter Fields",id:"frontmatter-fields",level:2},{value:"Note Processing",id:"note-processing",level:2},{value:"Editor Integration",id:"editor-integration",level:2}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"create-a-note",children:"Create a Note"})}),"\n",(0,i.jsx)(t.p,{children:"There are multiple ways to create notes in Noorg. Choose the method that best fits your workflow."}),"\n",(0,i.jsx)(t.h2,{id:"system-tray-application",children:"System Tray Application"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Click the Noorg icon in your system tray"}),"\n",(0,i.jsx)(t.li,{children:'Select "Create Note"'}),"\n",(0,i.jsx)(t.li,{children:"Enter the note title"}),"\n",(0,i.jsx)(t.li,{children:"Enter any frontmatter fields (optional)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"command-line-interface",children:"Command Line Interface"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"note_cli add"})," command with various options:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'# Basic note creation\nnoorg note_cli add --title "My Note" --body "Content"\n\n# Add frontmatter fields\nnoorg note_cli add --title "My Note" -f "priority:high" -f "project:X"\n\n# Open in default editor (without --body)\nnoorg note_cli add --title "My Note" -f "tags:rust,cli"\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Basic Note Creation"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create a Note",src:n(1804).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"With Default Editor"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create a Note with Default Editor",src:n(3948).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h3,{id:"command-options",children:"Command Options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"--title or -t: Note title (required)"}),"\n",(0,i.jsx)(t.li,{children:"--body or -b: Note content (optional)"}),"\n",(0,i.jsx)(t.li,{children:"--frontmatter or -f: Add frontmatter fields (optional, multiple allowed)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"frontmatter-fields",children:"Frontmatter Fields"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tags"})," : Comma-separated list of tags"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"created_at"})," : Automatically added timestamp"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"skip_observers"})," : List of observers to skip for this note"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Custom fields"}),": Add any key-value pairs"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"note-processing",children:"Note Processing"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"After creation"}),":"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Note is saved to your configured directory"}),"\n",(0,i.jsx)(t.li,{children:"Observers process the note (unless skipped)"}),"\n",(0,i.jsx)(t.li,{children:"Content and metadata are updated accordingly"}),"\n",(0,i.jsx)(t.li,{children:"Changes are saved automatically"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"editor-integration",children:"Editor Integration"}),"\n",(0,i.jsx)(t.p,{children:"Set your preferred editor for CLI note creation:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"export EDITOR=nvim  # or vim, code, etc\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Add this to your shell profile to persist the setting. (e.g., ",(0,i.jsx)(t.code,{children:"~/.bashrc"}),", ",(0,i.jsx)(t.code,{children:"~/.zshrc"}),")"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1804:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/create_a_note-ee6250275d6b691523c0d18dbbbbd36a.gif"},3948:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/create_a_note_editor-15ac2dcd9273f59a553e4c6eae4a9729.gif"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);