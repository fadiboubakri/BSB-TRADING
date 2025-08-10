import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Zap,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import WeTrackedStyleTroisPalier from "./components/WeTrackedStyleTroisPalier";
import {
  useHeroAnimations,
  useStatsAnimation,
  useTestimonialsAnimation,
  useMagneticEffect,
  useFAQAnimation,
} from "./hooks/GSAPAnimations";
import HowItWorksSection from "./components/HowItWorksSection";
import "./App.css";

// Import assets
import heroDesktop from "./assets/hero-desktop.jpg";
import newHero from "./assets/new-hero.jpg";
import BsbLogo from "./assets/bsb-logo.jpg";

import ContactCarousel from "./components/ContactCarousel";
import ResponsiveImage from "./components/ResponsiveImage";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQ";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('bot-trading')

  // GSAP Animation Hooks
  const { heroRef, titleRef, subtitleRef, ctaRef, backgroundRef } =
    useHeroAnimations();
  const { statsRef } = useStatsAnimation();
  const { buttonRef: magneticButtonRef } = useMagneticEffect();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  // Scroll handler for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "stats",
        "trois-palier",
        "how-it-works",
        "testimonials",
        "contact",
        "faq"
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toujours afficher la nav en haut de page
      if (currentScrollY < 100) {
        setNavHidden(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Cacher lors du défilement vers le bas
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavHidden(true);
      }
      // Afficher lors du défilement vers le haut
      else if (currentScrollY < lastScrollY) {
        setNavHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const stats = [
    { label: "Utilisateurs actifs", value: "7000", suffix: "+" },
    { label: "Taux de satisfaction", value: "98", suffix: "%" },
    {
      label: "Revenus générés",
      value: "2500000",
      suffix: "€+",
      format: "currency",
    },
    { label: "Récompenses distribuées", value: "500", suffix: "+" },
  ];


  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {currentPage === "home" && (
        <>
          {/* Navigation */}
          <nav className={`fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-transform duration-300 ${navHidden ? '-translate-y-full' : 'translate-y-0'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="text-center cursor-pointer">
                  <img
                    src={BsbLogo}
                    alt="BSB Logo"
                    onClick={() => scrollToSection("hero")}
                    className="w-16 h-auto mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {[
                      { id: "trois-palier", label: "Services" },
                      { id: "how-it-works", label: "Comment ça marche" },
                      { id: "faq", label: "FAQ" },
                      { id: "testimonials", label: "Témoignages" },
                      { id: "contact", label: "Contact" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "text-gray-300 hover:text-white hover:bg-slate-700"
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-white"
                  // onClick={() => setCurrentPage("login")}
                  >
                    Connexion
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  // onClick={() => setCurrentPage("register")}
                  >
                    Commencer
                  </Button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-gray-300 hover:text-white"
                  >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              {mobileMenuOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2">
                    {[
                      { id: "trois-palier", label: "Services" },
                      { id: "how-it-works", label: "Comment ça marche" },
                      { id: "faq", label: "FAQ" },
                      { id: "testimonials", label: "Témoignages" },
                      { id: "contact", label: "Contact" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700"
                      >
                        {item.label}
                      </button>
                    ))}
                    <div className="flex flex-col space-y-2 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
                      // onClick={() => setCurrentPage("login")}
                      >
                        Connexion
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      // onClick={() => setCurrentPage("register")}
                      >
                        Commencer
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Hero Section */}
          <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
          >
            <div
              ref={backgroundRef}
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
            >
              <ResponsiveImage
                desktopSrc={heroDesktop}
                mobileSrc={newHero}
                src={heroDesktop}
                alt="Hero Background"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              ref={heroRef}
              className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
                  #1 Plateforme d'investissement innovante
                </span>
              </div>

              <h1
                ref={titleRef}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Investissez. Progressez.{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Gagnez.
                </span>
              </h1>

              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                La seule solution qui unit trading automatisé, système de
                récompenses gamifié et haute couture de luxe.
              </p>

              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button
                  ref={magneticButtonRef}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
                // onClick={() => setCurrentPage("register")}
                >
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg rounded-full hover:text-white"
                  onClick={() => scrollToSection("trois-palier")}
                >
                  Découvrir nos services
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  Configuration en 5 minutes
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  Aucun code requis
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-cyan-400" />
                  Support 24/7 exceptionnel
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section id="stats" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Rejoignez des milliers d'utilisateurs satisfaits
                </h2>
              </div>

              <div
                ref={statsRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                      <span className="stat-number" data-value={stat.value}>
                        0
                      </span>
                      <span>{stat.suffix}</span>
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WeTracked Style Trois Palier Section */}
          <WeTrackedStyleTroisPalier setActiveTab={setActiveTab} activeTab={activeTab}/>

          {/* How It Works Section */}
          <HowItWorksSection />

          {/* FAQ Section */}
          <FAQSection scroll={scrollToSection} />

          {/* Testimonials */}
          <Testimonials />

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contactez-nous
                </h2>
                <p className="text-xl text-gray-300">
                  Notre équipe est là pour répondre à toutes vos questions
                </p>
              </div>
              <ContactCarousel />
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à transformer votre avenir financier ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Rejoignez des milliers d'utilisateurs qui ont déjà commencé leur
                voyage avec BSB Bridge
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
                // onClick={() => setCurrentPage("register")}
                >
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg rounded-full hover:text-white"
                // onClick={() => setCurrentPage("login")}
                >
                  Se connecter
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    BSB Bridge
                  </h3>
                  <p className="text-gray-400 mb-4">
                    La plateforme qui révolutionne l'investissement automatisé,
                    les récompenses gamifiées, et l'excellence couture.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <button
                        onClick={() => { scrollToSection("trois-palier"), setActiveTab("bot-trading") }}
                        className="hover:text-white transition-colors"
                      >
                        Bot Trading
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => { scrollToSection("trois-palier"), setActiveTab("battle-pass") }}
                        className="hover:text-white transition-colors"
                      >
                        Battle Pass
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => { scrollToSection("trois-palier"), setActiveTab("haute-couture") }}
                        className="hover:text-white transition-colors"
                      >
                        Haute Couture
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <button
                        onClick={() => scrollToSection("faq")}
                        className="hover:text-white transition-colors"
                      >
                        FAQ
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="hover:text-white transition-colors"
                      >
                        Contact
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("how-it-works")}
                        className="hover:text-white transition-colors"
                      >
                        Comment ça marche
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a
                        href="mailto:Bsbtrading@icloud.com"
                        className="hover:text-white transition-colors"
                      >
                        Bsbtrading@icloud.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/+33749677529"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        +33 7 49 67 75 29
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
                <p>© 2025 BSB Bridge. Tous droits réservés.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
