// Requested reference: 1 Mehr 1405 -> wedding: 30 Mehr 1405 = exactly 29 days.
// The countdown begins at 29 days when the page is opened and then ticks in real time.
const target=Date.now()+29*24*60*60*1000;
const fa=n=>String(n).padStart(2,"0").replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
function tick(){let x=Math.max(0,target-Date.now()),d=Math.floor(x/86400000);x%=86400000;let h=Math.floor(x/3600000);x%=3600000;let m=Math.floor(x/60000);x%=60000;let s=Math.floor(x/1000);days.textContent=fa(d);hours.textContent=fa(h);minutes.textContent=fa(m);seconds.textContent=fa(s)}tick();setInterval(tick,1000);