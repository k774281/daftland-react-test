import React, { useEffect } from 'react';
import './CursorGlow.scss';

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    function move(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
    function remove() {
      cursor.remove();
      window.removeEventListener('mousemove', move);
    }
    window.addEventListener('mousemove', move);
    return () => remove();
  }, []);

  return null;
}
