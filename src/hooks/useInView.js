import { useState, useEffect, useRef } from 'react';
export function useInView(options) {
    const [isInView, setIsInView] = useState(false);
    const [hasBeenViewed, setHasBeenViewed] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!hasBeenViewed && entry.intersectionRatio >= 0.2) {
                setIsInView(true);
                setHasBeenViewed(true);
            }
        }, {...options});
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);
    return [ref, isInView || hasBeenViewed];
}
