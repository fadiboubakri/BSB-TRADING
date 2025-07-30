import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Bot, TrendingUp, Clock, Shield, Zap } from 'lucide-react'
import tradingBotImg from '../assets/trading-bot.jpg'

function TradingPage() {
  const handleReturnHome = () => {
    // Navigate back to home page
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-cyan-400 hover:text-white hover:bg-cyan-500/20 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
            onClick={handleReturnHome}
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Retour
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400">BOT TRADING</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mb-6 border border-cyan-400/30">
                <Bot className="h-8 w-8 text-cyan-400 mx-auto" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                BOT <span className="text-cyan-400">TRADING</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Le bot de trading de BsBridge a été conçu pour permettre à chacun d'investir en toute autonomie,
                sans nécessiter de connaissances approfondies en trading. Il fonctionne 24h/24, que vous soyez au travail,
                en train de dormir, ou simplement en train de profiter de la vie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => window.open('https://wa.me/+33749677529', '_blank')}
                >
                  Commencer maintenant
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={tradingBotImg}
                alt="Bot Trading BSB"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">💼 Investissez en toute simplicité dès 1500 €</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Rejoignez notre système de trading automatisé avec un ticket d’entrée unique de 1500 €.<br />
              Aucune connaissance en finance n’est requise : vous investissez une fois, et notre technologie travaille pour vous 24h/24.
            </p>
          </div>
          <hr className="border-cyan-400/30 my-4 w-1/3 mx-auto" />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">📊 Des gains potentiels entre 500 € et 3000 € / mois</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Chaque mois, nos utilisateurs peuvent générer entre 500 € et 3000 €, voire plus, selon les conditions du marché.
            </p>
          </div>
          <hr className="border-cyan-400/30 my-4 w-1/3 mx-auto" />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">🤝 Un modèle 100 % gagnant-gagnant</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Chez <strong>BSB</strong>, vos résultats sont notre priorité, car nous ne gagnons que si vous gagnez.
            </p>
            <ul className="text-gray-300 text-base sm:text-lg leading-relaxed text-left max-w-xl mx-auto space-y-2">
              <li>• 25 % des bénéfices réalisés sont reversés à BSB — uniquement si vous êtes en profit.</li>
              <li>• 75 % des bénéfices restants vous reviennent : à vous de choisir si vous souhaitez les retirer ou les réinvestir pour activer un second bot et augmenter vos gains.</li>
            </ul>
            <p className="text-cyan-400 font-medium mt-4">
              💡 Tout est dans notre intérêt de maximiser vos bénéfices chaque mois, car c’est sur les 25 % de performance que nous sommes rémunérés.
            </p>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900/80 via-cyan-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Pourquoi choisir notre <span className="text-cyan-400">Bot Trading</span> ?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">24h/24 - 7j/7</h4>
              <p className="text-gray-300 leading-relaxed">
                Notre bot fonctionne en continu, même pendant votre sommeil.
                Il surveille les marchés et exécute des trades optimaux à tout moment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Revenus Passifs</h4>
              <p className="text-gray-300 leading-relaxed">
                Générez des revenus sans effort constant. Notre algorithme intelligent
                optimise vos investissements pour maximiser les profits.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Sécurisé</h4>
              <p className="text-gray-300 leading-relaxed">
                Sécurité maximale avec des protocoles de protection avancés.
                Vos fonds sont protégés par des mesures de sécurité de niveau bancaire.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Facile à utiliser</h4>
              <p className="text-gray-300 leading-relaxed">
                Interface intuitive et configuration simple. Aucune connaissance technique
                requise pour commencer à trader efficacement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <Bot className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">IA Avancée</h4>
              <p className="text-gray-300 leading-relaxed">
                Algorithmes d'intelligence artificielle qui apprennent et s'adaptent
                aux conditions du marché pour optimiser les performances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 w-12 h-12 mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Performance</h4>
              <p className="text-gray-300 leading-relaxed">
                Résultats prouvés avec des performances constantes.
                Suivez vos gains en temps réel avec notre tableau de bord détaillé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à automatiser vos <span className="text-cyan-400">investissements</span> ?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'investisseurs qui font confiance à notre bot trading
            pour générer des revenus passifs de manière intelligente et sécurisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              onClick={() => window.open('https://wa.me/+33749677529', '_blank')}
            >
              Commencer maintenant
            </Button>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300"
              onClick={handleReturnHome}
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 backdrop-blur-md border-t border-cyan-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-2xl font-bold text-cyan-400 mb-4">
            ⚠️ Investissement et Responsabilité
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Le trading comporte des risques. Chez <strong>BSB</strong>, nous mettons tout en œuvre pour optimiser les performances,
            mais il n’existe aucune garantie de gains. Chaque investisseur est responsable de son capital et doit être conscient
            que les résultats passés ne préjugent pas des performances futures. N’investissez que ce que vous êtes prêt à perdre.
            <br />
            En aucun cas, <strong>BSB</strong> ne pourra être tenu responsable des pertes éventuelles.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">BSB BOT TRADING</h3>
            <p className="text-gray-400">L'intelligence artificielle au service de vos investissements</p>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 BsBridge. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TradingPage

