/** @format */

import React from "react";

const Header = ({ selectedItem, removeItems }) => {
    const isSelected = selectedItem.count > 0;
    const style = isSelected ? "justify-between" : "";
    return (
        <>
            <div
                className={`border-b w-full px-4 h-[80px] flex ${style} items-center`}
            >
                {isSelected ? (
                    <>
                        <div className="flex justify-center items-center gap-3">
                            <input
                                type="checkbox"
                                defaultChecked={true}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <h1>{selectedItem.count} Files Selected</h1>
                        </div>

                        <span
                            onClick={removeItems}
                            className="text-red-600 hover:text-red-900 cursor-pointer"
                        >
                            Delete Files
                        </span>
                    </>
                ) : (
                    <>
                        <p className="text-lg text-black font-bold">Gallery</p>
                    </>
                )}
            </div>
        </>
    );
};

export default Header;
