import { useState } from 'react';
import RouteForm from './components/RouteForm';
import MapView from './components/MapView';
import RouteDetails from './components/RouteDetails';
import { getSafeRoute } from './services/api';

const App = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [routeData, setRouteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [routeGeoJson, setRouteGeoJson] = useState(null);

  const handleSubmit = async (nextOrigin, nextDestination) => {
    if (!nextOrigin || !nextDestination) return;

    setLoading(true);
    setRouteData(null);

    try {
      const data = await getSafeRoute(nextOrigin, nextDestination);
      setRouteData(data);
      setRouteGeoJson(data?.geojson ?? null);
    } catch (error) {
      console.error('Error fetching safe route:', error);
      setRouteData({
        safety_score: 'N/A',
        travel_time: 'N/A',
        explanation: 'Unable to fetch the route right now. Ensure the backend is running on port 5000.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100">
      <MapView routeGeoJson={routeGeoJson} />
      <RouteForm
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
        onSubmit={handleSubmit}
        loading={loading}
      />
      <RouteDetails routeData={routeData} loading={loading} />
    </div>
  );
};

export default App;
