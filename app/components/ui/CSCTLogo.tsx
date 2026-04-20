import React from "react";

interface CSCTLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: "full" | "icon";
}

export function CSCTLogo({ className = "", variant = "full", ...props }: CSCTLogoProps) {
  return (
    <svg
      viewBox={variant === "full" ? "0 0 350 100" : "0 0 100 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g transform={variant === "full" ? "translate(0, 0) scale(0.8)" : "translate(0, 0)"}>
        {/* Outer Shield Border / Glow */}
        <path
          d="M10 5H90V55C90 85 50 115 50 115C50 115 10 85 10 55V5Z"
          fill="#1E293B"
          stroke="#475569"
          strokeWidth="1.5"
        />
        
        {/* Top Half (Dark/Black) */}
        <path
          d="M10 5H90V55H10V5Z"
          fill="#1E293B"
        />
        
        {/* Bottom Half (Crimson) */}
        <path
          d="M10 55H90C90 85 50 115 50 115C50 115 10 85 10 55Z"
          fill="#DC2626"
        />

        {/* Abstract Golden Lion holding Compass & Sword */}
        <path d="M43 15C53 15 58 20 60 25C62 30 55 35 55 40H40C40 35 48 30 45 25C42 20 33 15 43 15Z" fill="#FBBF24" />
        <path d="M40 25L55 20L43 45Z" fill="#F59E0B" />
        <path d="M35 15L38 35L33 35Z" fill="#FCD34D" />
        <path d="M65 15L62 35L67 35Z" fill="#FCD34D" />

        {/* White Book in Bottom Half */}
        <path
          d="M30 75C30 70 45 72 50 78C55 72 70 70 70 75V95C70 93 55 95 50 102C45 95 30 93 30 95V75Z"
          fill="#F8FAFC"
        />
        {/* Book Ribbon */}
        <path
          d="M50 78V102"
          stroke="#DC2626"
          strokeWidth="1.5"
        />
        <text x="35" y="90" fill="#1E293B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CS</text>
        <text x="53" y="90" fill="#1E293B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CT</text>

        {/* Scroll at Bottom */}
        <path
          d="M15 125Q50 115 85 125"
          stroke="#F8FAFC"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <text x="50" y="128" fill="#1E293B" fontSize="4.5" fontWeight="bold" fontFamily="serif" textAnchor="middle">SAPIENTIA ET DOCTRINA</text>
      </g>

      {/* FULL TEXT VARIANT */}
      {variant === "full" && (
        <g transform="translate(100, 32)">
          <text
            x="0"
            y="-5"
            fill="currentColor"
            fontSize="18"
            fontWeight="bold"
            letterSpacing="0.05em"
            fontFamily="sans-serif"
            className="text-slate-500 dark:text-slate-400"
          >
            COLOMBO SCHOOL <tspan fontSize="12" fontWeight="normal">OF</tspan>
          </text>
          <text
            x="0"
            y="15"
            fill="currentColor"
            fontSize="22"
            fontWeight="800"
            letterSpacing="0.02em"
            fontFamily="sans-serif"
            className="text-slate-900 dark:text-white"
          >
            CONSTRUCTION
          </text>
          <text
            x="0"
            y="35"
            fill="currentColor"
            fontSize="22"
            fontWeight="300"
            letterSpacing="0.1em"
            fontFamily="sans-serif"
            className="text-slate-700 dark:text-slate-300"
          >
            TECHNOLOGY
          </text>
        </g>
      )}
    </svg>
  );
}
