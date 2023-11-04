/** @format */

import React from "react";

const CheckBox = ({ onclick, customStyle, defaultChecked }) => {
    return (
        <input
            type="checkbox"
            onChange={onclick}
            defaultChecked={defaultChecked}
            className={`w-4 h-4 ${customStyle} text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
        />
    );
};

export default CheckBox;
