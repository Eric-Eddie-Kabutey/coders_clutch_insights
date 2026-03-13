import { useEffect } from "react";

export function useScrollWarp() {
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll<HTMLElement>(".warp-img"));
    let lastY = window.scrollY;
    let vel = 0;
    let raf = 0;

    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const tick = () => {
      vel *= 0.85;

      imgs.forEach((img) => {
        const skew = clamp(vel * 0.15, -10, 10);
        const rotate = clamp(vel * 0.06, -6, 6);
        const scale = 1.06 + Math.min(Math.abs(vel) * 0.0012, 0.06);

        img.style.transform =
          `perspective(1000px) ` +
          `rotateX(${rotate}deg) ` +
          `skewY(${skew}deg) ` +
          `scale(${scale})`;
      });

      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const y = window.scrollY;
      vel = y - lastY;
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}
