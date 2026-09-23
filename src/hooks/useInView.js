import { useState, useEffect, useRef } from 'react';

export function useInView(threshold = 0.05, rootMargin = '50px 0px') {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // If observer is not supported, reveal immediately
        if (typeof IntersectionObserver === 'undefined') {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                    setIsInView(true);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);

        // Immediate check if element is already within/above the viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > 0) {
            setIsInView(true);
        }

        // Safety fallback timer to prevent any section from staying blank
        const timer = setTimeout(() => {
            setIsInView(true);
        }, 500);

        return () => {
            observer.unobserve(el);
            clearTimeout(timer);
        };
    }, [threshold, rootMargin]);

    return [ref, isInView];
}

