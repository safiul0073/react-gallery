/** @format */

import { useState } from "react";
import { IMAGE_LIST } from "../../data";
import Header from "./header";
import Body from "./body";

export const Gallery = () => {
    /** state for image list  */
    const [imageList, setImageList] = useState(IMAGE_LIST);
    const [selectedItem, setSelectedItem] = useState({
        ids: [],
        count: 0,
    });
    /**
     * move the dragged image to the targeted position
     * @param {number} fromIndex
     * @param {number} toIndex
     */
    const moveCard = (fromIndex, toIndex) => {
        const updatedList = [...imageList];
        const [movedItem] = updatedList.splice(fromIndex, 1);
        updatedList.splice(toIndex, 0, movedItem);
        setImageList(updatedList);
    };
    /**
     * 
     * if checkbox is checked then update the imageList position item isSelected as true 
     * also putting the item id in the imageIdList and count params increment 
     * if checkbox is unchecked then update the imageList position item isSelected as false
     * and pop the item id from the imageIdList
     * 
     * @param {check box onclick event} event
     * @param {number} index
     */
    const handleCheckBoxChange = (event, index) => {
        const isChecked = event.target.checked;
        const updatedList = [...imageList];
        const selectedId = updatedList[index];
        updatedList[index].isSelected = isChecked;
        setImageList(updatedList);

        let updatedIdList = [...selectedItem.ids];
        let updatedCount = selectedItem.count;

        if (isChecked) {
            updatedIdList.push(selectedId.id);
            updatedCount += 1;
        } else {
            updatedIdList = updatedIdList.filter(function (id) {
                return id !== selectedId;
            });
            updatedCount -= 1;
        }

        setSelectedItem({
            ids: updatedIdList,
            count: updatedCount,
        });
    };
    /**
     * deleting selected items from the imageItem list
     */
    const removeItems = () => {
        // removing all items from imageList
        const updatedItemList = imageList.filter(
            (item) => !selectedItem.ids.includes(item.id)
        );
        setImageList(updatedItemList);

        /** then finally remove the ids from selectedId list also count assign zero */
        const updatedIdList = {
            ids: [],
            count: 0,
        };
        setSelectedItem(updatedIdList);
    };

    /**
     * input an image from keyboard
     *
     * and this into the imageList
     * @param {File} file
     */
    const newImageInput = (file) => {
        const initialLastPosition = imageList.length - 1;
        let newList = [
            ...imageList,
            {
                id: imageList.length + 1,
                image: URL.createObjectURL(file),
                isSelected: false,
            },
        ];
        // sorting the image upload field and setting the new position
        if (
            initialLastPosition >= 0 &&
            initialLastPosition < imageList.length
        ) {
            const element = newList.splice(initialLastPosition, 1)[0];
            newList.push(element);
        }

        setImageList(newList);
    };

    return (
        <div className="w-[90%] mx-auto border bg-white rounded-xl">
            <Header selectedItem={selectedItem} removeItems={removeItems} />
            <Body
                imageList={imageList}
                moveCard={moveCard}
                handleCheckBoxChange={handleCheckBoxChange}
                newImageInput={newImageInput}
            />
        </div>
    );
};
