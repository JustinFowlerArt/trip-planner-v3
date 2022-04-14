
import React, { useState, useEffect } from 'react';
import { getTrips } from '../api/tripsApi';
import { TripManager } from '../modules/tripManager.module';
import SkeletonLoader from '../components/skeletonLoader';
import PageNotFound from "../components/pageNotFound";

export default function useTrips () {
    const [trips, setTrips] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTrips()
            .then(_result => {
                setTrips(_result)

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
            })
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
            
            return trips;
        }, [])

    // Try with Justin
    //     async function init() {
    //         try {
    //             const response = await getTrips()
                
    //             let tripsData = response.data;
            
    //             if (tripsData) {
    //                 setTrips(response);
    //                 tripsData.forEach(_trip => {
    //                     const newTrip = TripManager.addTrip(_trip.name);
        
    //                     if (Array.isArray(_trip.expenses)) {
    //                         for (let _expenseData of _trip.expenses) {
    //                             newTrip.addExpenseFromData(_expenseData.name, _expenseData.price);
    //                         }
    //                     }
    //                 });
                    
    //             }
    //         } catch (e) {
    //             setError(e);
    //         } finally {
    //             setLoading(false);
    //         }

    //         return trips;
    //     }
    //     init();
    // }, []);

    if (error) throw error;
    if (loading) return <SkeletonLoader />
    if (trips.length === 0) return <PageNotFound />
}

