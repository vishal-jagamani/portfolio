import React from 'react';
import { useScramble } from 'use-scramble';

interface scrambleTextProps {
    text: string;
    className: string;
    scrambleOptions: object | null;
}

const ScrambleText: React.FC<scrambleTextProps> = ({ text, className, scrambleOptions }) => {
    const { ref } = useScramble({
        text: text,
        ...(scrambleOptions
            ? scrambleOptions
            : {
                  tick: 1,
                  step: 4,
                  scramble: 15,
                  speed: 0.7,
                  seed: 1,
                  chance: 1,
                  range: [30, 50],
                  overdrive: true,
                  overflow: false,
              }),
    });
    return <p ref={ref} className={className} />;
};

export default ScrambleText;
