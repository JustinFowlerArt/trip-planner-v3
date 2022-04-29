import React, { useState, useEffect } from 'react';
import { getTrips } from '../api/tripsApi';
import NewTripButton from './newTripButton';
import PageNotFound from './pageNotFound';
import SkeletonLoader from './skeletonLoader';
import Trip from './trip';

export default function MainContent() {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrips()
      .then(_result => setTrips(_result.data))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, []);

  if (error) throw error;
  if (loading) return <SkeletonLoader />;
  if (trips.length === 0) return <PageNotFound />;

  return (
    <main
      className='flex flex-grow items-center lg:p-5 md:items-start'
      role='main'
    >
      <div className='flex overflow-x-auto overflow-y-clip' id='trips'>
        {trips?.map(trip => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </div>
      <NewTripButton />
    </main>
  );
}
