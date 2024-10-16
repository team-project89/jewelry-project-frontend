import { useState, useEffect } from "react";

export function useSticky() {
    const [sticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const stickyElement = document.getElementById("sticky-element");
        if (stickyElement) {
            const { top } = stickyElement.getBoundingClientRect();
            setIsSticky(top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return sticky;  
}
