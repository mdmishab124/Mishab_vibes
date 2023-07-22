import React, { useState, useEffect } from 'react';

const words = [
  ' websites',
  ' webapps',
  ' Typography',
  ' ux/ui',
  ' motion',
  ' things',
];

const WordFlick = () => {
  const [part, setPart] = useState(words[0]);
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skip_count, setSkipCount] = useState(0);
  const len = words.length;
  const skip_delay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount => skipCount + 1);
          if (skip_count === skip_delay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI(prevI => (prevI + 1) % len);
          setOffset(0);
        }
      }
      const newPart = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          setOffset(prevOffset => prevOffset + 1);
        } else {
          setOffset(prevOffset => prevOffset - 1);
        }
      }
      setPart(newPart);
    }, speed);

    return () => clearInterval(interval);
  }, [forwards, i, offset, skip_count, len]); // Corrected the useEffect dependencies

  return <h2 className="word">{part}</h2>;
};

export default WordFlick;
