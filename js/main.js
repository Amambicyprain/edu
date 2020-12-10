
$( document ).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
    const headerTextMove = gsap.timeline();
    const showcols = gsap.timeline();
    const zoomIn = gsap.timeline({});
    const textUp = gsap.timeline();
    const showprogress = gsap.timeline();
    const flipup = gsap.timeline();
    const teamAnim = gsap.timeline();
    const teamAnim2 = gsap.timeline();
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
            start:"top center+=5%",
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
        scale:1,
        opacity:1,
        ease:"power2.out" ,
        scrollTrigger:
        { 
            trigger: ".zoomedIn2",
            start:"top center+=50%",
            end:"bottom top",
            scrub:true}
    })
    zoomIn.fromTo(".zoomedIn3",
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
            trigger: ".zoomedIn3",
            start:"top center+=50%",
            end:"bottom top+=5%",
            scrub:true}
    })
    zoomIn.fromTo(".zoomedIn4",
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
            trigger: ".zoomedIn4",
            start:"top center+=50%",
            end:"bottom top+=5%",
            scrub:true,
            onLeave:()=>{
              startskillsLevel();
            },
            onLeaveBack:()=>{
              showprogress.reverse();
            }
        }
        
    })
    showprogress.fromTo(".level1",
    {
    
    width:0,x:-10},
    {
      duration: 0.5,
      backgroundColor:"#28ad98",
      width:"95%",x:0,
     
    })
    showprogress.fromTo(".level2,.level3,.level4",
    {
    
    width:0,
    x:-10},
    {
      duration: 0.5,
      backgroundColor:"#28ad98",
      width:"85%",x:0,
     
    })
    function startskillsLevel() {
      showprogress.play();
        console.log("worked")
     
    
    }
    flipup.fromTo(".volunteerAnim", 
    {opacity:0,
      skewX:15,
      rotationZ:10,
      scaleY:0}, 
      {duration: 0.5, 
        opacity:1, 
        skewX:0,
        rotationZ:0,
        scaleY:1,
        ease:"easeIn",
        scrollTrigger:
        { 
            trigger: ".volunteerAnim",
            start:"top center",
            end:"center top",
            scrub:true,
           onLeave:()=>{
             teamAnim.play(); 
            teamAnim2.play(), 
            teamAnim.restart();
            teamAnim2.restart();
            return false;
          }
        },
       
      })
     
    teamAnim.fromTo(".teamAnim",
    {
      x:10, 
      scaleX:0,
      skewY:30 ,
      skewZ:90},
       {duration: 2,
        x:0,
        scaleX:1,
        skewY:0,
        skewZ:0,
        yoyo:true,
      })
    teamAnim.to(".teamAnim",
     {duration: 2,
       delay:1,
       display:"none",
       yoyo:true,
      })  
    teamAnim2.fromTo(".teamAnim2",
    {
      x:10,
      scaleX:0,
      skewY:30,
      skewZ:90,
      display:"none",
      ease:"easeIn",
      

    }, 
    {duration: 2,
      delay:5, 
      x:0,
      scaleX:1,
      skewY:0,
      skewZ:0,
      display:"flex",
      ease:"easeIn",
      yoyo:true,
      
    }) 
    
  textUp.fromTo(".gallUP",
  {
    y:200,
    opacity:0.5
  },
  {
    duration: 4,
     y:0,
     opacity:1,
     
     scrollTrigger:
     { 
         trigger: ".gallUP",
         start:"top bottom-=5%",
         end:"bottom center",
         scrub:true,
        
     }

    });
    headerTextMove.fromTo(".textAnim", {
      y:150,
      opacity:0,
    }, 
      {duration: 1, 
          y:0,
          opacity:1,
         
          ease:"power2.out",
          scrollTrigger:
        { 
            trigger: ".textAnim1",
            start:"center top",
            end:"bottom top+=5%",
            scrub:true,
          

        }

      });
      zoomIn.fromTo(".formAnim",
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
              trigger: ".formAnim",
              start:"top center-=20",
              end:"bottom top",
              scrub:true,
              markers:true
            }
              
      })

    
});
