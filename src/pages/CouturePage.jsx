import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Shirt, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import couture1 from '../assets/couture-1.jpg'
import couture2 from '../assets/couture-2.jpg'
import couture3 from '../assets/couture-3.jpg'
import couture4 from '../assets/couture-4.jpg'
import couture5 from '../assets/couture-5.jpg'
import couture6 from '../assets/couture-6.jpg'
import couture7 from '../assets/couture-7.jpg'
import couture8 from '../assets/couture-8.jpg'
import couture9 from '../assets/couture-9.jpg'
import couture10 from '../assets/couture-10.jpg'
import couture11 from '../assets/couture-11.jpg'
import couture12 from '../assets/couture-12.jpg'
import couture13 from '../assets/couture-13.jpg'
import couture14 from '../assets/couture-14.jpg'
import couture15 from '../assets/couture-15.jpg'

function CouturePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const thumbnailRef = useRef(null)


  const images = [
    couture1, couture2, couture3, couture4, couture5,
    couture6, couture7, couture8, couture9, couture10,
    couture11, couture12, couture13, couture14, couture15
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
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="text-amber-400 hover:text-white hover:bg-amber-500/20 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
            onClick={handleReturnHome}
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Retour
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-400">HAUTE COUTURE</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-amber-500/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-6 border border-amber-400/30">
            <Shirt className="h-8 w-8 text-amber-400 mx-auto" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            HAUTE <span className="text-amber-400">COUTURE</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            La haute couture chez BsBridge symbolise l'union entre l'investissement et l'univers du luxe. 
            Chaque pièce de notre collection incarne cette passerelle entre le monde de la finance et celui de la mode, 
            créant une marque de vêtements unique, où l'élégance et l'exclusivité rencontrent l'innovation et l'investissement.
          </p>
          
          {/* Availability Notice */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-6 mb-12 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-amber-400 mr-3" />
              <h3 className="text-xl font-bold text-amber-400">Disponibilité</h3>
            </div>
            <p className="text-lg text-amber-300 font-medium">
              🗓️ Collection disponible à partir du 1er janvier 2025
            </p>
            <p className="text-gray-300 mt-2">
              Préparez-vous à découvrir une collection exclusive qui redéfinit le luxe moderne
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900/80 via-amber-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Collection <span className="text-amber-400">BSB Haute Couture</span>
          </h3>
          
          {/* Main Carousel */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="relative w-full max-w-4xl mx-auto aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-amber-500/20">
              <img
                src={images[currentSlide]}
                alt={`Haute Couture BSB ${currentSlide + 1}`}
                className="w-full h-full object-contain transition-all duration-500"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-500/20 hover:bg-amber-500/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-amber-400/30 hover:border-amber-400/60"
              >
                <ChevronLeft className="h-6 w-6 text-amber-400" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-500/20 hover:bg-amber-500/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-amber-400/30 hover:border-amber-400/60"
              >
                <ChevronRight className="h-6 w-6 text-amber-400" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-amber-500/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-amber-400/30">
                <span className="text-amber-300 text-sm font-medium">
                  {currentSlide + 1} / {images.length}
                </span>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2 px-4 sm:px-0 scroll-smooth" ref={thumbnailRef}>
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentSlide === index 
                      ? 'border-amber-400 scale-110' 
                      : 'border-amber-500/30 hover:border-amber-400/60'
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
          
          {/* Collection Info */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              Découvrez notre collection exclusive de {images.length} pièces uniques, 
              alliant élégance française et innovation BSB.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-300">
              <span>• Édition limitée</span>
              <span>• Qualité premium</span>
              <span>• Design exclusif BSB</span>
              <span>• Savoir-faire français</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            L'Excellence <span className="text-amber-400">BSB</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Exclusivité</h4>
              <p className="text-gray-300 leading-relaxed">
                Chaque pièce est conçue en édition limitée, garantissant l'unicité et l'exclusivité 
                pour nos membres privilégiés de l'écosystème BsBridge.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Innovation</h4>
              <p className="text-gray-300 leading-relaxed">
                L'alliance parfaite entre tradition couturière et innovation technologique, 
                reflétant l'esprit avant-gardiste de BsBridge.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Qualité Premium</h4>
              <p className="text-gray-300 leading-relaxed">
                Matériaux d'exception et savoir-faire artisanal français pour une qualité 
                irréprochable digne de l'univers du luxe.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Investissement</h4>
              <p className="text-gray-300 leading-relaxed">
                Plus qu'un vêtement, un investissement dans un style de vie exclusif 
                et une appartenance à la communauté BsBridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Rejoignez l'<span className="text-amber-400">Élite BSB</span>
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Soyez parmi les premiers à découvrir notre collection exclusive. 
            Inscrivez-vous pour être notifié du lancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
              onClick={() => window.open('https://wa.me/+33123456789', '_blank')}
            >
              Être notifié
            </Button>
            <Button 
              variant="outline" 
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300"
              onClick={handleReturnHome}
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-amber-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">BSB HAUTE COUTURE</h3>
            <p className="text-gray-400">L'excellence au service du luxe</p>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 BsBridge. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CouturePage

