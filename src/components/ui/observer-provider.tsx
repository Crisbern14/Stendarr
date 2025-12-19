"use client";
import { useEffect } from 'react';
import { Observer } from 'tailwindcss-intersect';

export default function TailwindIndicator() {
    useEffect(() => {
        Observer.start();
    }, []);

    return null;
}
