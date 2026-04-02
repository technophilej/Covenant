'use client'

import { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  const shellRef = useRef(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    const syncInert = () => {
      const isHidden =
        shell.getAttribute('aria-hidden') === 'true' ||
        shell.getAttribute('data-aria-hidden') === 'true';

      if (isHidden) {
        shell.setAttribute('inert', '');
      } else {
        shell.removeAttribute('inert');
      }
    };

    syncInert();

    const observer = new window.MutationObserver(syncInert);
    observer.observe(shell, {
      attributes: true,
      attributeFilter: ['aria-hidden', 'data-aria-hidden'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={shellRef} className="min-h-screen bg-white">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" role="main" className="pt-[136px]">{children}</main>
      <Footer />
    </div>
  );
}
