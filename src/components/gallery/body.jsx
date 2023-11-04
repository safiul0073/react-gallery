/** @format */

import React from "react";
import Card from "../ui/Card";

const Body = ({ imageList, moveCard, handleCheckBoxChange, newImageInput }) => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-5 grid-flow-row gap-3 ">
                {imageList.map((item, index) => (
                    <Card
                        item={item}
                        index={index}
                        key={item.id}
                        moveCard={moveCard}
                        handleCheckBoxChange={handleCheckBoxChange}
                        newImageInput={newImageInput}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
