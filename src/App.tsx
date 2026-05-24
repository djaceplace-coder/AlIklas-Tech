import React, { useState } from 'react';
import { Navbar, Footer } from './components/Navigation';
import { Home } from './pages/Home';
import { About, Services, Projects, Contact, Careers, GenericPage } from './pages/Pages';
import { SolarCalculatorContent } from './pages/SolarCalculator';
import { Products } from './pages/Products';
import { Blog } from './pages/Blog';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'calculator':
        return <div className="pt-28 pb-24 max-w-7xl mx-auto px-4"><SolarCalculatorContent /></div>;
      case 'contact':
        return <Contact />;
      case 'products':
        return <Products />;
      case 'blog':
        return <Blog />;
      case 'careers':
        return <Careers />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030f07] text-[#f0fdf4] font-sans overflow-x-hidden">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Global WhatsApp Float */}
      <a 
        href="https://wa.me/2348166614479" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center text-green-400/90 font-mono text-sm sm:text-base tracking-[2px] uppercase font-bold hover:text-green-300 drop-shadow-[0_4px_8px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
        title="Chat with Customer Agent"
      >
        Chat with us
      </a>
    </div>
  );
}
