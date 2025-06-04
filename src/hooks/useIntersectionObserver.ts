import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  // IntersectionObserverInit already includes root, rootMargin, threshold
}

/**
 * Custom hook to observe intersection of a target element.
 * @param elementRef Ref to the element to observe.
 * @param options IntersectionObserver options (threshold, root, rootMargin).
 * @param triggerOnce If true, the observer will unobserve the target after the first intersection. Defaults to true.
 * @returns A boolean indicating whether the element is currently intersecting.
 */
function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions,
  triggerOnce: boolean = true
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          // Only set to false if we are not triggering once, to allow re-animation on scroll out/in
          if (!triggerOnce) {
            setIsIntersecting(false);
          }
        }
      },
      options
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
    // Ensure the effect re-runs if the threshold, root, rootMargin, or triggerOnce prop changes.
    // Direct elementRef.current changes won't trigger re-run, but elementRef itself changing would.
  }, [elementRef, options.threshold, options.root, options.rootMargin, triggerOnce]);

  return isIntersecting;
}

export default useIntersectionObserver; 