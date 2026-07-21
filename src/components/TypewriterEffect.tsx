import { useState, useEffect } from "react";

const words = [
  "Digital Marketer",
  "Graphics Designer",
  "WordPress Developer",
  "Brand Strategist",
  "SEO Expert",
];

export default function TypewriterEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="gradient-text">
      {words[wordIndex].slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
