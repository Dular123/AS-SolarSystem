import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('as_solar_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('as_solar_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean, uncluttered Navbar links
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'why-us', label: 'Why Us', href: '#why-us' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-container">
        
        {/* LEFT: Logo Image Only (No text label) */}
        <a href="#home" className="navbar-logo-link" onClick={() => handleNavClick('home')} title="AS Solar">
          <img src="/images/logo.png" alt="AS Solar" className="navbar-logo-img" />
        </a>

        {/* CENTER: Clean Reduced Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeNav === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: Icon-Only Theme Toggle + CTA Button */}
        <div className="desktop-cta">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn icon-only-theme-btn"
            aria-label="Toggle Dark and Light Mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            <svg className="theme-svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              {theme === 'dark' ? (
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/>
              ) : (
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 4.97 0 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
              )}
            </svg>
          </button>
          <CTAButton text="Get Free Consultation →" />
        </div>

        {/* MOBILE CONTROLS */}
        <div className="mobile-controls">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn icon-only-theme-btn"
            aria-label="Toggle Dark and Light Mode"
          >
            <svg className="theme-svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              {theme === 'dark' ? (
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/>
              ) : (
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 4.97 0 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
              )}
            </svg>
          </button>

          <button 
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeNav === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <CTAButton text="Get Free Consultation →" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </header>
  );
}
