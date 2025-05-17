import React, { useEffect, useState } from 'react';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/ui/CustomCursor';
import IntroAnimation from './components/ui/IntroAnimation';
import BackgroundVideo from './components/ui/BackgroundVideo';
import Header from './components/layout/Header';
import MovieGrid from './components/MovieGrid';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Hide cursor on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      document.body.classList.add('custom-cursor');
    }
    
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <CursorProvider>
      <div className="bg-gray-900 min-h-screen text-white relative overflow-x-hidden">
        <IntroAnimation />
        <BackgroundVideo />
        <Header />
        <MovieGrid />
        <CustomCursor />
      </div>
    </CursorProvider>
  );
}

export default App;