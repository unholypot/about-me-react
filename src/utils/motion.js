/**
 * Shared Framer Motion variants and helpers.
 * All animations respect prefers-reduced-motion.
 */

/** Check reduced-motion preference once at load time */
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── FADE UP (default section / element reveal) ───────── */
export const fadeUp = {
  hidden: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 32 },
  visible: prefersReducedMotion
    ? { opacity: 1, transition: { duration: 0.01 } }
    : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
};

/* ── FADE IN (no vertical motion) ─────────────────────── */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: prefersReducedMotion
    ? { opacity: 1, transition: { duration: 0.01 } }
    : {
        opacity: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
};

/* ── STAGGER CONTAINER ────────────────────────────────── */
export const staggerContainer = (staggerAmount = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : staggerAmount,
    },
  },
});

/* ── STAGGER ITEM (child of a stagger container) ──────── */
export const staggerItem = {
  hidden: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 20 },
  visible: prefersReducedMotion
    ? { opacity: 1, transition: { duration: 0.01 } }
    : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      },
};

/* ── SCALE-IN (for image / hero picture) ──────────────── */
export const scaleIn = {
  hidden: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.9 },
  visible: prefersReducedMotion
    ? { opacity: 1, transition: { duration: 0.01 } }
    : {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
      },
};

/* ── SHARED VIEWPORT CONFIG ───────────────────────────── */
export const defaultViewport = { once: true, amount: 0.15 };
