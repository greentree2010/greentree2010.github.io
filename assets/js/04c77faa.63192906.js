"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[8412],{7231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),s=t(8453);const o={},r="Minato Node Setup Guide",l={id:"guides/node/soneium/soneium",title:"Minato Node Setup Guide",description:"This guide provides instructions on setting up a Minato node using Docker, Docker Compose, and binary installation.",source:"@site/docs/guides/node/soneium/soneium.md",sourceDirName:"guides/node/soneium",slug:"/guides/node/soneium/",permalink:"/docs/guides/node/soneium/",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/node/soneium/soneium.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Vana PoS Network Validator Setup",permalink:"/docs/guides/node/vana/vana-pos-validator-setup"},next:{title:"EigenLayer CLI installation and registration",permalink:"/docs/guides/node/eigenlayer/Create-EigenLayer-CLI"}},d={},c=[{value:"Hardware Requirement",id:"hardware-requirement",level:2},{value:"Docker Installation (Option 1)",id:"docker-installation-option-1",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Docker",id:"install-docker",level:3},{value:"Install Docker Compose",id:"install-docker-compose",level:3},{value:"Install OpenSSL",id:"install-openssl",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Generate JWT Secret",id:"generate-jwt-secret",level:3},{value:"Rename Environment File",id:"rename-environment-file",level:3},{value:"Update Environment Variables",id:"update-environment-variables",level:3},{value:"Run Docker Compose",id:"run-docker-compose",level:3},{value:"Check Logs",id:"check-logs",level:3},{value:"Binary Installation (Option 2)",id:"binary-installation-option-2",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Install OpenSSL",id:"install-openssl-1",level:3},{value:"Installation Steps",id:"installation-steps",level:3},{value:"Step 1: Download Binaries",id:"step-1-download-binaries",level:4},{value:"Step 2: Set Executable Permissions",id:"step-2-set-executable-permissions",level:4},{value:"Step 3: Move Binaries to /usr/local/bin",id:"step-3-move-binaries-to-usrlocalbin",level:4},{value:"Step 4: Set Up Configuration",id:"step-4-set-up-configuration",level:4},{value:"Step 5: Initialize Geth",id:"step-5-initialize-geth",level:4},{value:"Service Configuration",id:"service-configuration",level:3},{value:"op-node Service",id:"op-node-service",level:4},{value:"op-geth Service",id:"op-geth-service",level:4},{value:"Step 6: Enable and Start Services",id:"step-6-enable-and-start-services",level:4},{value:"Monitoring Logs",id:"monitoring-logs",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"minato-node-setup-guide",children:"Minato Node Setup Guide"})}),"\n",(0,i.jsx)(n.p,{children:"This guide provides instructions on setting up a Minato node using Docker, Docker Compose, and binary installation."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://soneium.org/",children:"Soneium"})," is a next-generation Ethereum layer 2 blockchain ecosystem developed by Sony Block Solutions Labs. It connects Web3 with everyday Web2 services, making blockchain more accessible for users. Soneium aims to be a versatile, general-purpose platform, empowering developers and creators with scalable, user-friendly technology. It supports a range of applications, including entertainment, gaming, and finance, offering innovative and competitive features in the Ethereum layer 2 space.\n",(0,i.jsx)(n.img,{src:"https://github.com/user-attachments/assets/395c014b-72e5-4ff4-a3eb-7474bfd74f9e",alt:"image"})]}),"\n",(0,i.jsx)(n.h2,{id:"hardware-requirement",children:"Hardware Requirement"}),"\n",(0,i.jsx)(n.p,{children:"We recommend using the i3.2xlarge AWS instance type or equivalent hardware. If you want to set it up as a public RPC, you will need to adjust node resources based on your traffic."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Resource"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Specification"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CPU Cores"}),(0,i.jsx)(n.td,{children:"8 vCPUs"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RAM"}),(0,i.jsx)(n.td,{children:"61 GiB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Storage"}),(0,i.jsx)(n.td,{children:"1.9 TB NVMe SSD"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"docker-installation-option-1",children:"Docker Installation (Option 1)"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Docker"}),": Ensure Docker is installed on your system. You can install it by following the instructions below."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Docker Compose"}),": Ensure Docker Compose is installed on your system. You can install it by following the instructions below."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Make sure you have the latest versions of Docker and Docker Compose installed."}),"\n",(0,i.jsx)(n.h3,{id:"install-docker",children:"Install Docker"}),"\n",(0,i.jsx)(n.p,{children:"Run the following commands to install Docker:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo apt update\nsudo apt install -y ca-certificates curl gnupg lsb-release\n\n# Add Docker\u2019s official GPG key:\nsudo mkdir -m 0755 -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/keyrings/docker.gpg > /dev/null\n\n# Set up the Docker repository:\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n# Install Docker Engine:\nsudo apt update\nsudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n\n# Verify the installation:\nsudo docker --version\n'})}),"\n",(0,i.jsx)(n.h3,{id:"install-docker-compose",children:"Install Docker Compose"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt install docker-compose\ndocker-compose --version\n"})}),"\n",(0,i.jsx)(n.h3,{id:"install-openssl",children:"Install OpenSSL"}),"\n",(0,i.jsxs)(n.p,{children:["Run the following commands to install ",(0,i.jsx)(n.strong,{children:"OpenSSL"})," on your system:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install openssl -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,i.jsx)(n.h3,{id:"generate-jwt-secret",children:"Generate JWT Secret"}),"\n",(0,i.jsx)(n.p,{children:"Generate a JWT secret by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"openssl rand -hex 32 > jwt.txt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"rename-environment-file",children:"Rename Environment File"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mv sample.env .env\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-environment-variables",children:"Update Environment Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:".env"})," file in a text editor and update the following variables:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"L1_URL=https://sepolia-l1.url \nL1_BEACON=https://sepolia-beacon-l1.url\nP2P_ADVERTISE_IP=<Node Public IP>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In some node providers, you need to specify your node's public IP for op-geth. To do this, replace ",(0,i.jsx)(n.code,{children:"<your_node_public_ip>"})," with your actual public IP in the ",(0,i.jsx)(n.code,{children:"--nat=extip:<your_node_public_ip>"})," parameter within the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file, specifically under the ",(0,i.jsx)(n.code,{children:"op-geth-minato"})," service settings."]}),"\n",(0,i.jsx)(n.p,{children:"Recommendation: For faster synchronization, it's recommended to have the L1 node geographically close to the Minato node."}),"\n",(0,i.jsx)(n.h3,{id:"run-docker-compose",children:"Run Docker Compose"}),"\n",(0,i.jsx)(n.p,{children:"Run the Docker Compose file to start the services:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker-compose up -d\n"})}),"\n",(0,i.jsx)(n.h3,{id:"check-logs",children:"Check Logs"}),"\n",(0,i.jsx)(n.p,{children:"Monitor the logs to ensure the services are running correctly:"}),"\n",(0,i.jsx)(n.p,{children:"For op-node-minato:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker-compose logs -f op-node-minato\n"})}),"\n",(0,i.jsx)(n.p,{children:"For op-geth-minato:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker-compose logs -f op-geth-minato\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"After each restart, it takes approximately 2 minutes for the node to start syncing."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"binary-installation-option-2",children:"Binary Installation (Option 2)"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ubuntu 22.04 or a compatible Linux distribution."}),"\n",(0,i.jsx)(n.li,{children:"Root or sudo privileges."}),"\n",(0,i.jsx)(n.li,{children:"OpenSSL installed."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"install-openssl-1",children:"Install OpenSSL"}),"\n",(0,i.jsxs)(n.p,{children:["Run the following commands to install ",(0,i.jsx)(n.strong,{children:"OpenSSL"})," on your system:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install openssl -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,i.jsx)(n.h4,{id:"step-1-download-binaries",children:"Step 1: Download Binaries"}),"\n",(0,i.jsx)(n.p,{children:"Download the op-node and geth binaries from the release page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wget https://github.com/Soneium/soneium-node/releases/download/v1.9.0-ec45f663-1723023640/op-node\nwget https://github.com/Soneium/soneium-node/releases/download/v1.101315.3-stable-8af19cf2/geth\n"})}),"\n",(0,i.jsx)(n.h4,{id:"step-2-set-executable-permissions",children:"Step 2: Set Executable Permissions"}),"\n",(0,i.jsx)(n.p,{children:"Make the downloaded binaries executable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"chmod +x op-node geth\n"})}),"\n",(0,i.jsx)(n.h4,{id:"step-3-move-binaries-to-usrlocalbin",children:"Step 3: Move Binaries to /usr/local/bin"}),"\n",(0,i.jsxs)(n.p,{children:["Move the binaries to ",(0,i.jsx)(n.code,{children:"/usr/local/bin"})," for easy execution:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo mv -t /usr/local/bin geth op-node\n"})}),"\n",(0,i.jsx)(n.h4,{id:"step-4-set-up-configuration",children:"Step 4: Set Up Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Create the necessary directories and generate the JWT secret:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo mkdir /etc/optimism\nopenssl rand -hex 32 > jwt.txt\ngit clone git@github.com:Web3-Technology-Planning-Office-SNCLabs/soneium-node.git\ncd soneium-node/minato\nopenssl rand -hex 32 > jwt.txt\nsudo mv -t /etc/optimism/ minato-genesis.json jwt.txt minato-rollup.json\n"})}),"\n",(0,i.jsx)(n.h4,{id:"step-5-initialize-geth",children:"Step 5: Initialize Geth"}),"\n",(0,i.jsx)(n.p,{children:"Initialize geth with the genesis configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo geth init --datadir=/data/optimism/ /etc/optimism/genesis.json\n"})}),"\n",(0,i.jsx)(n.h3,{id:"service-configuration",children:"Service Configuration"}),"\n",(0,i.jsx)(n.h4,{id:"op-node-service",children:"op-node Service"}),"\n",(0,i.jsx)(n.p,{children:"Create a systemd service for op-node:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo nano /etc/systemd/system/op-node.service\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the following content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[Unit]\nDescription=op-node\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nUser=root\nGroup=root\nType=simple\nExecStart=/usr/local/bin/op-node \\\n  --l1=https://sepolia-l1.url \\\n  --l2=http://localhost:8551 \\\n  --rpc.addr=127.0.0.1 \\\n  --rpc.port=9545 \\\n  --l2.jwt-secret=/etc/optimism/jwt.txt \\\n  --l1.trustrpc \\\n  --l1.beacon=https://beacon-l1.url \\\n  --syncmode=execution-layer \\\n  --l1.rpckind=erigon \\\n  --p2p.priv.path=/etc/optimism/p2p.key \\\n  --p2p.static=/dns4/peering-01.prd.hypersonicl2.com/tcp/9222/p2p/16Uiu2HAm36ufaFmS3tjSjkUnwSJmQN8W8fZ8yXiu2AYL2o11EgcK,/dns4/peering-02.prd.hypersonicl2.com/tcp/9222/p2p/16Uiu2HAmPkRbG8kkhJ3JWmrqeiMvy1hWXFSz4s4rncVe8YiCJHmx \\\n  --p2p.discovery.path=/etc/optimism/p2p.db \\\n  --p2p.peerstore.path=/etc/optimism/p2p-peerstore.db \\\n  --metrics.enabled \\\n  --p2p.advertise.ip=<your-public-ip> \\\n  --metrics.port=7310 \\\n  --rollup.config=/etc/optimism/rollup.json\n\nRestart=always\nRestartSec=10\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,i.jsx)(n.h4,{id:"op-geth-service",children:"op-geth Service"}),"\n",(0,i.jsx)(n.p,{children:"Create a systemd service for geth:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo nano /etc/systemd/system/op-geth.service\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the following content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[Unit]\nDescription=op-geth\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nUser=root\nGroup=root\nType=simple\nExecStart=/usr/local/bin/geth   --datadir=/data/optimism   --http   --http.corsdomain="*"   --http.vhosts="*"   --http.addr=0.0.0.0   --http.api=web3,debug,eth,txpool,net,engine   --ws   --ws.addr=0.0.0.0   --ws.port=8546   --ws.origins="*"   --ws.api=debug,eth,txpool,net,engine   --syncmode=full   --gcmode=archive   --maxpeers=100   --authrpc.vhosts="*"   --authrpc.addr=0.0.0.0   --rollup.sequencerhttp=https://seq3-rpc.prd.hypersonicl2.com   --authrpc.port=8551   --authrpc.jwtsecret=/etc/optimism/jwt.txt   --metrics   --metrics.addr=0.0.0.0   --metrics.expensive   --metrics.port=6060   --rollup.disabletxpoolgossip=false   --db.engine=pebble   --state.scheme=hash   --bootnodes=enode://6526c348274c54e7b4184014741897eb25e12ca388f588b0265bb2246caeea87ed5fcb2d55b7b08a90cd271a53bc76decb6d1ec37f219dbe4cd3ed53a888118b@peering-02.prd.hypersonicl2.com:30303,enode://34f172c255b11f64828d73c90a60395691e89782639423d434385594dd38b434ddffb78ad411da6fd37cbda6d0f93e17ceae399ac4f2594b0d54eb8c83c27de9@peering-01.prd.hypersonicl2.com:30303\n\nRestart=always\nRestartSec=10\n\n[Install]\nWantedBy=multi-user.target\n'})}),"\n",(0,i.jsx)(n.h4,{id:"step-6-enable-and-start-services",children:"Step 6: Enable and Start Services"}),"\n",(0,i.jsx)(n.p,{children:"Enable and start the services to run at boot:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo systemctl enable op-node.service\nsudo systemctl start op-node.service\n\nsudo systemctl enable op-geth.service\nsudo systemctl start op-geth.service\n"})}),"\n",(0,i.jsx)(n.h4,{id:"monitoring-logs",children:"Monitoring Logs"}),"\n",(0,i.jsxs)(n.p,{children:["You can monitor the logs for both services with the following commands:\nFor ",(0,i.jsx)(n.code,{children:"op-node"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo journalctl -u op-node.service -f\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"op-geth"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo journalctl -u op-geth.service -f\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);