document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Hero section animation
    gsap.from(".hero-content", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".hero-image img", { duration: 1.5, x: 100, opacity: 0, ease: "power2.out", delay: 1 });
  
    // About section scroll-triggered animations
    gsap.from(".about h2", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%", // When the top of the about section hits 80% of the viewport height
        toggleActions: "play none none none"
      },
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  
    gsap.from(".about p", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%", // When the top of the about section hits 70% of the viewport height
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.3
    });
  
    gsap.from(".about-images img", {
      scrollTrigger: {
        trigger: ".about-images",
        start: "top 70%", // When the top of the images hits 70% of the viewport height
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      delay: 0.5
    });
  
    // Services section scroll-triggered animation
    gsap.from(".services h2", {
      scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  
    gsap.from(".service-item", {
      scrollTrigger: {
        trigger: ".services",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power2.out"
    });
  
    // Contact section scroll-triggered animations
    gsap.from(".contact h2", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%", // When the top of the contact section hits 80% of the viewport height
        toggleActions: "play none none none"
      },
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  
    gsap.from(".contact p", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 70%", // When the top of the contact section hits 70% of the viewport height
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.3
    });
  
    gsap.from(".contact img", {
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 60%", // When the top of the contact content hits 60% of the viewport height
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5
    });
  
    gsap.from(".contact-details", {
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 60%", // When the top of the contact content hits 60% of the viewport height
        toggleActions: "play none none none"
      },
      x: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5
    });
  });
  
  