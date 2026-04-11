import { useCallback, useRef } from "react";

/**
 * Hook for Apple/Google-level touch feedback on mobile.
 * Provides haptic vibration + scale animation on touch.
 *
 * Usage:
 *   const touchProps = useTouchFeedback({ scale: 0.97, vibrate: 8 });
 *   <button {...touchProps}>CTA</button>
 */

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export default function useTouchFeedback({
  scale = 0.97,
  vibrate = 8,
  vibrateRelease = 0,
} = {}) {
  const ref = useRef(null);

  const onTouchStart = useCallback(
    (e) => {
      const el = e.currentTarget;
      el.style.transform = `scale(${scale})`;
      el.style.transition = "transform 120ms cubic-bezier(0.4, 0, 0.2, 1)";
      if (vibrate && navigator.vibrate) {
        navigator.vibrate(vibrate);
      }
    },
    [scale, vibrate]
  );

  const onTouchEnd = useCallback(
    (e) => {
      const el = e.currentTarget;
      el.style.transform = "scale(1)";
      if (vibrateRelease && navigator.vibrate) {
        navigator.vibrate(vibrateRelease);
      }
    },
    [vibrateRelease]
  );

  const onTouchCancel = useCallback((e) => {
    e.currentTarget.style.transform = "scale(1)";
  }, []);

  // Only return touch handlers on touch devices
  if (!isTouchDevice()) {
    return {};
  }

  return {
    ref,
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
  };
}
