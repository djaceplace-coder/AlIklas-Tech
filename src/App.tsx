import React, { useState } from 'react';
import { Navbar, Footer } from './pages/Navigation';
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
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center text-green-400/90 font-mono text-xs hover:text-green-300 drop-shadow-[0_2px_8px_rgba(0,0,0,1)] uppercase tracking-wider font-bold transition-all bg-[#030f07]/80 backdrop-blur-md px-4 py-2 rounded-full border border-green-900/50"
        title="Chat with Customer Agent"
      >
        Chat with us
      </a>
    </div>
  );
}
