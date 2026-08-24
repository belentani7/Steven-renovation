(function(){try{
function fu(){
if(window.__frontUpgrade)return;window.__frontUpgrade=1;
if(window.Lenis){var l=new Lenis({duration:1.1});var r=function(t){l.raf(t);requestAnimationFrame(r)};requestAnimationFrame(r);}
if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('section,h1,h2,.card,img').forEach(function(el){
gsap.from(el,{opacity:0,y:26,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%'}});
});
}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fu);}else{fu();}
}catch(e){}})();
