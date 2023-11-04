/** @format */

import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import CheckBox from "./check-box";
import ImageUpload from "./ImageUpload";

const Card = ({ item, index, moveCard, handleCheckBoxChange, newImageInput }) => {
    // tracking the current dragging state
    const [isDragging, setIsDragging] = useState(false);

    // setup the drag ref with item and types
    const [, ref] = useDrag({
        type: "CARD",
        item: { ...item, index },
        collect: (monitor) => setIsDragging(monitor.isDragging()),
    });

    // getting the dragging position and target position
    const [, drop] = useDrop({
        accept: "CARD",
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveCard(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });
    /**
     * if the id is 12 which input field and this will not draggable otherwise all items are draggable
     * @returns element
     */
    const renderImage = () => {
        if (item.id === 12) {
            return <ImageUpload image={item.image} newImageInput={newImageInput} />;
        }

        return (
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
                    <CheckBox
                        defaultChecked={item.isSelected}
                        onclick={(e) => handleCheckBoxChange(e, index)}
                        customStyle="mt-4 ml-4"
                    />
                </div>
            </div>
        );
    };

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
        renderImage()
    );
};

export default Card;
