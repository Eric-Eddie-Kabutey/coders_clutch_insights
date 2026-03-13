'use client';
import React, { useEffect, useState } from 'react';

const Custom = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
        document.querySelector('.cursor-outer')?.classList.add('scale-150');
    };
    const handleMouseLeave = () => {
        document.querySelector('.cursor-outer')?.classList.remove('scale-150');
    };

    const links = document.querySelectorAll('a, button');
    links.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
        links.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
  }, []);

  return (
    <>
      {/* Outer circle */}
      <div
        className="cursor-outer fixed top-0 left-0 w-8 h-8 border border-blue-500/70 rounded-full pointer-events-none transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 18}px, ${position.y - 18}px)`,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      />
    </>
  );
};

export default Custom;
