/** @format */

import { useState } from "react";
import { IMAGE_LIST } from "../../data";
import Card from "../ui/Card";
import Header from "./header";

export const Gallery = () => {
    const [imageList, setImageList] = useState(IMAGE_LIST);
    const [selectedItem, setSelectedItem] = useState({
        ids: [],
        count: 0,
    });

    const moveCard = (fromIndex, toIndex) => {
        const updatedList = [...imageList];
        const [movedItem] = updatedList.splice(fromIndex, 1);
        updatedList.splice(toIndex, 0, movedItem);
        setImageList(updatedList);
    };

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

    return (
        <div className="w-[90%] mx-auto border bg-white rounded-xl">
            <Header selectedItem={selectedItem} removeItems={removeItems} />
            <div className="p-4">
                <div className="grid grid-cols-5 grid-flow-row gap-3 ">
                    {imageList.map((item, index) => (
                        <Card
                            item={item}
                            index={index}
                            key={item.id}
                            moveCard={moveCard}
                            handleCheckBoxChange={handleCheckBoxChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
