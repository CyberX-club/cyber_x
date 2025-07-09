import { useState, useEffect, useRef } from "react";

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);

        if (visible && !hasBeenViewed) {
          setHasBeenViewed(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
        root: options.root || null,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [hasBeenViewed, options.threshold, options.rootMargin, options.root]);

  return [ref, isInView || hasBeenViewed];
}
