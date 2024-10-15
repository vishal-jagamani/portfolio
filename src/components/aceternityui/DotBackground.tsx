import React from 'react';

interface props {
    className: string | null;
}

const DotBackground: React.FC<props> = ({ className }) => {
    return (
        <div className="dark:bg-dot-white/[0.4] bg-dot-black/[0.4] fixed flex h-screen w-full items-center justify-center bg-white dark:bg-black">
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
    );
};

export default DotBackground;
