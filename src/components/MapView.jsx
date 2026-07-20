import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.merge({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-shadow.png',
});

// لاحظ اسم الـ prop هنا routeGeoJson
const MapView = ({ routeGeoJson }) => {
  return (
    // تم تعديل الإحداثيات هنا للقاهرة
    <MapContainer center={[30.0444, 31.2357]} zoom={13} scrollWheelZoom className="h-screen w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {routeGeoJson && <GeoJSON data={routeGeoJson} style={{ color: '#059669', weight: 6, opacity: 0.9 }} />}
    </MapContainer>
  );
};

export default MapView;