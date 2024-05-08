var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#curblr");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "rgb(0,0,0,0.4)",
  color: "white",
  height: "60px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
  duration: "0.1",
});

gsap.to("#main", {
  backgroundColor: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(20px)",
  color: "white",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -65%",
    end: "top -70%",
    scrub: 1,
  },
});
