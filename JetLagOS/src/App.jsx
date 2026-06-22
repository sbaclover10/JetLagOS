import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import Leaflet's CSS (absolutely required for the map to render correctly)
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function App() {
  // Coordinates for the center of the map and the marker [latitude, longitude]
  const position = [51.505, -0.09]; 

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        {/* The TileLayer provides the actual map graphics (OpenStreetMap in this case) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* The Marker places a point on the map */}
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;