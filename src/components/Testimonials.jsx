import React, { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsCarousel = () => {
    const testimonials = [
        { name: "Alice", rating: 5, text: "Super plateforme, facile à utiliser !" },
        { name: "Bob", rating: 4, text: "Service client réactif et performant." },
        { name: "Claire", rating: 5, text: "J’ai gagné plus que prévu, merci !" },
    ];

    const autoplayOptions = useRef({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start', skipSnaps: false },
        [Autoplay(autoplayOptions.current)]
    );

    // Disable Embla carousel on desktop (>=768px)
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
        <section id="testimonials" className="py-20 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ce que disent nos utilisateurs
                    </h2>
                    <p className="text-xl text-gray-300">
                        Découvrez les témoignages de notre communauté
                    </p>
                </div>

                {/* Mobile carousel */}
                <div className="embla md:hidden" ref={emblaRef}>
                    <div className="embla__container flex touch-pan-y">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="embla__slide flex-none w-full px-4">
                                <Card className="testimonial-card bg-slate-800/50 border-slate-700 transition-all duration-300 h-full">
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 text-yellow-400 fill-current"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                                        <p className="font-semibold text-cyan-300">- {testimonial.name}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop grid with animations */}
                <div className="hidden md:flex flex-wrap justify-center gap-12">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="testimonial-card w-80 bg-slate-800/50 border-slate-700 transition-transform duration-300 hover:scale-105"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                                <p className="font-semibold text-cyan-300">- {testimonial.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
