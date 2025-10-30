// Simple particle background + countdown
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w, h, stars=[];

function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
window.addEventListener('resize', resize);
resize();

class Star{ constructor(){ this.reset(); }
  reset(){ this.x = Math.random()*w; this.y = Math.random()*h; this.z = Math.random()*1; this.size = Math.random()*1.5; this.alpha = 0.2 + Math.random()*0.9; }
  update(){ this.x -= 0.3 + this.z*1.5; if(this.x < 0) this.reset(), this.x = w; }
  draw(){ ctx.globalAlpha = this.alpha; ctx.fillStyle = '#9BE7FF'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
}

for(let i=0;i<180;i++) stars.push(new Star());
function loop(){
  ctx.clearRect(0,0,w,h);
  for(let s of stars){ s.update(); s.draw(); }
  requestAnimationFrame(loop);
}
loop();

// Countdown to next Friday 9:00 PM (server local)
function nextFriday9(){ const now = new Date(); const day = now.getDay(); const daysToFri = (5 - day + 7) % 7 || 7; const target = new Date(now.getFullYear(), now.getMonth(), now.getDate()+daysToFri, 21, 0, 0); return target; }
const target = nextFriday9();
function tick(){ const now = new Date(); let diff = Math.max(0, target - now); const hrs = String(Math.floor(diff/36e5)).padStart(2,'0'); const mins = String(Math.floor(diff%36e5/6e4)).padStart(2,'0'); const secs = String(Math.floor(diff%6e4/1000)).padStart(2,'0'); document.getElementById('countdown').textContent = hrs+':'+mins+':'+secs; if(diff<=0) document.getElementById('countdown').textContent='LIVE'; }
setInterval(tick, 1000); tick();