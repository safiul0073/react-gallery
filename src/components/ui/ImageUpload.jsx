/** @format */

import React, { useRef } from "react";

const ImageUpload = ({ image, newImageInput }) => {
    const fileInputRef = useRef(null);

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            newImageInput(file)
        }
    };
    return (
        <div
            onClick={handleDivClick}
            className={`relative group rounded-xl cursor-pointer border-2 border-gray-400 flex justify-center items-center`}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                ref={fileInputRef}
                style={{ display: "none" }}
            />
            <div className="flex flex-col items-center gap-4">
                {image}
                <span className="">Add Image</span>
            </div>
        </div>
    );
};

export default ImageUpload;
