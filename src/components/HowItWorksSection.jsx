import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { User, Wallet, Settings, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

const HowItWorksSection = () => {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const iconsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(step, 
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100 // Animate from left or right based on index
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        gsap.fromTo(iconsRef.current[index], 
          {
            scale: 0.5,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: step,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      step: '01',
      title: 'Créez votre compte',
      description: 'Inscrivez-vous en quelques minutes et accédez à notre plateforme sécurisée. Un processus rapide et intuitif pour démarrer votre parcours avec BSB Bridge.',
      icon: User,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      step: '02',
      title: 'Connectez votre capital',
      description: 'Sécurisez votre investissement minimum de 1500€ en connectant votre capital. Vos fonds restent toujours sous votre contrôle, garantissant une tranquillité d\'esprit totale.',      icon: Wallet,
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '03',
      title: 'Laissez le système opérer',
      description: 'Activez notre bot intelligent pour générer des revenus 24/7. Pendant ce temps, plongez dans l\"univers gamifié du Battle Pass et explorez les collections exclusives de Haute Couture.',      icon: Settings,
      color: 'from-amber-500 to-orange-600'
    }
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez comment BSB Bridge transforme votre expérience d'investissement en 3 étapes simples
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Suivez notre guide simple pour activer votre bot de trading, débloquer le Battle Pass, et accéder à la Haute Couture.
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Vertical line for timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-700 h-full hidden md:block"></div>

          {steps.map((item, index) => (
            <div
              key={index}
              ref={el => (stepsRef.current[index] = el)}
              className={`relative flex flex-col md:flex-row items-center w-full py-8 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
            >
              {/* Content for each step */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1 md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'}`}>
                <div 
                  ref={el => (iconsRef.current[index] = el)}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 md:mb-0 mx-auto md:mx-0 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} bg-gradient-to-br ${item.color}`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:text-left md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
              </div>
              
              {/* Timeline dot with step number */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br ${item.color} z-10 hidden md:flex items-center justify-center border-4 border-slate-800/30`}>
                <span className="text-white text-sm font-bold">{item.step}</span>
              </div>

              {/* Connector line for mobile (if needed, can be removed if not desired) */}
              {index < steps.length - 1 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-700 h-1/2 md:hidden"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection


