"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[6121],{2952:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var s=a(4848),r=a(8453);const d={title:"Back Up and Assemble an MDADM RAID5 Array"},t=void 0,i={id:"guides/support/backup-restore-mdadm",title:"Back Up and Assemble an MDADM RAID5 Array",description:"I recently created an 8 disk RAID5 array using mdadm (multiple device administration) in Ubuntu. I had to reinstall my operating system and wanted to make sure I could restore everything afterwards without much fuss. Turns out as long as you back up your config file it is pretty easy!",source:"@site/docs/guides/support/backup-restore-mdadm.md",sourceDirName:"guides/support",slug:"/guides/support/backup-restore-mdadm",permalink:"/docs/guides/support/backup-restore-mdadm",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/support/backup-restore-mdadm.md",tags:[],version:"current",frontMatter:{title:"Back Up and Assemble an MDADM RAID5 Array"},sidebar:"guides",previous:{title:"Host a Local AI",permalink:"/docs/guides/support/host-local-ai"},next:{title:"Dockerize Filezilla",permalink:"/docs/guides/support/dockerize-filezilla"}},o={},c=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"I recently created an 8 disk RAID5 array using mdadm (multiple device administration) in Ubuntu. I had to reinstall my operating system and wanted to make sure I could restore everything afterwards without much fuss. Turns out as long as you back up your config file it is pretty easy!"}),"\n",(0,s.jsx)(n.p,{children:"Now keep in mind doing anything with data is stressful. You will likely always want to have a recent copy of your data backed up somewhere else (3-2-1 rule), especially before doing something like this. Planning for the worst, hoping for the best has saved a lot of potentially ruined days."}),"\n",(0,s.jsx)(n.p,{children:"Speaking of back ups, the first step you need to take is to back up the config file for mdadm. You can do this by running the following command"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mdadm --detail --scan\n"})}),"\n",(0,s.jsx)(n.p,{children:"I got the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ARRAY /dev/md0 metadata=1.2 spares=1 UUID=576d6fe7:c8528a0a:2c0fd278:09a74e22\n"})}),"\n",(0,s.jsx)(n.p,{children:"Save the output of the scan to a file so that you can reference it later. That\u2019s it for the back up. Technically, assuming all things go well, you will not need this when you assemble your drives after the reinstall."}),"\n",(0,s.jsx)(n.p,{children:"To restore your RAID array, make sure mdadm is installed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install mdadm\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then open up the config file and add in the scan data from the backup, then run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mdadm --assemble --scan\n"})}),"\n",(0,s.jsx)(n.p,{children:"When I ran this there was no output. You can confirm everything worked by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mdadm --detail /dev/md0\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see details of your array printed out, for my RAID5 I got"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"           Version : 1.2\r\n     Creation Time : Sun Sep 22 23:45:45 2024\r\n        Raid Level : raid5\r\n        Array Size : 123047371776 (114.60 TiB 126.00 TB)\r\n     Used Dev Size : 17578195968 (16.37 TiB 18.00 TB)\r\n      Raid Devices : 8\r\n     Total Devices : 8\r\n       Persistence : Superblock is persistent\r\n\r\n     Intent Bitmap : Internal\r\n\r\n       Update Time : Sun Sep 29 21:47:41 2024\r\n             State : clean \r\n    Active Devices : 8\r\n   Working Devices : 8\r\n    Failed Devices : 0\r\n     Spare Devices : 0\r\n\r\n            Layout : left-symmetric\r\n        Chunk Size : 512K\r\n\r\nConsistency Policy : bitmap\r\n\r\n              Name : milton:0  (local to host milton)\r\n              UUID : 576d6fe7:c8528a0a:2c0fd278:09a74e22\r\n            Events : 80586\r\n\r\n    Number   Major   Minor   RaidDevice State\r\n       0       8        0        0      active sync   /dev/sda\r\n       1       8       16        1      active sync   /dev/sdb\r\n       2       8      112        2      active sync   /dev/sdh\r\n       3       8       32        3      active sync   /dev/sdc\r\n       4       8       80        4      active sync   /dev/sdf\r\n       5       8       48        5      active sync   /dev/sdd\r\n       6       8       96        6      active sync   /dev/sdg\r\n       8       8       64        7      active sync   /dev/sde\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is where I ran into problems, I have no spare listed which is not good. So I need to add one, which oddly enough means I have to mark a drive as failed, remove it, then re-add it specifically as a spare."}),"\n",(0,s.jsx)(n.p,{children:"So here we go, mark one as failed, I chose randomly"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mdadm --fail /dev/md0 /dev/sdh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remove it"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mdadm --remove /dev/md0 /dev/sdh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add it back but as a spare"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mdadm --add-spare /dev/md0 /dev/sdh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you will need to save the state of the array by updating initramfs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo update-initramfs -u\n"})}),"\n",(0,s.jsx)(n.p,{children:"Lastly you will want to probably update fstab to automatically mount the drive. I will mount my raid array to /media/shared, so first I\u2019ll create the folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /media/shared\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check the UUID, changing /dev/md0 as needed, with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo blkid /dev/md0\n"})}),"\n",(0,s.jsx)(n.p,{children:"Which gives me"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'/dev/md0: UUID="b8273bf2-9661-4006-a8d7-19710ead427d" BLOCK_SIZE="4096" TYPE="ext4"\n'})}),"\n",(0,s.jsx)(n.p,{children:"So I will use that UUID and filesystem when creating my fstab. Open up the fstab file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/fstab\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then add the following, using the UUID and mount point"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"UUID=b8273bf2-9661-4006-a8d7-19710ead427d       /media/shared   ext4 defaults,nofail    0       0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Press ",(0,s.jsx)(n.code,{children:"CTRL + x"}),", then ",(0,s.jsx)(n.code,{children:"y"}),", then ",(0,s.jsx)(n.code,{children:"ENTER"})," to save. Then mount it (you can do this even while the array is rebuilding if you just added a spare)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mount -av\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify everything with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"df -h\n"})}),"\n",(0,s.jsx)(n.p,{children:"And that is it! You should have successfully restored your RAID array with mdadm."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>i});var s=a(6540);const r={},d=s.createContext(r);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);