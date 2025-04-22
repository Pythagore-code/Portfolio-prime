
import { useEffect } from "react";

interface ScrollToTopProps {
  selector?: string;
}

const ScrollToTop = ({ selector = "a[href^='#']" }: ScrollToTopProps) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest(selector) as HTMLAnchorElement;
      
      if (anchor) {
        const targetId = anchor.getAttribute("href");
        if (targetId?.startsWith("#")) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            
            // Update URL without reload
            history.pushState(null, "", targetId);
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [selector]);

  return null;
};

export default ScrollToTop;
