"use strict";(self.webpackChunkgreentree2010=self.webpackChunkgreentree2010||[]).push([[1868],{1070:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(4848),i=r(8453);const o={title:"Grafana - Monitor NVIDIA GPU"},s=void 0,a={id:"guides/linux/monitor-gpu-grafana",title:"Grafana - Monitor NVIDIA GPU",description:"Introduction",source:"@site/docs/guides/linux/monitor-gpu-grafana.md",sourceDirName:"guides/linux",slug:"/guides/linux/monitor-gpu-grafana",permalink:"/docs/guides/linux/monitor-gpu-grafana",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/linux/monitor-gpu-grafana.md",tags:[],version:"current",frontMatter:{title:"Grafana - Monitor NVIDIA GPU"},sidebar:"guides",previous:{title:"Dockerize Filezilla",permalink:"/docs/guides/linux/dockerize-filezilla"},next:{title:"COMET (CM3588)",permalink:"/docs/category/comet"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Deploy dcgm-exporter",id:"deploy-dcgm-exporter",level:2},{value:"Add to Prometheus config",id:"add-to-prometheus-config",level:2},{value:"Import a Dashboard",id:"import-a-dashboard",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["In this guide we will enable monitoring of NVIDIA GPUs with Grafana. We will be using ",(0,t.jsx)(n.a,{href:"https://github.com/NVIDIA/dcgm-exporter",children:"dcgm-exporter"})," which is an offician NVIDIA repo. We will be running dcgm-exporter in Docker, adding the job to Prometheus, and finally importing a dashboard. I use Portainer to manage my Docker containers, and Termius to manage my SSH sessions."]}),"\n",(0,t.jsx)(n.p,{children:"You should have completed the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-docker-debian",children:"Install Docker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-portainer-host-agent",children:"Set up Portainer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-nvidia-drivers-ubuntu",children:"Install NVIDIA Drivers"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/nvidia-docker-toolkit",children:"Set up NVIDIA GPU for Docker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/use-grafana-to-monitor-system",children:"Set up Prometheus & Grafana"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These are all pretty quick to get through, and will set you up for the next step."}),"\n",(0,t.jsx)(n.h2,{id:"deploy-dcgm-exporter",children:"Deploy dcgm-exporter"}),"\n",(0,t.jsxs)(n.p,{children:["The first thing that needs to be done is setting up the stack file. In Docker terms, a stack file is just a docker-compose. In Portainer, create a new stack file and name it ",(0,t.jsx)(n.code,{children:"dcgm-exporter"}),". Then paste in the following code"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'services:\r\n  dcgm-exporter:\r\n    image: nvidia/dcgm-exporter:latest\r\n    container_name: dcgm-exporter\r\n    restart: unless-stopped\r\n    runtime: nvidia\r\n    environment:\r\n      - NVIDIA_VISIBLE_DEVICES=all\r\n    cap_add:\r\n      - SYS_ADMIN\r\n      - DAC_READ_SEARCH\r\n    privileged: true\r\n    ports:\r\n      - "9400:9400"\r\n    networks:\r\n      monitoring-network:\r\n        ipv4_address: 172.20.0.12\r\n\r\nnetworks:\r\n  monitoring-network:\r\n    external: true\n'})}),"\n",(0,t.jsx)(n.p,{children:"A few things to talk about:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Port 9400 is used, change this if it is already used"}),"\n",(0,t.jsxs)(n.li,{children:["I use my monitoring-network that I set up in ",(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/use-grafana-to-monitor-system",children:"Set up Prometheus & Grafana"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Deploy the stack. You may see something like"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'time="2024-10-11T14:57:12Z" level=info msg="Not collecting DCP metrics: Error getting supported metrics: This request is serviced by a module of DCGM that is not currently loaded"\n'})}),"\n",(0,t.jsx)(n.p,{children:"It does not necessarily mean anything is wrong. It simply means a module was not loaded, and it may be due to the GPU you are using."}),"\n",(0,t.jsx)(n.h2,{id:"add-to-prometheus-config",children:"Add to Prometheus config"}),"\n",(0,t.jsxs)(n.p,{children:["Now that the Docker container is deployed, the dcgm-exporter job needs to be added to Prometheus. My Prometheus config is located at ",(0,t.jsx)(n.code,{children:"~/prometheus/config.yaml"})," which is specified in guide linked above."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nano ~/prometheus/config.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add a section for the new job, mine looks like"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  - job_name: 'dcgm-exporter'\r\n    static_configs:\r\n      - targets: ['172.20.0.1:9400']\r\n        labels:\r\n          instance: 'milton'\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["A new job called ",(0,t.jsx)(n.code,{children:"dcgm-exporter"})," is added"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"gateway"})," of the ",(0,t.jsx)(n.code,{children:"monitoring-network"})," is added, NOT the IP of the container"]}),"\n",(0,t.jsx)(n.li,{children:"A label that denotes the name I have given to my PC is added, and can be exposed in Grafana"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Save your file with ",(0,t.jsx)(n.code,{children:"ctrl + x"})," and then ",(0,t.jsx)(n.code,{children:"y"})," and finally ",(0,t.jsx)(n.code,{children:"ENTER"}),". Restart your Prometheus docker container for the changes to reflect."]}),"\n",(0,t.jsx)(n.h2,{id:"import-a-dashboard",children:"Import a Dashboard"}),"\n",(0,t.jsx)(n.p,{children:'A few people have been been kind enough to create a dashboard for dcgm-exporter. To try them out open up Grafana, go to "Dashboards" select "New" and then "Import".'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://grafana.com/grafana/dashboards/12239-nvidia-dcgm-exporter-dashboard/&ved=2ahUKEwjHis7Y1oaJAxVtEEQIHdxOOG4QFnoECAkQAQ&usg=AOvVaw2FGgMvr4FiL6vNsCmArwki",children:"Grafana Dashboard"})," - ID 12239"]}),"\n",(0,t.jsx)(n.p,{children:'In the input box for the dashboard URL or ID, enter one the above ID and click "Load". Give your dashboard a name, update the UID to be something a bit more specific, and select your Prometheus data source.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"import",src:r(4797).A+"",width:"633",height:"456"})}),"\n",(0,t.jsx)(n.p,{children:'Then click "Import". You should see something like this'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dashboard",src:r(9900).A+"",width:"1405",height:"628"})}),"\n",(0,t.jsx)(n.p,{children:"I like to resize things and reconfigure a few of the dashboards, but this is a great start. The things I usually care about most are Power, Temps, and Usage and that is easily monitored with this dashboard!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9900:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/dashboard-be911d3f4fd24b282b873d21c754fb7c.png"},4797:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/import-6e804961a3450e3e1dc4d666797d0502.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);