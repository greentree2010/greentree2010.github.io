"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[6903],{6491:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(4848),o=s(8453);const r={title:"Install Docker on Debian"},a=void 0,i={id:"guides/support/install-docker-debian",title:"Install Docker on Debian",description:"Introduction",source:"@site/docs/guides/support/install-docker-debian.md",sourceDirName:"guides/support",slug:"/guides/support/install-docker-debian",permalink:"/docs/guides/support/install-docker-debian",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/support/install-docker-debian.md",tags:[],version:"current",frontMatter:{title:"Install Docker on Debian"},sidebar:"guides",previous:{title:"Support Reference",permalink:"/docs/category/reference"},next:{title:"Install Portainer Host/Agent",permalink:"/docs/guides/support/install-portainer-host-agent"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"(OPTIONAL) Post Install",id:"optional-post-install",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["One of the first things I always install is Docker. It is literally my favorite piece of software. There is an official guide for Debian, which an be found on the ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/debian/",children:"Official Docker Docs"}),". But this is my way of doing it."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Update your repositories to make sure we have the latest packages"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then install dependencies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install ca-certificates curl\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create keyring directory"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo install -m 0755 -d /etc/apt/keyrings\n"})}),"\n",(0,t.jsx)(n.p,{children:"Download Docker's GPG key into the folder we just created"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set the appropriate permissions for docker.asc"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo chmod a+r /etc/apt/keyrings/docker.asc\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add Docker's official repository to the system's package sources list"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo \\\r\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \\\r\n  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\r\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n'})}),"\n",(0,t.jsx)(n.p,{children:"Update the repositories to get the latest packages from the repository we just added"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,t.jsx)(n.p,{children:"Install Docker packages"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n"})}),"\n",(0,t.jsx)(n.h2,{id:"optional-post-install",children:"(OPTIONAL) Post Install"}),"\n",(0,t.jsxs)(n.p,{children:["If you do not want to preface your Docker commands with ",(0,t.jsx)(n.code,{children:"sudo"}),' you can run this command to add the current user to the "docker" group. There are some security implications here so be sure this is something you really want to do.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);