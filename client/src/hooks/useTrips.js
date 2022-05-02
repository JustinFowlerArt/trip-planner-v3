import React, { useState, useEffect } from 'react';
import { getTrips } from '../api/tripsApi';
import SkeletonLoader from '../components/skeletonLoader';
import PageNotFound from '../components/pageNotFound';

export default function useTrips() {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return trips;
}
