"use client";

import * as React from "react";

type BlobButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export function BlobButton({ active, onClick, children, className, ...props }: BlobButtonProps) {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const circleRef = React.useRef<HTMLDivElement | null>(null);

  const updateCircle = (clientX: number, clientY: number) => {
    const btn = btnRef.current;
    const circle = circleRef.current;
    if (!btn || !circle) return;

    const rect = btn.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Position (%)
    const left = (x / rect.width) * 100;
    const top = (y / rect.height) * 100;

    const d1 = Math.hypot(x, y);
    const d2 = Math.hypot(rect.width - x, y);
    const d3 = Math.hypot(x, rect.height - y);
    const d4 = Math.hypot(rect.width - x, rect.height - y);
    const diameter = Math.max(d1, d2, d3, d4) * 2;

    const widthPct = (diameter / rect.width) * 100;

    circle.style.left = `${left}%`;
    circle.style.top = `${top}%`;
    circle.style.width = `${widthPct}%`;
  };

  const onPointerEnter = (e: React.PointerEvent<HTMLButtonElement>) => {
    updateCircle(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    updateCircle(e.clientX, e.clientY);
  };

  const onFocus = () => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    updateCircle(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  return (
    <button
      {...props}
      ref={btnRef}
      type="button"
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onFocus={onFocus}
      aria-pressed={active ? "true" : "false"}
      className={`blob-btn ${active ? "is-active" : ""} ${className ?? ""}`}
    >
      <span className="btn__bg" aria-hidden="true" />
      <span className="btn__circle-wrap" aria-hidden="true">
        <span ref={circleRef} className="btn__circle">
          <span className="before__100" />
        </span>
      </span>

      <span className="btn__text">
        <span className="btn-text-p ">{children}</span>
      </span>
    </button>
  );
}
