import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import plots from '../data/plots.json';
import Sidebar from './Sidebar';

const statusColor = {
  AVAILABLE: 'green',
  SOLD: 'blue',
  BLOCK: 'yellow'
};

// Placeholder coordinates for demonstration:
const getPlotCoordinates = (plotNumber) => {
  const n = parseInt(plotNumber.split(' ')[1]);
  const lat = 37.75 + (n / 1000);
  const lng = -122.45 + (n / 1000);
  return [
    [lat, lng],
    [lat + 0.0005, lng],
    [lat + 0.0005, lng + 0.0005],
    [lat, lng + 0.0005]
  ];
};

export default function MapView() {
  const [selectedPlot, setSelectedPlot] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <MapContainer style={{ height: '90vh', width: '70%' }} center={[37.75, -122.45]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {plots.map(plot => (
          <Polygon
            key={plot['Plot Number']}
            pathOptions={{ color: statusColor[plot.Status] }}
            positions={getPlotCoordinates(plot['Plot Number'])}
            eventHandlers={{
              click: () => setSelectedPlot(plot)
            }}
          />
        ))}
      </MapContainer>
      <Sidebar plot={selectedPlot} />
    </div>
  );
}
