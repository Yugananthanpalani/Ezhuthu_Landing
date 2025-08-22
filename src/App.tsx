import React from 'react';
import { 
  Menu, 
  X, 
  Edit3, 
  Shield, 
  Smartphone, 
  Users, 
  Tag, 
  RefreshCw,
  Download,
  Mail,
  Linkedin,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/public/Ezhuthu.jpg" 
                alt="Ezhuthu Notes Logo" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              
              <span className="text-xl font-bold text-gray-900">Ezhuthu Notes</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-gray-50 rounded-lg border border-gray-200 shadow-lg">
              <div className="flex flex-col space-y-4 px-4 py-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('download')}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Download
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto bg-gray-50 rounded-3xl p-12 shadow-xl border border-gray-200">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Write. Save. Sync.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8">
              <span className="text-black font-semibold">Ezhuthu Notes</span> – Your Smart Note Companion
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Experience the future of note-taking with our minimalist, secure, and intelligent app designed for modern productivity.
            </p>
            <a
              href="https://ezhuthu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">About Ezhuthu Notes</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Ezhuthu Notes is a powerful note-taking app designed for simplicity and security. 
                No sign-in required, just write and save your thoughts. Built with modern technology 
                and a focus on user privacy, it's the perfect companion for capturing ideas, 
                organizing thoughts, and staying productive across all your devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for efficient note-taking, organized in a beautifully simple interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Offline Access",
                description: "Access your notes anytime, anywhere with our Android app. No internet connection required."
              },
              {
                icon: Users,
                title: "No Sign-in Required",
                description: "Start writing immediately. No accounts, no passwords, no hassle. Just pure productivity."
              },
              {
                icon: Tag,
                title: "Tagging & Organization",
                description: "Organize your thoughts with powerful tagging system and smart categorization."
              },
              {
                icon: Shield,
                title: "End-to-End Encryption",
                description: "Your notes are secured with military-grade encryption. Privacy is our priority."
              },
              {
                icon: RefreshCw,
                title: "Cross-Platform Sync",
                description: "Seamlessly sync between Android and Windows devices. Your notes, everywhere."
              },
              {
                icon: Edit3,
                title: "Minimalist, Friendly UI",
                description: "Clean, intuitive interface that gets out of your way and lets you focus on writing."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <feature.icon className="h-12 w-12 mb-6 text-gray-900" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Download Ezhuthu Notes</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Get started with Ezhuthu Notes on your preferred platform. Available for Android and Windows.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="/Ezhuthu.apk"
                  download
                  className="flex items-center justify-center px-8 py-6 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="h-6 w-6 mr-3 text-gray-900" />
                  <div className="text-left">
                  <div className="font-semibold text-lg text-gray-900">Download for Android</div>
                  <div className="text-sm text-gray-600">APK File</div>
                  </div>
                </a>
                
                <button className="flex items-center justify-center px-8 py-6 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <Download className="h-6 w-6 mr-3 text-gray-900" />
                  <div className="text-left">
                  <div className="font-semibold text-lg text-gray-900">Download for Windows</div>
                  <div className="text-sm text-gray-600">EXE File</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Get In Touch</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Yugananthan Palani</h3>
                  <p className="text-gray-600 mb-6">Developer & Creator of Ezhuthu Notes</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a
                    href="mailto:yugananthanpalani@gmail.com"
                    className="flex items-center justify-center px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="h-5 w-5 mr-3 text-gray-900" />
                    <span className="font-medium text-gray-900">Email</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/yugananthan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5 mr-3 text-gray-900" />
                    <span className="font-medium text-gray-900">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://ezhuthu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Edit3 className="h-5 w-5 mr-3 text-gray-900" />
                    <span className="font-medium text-gray-900">Try App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            Copyright © 2025 Ezhuthu Notes | All rights reserved.
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;