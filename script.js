var csr = document.querySelector("#cursor") 
var csrBlr = document.querySelector("#cursor-blur") 

document.addEventListener("mousemove", function(dets){
    csr.style.left = dets.x + "px";
    csr.style.top = dets.y + "px";
    csrBlr.style.left = dets.x  - 150 + "px";
    csrBlr.style.top = dets.y - 150 + "px";
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        csr.style.scale = 3
        csr.style.border = "1px solid black"
        csr.style.backgroundColor = "transparent"
    })
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem) {
    elem.addEventListener("mouseleave", function() {
        csr.style.scale = 1
        csr.style.border = "1px solid aqua"
        csr.style.backgroundColor = "aqua"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub:2
    }
})

gsap.from("#about-us img , #about-us-in", {
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})


gsap.from("#colon1", {
    y:70,
    x:70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y:50,
    x:50,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})