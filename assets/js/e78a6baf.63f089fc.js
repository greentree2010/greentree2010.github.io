"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[5487],{9301:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(4848),r=n(8453);const s={title:"Pass Nvidia GPU Into Docker"},a=void 0,o={id:"guides/support/nvidia-docker-toolkit",title:"Pass Nvidia GPU Into Docker",description:"Introduction",source:"@site/docs/guides/support/nvidia-docker-toolkit.md",sourceDirName:"guides/support",slug:"/guides/support/nvidia-docker-toolkit",permalink:"/docs/guides/support/nvidia-docker-toolkit",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/support/nvidia-docker-toolkit.md",tags:[],version:"current",frontMatter:{title:"Pass Nvidia GPU Into Docker"},sidebar:"guides",previous:{title:"Install Nvidia Drivers Ubuntu",permalink:"/docs/guides/support/install-nvidia-drivers-ubuntu"},next:{title:"Learn How to Use Grafana to Monitor Your System",permalink:"/docs/guides/support/use-grafana-to-monitor-system"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Install Nvidia Docker Toolkit",id:"install-nvidia-docker-toolkit",level:2},{value:"Add the Nvidia Runtime",id:"add-the-nvidia-runtime",level:2},{value:"Adding the GPU to a Container",id:"adding-the-gpu-to-a-container",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"I often need to pass an Nvidia GPU into Docker. Recently I've had to do this for hosting my own AI and a project called Autonomys. If you need to install Nvidia drivers, you can follow my guide"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-nvidia-drivers-ubuntu",children:"Install Nvidia Drivers on Ubuntu"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"install-nvidia-docker-toolkit",children:"Install Nvidia Docker Toolkit"}),"\n",(0,t.jsx)(i.p,{children:"Add the repository"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \\\r\n  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \\\r\n    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \\\r\n    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list\n"})}),"\n",(0,t.jsx)(i.p,{children:"Update the repos to get the latest packages"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,t.jsx)(i.p,{children:"Install the Toolkit"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo apt-get install -y nvidia-container-toolkit\n"})}),"\n",(0,t.jsx)(i.h2,{id:"add-the-nvidia-runtime",children:"Add the Nvidia Runtime"}),"\n",(0,t.jsx)(i.p,{children:"The last step is to add the Nvidia runtime"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo nvidia-ctk runtime configure --runtime=docker\n"})}),"\n",(0,t.jsx)(i.p,{children:"Then restart docker (this will stop all your containers FYI)"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo systemctl restart docker\n"})}),"\n",(0,t.jsx)(i.h2,{id:"adding-the-gpu-to-a-container",children:"Adding the GPU to a Container"}),"\n",(0,t.jsx)(i.p,{children:"Here is an example of how you can add an Nvidia card into a Docker container"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"services:\r\n  some_container:\r\n    image: some-image:v0.0.1    \r\n    deploy:\r\n      resources:\r\n        reservations:\r\n          devices:\r\n            - driver: nvidia\r\n              count: all  # Adds all available GPUs\r\n              capabilities: [gpu]\r\n    runtime: nvidia\r\n\n"})}),"\n",(0,t.jsxs)(i.p,{children:["As is implied by ",(0,t.jsx)(i.code,{children:"count: all"})," this adds all available GPUs. You may not wish to do this, in that case you can specify the ",(0,t.jsx)(i.code,{children:"device_ids"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:'services:\r\n  some_container:\r\n    image: some-image:v0.0.1    \r\n    deploy:\r\n      resources:\r\n        reservations:\r\n          devices:\r\n            - driver: nvidia\r\n              count: 2  # Use 2 GPU (optional when using device_ids)\r\n              capabilities: [gpu]\r\n              device_ids: ["0", "1"]  # Use specific GPUs (for example GPU 0 and GPU 1)\r\n    runtime: nvidia\n'})})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var t=n(6540);const r={},s=t.createContext(r);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);