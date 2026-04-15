
  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener("DOMContentLoaded", (event) => {

    gsap.from(".phat", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: .7,
      ease: "power20.out"
    });

    gsap.from(".name", {
      y: 30,              
      opacity: 0,         
      duration: 1.3,        
      delay: 1.5,         
      ease: "power20.out"  
    });

    gsap.from(".w55", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power20.out",
      
      scrollTrigger: {
        trigger: ".w55",
        start: "top 80%",
      }
    });

       gsap.from(".two-column", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power20.out",
      
      scrollTrigger: {
        trigger: ".two-column",
        start: "top 80%",
      }
    });

  });