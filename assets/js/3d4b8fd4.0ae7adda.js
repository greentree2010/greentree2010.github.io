"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[2974],{2446:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=o(4848),i=o(8453);const s={title:"Build Autonomys Images for COMET (CM3588)"},a=void 0,r={id:"guides/comet/build-autonomys-image",title:"Build Autonomys Images for COMET (CM3588)",description:"This should not be necessary and is for informational purposes only. You can use the aarch64 image by adding -aarch64 to the end and specifying platform: linux/amd64 in the stack file.",source:"@site/docs/guides/comet/build-autonomys-image.md",sourceDirName:"guides/comet",slug:"/guides/comet/build-autonomys-image",permalink:"/docs/guides/comet/build-autonomys-image",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/comet/build-autonomys-image.md",tags:[],version:"current",frontMatter:{title:"Build Autonomys Images for COMET (CM3588)"},sidebar:"guides",previous:{title:"COMET (CM3588)",permalink:"/docs/category/comet"},next:{title:"Install OS on eMMC using SD Card",permalink:"/docs/guides/comet/install-os-on-comet"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Download Latest Version",id:"download-latest-version",level:2},{value:"Set up buildx",id:"set-up-buildx",level:2},{value:"Build the Image",id:"build-the-image",level:2},{value:"Farmer",id:"farmer",level:3},{value:"Node",id:"node",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This should not be necessary and is for informational purposes only. You can use the aarch64 image by adding ",(0,t.jsx)(n.code,{children:"-aarch64"})," to the end and specifying ",(0,t.jsx)(n.code,{children:"platform: linux/amd64"})," in the stack file."]})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"If you want to build your own images for whatever reason, this is a pretty simple process. We need to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Clone the Autonomys Subspace Repository"}),"\n",(0,t.jsx)(n.li,{children:"Set up buildx"}),"\n",(0,t.jsx)(n.li,{children:"Build the Image"}),"\n",(0,t.jsx)(n.li,{children:"Use the image in our container"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To do this you should have Docker installed"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-docker-debian",children:"Install Docker on Debian"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"download-latest-version",children:"Download Latest Version"}),"\n",(0,t.jsxs)(n.p,{children:["Head over to ",(0,t.jsx)(n.a,{href:"https://github.com/autonomys/subspace/releases",children:"Autonomys Releases"})," and get the source from the latest release. Once you copy the link you can download it with wget"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget <LINK>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then extract the tar with"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tar -xzvf <tar file>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then cd into the directory that was created."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd <FOLDER NAME>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"set-up-buildx",children:"Set up buildx"}),"\n",(0,t.jsx)(n.p,{children:"Set up a buildx builder, if you do not already have one, that supports multiple platforms"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo docker buildx create --use\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-the-image",children:"Build the Image"}),"\n",(0,t.jsxs)(n.p,{children:["We need to build the image for ",(0,t.jsx)(n.code,{children:"linux/arm64"})," using the correct dockerfile (aarch64) for both the Farmer and the Node. Using the ",(0,t.jsx)(n.code,{children:"--load"})," flag should store the image locally for use. You should update the ",(0,t.jsx)(n.code,{children:"<TAG>"})," to be the current release, such as ",(0,t.jsx)(n.code,{children:"gemini-3h-2024-oct-03"})]}),"\n",(0,t.jsx)(n.h3,{id:"farmer",children:"Farmer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo docker buildx build --platform linux/arm64 --progress plain --load -t autonomys-comet-farmer:<TAG> -f Dockerfile-farmer.aarch64 .\n"})}),"\n",(0,t.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo docker buildx build --platform linux/arm64 --progress plain --load -t autonomys-comet-node:<TAG> -f Dockerfile-node.aarch64 .\n"})}),"\n",(0,t.jsx)(n.p,{children:"This process may take some time depending on the resources your PC has available. You can swap out the Dockerfile and change the platform depending on what system you are building the image for."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);