'use client'

import useInView from '../../hooks/useInView';

export default function Reveal({ children, className = '', direction = 'up', delay = 0 }) {
  const [ref, isVisible] = useInView();

  const dirClass = direction === 'left' ? 'from-left' : direction === 'right' ? 'from-right' : '';
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
