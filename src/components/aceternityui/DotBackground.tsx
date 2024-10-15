import { cn } from '@/lib/utils';
import React from 'react';

interface props {
    className: string | null;
}

const DotBackground: React.FC<props> = ({ className }) => {
    return (
        <div
            className={cn(
                'fixed flex h-screen w-full items-center justify-center bg-white bg-dot-black/[0.4] dark:bg-black dark:bg-dot-white/[0.4]',
                className,
            )}
        >
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
    );
};

export default DotBackground;
