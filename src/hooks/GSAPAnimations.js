import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

// Hero Section Animations
export const useHeroAnimations = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background particles animation
      gsap.set(backgroundRef.current, { opacity: 0 })
      gsap.to(backgroundRef.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.out"
      })

      // Floating particles
      const particles = backgroundRef.current?.querySelectorAll('.particle')
      if (particles) {
        particles.forEach((particle, i) => {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3
          })
          
          gsap.to(particle, {
            y: "-=100",
            x: "+=50",
            rotation: 360,
            duration: 10 + Math.random() * 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2
          })
        })
      }

      // Title typing animation
      gsap.set(titleRef.current, { opacity: 0 })
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.5
      })

      const titleText = titleRef.current?.textContent || ""
      gsap.set(titleRef.current, { text: "" })
      gsap.to(titleRef.current, {
        text: titleText,
        duration: 2,
        delay: 1,
        ease: "none"
      })

      // Subtitle slide in
      gsap.fromTo(subtitleRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 2.5,
          ease: "power2.out" 
        }
      )

      // CTA buttons animation
      gsap.fromTo(ctaRef.current?.children || [], 
        { scale: 0, rotation: 180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 0.8, 
          delay: 3,
          stagger: 0.2,
          ease: "back.out(1.7)" 
        }
      )

      // Continuous floating animation for hero section
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return { heroRef, titleRef, subtitleRef, ctaRef, backgroundRef }
}

// Stats Counter Animation
export const useStatsAnimation = () => {
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = statsRef.current?.querySelectorAll('.stat-number')
      
      if (stats) {
        stats.forEach((stat) => {
          const finalValue = parseInt(stat.dataset.value || '0')
          
          ScrollTrigger.create({
            trigger: stat,
            start: "top 80%",
            onEnter: () => {
              gsap.fromTo(stat, 
                { textContent: 0 },
                {
                  textContent: finalValue,
                  duration: 2,
                  ease: "power2.out",
                  snap: { textContent: 1 },
                  onUpdate: function() {
                    stat.textContent = Math.ceil(this.targets()[0].textContent)
                  }
                }
              )
            }
          })
        })
      }
    }, statsRef)

    return () => ctx.revert()
  }, [])

  return { statsRef }
}

// Service Cards Animation
export const useServiceCardsAnimation = () => {
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card')
      
      if (cards) {
        cards.forEach((card, i) => {
          // Initial state
          gsap.set(card, { 
            y: 100, 
            opacity: 0, 
            rotationY: -15,
            transformPerspective: 1000
          })

          // Scroll trigger animation
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => {
              gsap.to(card, {
                y: 0,
                opacity: 1,
                rotationY: 0,
                duration: 1,
                delay: i * 0.2,
                ease: "power3.out"
              })
            }
          })

          // Hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              rotationY: 5,
              z: 50,
              duration: 0.3,
              ease: "power2.out"
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 0.3,
              ease: "power2.out"
            })
          })
        })
      }
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return { cardsRef }
}

// How It Works Animation
export const useHowItWorksAnimation = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = containerRef.current?.querySelectorAll('.step-item')
      const lines = containerRef.current?.querySelectorAll('.connection-line')
      
      if (steps && lines) {
        // Animate steps
        steps.forEach((step, i) => {
          gsap.set(step, { scale: 0, rotation: 180 })
          
          ScrollTrigger.create({
            trigger: step,
            start: "top 80%",
            onEnter: () => {
              gsap.to(step, {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                delay: i * 0.3,
                ease: "back.out(1.7)"
              })
            }
          })
        })

        // Animate connection lines
        lines.forEach((line, i) => {
          gsap.set(line, { scaleX: 0, transformOrigin: "left center" })
          
          ScrollTrigger.create({
            trigger: line,
            start: "top 80%",
            onEnter: () => {
              gsap.to(line, {
                scaleX: 1,
                duration: 1,
                delay: (i + 1) * 0.3,
                ease: "power2.out"
              })
            }
          })
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return { containerRef }
}

// FAQ Accordion Animation
export const useFAQAnimation = () => {
  const faqRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const questions = faqRef.current?.querySelectorAll('.faq-question')
      
      if (questions) {
        questions.forEach((question, i) => {
          gsap.set(question, { x: -50, opacity: 0 })
          
          ScrollTrigger.create({
            trigger: question,
            start: "top 85%",
            onEnter: () => {
              gsap.to(question, {
                x: 0,
                opacity: 1,
                duration: 0.6,
                delay: i * 0.1,
                ease: "power2.out"
              })
            }
          })
        })
      }
    }, faqRef)

    return () => ctx.revert()
  }, [])

  return { faqRef }
}

// Testimonials Carousel Animation
export const useTestimonialsAnimation = () => {
  const testimonialsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const testimonials = testimonialsRef.current?.querySelectorAll(".testimonial-card")

      if (testimonials) {
        testimonials.forEach((testimonial, i) => {
          gsap.fromTo(testimonial,
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: testimonial,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          )
        })
      }
    }, testimonialsRef)

    return () => ctx.revert()
  }, [])

  return { testimonialsRef }
}


// Magnetic Button Effect
export const useMagneticEffect = () => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return { buttonRef }
}


