import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Instagram, Send, Camera } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Envoyez-nous un message',
    link: 'mailto:Bsbtrading@icloud.com',
    linkText: 'Bsbtrading@icloud.com',
    colorClasses: {
      bg: 'bg-blue-500/20',
      text: 'text-blue-400',
      hoverText: 'hover:text-blue-300',
      borderHover: 'hover:border-blue-500/50'
    }
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    description: 'Contactez-nous directement',
    link: 'https://wa.me/+33749677529',
    linkText: 'Ouvrir WhatsApp',
    colorClasses: {
      bg: 'bg-green-500/20',
      text: 'text-green-400',
      hoverText: 'hover:text-green-300',
      borderHover: 'hover:border-green-500/50'
    }
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Suivez nos actualités',
    link: 'https://instagram.com/bsb.bridge',
    linkText: '@bsb.bridge',
    colorClasses: {
      bg: 'bg-pink-500/20',
      text: 'text-pink-400',
      hoverText: 'hover:text-pink-300',
      borderHover: 'hover:border-pink-500/50'
    }
  },
  {
    icon: Send,
    title: 'Telegram',
    description: 'Rejoignez notre canal',
    link: 'https://t.me/bsbbridge',
    linkText: 'Rejoindre',
    colorClasses: {
      bg: 'bg-sky-500/20',
      text: 'text-sky-400',
      hoverText: 'hover:text-sky-300',
      borderHover: 'hover:border-sky-500/50'
    }
  },
  {
    icon: Camera,
    title: 'Snapchat',
    description: 'Ajoutez-nous sur Snapchat',
    link: 'https://t.snapchat.com/o7LAPKgZ',
    linkText: 'Ouvrir Snapchat',
    colorClasses: {
      bg: 'bg-yellow-400/20',
      text: 'text-yellow-400',
      hoverText: 'hover:text-yellow-300',
      borderHover: 'hover:border-yellow-400/50'
    }
  }
];

const ContactCarousel = () => {
  const autoplayOptions = useRef({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay(autoplayOptions.current)]
  );

  // Disable Embla on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (emblaApi) emblaApi.destroy();
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [emblaApi]);

  return (
    <>
      {/* Mobile carousel */}
      <div className="embla md:hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y">
          {contactItems.map((item, index) => (
            <div key={index} className="embla__slide flex-none w-full px-4">
              <Card className={`bg-slate-800/50 border-slate-700 ${item.colorClasses.borderHover} transition-all duration-300 h-full`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${item.colorClasses.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`h-6 w-6 ${item.colorClasses.text}`} />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${item.colorClasses.text} ${item.colorClasses.hoverText} transition-colors`}
                  >
                    {item.linkText}
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {contactItems.map((item, index) => (
          <Card key={index} className={`bg-slate-800/50 border-slate-700 ${item.colorClasses.borderHover} transition-all duration-300`}>
            <CardContent className="p-2 text-center">
              <div className={`w-12 h-12 ${item.colorClasses.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`h-6 w-6 ${item.colorClasses.text}`} />
              </div>
              <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.colorClasses.text} ${item.colorClasses.hoverText} transition-colors`}
              >
                {item.linkText}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ContactCarousel;
