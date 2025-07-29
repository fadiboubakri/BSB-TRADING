import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Trophy, Star, Gift, Target, Coins, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import battlePass1 from '../assets/1000016185.jpg'
import battlePass2 from '../assets/1000016186.jpg'
import battlePass3 from '../assets/1000016187.jpg'
import battlePass4 from '../assets/1000016188.jpg'
import battlePass5 from '../assets/1000016189.jpg'
import battlePass6 from '../assets/1000016190.jpg'
import battlePass7 from '../assets/1000016191.jpg'
import battlePass8 from '../assets/1000016193.jpg'
import battlePass9 from '../assets/1000016192.jpg'
import battlePass10 from '../assets/1000016194.jpg'
import battlePass11 from '../assets/1000016195.jpg'
import battlePass12 from '../assets/1000016196.jpg'
import battlePass13 from '../assets/1000016197.jpg'
import battlePass14 from '../assets/1000016198.jpg'
import battlePass15 from '../assets/1000016199.jpg'
import battlePass16 from '../assets/1000016200.jpg'
import battlePass17 from '../assets/1000016201.jpg'
import battlePass18 from '../assets/1000016202.jpg'

function BattlePassPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    battlePass1, battlePass2, battlePass3, battlePass4, battlePass6,
    battlePass5, battlePass7, battlePass8, battlePass9, battlePass10,
    battlePass11, battlePass12, battlePass13, battlePass15, battlePass14,
    battlePass16, battlePass18, battlePass17
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleReturnHome = () => {
    // Navigate back to home page
    window.location.href = import.meta.env.BASE_URL
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-purple-400 hover:text-white hover:bg-purple-500/20 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
            onClick={handleReturnHome}
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-center">Retour</span>
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-400">BATTLE PASS</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mb-6 border border-purple-400/30">
                <Trophy className="h-8 w-8 text-purple-400 mx-auto" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                BATTLE <span className="text-purple-400">PASS</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Le Battle Pass de BsBridge offre à chacun la possibilité de gagner de l'argent ou des récompenses
                incroyables en complétant des missions. Même sans investissement de départ, chaque mission accomplie
                se traduit par une récompense immédiate, transformant chaque effort en gain tangible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  onClick={() => window.open('https://wa.me/+33749677529', '_blank')}
                >
                  Commencer les missions
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-full mx-auto mb-8 md:max-w-2xl lg:max-w-4xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-purple-500/20">
                <img
                  src={images[currentSlide]}
                  alt={`Battle Pass BSB ${currentSlide + 1}`}
                  className="w-full h-full object-contain transition-all duration-500"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-purple-400/30 hover:border-purple-400/60"
                >
                  <ChevronLeft className="h-6 w-6 text-purple-400" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-purple-400/30 hover:border-purple-400/60"
                >
                  <ChevronRight className="h-6 w-6 text-purple-400" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-purple-500/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-purple-400/30">
                  <span className="text-purple-300 text-sm font-medium">
                    {currentSlide + 1} / {images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex items-center mt-6 space-x-2 overflow-x-auto p-4 sm:px-0 scrollbar-hide">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentSlide === index
                      ? 'border-purple-400 scale-110'
                      : 'border-purple-500/30 hover:border-purple-400/60'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Comment fonctionne le <span className="text-purple-400">Battle Pass</span> ?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4">Missions Quotidiennes</h4>
              <p className="text-gray-300 leading-relaxed">
                Complétez des missions simples chaque jour pour gagner des points d'expérience
                et débloquer des récompenses exclusives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                <Coins className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4">Récompenses Immédiates</h4>
              <p className="text-gray-300 leading-relaxed">
                Chaque mission accomplie vous rapporte immédiatement de l'argent réel
                ou des récompenses de valeur dans l'écosystème BSB.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4">Niveaux de Progression</h4>
              <p className="text-gray-300 leading-relaxed">
                Montez en niveau pour débloquer des missions plus lucratives
                et accéder à des récompenses premium exclusives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                <Gift className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4">Bonus Spéciaux</h4>
              <p className="text-gray-300 leading-relaxed">
                Participez à des événements spéciaux et des défis communautaires
                pour gagner des bonus exceptionnels et des récompenses limitées.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4">Communauté</h4>
              <p className="text-gray-300 leading-relaxed">
                Rejoignez une communauté active de joueurs et partagez vos succès
                pour débloquer des récompenses collaboratives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4">Classements</h4>
              <p className="text-gray-300 leading-relaxed">
                Compétitionnez avec d'autres membres pour atteindre le sommet
                des classements et remporter des prix prestigieux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Types de <span className="text-purple-400">Récompenses</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h4 className="text-2xl font-bold text-purple-400 mb-6">Récompenses Financières</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Coins className="h-5 w-5 text-purple-400 mr-3" />
                  Gains en argent réel
                </li>
                <li className="flex items-center">
                  <Coins className="h-5 w-5 text-purple-400 mr-3" />
                  Crédits trading gratuits
                </li>
                <li className="flex items-center">
                  <Coins className="h-5 w-5 text-purple-400 mr-3" />
                  Bonus d'investissement
                </li>
                <li className="flex items-center">
                  <Coins className="h-5 w-5 text-purple-400 mr-3" />
                  Cashback sur les frais
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h4 className="text-2xl font-bold text-purple-400 mb-6">Récompenses Exclusives</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Gift className="h-5 w-5 text-purple-400 mr-3" />
                  Accès VIP aux événements
                </li>
                <li className="flex items-center">
                  <Gift className="h-5 w-5 text-purple-400 mr-3" />
                  Produits Haute Couture BSB
                </li>
                <li className="flex items-center">
                  <Gift className="h-5 w-5 text-purple-400 mr-3" />
                  NFTs et objets de collection
                </li>
                <li className="flex items-center">
                  <Gift className="h-5 w-5 text-purple-400 mr-3" />
                  Formations trading premium
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre <span className="text-purple-400">aventure</span> ?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de membres qui transforment leurs actions quotidiennes
            en récompenses tangibles avec le Battle Pass BSB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              onClick={() => window.open('https://wa.me/+33749677529', '_blank')}
            >
              Commencer maintenant
            </Button>
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300"
              onClick={handleReturnHome}
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">BSB BATTLE PASS</h3>
            <p className="text-gray-400">Transformez vos actions en récompenses</p>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 BsBridge. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BattlePassPage

