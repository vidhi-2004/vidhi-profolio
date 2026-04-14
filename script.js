 // Cursor
  const cur=document.getElementById('cur'), ring=document.getElementById('curRing');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; });
  (function tick(){
    cur.style.left=mx+'px'; cur.style.top=my+'px';
    rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(tick);
  })();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ring.style.width='50px';ring.style.height='50px';ring.style.opacity='.3';});
    el.addEventListener('mouseleave',()=>{ring.style.width='36px';ring.style.height='36px';ring.style.opacity='.55';});
  });

  // Mobile nav
  function toggleMenu(){ document.getElementById('navLinks').classList.toggle('open'); }
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));

  // Active nav highlight
  const secs=document.querySelectorAll('section'), nls=document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll',()=>{
    let c='';
    secs.forEach(s=>{ if(window.scrollY>=s.offsetTop-130) c=s.id; });
    nls.forEach(a=>{ a.style.color=a.getAttribute('href')==='#'+c?'var(--accent)':''; });
  });

  // Scroll reveal
  document.querySelectorAll('.reveal').forEach(el=>
    new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    }),{threshold:.1}).observe(el)
  );

  // Contact form
  function sendMsg(){
    const n=document.getElementById('fn').value,
          e=document.getElementById('fe').value,
          m=document.getElementById('fm').value;
    if(!n||!e||!m){ alert('Please fill in all fields.'); return; }
    const ok=document.getElementById('fok');
    ok.style.display='block';
    document.getElementById('fn').value='';
    document.getElementById('fe').value='';
    document.getElementById('fm').value='';
    setTimeout(()=>ok.style.display='none',5000);
  }

