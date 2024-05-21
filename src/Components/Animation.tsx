import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface HandDrawnAnimationProps {
  frames: string[];
  frameRate: number;
  repeat: boolean;
  
}

const HandDrawnAnimation: React.FC<HandDrawnAnimationProps> = ({ frames, frameRate, repeat }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const totalFrames = frames.length;
    console.log("frame")
    const updateFrame = () => {
      setCurrentFrame((prevFrame) => {
        if (prevFrame + 1 === totalFrames) {
          if (repeat) {
            return 0;
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return prevFrame;
          }
        }
        return prevFrame + 1;
      });
    };

    intervalRef.current = setInterval(updateFrame, 1000 / frameRate);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [frames, frameRate, repeat]);

  return (
    <Image 
      src={frames[currentFrame]} 
      alt={`Frame ${currentFrame}`} 
      fill
    />
  );
};

export default HandDrawnAnimation;
