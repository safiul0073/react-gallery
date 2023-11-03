/** @format */

import { useState } from "react";
import "./App.css";
import { Gallery } from "./components/gallery";
import { IMAGE_LIST } from "./data";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
    const [imageList, setImageList] = useState(IMAGE_LIST);

    const [draggedItem, setDraggedItem] = useState(null);

    const handleMoveItem = (sourceIndex, targetIndex) => {
        console.log("moving", sourceIndex, targetIndex);
        // const updatedCards = [...imageList];
        // const [movedCard] = updatedCards.splice(sourceIndex, 1);
        // updatedCards.splice(targetIndex, 0, movedCard);
        // setImageList(updatedCards);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="w-100 mx-auto py-8 bg-cyan-50">
                <Gallery />
            </div>
        </DndProvider>
    );
}

export default App;
