
import React, { useState } from "react";
// import { TripManager } from '../modules/tripManager.module';

// import { createTrip } from '../api/tripsApi';

// Button to create new trip object and populate it with content
// const newTripButton = document.querySelector('.new-trip');
// newTripButton.addEventListener('click', (event) => {
//     const tripForm = document.querySelector('#trip-form');
//     let _tripName = document.querySelector('#new-trip').value;
//     if (_tripName) {
//         event.preventDefault();
//         const newTrip = TripManager.addTrip(_tripName);
//         createTrip(
//             {
//                 "id": newTrip.id,
//                 "name": newTrip.name,
//                 "expenses": newTrip.expenses
//             }
//         );
//         tripForm.reset();
//     }
// });

const NewTripButton = () => {
    const [tripName, setTripName] = useState("");
    // const newTrip = TripManager.addTrip(tripName);
   
    // const [tripInfo, setTripInfo] = useState({
    //     id: newTrip.id,
    //     name: newTrip.name,
    //     expenses: newTrip.expenses
    // });

    const onChange = (e) => {
        setTripName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(tripName)
        // newTrip;
    }

    return (
        <section className="flex flex-col flex-none items-center w-[272px] secondary-bg-color rounded-xl m-2 p-2">
            <form id="trip-form" className="flex flex-col w-full items-center">
                <label
                    className="m-2"
                    htmlFor="new-trip">
                    Trip Name
                </label>                  
                <input
                    className='my-2 px-2 secondary-color'
                    type="text"
                    id="new-trip"
                    name="trip"
                    placeholder="Cancun"
                    required
                    onChange={onChange}
                />
                <input
                    className="primary-bg-color rounded-2xl p-3 m-3 border border-white"
                    type="submit"
                    value="Add New"
                    onClick={onSubmit}
                />
            </form>
        </section>  
    );
}

export default NewTripButton;