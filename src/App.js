/** @format */

import "./App.css";
import { Gallery } from "./components/gallery";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="w-100 mx-auto py-8 bg-cyan-50">
                <Gallery />
            </div>
        </DndProvider>
    );
}

export default App;
