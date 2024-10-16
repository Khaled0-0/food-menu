"use client"

import { useState, useEffect } from "react";



type Props = {
    id: number;
    price: number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({ price, options }: Props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);


    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [quantity, selected, options, price])


    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
            {/* OPTIONS CONTAINER */}
            <div className="flex gap-4">
                {options?.map((option, index) => (
                    <button
                        className="p-2 ring-1 ring-red-400 rounded-md min-w-[6rem] uppercase text-center font-bold"
                        key={option.title}
                        style={{
                            background: selected === index ? "rgb(248 113 113)" : "white",
                            color: selected === index ? "white" : "red",
                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>
            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className="flex items-center justify-between">
                {/* QUANTITY */}
                <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
                    <span>Quantity</span>
                    <div className="flex items-center gap-4">
                        <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(prev => prev < 9 ? prev + 1 : 9)}>{'>'}</button>
                    </div>
                </div>
                {/* CART BUTTON */}
                <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">Add to Cart</button>
            </div>
        </div>
    )
}

export default Price
