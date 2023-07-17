gsap.to("#nav",{
    backgroundColor: "#1B1B1B",
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


gsap.from("#card-container , .header", {
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        start:"top 50%",
        end:"top 46%",
        scrub:1
    }
})

gsap.from("#page3 , .heading-word", {
    x:50,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from("#more , #border", {
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#more",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

