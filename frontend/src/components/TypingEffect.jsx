import { useEffect, useState } from 'react';

export default function TypingEffect({ words, speed = 100, deleteSpeed = 50, pause = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, displayText.length + 1);
          setDisplayText(next);
          if (next === currentWord) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          const next = currentWord.slice(0, displayText.length - 1);
          setDisplayText(next);
          if (next === '') {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className="gradient-text font-semibold">
      {displayText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}
