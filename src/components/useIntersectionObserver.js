import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver() {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();

  const checkIntersecting = ([entry]) => {
    setIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(checkIntersecting);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isIntersecting];
}
