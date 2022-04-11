
import React from "react";

function NewTripButton() {
    return (
        <section className="flex flex-col flex-none items-center w-[272px] secondary-bg-color rounded-xl m-2 p-2">
            <form id="trip-form" className="flex flex-col w-full items-center">
                <label className="m-2" htmlFor="new-trip">Trip Name</label>                  
                <br />
                <input className='my-2 px-2 secondary-color' type="text" id="new-trip" name="trip" placeholder="Cancun" required />
                <br />
                <input className="primary-bg-color rounded-2xl p-3 m-3 border border-white" type="submit" value="Add New" />
            </form>
        </section>  
    );
}

export default NewTripButton;