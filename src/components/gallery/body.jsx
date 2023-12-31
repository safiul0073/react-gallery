/** @format */

import React from "react";
import Card from "../ui/Card";

const Body = ({ imageList, moveCard, handleCheckBoxChange, newImageInput }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 grid-flow-row gap-3 p-4 overflow-y-auto">
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
    );
};

export default Body;
