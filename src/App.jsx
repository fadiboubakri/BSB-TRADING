import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Bot, Trophy, Shirt, ArrowRight, Phone, Mail, Send, Camera, Instagram } from 'lucide-react'
import TradingPage from './pages/TradingPage.jsx'
import BattlePassPage from './pages/BattlePassPage.jsx'
import CouturePage from './pages/CouturePage.jsx'
import './App.css'

function App() {

  const [activeSection, setActiveSection] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

  // Map routes to page keys
  const pageRoutes = {
    '/': 'home',
    '/trading': 'trading',
    '/battlepass': 'battlepass',
    '/couture': 'couture',
  }

  const pageComponents = {
    trading: <TradingPage />,
    battlepass: <BattlePassPage />,
    couture: <CouturePage />,
  }

  // Set initial page + handle back/forward navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname
      const normalizedPath = path === '/' ? '/' : path.toLowerCase()
      setCurrentPage(pageRoutes[normalizedPath] || 'home')
    }

    handleLocationChange() // on mount

    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  // Navigation handler
  const navigateToPage = (page) => {
    if (page !== currentPage) {
      const path = page === 'home' ? '/' : `/${page}`
      window.history.pushState({}, '', path)
      setCurrentPage(page)
      window.scrollTo(0, 0)
    }
  }

  // Scroll to section for homepage
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Render routed page if not on home
  if (currentPage !== 'home' && pageComponents[currentPage]) {
    return pageComponents[currentPage]
  }

  const services = [
    {
      id: 'trading',
      title: 'BOT TRADING',
      icon: Bot,
      image: '/trading-bot.jpg', description: "Le trading, c’est simplement l’art d’acheter et de revendre des actifs financiers en profitant des fluctuations de leur valeur. Chez BSB, nous investissons sur différents marchés, comme par exemple les cryptomonnaies (telles que le Bitcoin), les matières premières (comme l’or), ou encore les actions des grandes entreprises américaines. L’idée, c’est de laisser notre robot de trading automatisé analyser le marché et prendre des décisions d’achat et de vente à votre place, afin de générer des revenus de façon autonome et simplifiée."
    },
    {
      id: 'battlepass',
      title: 'BATTLE PASS',
      icon: Trophy,
      image: '/battle-pass-new.jpg',
      description: "Fonctionnement Ludique : Le Battle Pass vous permet de compléter des missions pour obtenir des récompenses variées, qu’il s’agisse de cadeaux ou de bonus financiers.\nRécompenses Attractives : Chaque mission réussie apporte une valeur ajoutée, rendant l’expérience plus engageante et motivante.\nTransparence et Sécurité : Comme pour le trading automatisé, vous gardez le contrôle total de vos fonds et de vos gains."
    },
    {
      id: 'couture',
      title: 'HAUTE COUTURE',
      icon: Shirt,
      image: '/haute-couture.jpg',
      description: "La haute couture chez BsBridge symbolise l'union entre l'investissement et l'univers du luxe. Chaque pièce de notre collection incarne cette passerelle entre le monde de la finance et celui de la mode, créant une marque de vêtements unique, où l'élégance et l'exclusivité rencontrent l'innovation et l'investissement. C'est ainsi que BsBridge fait le lien entre ces deux univers."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/new-hero.jpg)`, backgroundSize: '100% 100%' }}
        ></div>

        <div className="relative z-10 text-center text-white w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Service Buttons from the image - borderless */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4 mb-8 mt-32 sm:mb-12 px-4">
            <Button
              className="bg-gradient-to-r from-cyan-500/30 to-blue-600/30 hover:from-cyan-500/50 hover:to-blue-600/50 text-cyan-300 hover:text-white px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border-0"
              onClick={() => scrollToSection('trading')}
            >
              <Bot className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4 lg:h-5 w-5" />
              <span className="hidden sm:inline">BOT TRADING</span>
              <span className="sm:hidden">BOT</span>
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500/30 to-pink-600/30 hover:from-purple-500/50 hover:to-pink-600/50 text-purple-300 hover:text-white px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border-0"
              onClick={() => scrollToSection('battlepass')}
            >
              <Trophy className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4 lg:h-5 w-5" />
              <span className="hidden sm:inline">BATTLE PASS</span>
              <span className="sm:hidden">BATTLE</span>
            </Button>
            <Button
              className="bg-gradient-to-r from-amber-500/30 to-orange-600/30 hover:from-amber-500/50 hover:to-orange-600/50 text-amber-300 hover:text-white px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border-0 "
              onClick={() => scrollToSection('couture')}
            >
              <Shirt className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4 lg:h-5 w-5" />
              <span className="hidden sm:inline">HAUTE COUTURE</span>
              <span className="sm:hidden">COUTURE</span>
            </Button>
            <Button
              className="bg-gradient-to-r from-green-500/30 to-emerald-600/30 hover:from-green-500/50 hover:to-emerald-600/50 text-green-300 hover:text-white px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border-0"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4 lg:h-5 w-5" />
              <span className="hidden sm:inline">CONTACT</span>
              <span className="sm:hidden">CONTACT</span>
            </Button>
          </div>

          <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 border-0"
            onClick={() => scrollToSection('services')}
          >
            Explorez nos services
            <ChevronDown className="ml-2 h-4 w-4 sm:h-5 w-5 animate-bounce" />
          </Button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900/90 via-blue-900/70 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Bienvenue dans l'<span className="text-cyan-400">univers BSB</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Découvrez l'écosystème BsBridge où l'innovation financière rencontre le luxe et le gaming.
            Une plateforme révolutionnaire qui unit trois piliers fondamentaux pour transformer votre
            expérience d'investissement et de lifestyle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${service.id === 'trading' ? 'border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-500/20' :
                    service.id === 'battlepass' ? 'border-purple-500/30 hover:border-purple-400/60 hover:shadow-purple-500/20' :
                      'border-amber-500/30 hover:border-amber-400/60 hover:shadow-amber-500/20'
                    } ${activeSection === service.id ? 'ring-2 ring-cyan-400' : ''}`}
                  onMouseEnter={() => setActiveSection(service.id)}
                  onMouseLeave={() => setActiveSection(null)}

                      onClick={() => navigateToPage(service.id)}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.id === 'trading' ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10' :
                    service.id === 'battlepass' ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' :
                      'bg-gradient-to-br from-amber-500/10 to-orange-500/10'
                    }`}></div>

                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`backdrop-blur-sm rounded-full p-2 sm:p-3 border ${service.id === 'trading' ? 'bg-cyan-500/20 border-cyan-400/30' :
                        service.id === 'battlepass' ? 'bg-purple-500/20 border-purple-400/30' :
                          'bg-amber-500/20 border-amber-400/30'
                        }`}>
                        <Icon className={`h-4 w-4 sm:h-6 w-6 ${service.id === 'trading' ? 'text-cyan-400' :
                          service.id === 'battlepass' ? 'text-purple-400' :
                            'text-amber-400'
                          }`} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className={`text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 transition-colors duration-300 ${service.id === 'trading' ? 'group-hover:text-cyan-400' :
                      service.id === 'battlepass' ? 'group-hover:text-purple-400' :
                        'group-hover:text-amber-400'
                      }`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-4">
                      {service.description}
                    </p>
                    {service.id === 'couture' && (
                      <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-3 mb-4 sm:mb-6">
                        <p className="text-amber-300 text-xs sm:text-sm font-medium">
                          🗓️ Disponible à partir du 1er janvier 2025
                        </p>
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      className={`transition-all duration-300 group-hover:translate-x-2 text-xs sm:text-sm ${service.id === 'trading' ? 'text-cyan-400 hover:text-white hover:bg-cyan-500/20' :
                        service.id === 'battlepass' ? 'text-purple-400 hover:text-white hover:bg-purple-500/20' :
                          'text-amber-400 hover:text-white hover:bg-amber-500/20'
                        }`}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900/60 to-blue-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              CONTACT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500/20 backdrop-blur-sm rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 border border-green-400/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Phone className="h-6 w-6 sm:h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-400 transition-colors duration-300">
                  WhatsApp
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                  Contactez-nous directement via WhatsApp pour une réponse rapide
                </p>
                <Button
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://wa.me/+33749677529', '_blank')}
                >
                  Ouvrir WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Mail className="h-6 w-6 sm:h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Email
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                  Envoyez-nous un email pour toute question ou demande d'information
                </p>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('mailto:Bsbtrading@icloud.com', '_blank')}
                >
                  Envoyer un Email
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-pink-500/20 backdrop-blur-sm rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 border border-pink-400/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Instagram className="h-6 w-6 sm:h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  Instagram
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                  Découvrez nos actualités visuelles et stories sur Instagram
                </p>
                <Button
                  className="bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://www.instagram.com/bsbridge7?igsh=MWQ2ZjUzN3VwMjRoNQ==', '_blank')}
                >
                  Voir Instagram
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Send className="h-6 w-6 sm:h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  Telegram
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                  Rejoignez notre canal Telegram pour les dernières mises à jour
                </p>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://t.me/bsbtradingbot', '_blank')}
                >
                  Ouvrir Telegram
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Camera className="h-6 w-6 sm:h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  Snapchat
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                  Suivez-nous sur Snapchat pour du contenu exclusif
                </p>
                <Button
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://t.snapchat.com/o7LAPKgZ', '_blank')}
                >
                  Ouvrir Snapchat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-cyan-500/20 bg-gradient-to-r from-slate-900/80 to-blue-900/60">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">BSB</h3>
            <p className="text-gray-400 text-sm sm:text-base">L'innovation au service de votre réussite</p>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm">
            © 2025 BsBridge. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

