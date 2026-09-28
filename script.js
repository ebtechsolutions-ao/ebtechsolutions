document.getElementById('year').textContent = new Date().getFullYear();
const menu=document.querySelector('.menu');
const nav=document.getElementById('navLinks');
menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='76px';nav.style.right='4%';nav.style.background='#fff';nav.style.padding='18px';nav.style.borderRadius='12px';nav.style.boxShadow='0 10px 30px rgba(0,0,0,.12)'});
