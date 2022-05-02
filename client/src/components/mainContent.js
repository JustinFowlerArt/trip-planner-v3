import React, { useState, useEffect } from 'react';
import NewTrip from './newTrip';
import Trip from './trip';
import { getTrips } from '../api/tripsApi';
import SkeletonLoader from './skeletonLoader';
import PageNotFound from './pageNotFound';
// import useTrips from '../hooks/useTrips';

export default function MainContent() {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newTrip, setNewTrip] = useState('');

  // const trips = useTrips();
  useEffect(() => {
    async function init() {
      try {
        const response = await getTrips();
        setTrips(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  if (error) throw error;
  if (loading) return <SkeletonLoader />;
  if (trips.length === 0) return <PageNotFound />;

  const handleChangeTrip = e => {
    setNewTrip(e.target.value);
  };

  const handleSubmitTrip = e => {
    e.preventDefault();
    setTrips([
      ...trips,
      {
        id: trips.length + 1,
        name: newTrip,
        expenses: [],
      },
    ]);
  };

  const handleDeleteTrip = id => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  // const handleAddExpense = e => {
  //   const { name, value } = e.target;
  //   const updatedTrip = [...trips];
  //   updatedTrip[value][name] = value;
  //   setTrips(updatedTrip);
  // }

  return (
    <main
      className='flex flex-grow items-center lg:p-5 md:items-start'
      role='main'
    >
      <div className='flex overflow-x-auto overflow-y-clip' id='trips'>
        {trips.length > 1
          ? trips.map(trip => (
              <Trip
                key={trip.id}
                trip={trip}
                handleDeleteTrip={handleDeleteTrip}
              />
            ))
          : trips}
      </div>
      <NewTrip
        newTrip={newTrip}
        handleChange={handleChangeTrip}
        handleSubmit={handleSubmitTrip}
      />
    </main>
  );
}
