import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import tradingBot from '../assets/trading-bot.jpg'
import battlePassNew from '../assets/battle-pass-new.jpg'
import hauteCouture from '../assets/haute-couture.jpg'
import {
  Bot,
  Trophy,
  Shirt,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Crown,
  Sparkles,
  Gift,
  Gamepad2,
  Gem
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WeTrackedStyleTroisPalier = ({ activeTab, setActiveTab }) => {
  const [autoSwitchEnabled, setAutoSwitchEnabled] = useState(true)
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const detailsRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const featuresRef = useRef(null)
  const statsRef = useRef(null)

  const paliers = [
    {
      id: 'bot-trading',
      title: 'Bot Trading',
      subtitle: 'Trading automatisé intelligent',
      description: 'Trading automatisé intelligent qui génère des revenus 24/7 sans intervention manuelle.',
      icon: Bot,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/30',
      bgColor: 'bg-cyan-500/10',
      image: tradingBot,
      features: [
        'Investissement minimum 1500€',
        'Potentiel 500-3000€/mois',
        '25% de commission sur gains uniquement'
      ]
    },
    {
      id: 'battle-pass',
      title: 'Battle Pass',
      subtitle: 'Système de récompenses gamifié',
      description: 'Système de récompenses gamifié avec missions et paliers de progression.',
      icon: Trophy,
      color: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-purple-500/10',
      image: battlePassNew,
      features: [
        '20 niveaux de progression',
        'Récompenses exclusives',
        'PS5, iPhone, MacBook et plus'
      ]
    },
    {
      id: 'haute-couture',
      title: 'Haute Couture',
      subtitle: 'Collection de vêtements de luxe',
      description: 'Collection de vêtements de luxe alliant élégance et innovation financière.',
      icon: Shirt,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/30',
      bgColor: 'bg-amber-500/10',
      image: hauteCouture,
      features: [
        'Édition limitée',
        'Matières premium',
        'Disponible janvier 2026'
      ]
    }
  ]

  const detailedContent = {
    'bot-trading': {
      title: 'Générez des revenus 24/7 sans effort',
      subtitle: 'Bot Trading Automatisé',
      description: 'Notre bot de trading intelligent analyse les marchés en continu et exécute des transactions optimales pour maximiser vos profits.',
      features: [
        {
          icon: TrendingUp,
          title: 'Potentiel de 500-3000€/mois',
          description: 'Revenus basés sur les performances du marché'
        },
        {
          icon: Shield,
          title: 'Vos fonds restent sécurisés',
          description: 'Contrôle total sur votre capital'
        },
        {
          icon: Zap,
          title: '25% de commission sur gains uniquement',
          description: 'Pas de frais fixes, nous gagnons quand vous gagnez'
        }
      ],
      cta: 'Commencer le trading',
      stats: [
        { label: 'Taux de réussite', value: '87%' },
        { label: 'Utilisateurs actifs', value: '2,500+' },
        { label: 'Revenus générés', value: '€1.2M+' }
      ]
    },
    'battle-pass': {
      title: 'Transformez vos investissements en jeu',
      subtitle: 'Battle Pass Gamifié',
      description: 'Complétez des missions, gagnez de l\'XP et débloquez des récompenses exclusives dans notre système gamifié unique.',
      features: [
        {
          icon: Trophy,
          title: '20 niveaux de progression',
          description: 'Système de paliers avec récompenses croissantes'
        },
        {
          icon: Gift,
          title: 'Récompenses exclusives',
          description: 'PS5, iPhone, MacBook, Golf 8 GTD et plus'
        },
        {
          icon: Gamepad2,
          title: 'Missions variées',
          description: 'Défis quotidiens et hebdomadaires'
        }
      ],
      cta: 'Rejoindre le Battle Pass',
      stats: [
        { label: 'Niveaux disponibles', value: '20' },
        { label: 'Récompenses distribuées', value: '500+' },
        { label: 'Participants actifs', value: '1,800+' }
      ]
    },
    'haute-couture': {
      title: 'L\'élégance rencontre l\'innovation',
      subtitle: 'Haute Couture Exclusive',
      description: 'Notre collection de haute couture symbolise l\'union parfaite entre l\'univers de l\'investissement et celui du luxe.',
      features: [
        {
          icon: Crown,
          title: 'Édition limitée',
          description: 'Pièces exclusives pour les visionnaires'
        },
        {
          icon: Gem,
          title: 'Matières premium',
          description: 'Qualité exceptionnelle et finitions luxueuses'
        },
        {
          icon: Sparkles,
          title: 'Disponible janvier 2026',
          description: 'Précommandes bientôt ouvertes'
        }
      ],
      cta: 'Découvrir la collection',
      stats: [
        { label: 'Pièces en édition limitée', value: '100' },
        { label: 'Matières premium', value: '15+' },
        { label: 'Lancement prévu', value: 'Jan 2026' }
      ]
    }
  }

  // Auto-switch between tabs every 5 seconds
  useEffect(() => {
    if (!autoSwitchEnabled) return

    const interval = setInterval(() => {
      setActiveTab(current => {
        const currentIndex = paliers.findIndex(p => p.id === current)
        const nextIndex = (currentIndex + 1) % paliers.length
        return paliers[nextIndex].id
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [autoSwitchEnabled, paliers])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
      gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(featuresRef.current.children, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.4 });
      gsap.fromTo(statsRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.6 });
    }, sectionRef);
    return () => ctx.revert();
  }, [activeTab]);

  // Manual tab switching (disables auto-switch temporarily)
  const handleTabSwitch = (newTab) => {
    if (newTab === activeTab) return

    setAutoSwitchEnabled(false)
    setActiveTab(newTab)

    // Re-enable auto-switch after 10 seconds
    setTimeout(() => {
      setAutoSwitchEnabled(true)
    }, 3000)
  }

  const activeContent = detailedContent[activeTab]

  return (
    <section ref={sectionRef} id="trois-palier" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
              Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trois piliers, une révolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre écosystème unique qui transforme votre expérience d'investissement et de lifestyle
          </p>
        </div>

        {/* Feature Cards Grid (Desktop) / Tabs (Mobile) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-20" ref={cardsRef}>
          {paliers.map((palier, index) => (
            <div
              key={palier.id}
              className={`feature-card cursor-pointer group transition-all duration-300 ${activeTab === palier.id ? 'scale-105' : 'hover:scale-102'
                }`}
              onClick={() => handleTabSwitch(palier.id)}
            >
              <Card className={`bg-slate-800/50 border-slate-700 transition-all duration-300 h-full ${activeTab === palier.id
                  ? `${palier.borderColor} ${palier.bgColor}`
                  : 'hover:border-slate-600 hover:bg-slate-800/70'
                }`}>
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={palier.image}
                      alt={palier.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                    {/* Icon */}
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${palier.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                      <palier.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Active indicator */}
                    {activeTab === palier.id && (
                      <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{palier.title}</h3>
                    <p className="text-gray-400 mb-4">{palier.subtitle}</p>
                    <p className="text-gray-300 mb-6">{palier.description}</p>

                    <ul className="space-y-2 mb-6">
                      {palier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full bg-gradient-to-r ${palier.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden mb-8">
          <div className="flex justify-center space-x-4 mb-8">
            {paliers.map((palier) => (
              <button
                key={palier.id}
                onClick={() => handleTabSwitch(palier.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === palier.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
              >
                {palier.title}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Detailed Section */}
        <div ref={detailsRef} className="detail-section">
          <div className="bg-slate-800/30 rounded-2xl p-8 lg:p-12">
            <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
                    {activeContent.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {activeContent.title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {activeContent.description}
                  </p>
                </div>

                {/* Animated Features */}
                <div ref={featuresRef} className="space-y-6 mb-8">
                  {activeContent.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-cyan-500/30">
                        <feature.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated Stats */}
                <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
                  {activeContent.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {activeContent.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Animated Visual */}
              <div ref={imageRef} className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <img
                    src={paliers.find(p => p.id === activeTab)?.image}
                    alt={activeContent.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                    {React.createElement(paliers.find(p => p.id === activeTab)?.icon, {
                      className: "h-8 w-8 text-white"
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Auto-switch indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {paliers.map((palier) => (
                  <button
                    key={palier.id}
                    onClick={() => handleTabSwitch(palier.id)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTab === palier.id
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeTrackedStyleTroisPalier


