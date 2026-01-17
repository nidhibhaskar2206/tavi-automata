"use client";

import React, { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    if (!section || !svg) return;

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

    const update = () => {
      rafRef.current = null;

      const vh = window.innerHeight || document.documentElement.clientHeight;
      const rect = section.getBoundingClientRect();

      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = section.offsetHeight;

      const startY = sectionTop;
      const endY = sectionTop + sectionHeight - vh;

      const y = window.scrollY;
      const denom = Math.max(1, endY - startY);

      const p = clamp01((y - startY) / denom);
      svg.style.setProperty("--p", p.toFixed(4));
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "240vh", // scroll runway (increase/decrease)
        position: "relative",
        background: "#000",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "80vh",
          display: "grid",
          placeItems: "center",
          padding: "4px",
        }}
      >
        {/* ✅ Only the SVG goes here. No <!doctype>, no <html>, no <head>. */}
        <svg
          ref={svgRef}
          id="tavi-hero"
          viewBox="0 0 1200 420"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="TaviAutomata futuristic title mark"
          style={{
            width: "min(1200px, 96vw)",
            height: "auto",
            ["--p" as any]: 0,
            display: "block",
          }}
        >
          <defs>
            <linearGradient id="taviGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#d1e8e2" />
              <stop offset="0.45" stopColor="#ffcb9a" />
              <stop offset="1" stopColor="#d9b08c" />
            </linearGradient>

            <linearGradient id="taviTeal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#116466" />
              <stop offset="1" stopColor="#2c3531" />
            </linearGradient>

            <pattern id="microGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M24 0H0V24"
                fill="none"
                stroke="#116466"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <path
                d="M12 0V24M0 12H24"
                fill="none"
                stroke="#d1e8e2"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
            </pattern>

            <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feColorMatrix
                in="b"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.9 0"
                result="g"
              />
              <feMerge>
                <feMergeNode in="g" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="crispGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="revealGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.25" stopColor="white" stopOpacity="1" />
              <stop offset="1" stopColor="white" stopOpacity="1" />
            </linearGradient>

            <mask id="revealMask">
              <rect id="revealRect" x="0" y="0" width="1200" height="420" fill="url(#revealGrad)" />
            </mask>
          </defs>

          <rect x="0" y="0" width="1200" height="420" fill="#000" />
          <rect x="0" y="0" width="1200" height="420" fill="url(#microGrid)" opacity="0.18" />

          <g id="rings" transform="translate(600 210)">
            <circle
              id="ringOuter"
              r="160"
              fill="none"
              stroke="#116466"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeDasharray="10 14"
            />
            <circle
              id="ringInner"
              r="120"
              fill="none"
              stroke="#d1e8e2"
              strokeOpacity="0.45"
              strokeWidth="2"
              strokeDasharray="4 10"
            />
            <path
              id="accentArc"
              d="M 0,-145 A 145,145 0 0 1 125,-70"
              fill="none"
              stroke="#ffcb9a"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#crispGlow)"
            />
            <g id="ticks" opacity="0.6">
              <path d="M0,-168 V-182" stroke="#d9b08c" strokeWidth="2" strokeLinecap="round" />
              <path d="M168,0 H182" stroke="#d9b08c" strokeWidth="2" strokeLinecap="round" />
              <path d="M0,168 V182" stroke="#d9b08c" strokeWidth="2" strokeLinecap="round" />
              <path d="M-168,0 H-182" stroke="#d9b08c" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>

          <g id="circuits" mask="url(#revealMask)" filter="url(#softGlow)">
            <path
              id="cL1"
              d="M110 290 H330 L390 230 H470"
              fill="none"
              stroke="#116466"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="110" cy="290" r="5" fill="#d1e8e2" />
            <circle cx="330" cy="290" r="4" fill="#ffcb9a" />
            <circle cx="390" cy="230" r="4" fill="#d9b08c" />

            <path
              id="cL2"
              d="M140 120 H300 L355 170 H470"
              fill="none"
              stroke="#d1e8e2"
              strokeOpacity="0.45"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              id="cR1"
              d="M1090 140 H900 L830 200 H730"
              fill="none"
              stroke="#116466"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="1090" cy="140" r="5" fill="#d1e8e2" />
            <circle cx="900" cy="140" r="4" fill="#ffcb9a" />
            <circle cx="830" cy="200" r="4" fill="#d9b08c" />

            <path
              id="cR2"
              d="M1060 310 H920 L860 270 H730"
              fill="none"
              stroke="#d1e8e2"
              strokeOpacity="0.45"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          <g id="title" transform="translate(600 215)">
            <rect
              id="plate"
              x="-360"
              y="-62"
              width="720"
              height="124"
              rx="22"
              fill="url(#taviTeal)"
              opacity="0.35"
            />
            <rect
              id="plateOutline"
              x="-360"
              y="-62"
              width="720"
              height="124"
              rx="22"
              fill="none"
              stroke="#116466"
              strokeWidth="2"
              strokeOpacity="0.75"
              filter="url(#crispGlow)"
            />
            <text
              id="taviText"
              x="0"
              y="16"
              textAnchor="middle"
              fontSize="68"
              fontWeight="700"
              letterSpacing="2"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
              fill="url(#taviGlow)"
              filter="url(#softGlow)"
            >
              TaviAutomata
            </text>
            <rect id="scanLine" x="-330" y="36" width="660" height="2" fill="#d1e8e2" opacity="0" />
          </g>

          <g id="brackets" stroke="#ffcb9a" strokeWidth="3" strokeLinecap="round" opacity="0.55">
            <path d="M90 80 H150 M90 80 V140" />
            <path d="M1110 80 H1050 M1110 80 V140" />
            <path d="M90 340 H150 M90 340 V280" />
            <path d="M1110 340 H1050 M1110 340 V280" />
          </g>

          {/* ✅ React-safe <style> (no CDATA) */}
          <style>
            {`
              svg { --p: 0; }

              #revealRect { transform-origin: 0 0; transform: scaleX(var(--p)); }

              #ringOuter {
                transform-origin: 0 0;
                transform: rotate(calc(-30deg + var(--p) * 180deg));
                opacity: calc(0.2 + var(--p) * 0.8);
              }
              #ringInner {
                transform-origin: 0 0;
                transform: rotate(calc(20deg + var(--p) * -220deg));
                opacity: calc(0.15 + var(--p) * 0.85);
              }

              #accentArc {
                stroke-dasharray: 260;
                stroke-dashoffset: calc(260 - var(--p) * 260);
                opacity: calc(0.05 + var(--p) * 0.95);
              }

              #cL1, #cR1 {
                stroke-dasharray: 600;
                stroke-dashoffset: calc(600 - var(--p) * 600);
              }
              #cL2 {
                stroke-dasharray: 520;
                stroke-dashoffset: calc(520 - var(--p) * 520);
              }
              #cR2 {
                stroke-dasharray: 560;
                stroke-dashoffset: calc(560 - var(--p) * 560);
              }

              #plateOutline {
                stroke-dasharray: 2200;
                stroke-dashoffset: calc(2200 - var(--p) * 2200);
                opacity: calc(0.05 + var(--p) * 0.95);
              }

              #taviText {
                opacity: calc(0.05 + var(--p) * 0.95);
                transform-origin: 0 0;
                transform: translateY(calc(18px - var(--p) * 18px))
                          scale(calc(0.98 + var(--p) * 0.02));
              }

              #scanLine {
                opacity: calc(var(--p) * 0.55);
                transform-origin: 0 0;
                transform: translateX(calc(-660px + var(--p) * 1320px));
              }

              @media (prefers-reduced-motion: reduce) {
                svg { --p: 1; }
              }
            `}
          </style>
        </svg>
      </div>
    </section>
  );
}
