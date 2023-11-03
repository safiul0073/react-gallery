/** @format */

import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const Card = ({ item, index, moveCard, handleCheckBoxChange }) => {
    const [isDragging, setIsDragging] = useState(false);

    const [, ref] = useDrag({
        type: "CARD",
        item: { id: item.id, index },
        collect: (monitor) => setIsDragging(monitor.isDragging()),
    });

    const [, drop] = useDrop({
        accept: "CARD",
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveCard(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return isDragging ? (
        <div
            ref={(node) => ref(drop(node))}
            className={`rounded-xl border-2 border-gray-400  ${
                index === 0 ? "row-span-2 col-span-2" : ""
            } ${
                isDragging
                    ? "transform scale-105 transition-transform duration-300"
                    : ""
            }`}
        ></div>
    ) : (
        <div
            ref={(node) => ref(drop(node))}
            className={`relative group rounded-xl border-2 border-gray-400  ${
                index === 0 ? "row-span-2 col-span-2" : ""
            } ${
                isDragging
                    ? "transform scale-105 transition-transform duration-300"
                    : ""
            }`}
        >
            <img
                src={item.image}
                className="object-fit"
                alt={`gallery-${index}`}
            />
            <div
                className={`absolute rounded-xl inset-0 bg-black ${
                    item.isSelected
                        ? "opacity-50"
                        : "opacity-0 group-hover:opacity-50"
                } transition duration-300`}
            ></div>
            <div className="absolute rounded-xl inset-0  transition duration-300">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    onChange={(e) => handleCheckBoxChange(e, index)}
                    className="w-4 h-4 mt-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>
        </div>
    );
};

export default Card;
