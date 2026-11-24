"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import 'react-before-after-slider-component/dist/build.css';

const ReactBeforeSliderComponent = dynamic(
    () => import('react-before-after-slider-component').then((mod) => mod.default),
    { ssr: false }
);

interface BeforeAfterSliderProps {
    firstImage: { imageUrl: string; alt: string };
    secondImage: { imageUrl: string; alt: string };
}

const BeforeAfterSlider = ({ firstImage, secondImage }: BeforeAfterSliderProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fallback = (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
            <Image 
                src={firstImage.imageUrl} 
                alt={firstImage.alt} 
                fill 
                priority
                style={{ objectFit: 'cover' }}
            />
        </div>
    );

    return (
        <div 
            className='home-before-after-holder' 
            style={{ background: '#eee' }}
            suppressHydrationWarning
        >
            {isMounted ? (
                <ReactBeforeSliderComponent firstImage={firstImage} secondImage={secondImage}/>
            ) : fallback}
        </div>
    );
};

export default BeforeAfterSlider;