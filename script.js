const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");

if(menuBtn&&navMenu){
  menuBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("open");
    menuBtn.textContent=navMenu.classList.contains("open")?"✕":"☰";
  });
  navMenu.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
      navMenu.classList.remove("open");
      menuBtn.textContent="☰";
    });
  });
}

const year=document.getElementById("year");
if(year) year.textContent=new Date().getFullYear();
