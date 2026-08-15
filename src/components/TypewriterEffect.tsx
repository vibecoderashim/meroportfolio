import { useState, useEffect } from "react";

const defaultWords = [
  "Digital Marketer",
  "Graphics Designer",
  "WordPress Developer",
  "Brand Strategist",
  "SEO Expert",
];

interface TypewriterEffectProps {
  words?: string[];
}

export default function TypewriterEffect({ words = defaultWords }: TypewriterEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentList = words.length > 0 ? words : defaultWords;
    const current = currentList[wordIndex % currentList.length] || "";
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % currentList.length);
        return;
      }
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words]);

  const currentList = words.length > 0 ? words : defaultWords;
  const current = currentList[wordIndex % currentList.length] || "";

  return (
    <span className="gradient-text" suppressHydrationWarning>
      {current.slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

