
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./components/app";

import { getTrips, createTrip } from './api/tripsApi';
import { TripManager } from './modules/tripManager.module';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// Singleton pattern for fun.
new TripManager();

// Populate list of trips via API call.
getTrips().then(_result => {
    let tripsData = _result.data;

    if (tripsData) {
        tripsData.forEach(_trip => {
            const newTrip = TripManager.addTrip(_trip.name);

            if (Array.isArray(_trip.expenses)) {
                for (let _expenseData of _trip.expenses) {
                    newTrip.addExpenseFromData(_expenseData.name, _expenseData.price);
                }
            }
        });
    }
});

// Button to create new trip object and populate it with content
const newTripButton = document.querySelector('.new-trip');
newTripButton.addEventListener('click', (event) => {
    const tripForm = document.querySelector('#trip-form');
    let _tripName = document.querySelector('#new-trip').value;
    if (_tripName) {
        event.preventDefault();
        const newTrip = TripManager.addTrip(_tripName);
        createTrip(
            {
                "id": newTrip.id,
                "name": newTrip.name,
                "expenses": newTrip.expenses
            }
        );
        tripForm.reset();
    }
});


// TODO: 
// Prevent duplicate trip IDs
// Modify trip names and expenses names and prices
// Modify API patch request to not send expense.template property
// Separate API into own branch and deploy to Heroku
