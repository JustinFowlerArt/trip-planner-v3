
import React from "react";
import NewTripButton from "./newTripButton";

function MainContent() {
    return (
        <main className="flex flex-grow items-center lg:p-5 md:items-start" role="main">
            <div className="flex overflow-x-auto overflow-y-clip" id="trips">
            </div>
            <NewTripButton />
        </main>        
    );
}

export default MainContent;