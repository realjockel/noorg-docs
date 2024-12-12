"use strict";(self.webpackChunknoorg_docs=self.webpackChunknoorg_docs||[]).push([[976],{2053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"intro","title":"Welcome to Noorg","description":"Let\'s discover Noorg in less than 5 minutes.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Example Screenshots","permalink":"/docs/screenshots"}}');var s=t(4848),o=t(8453);const i={sidebar_position:1},a="Welcome to Noorg",l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Installation",id:"installation",level:2},{value:"Start Using Noorg",id:"start-using-noorg",level:2},{value:"Settings",id:"settings",level:3},{value:"Create your first note:",id:"create-your-first-note",level:3},{value:"Watch your notes directory",id:"watch-your-notes-directory",level:3},{value:"Import  notes and sync with Noorg",id:"import--notes-and-sync-with-noorg",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"welcome-to-noorg",children:"Welcome to Noorg"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's discover ",(0,s.jsx)(n.strong,{children:"Noorg in less than 5 minutes"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Noorg",src:t(8185).A+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Caution"}),": Noorg is currently in a pre-alpha stage. While it offers powerful features, it is still under active development and may not be stable. We strongly advise starting slowly and backing up your note directory regularly. Experiment with Noorg in a safe environment to discover its potential without risking your important data."]}),"\n",(0,s.jsxs)(n.p,{children:["Get started by ",(0,s.jsx)(n.strong,{children:"installing the prerequisites"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rustup.rs/",children:"Rust and Cargo"})}),"\n",(0,s.jsx)(n.li,{children:"Python 3.9+"}),"\n",(0,s.jsx)(n.li,{children:"Lua 5.4"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,s.jsx)(n.strong,{children:"Noorg is currently only supported on macOS."})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install Rust and Cargo:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# macOS\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Clone and install Noorg:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/realjockel/noorg.git\ncd noorg\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./install.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Uninstall with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./install.sh uninstall\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Install Python dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'brew install python@3.9\n\n# Add to ~/.zshrc or ~/.bashrc\nexport PYTHON_CONFIGURE_OPTS="--enable-framework"\nexport PYO3_PYTHON="/opt/homebrew/opt/python@3.9/bin/python3.9"\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Install Lua"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install lua # macOS\n# find lua path\nlua -e \"print(package.path:match('([^;]+)/?.lua'))\"\n# macOS: Copy to Lua package path\nsudo cp json.lua /opt/homebrew/share/lua/5.4/json.lua\n\n# Verify installation\nlua -e \"require('json')\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"start-using-noorg",children:"Start Using Noorg"}),"\n",(0,s.jsx)(n.p,{children:"Run the system tray application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"noorg\n"})}),"\n",(0,s.jsx)(n.p,{children:"This opens the Noorg system tray application. You can now interact with Noorg using the system tray icon. In the system tray, you can create a note, start the watcher, and open the settings window to configure Noorg."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Noorg System Tray",src:t(8577).A+"",width:"300",height:"294"})}),"\n",(0,s.jsx)(n.h3,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(n.p,{children:"Open the settings window to configure Noorg."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Noorg Settings",src:t(337).A+"",width:"1194",height:"1666"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"File Type"}),": The file type for your notes (Markdown, Org, etc.)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Notes Directory"}),": The directory where your notes are stored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Script Directory"}),": The directory where your scripts are stored. (Python and Lua)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Obsidian Integration"}),": If you want to create notes with the note_cli and open Obsidian, you have to set the vault_path and enable. You also have to enable ",(0,s.jsx)(n.code,{children:"Allow URI callbacks"})," in Obsidian settings. ",(0,s.jsx)(n.code,{children:"Settings -> Files and Links -> Allow URI callbacks"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Enabled Observers: Enable or disable default RUST based observers. (Python and Lua observers are not included in this list)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-your-first-note",children:"Create your first note:"}),"\n",(0,s.jsx)(n.p,{children:"There are multiple ways to create a note with Noorg. You can use the system tray application, the CLI, or your favorite text editor."}),"\n",(0,s.jsx)(n.p,{children:"Create a note with the system tray application:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Click on the system tray icon."}),"\n",(0,s.jsx)(n.li,{children:'Click on "Create Note".'}),"\n",(0,s.jsx)(n.li,{children:"Enter the title of your note."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Create a note with the CLI:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"title"}),": The title of the note."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"body"}),": The body of the note."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fields"}),": Additional fields for the note. Those are saved as front matter in the note file."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'noorg note_cli add --title "My First Note" --body "Hello Noorg!" -f "priority:high" -f "project:X"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Create a note with your favorite text editor:"}),"\n",(0,s.jsx)(n.p,{children:"You can create a note with your favorite text editor and save it in your notes directory. Noorg will automatically process your note."}),"\n",(0,s.jsx)(n.p,{children:"or you can use noorg note_cli add to create a note with your favorite text editor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'noorg note_cli add --title "My First Note"  -f "priority:high" -f "project:X"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You simply have to remove the --body argument and Noorg will open your default text editor to write the body of the note."}),"\n",(0,s.jsx)(n.p,{children:"Setting the Editor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export EDITOR=nvim\n"})}),"\n",(0,s.jsx)(n.h3,{id:"watch-your-notes-directory",children:"Watch your notes directory"}),"\n",(0,s.jsx)(n.p,{children:"Watch your notes directory for changes with the CLI:"}),"\n",(0,s.jsx)(n.p,{children:"Start the watcher with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Systen Tray Application"}),"\n",(0,s.jsx)(n.li,{children:"CLI"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"noorg note_cli watch\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open your favorite text editor and start writing in Markdown. Noorg will automatically process your notes as you write them."}),"\n",(0,s.jsx)(n.h3,{id:"import--notes-and-sync-with-noorg",children:"Import  notes and sync with Noorg"}),"\n",(0,s.jsx)(n.p,{children:"If you have already created notes, you can import them into your notes directory and sync them with Noorg to run all observers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"noorg note_cli sync\n"})}),"\n",(0,s.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Try out different observers and automation features"}),"\n",(0,s.jsx)(n.li,{children:"Extend functionality with Python, Lua, or Rust"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8185:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/noorg-watcher-e56bdabff51900d1f7983b7daf382961.gif"},337:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/settings-00f949b4da9491ac8edac4a38a082eb0.png"},8577:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/systemtray-3706794572e3d6d6292a86427a88550a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);