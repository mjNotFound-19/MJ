// src/SpotlightCursor.jsx
import { useEffect, useRef } from "react";

export default function SpotlightCursor({
  size = 14, // small circle
  color = "rgba(0, 180, 255, 0.9)", // neon blue
  glow = "0 0 10px rgba(0, 180, 255, 0.8)",
  disabledOnTouch = true,
}) {
  const dotRef = useRef(null);

  useEffect(() => {
    // Disable on touchscreens
    if (disabledOnTouch && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) return;

    const el = dotRef.current;
    if (!el) return;

    // ?? Hide native cursor everywhere
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const move = (e) => {
      const x = e.clientX - size / 2;
      const y = e.clientY - size / 2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.head.removeChild(style);
    };
  }, [size, disabledOnTouch]);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: glow,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        transition: "transform 25ms linear",
      }}
    />
  );
}

