$( document ).ready(function() {
    const headerTextMove = gsap.timeline();
    const showcols = gsap.timeline();
    const zoomIn = gsap.timeline();
    headerTextMove.fromTo("#headerText", {
        display:"none",
        x:-200,opacity:0}, 
        {duration: 1, 
            x:4, 
            opacity:1,
            display:"block",
            ease:"power2.out"
        });
    showcols.fromTo("#flipCols", {opacity:0, 
        rotationY: 100,
        rotationX: 100 ,
         skewY:-60,
         scale:0.8,
         rotationZ: 60}, 
         {duration: 0.8, 
            scale:1, 
            skewY:0, 
            opacity:1, 
            rotationX: 0,
            rotationZ: 0, 
            rotationY: 0,
            ease:"power2.out" 
         });
    zoomIn.fromTo("#zoomIn", {scale:0}, {duration: 0.7, scale:1,ease:"power2.out" })
});