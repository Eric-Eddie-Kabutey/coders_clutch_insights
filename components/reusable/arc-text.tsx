'use client';

import { ArrowUpRight } from "lucide-react";
import path from "path";
import React, { useId } from "react";

type ArcHeadingProps = {
  text: string;
  highlight?: string;

  /** ✅ NEW: subtitle that also follows an arc */
  subtitle?: string;

  className?: string;
  textClassName?: string;
  highlightClassName?: string;

  /** Main arc curvature (higher = more rounded) */
  arc?: number;

  /** Moves the main arc down/up inside the SVG */
  baseY?: number;

  /** Max desktop size for the main text */
  maxFontPx?: number;

  /** ✅ NEW: subtitle arc controls */
  subtitleOffsetY?: number;     // how far below the main arc
  subtitleArc?: number;         // curvature of subtitle arc
  subtitleMaxFontPx?: number;   // max subtitle size
  subtitleClassName?: string;   // SVG text class (fill, font, etc.)
};

export default function ArcHeading({
  text,
  highlight = "",
  subtitle = "",

  className = "",
  textClassName = "",
  highlightClassName = "",

  arc = 200,
  baseY = 230,
  maxFontPx = 109,

  subtitleOffsetY = 85,
  subtitleArc = 95,
  subtitleMaxFontPx = 28,
  subtitleClassName = "",
}: ArcHeadingProps) {
  const idx = highlight ? text.indexOf(highlight) : -1;
  const before = idx >= 0 ? text.slice(0, idx) : text;
  const mid = idx >= 0 ? highlight : "";
  const after = idx >= 0 ? text.slice(idx + highlight.length) : "";

  const uid = useId();
  const pathId = `arcPath-${uid}`;
  const subPathId = `subArcPath-${uid}`;
  const gradId = `glowGrad-${uid}`;
  const glowFilterId = `glowFilter-${uid}`;

  // Glow center near the arc apex
  const glowX = 600;
  const glowY = baseY - arc + 65;

  const DUR = "6s";

  // Subtitle arc positions
  const subBaseY = baseY + subtitleOffsetY;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1400 440"
        width="100%"
        height="100%"
        role="img"
        aria-label={subtitle ? `${text}. ${subtitle}` : text}
        className="overflow-visible"
      >
        <defs className="w-full">
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8200" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#FFB36A" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.12" />
          </radialGradient>

          <filter id={glowFilterId} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.010 0.018"
              numOctaves="2"
              seed="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur={DUR}
                values="0.010 0.018; 0.018 0.010; 0.010 0.018"
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            >
              <animate
                attributeName="scale"
                dur={DUR}
                values="12; 22; 12"
                repeatCount="indefinite"
              />
            </feDisplacementMap>

            <feGaussianBlur in="displaced" stdDeviation="16" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
            </feMerge>
          </filter>

          <linearGradient id={`arcStrokeGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B4B45" stopOpacity="0" />
            <stop offset="30%" stopColor="#0B4B45" stopOpacity="1" />
            <stop offset="50%" stopColor="#FF6900" stopOpacity="1" />
            <stop offset="70%" stopColor="#0B4B45" stopOpacity="1" />
            <stop offset="100%" stopColor="#0B4B45" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Glow blob */}
        <g filter={`url(#${glowFilterId})`} opacity="1">
          <ellipse
            cx={glowX}
            cy={glowY}
            rx="260"
            ry="90"
            fill={`url(#${gradId})`}
            opacity="0.55"
          >
            <animate attributeName="opacity" values="0.28;0.70;0.28" dur={DUR} repeatCount="indefinite" />
            <animate attributeName="rx" values="235;295;235" dur={DUR} repeatCount="indefinite" />
            <animate attributeName="ry" values="75;115;75" dur={DUR} repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* Main arc path - VISIBLE with gradient */}
        <path
          id={pathId}
          d={`M 170 ${baseY} Q 700 ${baseY - arc} 1230 ${baseY}`}
          fill="none"
          stroke={`url(#arcStrokeGrad-${uid})`}
          strokeWidth="2"
          strokeLinecap="round"
          className="w-full"
        />

        {/* Main text on arc */}
        <text
          className={textClassName}
          style={{ fontSize: `${maxFontPx}px` }}
          dy="-15"
        >
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {before}
            {mid && <tspan className={highlightClassName}>{mid}</tspan>}
            {after}
          </textPath>
        </text>

      </svg>
    </div>
  );
}
