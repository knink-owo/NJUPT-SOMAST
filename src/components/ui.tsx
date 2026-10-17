import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** 进入视口时轻微上浮淡入；系统开了「减少动态效果」就不动。 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 25 25"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0.75"
        y="0.75"
        width="23.5"
        height="23.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="0.75"
        y1="12.5"
        x2="24.25"
        y2="12.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect x="12.5" y="0.75" width="11.75" height="11.75" className="mark-accent" />
    </svg>
  );
}

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

type PageHeadProps = {
  kicker: string;
  title: string;
  lede?: string;
  meta?: string;
};

/** 内页的开头：小标 + 大标题 + 一句说明 */
export function PageHead({ kicker, title, lede, meta }: PageHeadProps) {
  return (
    <Reveal className="page-head">
      <p className="eyebrow mono">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
      {meta ? <p className="page-meta mono">{meta}</p> : null}
    </Reveal>
  );
}
