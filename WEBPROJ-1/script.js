var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#curblr")
document.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+"px"
   crsr.style.top = dets.y+"px"
   blur.style.left = dets.x-150+"px"
   blur.style.top = dets.y-150+"px"
})



gsap.to("#nav",{
   // duration:0.2,
   backgroundColor:"rgb(255,255,255,0.8)",
   color:"blue",
   height:"50px",
   scrollTrigger:{
      trigger:"#nav",
      scroller:"body",
      // markers:true,
      start:"top -10%",
      end:"top -11%",
      scrub:2
   }
})

gsap.to("#main",{
   backgroundColor:"rgba(100,149,237,0.9)",
   scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      // markers:true,
      start:"top -65%",
      end:"top -70%",
      scrub:5
   }
})
