import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { useFAQAnimation } from '../hooks/GSAPAnimations';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from 'react';

const FAQSection = ({scroll}) => {
  // State for accordion functionality (desktop)
  const [openFAQ, setOpenFAQ] = useState(null);
  const { faqRef } = useFAQAnimation();
  
  // Embla Carousel for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  useEffect(() => {
    emblaRef
  }, [])

  // FAQ data
  const faqData = [
    {
      question: "Comment fonctionne le bot de trading BSB ?",
      answer: "Notre bot de trading utilise des algorithmes avancés pour analyser les marchés financiers 24/7. Il investit sur les cryptomonnaies, matières premières et actions américaines. Vous gardez le contrôle total de vos fonds, et nous prélevons uniquement 25% des bénéfices réalisés."
    },
    {
      question: "Quel est l'investissement minimum requis ?",
      answer: "L'investissement minimum est de 1500€. Cette somme reste sur votre compte et vous gardez le contrôle total. Le bot utilise ces fonds pour effectuer des transactions automatisées en votre nom."
    },
    {
      question: "Comment fonctionne le Battle Pass ?",
      answer: "Le Battle Pass est un système gamifié avec 20 niveaux de progression. Vous complétez des missions pour gagner de l'XP et débloquer des récompenses exclusives comme des PS5, iPhone, MacBook, et même une Golf 8 GTD."
    },
    {
      question: "Quand sera disponible la collection Haute Couture ?",
      answer: "Notre collection Haute Couture sera disponible à partir du 1er janvier 2026. Elle représente l'union entre l'investissement et le luxe, avec des pièces exclusives en édition limitée."
    },
    {
      question: "Mes fonds sont-ils sécurisés ?",
      answer: "Absolument. Vos fonds restent toujours sur votre compte personnel. Nous n'avons pas accès à votre capital, le bot effectue simplement des transactions automatisées. Vous gardez le contrôle total et pouvez arrêter à tout moment."
    },
    {
      question: "Quels sont les frais de BSB Bridge ?",
      answer: "Nous ne prélevons aucun frais fixe. Notre modèle est basé sur la performance : nous prenons uniquement 25% des bénéfices réalisés. Si vous ne gagnez pas, nous ne gagnons pas non plus."
    }
  ];

  // Handle accordion toggle
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-xl text-gray-300">
            Trouvez les réponses aux questions les plus courantes sur BSB Bridge
          </p>
        </div>

        {/* Mobile Carousel with Embla */}
        <div className="sm:hidden mb-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {faqData.map((faq, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mx-2">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>

        {/* Desktop Accordion */}
        <div className="hidden sm:block space-y-4" ref={faqRef}>
          {faqData.map((faq, index) => (
            <div key={index} className="faq-question bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-cyan-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-20 sm:mt-12">
          <p className="text-gray-300 mb-4">Vous avez d'autres questions ? Notre équipe est là pour vous aider.</p>
          <Button
            variant="outline"
            className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-white"
            onClick={()=>scroll("contact")}
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;