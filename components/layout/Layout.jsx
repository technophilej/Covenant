'use client'

import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="pt-[136px]">{children}</main>
      <Footer />
    </div>
  );
}
