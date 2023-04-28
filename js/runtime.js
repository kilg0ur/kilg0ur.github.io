var now=new Date;
function createtime(){
	now.setTime(now.getTime()+1e3);
	var e=new Date("04/26/2023 00:00:00"),t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),o=new Date("04/26/2023 00:00:00"),n=(now-o)/1e3/60/60/24,r=Math.floor(n),i=(now-o)/1e3/60/60-24*r,s=Math.floor(i);
	1==String(s).length&&(s="0"+s);
	var d=(now-o)/1e3/60-1440*r-60*s,l=Math.floor(d);
	1==String(l).length&&(l="0"+l);
	var g=(now-o)/1e3-86400*r-3600*s-60*l,b=Math.round(g);
	1==String(b).length&&(b="0"+b);

	var ho=new Date("05/27/2022 16:38:23"),hn=(now-ho)/1e3/60/60/24,hd=Math.floor(hn),hi=(now-ho)/1e3/60/60-24*hd,hh=Math.floor(hi);
	1==String(hh).length&&(hh="0"+hh);
	var dd=(now-ho)/1e3/60-1440*hd-60*hh,hf=Math.floor(dd);
	1==String(hf).length&&(hf="0"+hf);
	var gg=(now-ho)/1e3-86400*hd-3600*hh-60*hf,hs=Math.round(gg);
	1==String(hs).length&&(hs="0"+hs);
	let c="";
	c=s<18&&s>=9?`<div style="font-size:13px;font-weight:bold"> 
							本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒
							<i id="heartbeat" class='fas fa-heartbeat'> 
							</i> <br> 
							现在是和Ta恋❤爱的第 ${hd} 天 ${hh} 小时 ${hf} 分 ${hs} 秒 
							<i id="heartbeat" class='fas fa-heartbeat'> 
							</i> <br>
							旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀

							</div>`:`

							<br> <div style="font-size:13px;font-weight:bold">
							本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 

							<i id="heartbeat" class='fas fa-heartbeat'>
							</i> <br> 
							今天是和Ta恋❤爱的第 ${hd} 天 ${hh} 小时 ${hs} 秒
							<i id="heartbeat" class='fas fa-heartbeat'>
							</i> <br>
							旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}setInterval((()=>{createtime()}),1e3);


/*c=s<18&&s>=9?`<div style="font-size:13px;font-weight:bold"> 
							本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒
							<i id="heartbeat" class='fas fa-heartbeat'> 
							</i> <br> 
							旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀

							</div>`:`

							<br> <div style="font-size:13px;font-weight:bold">
							本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 
							<i id="heartbeat" class='fas fa-heartbeat'>
							</i> <br> 
							旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}setInterval((()=>{createtime()}),1e3);*/