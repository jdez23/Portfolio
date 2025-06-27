'use client';

import { useEffect, useRef } from 'react';

interface InteractiveBackgroundProps {
    /**
     * Gradient center X position (default: '50%')
     */
    centerX?: string;
    /**
     * Gradient center Y position (default: '80%')
     */
    centerY?: string;
    /**
     * Gradient radius multiplier (default: 1.20)
     */
    radius?: number;
    /**
     * First color stop (default: '#004F2E')
     */
    color0?: string;
    /**
     * First position stop (default: '0%')
     */
    position0?: string;
    /**
     * Second color stop (default: '#00A144')
     */
    color1?: string;
    /**
     * Second position stop (default: '45%')
     */
    position1?: string;
    /**
     * Third color stop (default: '#B2E04A')
     */
    color2?: string;
    /**
     * Third position stop (default: '100%')
     */
    position2?: string;
    /**
     * Enable mouse tracking for interactive glow (default: true)
     */
    enableMouseTracking?: boolean;
    /**
     * Custom className for the background container
     */
    className?: string;
}

/**
 * InteractiveBackground - A React component that creates a full-screen
 * radial gradient background that follows the mouse cursor
 */
export default function InteractiveGradientBackground({
    centerX = '50%',
    centerY = '80%',
    radius = 1.20,
    color0 = '#004F2E',
    position0 = '0%',
    color1 = '#00A144',
    position1 = '45%',
    color2 = '#B2E04A',
    position2 = '100%',
    enableMouseTracking = true,
    className = '',
}: InteractiveBackgroundProps) {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!enableMouseTracking || !backgroundRef.current) return;

        const handleMouseMove = (event: MouseEvent) => {
            if (!backgroundRef.current) return;

            // Calculate mouse position as percentage of viewport
            const x = (event.clientX / window.innerWidth) * 100;
            const y = (event.clientY / window.innerHeight) * 100;

            // Update gradient center
            backgroundRef.current.style.setProperty('--bg-center-x', `${x}%`);
            backgroundRef.current.style.setProperty('--bg-center-y', `${y}%`);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [enableMouseTracking]);

    const backgroundStyle = {
        '--bg-center-x': centerX,
        '--bg-center-y': centerY,
        '--bg-radius': radius,
        '--stop-color-0': color0,
        '--stop-pos-0': position0,
        '--stop-color-1': color1,
        '--stop-pos-1': position1,
        '--stop-color-2': color2,
        '--stop-pos-2': position2,
    } as React.CSSProperties;

    return (
        <>
            <style jsx>{`
        .interactive-background {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: radial-gradient(
            circle calc(var(--bg-radius) * 100vw) at var(--bg-center-x) var(--bg-center-y),
            var(--stop-color-0) var(--stop-pos-0),
            var(--stop-color-1) var(--stop-pos-1),
            var(--stop-color-2) var(--stop-pos-2)
          );
          transition: background 0.1s ease-out;
        }

        @media (max-width: 768px) {
          .interactive-background {
            background: radial-gradient(
              circle calc(var(--bg-radius) * 150vw) at var(--bg-center-x) var(--bg-center-y),
              var(--stop-color-0) var(--stop-pos-0),
              var(--stop-color-1) var(--stop-pos-1),
              var(--stop-color-2) var(--stop-pos-2)
            );
          }
        }
      `}</style>
            <div
                ref={backgroundRef}
                className={`interactive-background ${className}`}
                style={backgroundStyle}
            />
        </>
    );
}