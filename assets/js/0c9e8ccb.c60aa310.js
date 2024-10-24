"use strict";(self.webpackChunkgreentree2010=self.webpackChunkgreentree2010||[]).push([[9514],{2993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var o=n(4848),s=n(8453);const a={slug:"hello-comet",title:"Hello COMET",authors:["hakehardware"],tags:["comet","autonomys","linux","cm3588"]},i=void 0,r={permalink:"/blog/hello-comet",editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/blog/2024-10-10-comet.md",source:"@site/blog/2024-10-10-comet.md",title:"Hello COMET",description:"It's been about a month since I started testing this tiny Autonomys Farmer capable of 16TB, and I'm honestly impressed.",date:"2024-10-10T00:00:00.000Z",tags:[{inline:!1,label:"Comet",permalink:"/blog/tags/comet",description:"Comet is a CM3588 Core Board with NAS Kit packages with accessories by Hake Hardware"},{inline:!1,label:"Autonomys",permalink:"/blog/tags/autonomys",description:"Autonomys Blockchain"},{inline:!1,label:"Linux",permalink:"/blog/tags/linux",description:"Linux"},{inline:!0,label:"cm3588",permalink:"/blog/tags/cm-3588"}],readingTime:4.525,hasTruncateMarker:!0,authors:[{name:"Alex Hake",title:"Creator",url:"https://github.com/hakehardware",page:{permalink:"/blog/authors/hakehardware"},socials:{x:"https://x.com/hakehardware",github:"https://github.com/hakehardware"},imageURL:"https://github.com/hakehardware.png",key:"hakehardware"}],frontMatter:{slug:"hello-comet",title:"Hello COMET",authors:["hakehardware"],tags:["comet","autonomys","linux","cm3588"]},unlisted:!1,prevItem:{title:"New Format",permalink:"/blog/new_format"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},h=[{value:"Testing on Autonomys",id:"testing-on-autonomys",level:2},{value:"Thermals",id:"thermals",level:3},{value:"Resource Usage",id:"resource-usage",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"It's been about a month since I started testing this tiny Autonomys Farmer capable of 16TB, and I'm honestly impressed."}),"\n",(0,o.jsxs)(t.p,{children:["I wanted to write an article on what the COMET is and why I have a whole section dedicated to them. In short, the COMET consists of a Custom 3D Printed Case + CM3588 (8G/64G) + NAS Kit (4x M.2 NVME, 2.5G NIC) + 60W PSU + Debian OS. The CM3588 gets some noteriety as it was featured by Linus Tech Tips in their ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=QsM6b5yix0U",children:"Paying for Cloud Storage is Stupid"})," video. Of course it can be used for a NAS, but my use case is focused on Crypto. Specifically, I plan to use 8 of these to farm on the ",(0,o.jsx)(t.a,{href:"https://www.autonomys.xyz/",children:"Autonomys Network"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"testing-on-autonomys",children:"Testing on Autonomys"}),"\n",(0,o.jsx)(t.p,{children:"Regardless of what you think about Crypto, jamming 4x NVME into such a small form factor is pretty darn cool. Maxing it out with 4x NVME results each NVME running @ PCIe 3.0 x1. This is not a significant amount of bandwidth. However, Autonomys is random read IOPS heavy, not bandwidth heavy. In my testing with 4x 4TB NVMEs fully plotted, I did not have a single missed reward in my week long testing. This can vary based on a lot of factors, but I think it's safe to say PCIe 3.0 x1 will not be an issue at 16TB."}),"\n",(0,o.jsx)(t.p,{children:"The 2.5G ethernet port allows for very quick plotting over your network, which is perfect for a dedicated Farmer like the COMET. I was not able to saturate the connection with 2x RTX 4090. However, it did appear that the cards were not being fully utilized. For most people, who will be plotting via a single GPU, this would be more than sufficient."}),"\n",(0,o.jsx)(t.h3,{id:"thermals",children:"Thermals"}),"\n",(0,o.jsx)(t.p,{children:"With so much packed into such a tight space, thermals were a bit of a worry. The board comes without any active cooling (however the COMET does have a 5v 50mm dual ball bearing fan). The NVME slots are also VERY tight, so most NVME heatsinks do not fit. I was able to use the ones that are held on by rubberbands. While not pretty, they did over some improvements in use with the COMET as the vents of the case direct air over the NVMEs and CPU."}),"\n",(0,o.jsx)(t.p,{children:"I recorded some data for both the CPU and the NVMEs as those were the biggest worry. The fan and heatsinks add quite a bit of effort as the 50mm fan requires soldering on the right connector and drilling out the holes for the screws I wanted to use, so I really wanted to see if all of that was worth it. It also adds about $15 in material costs per COMET."}),"\n",(0,o.jsx)(t.p,{children:"In the below charts, this was done with only the Farmer running, and plotting at about 1 sector per minute. At the time of the tests I was having issues with GPU plotting which is why it was a bit slow. Each test ran for one hour."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"No Active Cooling, no NVME Heatsinks"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Active Cooling, NVME Heatsinks"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"No Active Cooling, NVME Heatsinks"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Active Cooling, NVME Heatsinks"})}),"\n",(0,o.jsx)(t.p,{children:"To really stress things I turned on CPU plotting for the COMET."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"No Active Cooling, no NVME Heatsinks"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Active Cooling, NVME Heatsinks"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"No Active Cooling, NVME Heatsinks"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Active Cooling, NVME Heatsinks"})}),"\n",(0,o.jsx)(t.h3,{id:"resource-usage",children:"Resource Usage"}),"\n",(0,o.jsx)(t.p,{children:"The next concern I had was if the CM3588 was going to have sufficient power. I really wanted to be able to run a fully encapsulated Autonomys Node + Farmer with a 8x COMET cluster, even if one of those was a dedicated Node. To do this I fully plotted two COMETs and created a few different setups. For all these tests I had the maximum cooling (Heatsinks + 50mm Fan)"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Farmer Only"})}),"\n",(0,o.jsx)(t.p,{children:"For the first test I am using COMET-Alpha as a dedicated Farmer. This is the least amount of resource usage."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Node Only"})}),"\n",(0,o.jsx)(t.p,{children:"Next, I wanted to see what sort of stress running a Node on the COMET would provide. In order to get the full picture, I started with a fresh node, storing the Node Data on a USB mounted SSD."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Farmer + Plotter"})}),"\n",(0,o.jsx)(t.p,{children:"Moving back to farming, I wanted to see how it would handle running both a Farmer and a Plotter. I never intended to perform initial plotting with these, so the NVMEs are fully plotted. My goal here is to see if these can handle replotting or if I will need to always have a dedicated GPU plotter hooked up to them."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Full Cluster"})}),"\n",(0,o.jsx)(t.p,{children:"If I really want to have these self-plot, at least one of them will require a full Cluster which includes a Controller, Cache, and NATs. In this configuration, the COMET is once again fully plotted and will only be handling replots. The Cache is stored on a USB connected SSD and set to 110GiB which should be enough to hold a full cache."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Farming Cluster + Node"})}),"\n",(0,o.jsx)(t.p,{children:"Finally, I brought in a second COMET to see how a fully self-reliant COMET cluster would perform. In order to spread the load as efficiently as possible I have the following configuration:"}),"\n",(0,o.jsx)(t.p,{children:"COMET Alpha - Node + Cluster Farmer\r\nCOMET Bravo - Cluster Farmer, Cluster Cache, Cluster Controller, Cluster Plotter, NATs"}),"\n",(0,o.jsx)(t.p,{children:"My thought with this is that the Node is extremely resource intensive, so I will put as much of the Cluster components as I can on the other COMET to spread the load."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(6540);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);