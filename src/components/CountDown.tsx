"use client";

import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date("2034-11-20");

const CountDown = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Ensure the component only renders on the client side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevents mismatch during SSR

    return (
        <Countdown
            className='font-bold text-5xl text-yellow-300'
            date={endingDate}
        />
    );
};

export default CountDown;
