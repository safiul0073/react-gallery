/** @format */

import React from "react";
import CheckBox from "../ui/check-box";

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
                            <CheckBox defaultChecked={true} />
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
