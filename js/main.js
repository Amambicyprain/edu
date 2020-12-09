
$( document ).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
    const headerTextMove = gsap.timeline();
    const showcols = gsap.timeline();
    const zoomIn = gsap.timeline({});
    const textUp = gsap.timeline();
    headerTextMove.fromTo("#headerText", {
        display:"none",
        x:-200,opacity:0}, 
        {duration: 1, 
            x:4, 
            opacity:1,
            display:"block",
            ease:"power2.out"
        });
    showcols.fromTo("#flipCols", 
        {
         opacity:0, 
         rotationY: 100,
         rotationX: 100 ,
         skewY:-60,
         scale:0.8,
         rotationZ: 60}, 
         {
            duration: 4, 
            scale:1, 
            skewY:0, 
            opacity:1, 
            rotationX: 0,
            rotationZ: 0, 
            rotationY: 0,
            ease:"power2.out",
            scrollTrigger:
            { 
             trigger: ".animTriger",
             markers: false,
             start:"top top+=5%",
             end:"bottom top",
             scrub:true}
         });
    zoomIn.fromTo("#zoomIn",
     {scale:0},
      {
        duration: 4,
        scale:1,
        ease:"power2.out" ,
     scrollTrigger:
     { 
        trigger: ".animTriger",
        markers: false, 
        start:"top top+=5%",
        end:"bottom top",
        scrub:true
    }
})
    textUp.fromTo("#headingUP", 
    {
        y:100,
        opacity:0}, 
        {
          duration: 1, 
          y:0,
          opacity:1,
          ease:"power2.out",
          scrollTrigger:
          { 
           trigger: ".animTriger",
           markers: false, 
           start:"top top+=15%",
           end:"bottom top",
           scrub:true
         }
        })
    textUp.fromTo("#ParaUP",
     {
         y:150,
        opacity:0
    }, 
    {
        duration: 1,
        y:0,
        opacity:1,
        ease:"power2.out",
        scrollTrigger:
      { 
        trigger: ".animTriger",
        markers: false, 
        start:"top top+=10%",
        end:"bottom top",
        scrub:true
     }
    })
    textUp.fromTo("#servicesUP", 
    {
        y:100,
        opacity:0}, 
        {
          duration: 1, 
          y:0,
          opacity:1,
          ease:"power2.out",
          scrollTrigger:
          { 
           trigger: ".servicesUPTrigger",
           markers: false, 
           start:"top top+=20%",
           end:"bottom top",
           scrub:true
         }
        })
        zoomIn.fromTo(".zoomedIn",
    {
         scale:0,
         opacity:0
    },
      {
        duration: 2,
        scale:1,
        opacity:1,
        ease:"power2.out" ,
        scrollTrigger:
        { 
            trigger: ".zoomedIn",
            start:"top center",
            end:"bottom top",
            scrub:true}
})
zoomIn.fromTo(".zoomedIn2",
{
     scale:0,
     opacity:0
},
  {
    duration: 2,
    scale:0.8,
    opacity:1,
    ease:"power2.out" ,
    scrollTrigger:
    { 
        trigger: ".zoomedIn2",
        start:"top center+=50%",
        end:"bottom top",
        scrub:true}
})
});
