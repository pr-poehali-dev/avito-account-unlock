import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealContentProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down";
}

const RevealContent = ({ 
  children, 
  className, 
  direction = "up" 
}: RevealContentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (direction === "up") {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [direction]);
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible 
          ? "opacity-100 transform translate-y-0" 
          : "opacity-0 transform translate-y-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default RevealContent;
